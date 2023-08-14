import useAlert from "hook/useAlert";
import {
    CommonConsole,
    CommonErrorCatch,
    CommonNotify,
    CommonRest,
} from "common/js/Common";
import { RestServer } from "common/js/Rest";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { set_spinner } from "redux/actions/commonAction";
import { set_page } from "redux/actions/pageActios";
import {
    init_user_info,
    set_user_info,
    set_user_token,
} from "redux/actions/userInfoAction";
import { apiPath, routerPath } from "webPath";
import {
    init_user_info_admin,
    set_user_info_admin,
    set_user_token_admin,
} from "redux/actions/userInfoAdminAction";

const Login = () => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };
    const userTokenAdmin = useSelector(
        (state) => state.userInfoAdmin.userTokenAdmin
    );
    const navigate = useNavigate();

    const inputID = useRef(null);
    const inputPW = useRef(null);

    useEffect(() => {
        if (userTokenAdmin) {
            navigate(routerPath.admin_main_url);
        } else {
            dispatch(set_page("dashboard"));
            dispatch(init_user_info);
            inputID.current.focus();
        }
    }, []);

    const clickLogin = () => {
        if (!inputID.current.value) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "아이디를 입력해주세요",
            });

            inputID.current.focus();
            return false;
        }
        if (!inputPW.current.value) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "비밀번호를 입력해주세요",
            });

            inputPW.current.focus();
            return false;
        }

        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        login();
    };

    const login = () => {
        // /v1/signin
        // POST
        const url = apiPath.api_auth_signin;
        const data = {
            // signup_type: "000",
            user_id: inputID.current.value,
            user_pwd: inputPW.current.value,
            admin_yn: "Y",
        };

        // 처리 완료 후 로직
        const responsLogic = (res) => {
            let result_code = res.headers.result_code;

            if (result_code === "0000") {
                let user_info = res.data.result_info;

                // 블랙리스트
                let deleteKey = [
                    "md_licenses_number",
                    // "signin_policy",
                    // "signin_policy_cd",
                    "user_pwd",
                    "user_role",
                    "user_salt",
                ];

                for (let i = 0; i < deleteKey.length; i++) {
                    delete user_info[deleteKey[i]];
                }

                dispatch(init_user_info_admin(null));

                sessionStorage.setItem(
                    "userInfoAdmin",
                    JSON.stringify(user_info)
                );
                dispatch(set_user_info_admin(JSON.stringify(user_info)));

                dispatch(set_user_token_admin(JSON.stringify(user_info)));

                navigate(routerPath.admin_main_url);
            } else {
                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );

                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: res.headers.result_message_ko,
                });
            }
        };

        // 파라미터
        const restParams = {
            method: "post",
            url: url,
            data: data,
            err: err,
            callback: (res) => responsLogic(res),
            admin: "Y",
        };

        CommonRest(restParams);
    };

    const handleOnKeyPress = (e) => {
        if (e.key === "Enter") {
            clickLogin(); // Enter 입력이 되면 클릭 이벤트 실행
        }
    };

    return (
        <>
            <div className="login_wrap">
                <div className="login">
                    <h1>
                        <img src="img/common/logo.png" alt="" />
                    </h1>
                    <p>로그인을 해주세요</p>
                    <div className="input_id">
                        <h5>아이디</h5>
                        <input
                            type="text"
                            className="input"
                            placeholder="ID"
                            ref={inputID}
                            onKeyDown={handleOnKeyPress} // Enter 입력 이벤트 함수
                            defaultValue="support"
                        />
                    </div>
                    <div>
                        <h5>비밀번호</h5>
                        <input
                            type="password"
                            className="input"
                            placeholder="PW"
                            ref={inputPW}
                            onKeyDown={handleOnKeyPress} // Enter 입력 이벤트 함수
                            defaultValue="1234qwer!@"
                        />
                    </div>
                    <div className="flex login_btn">
                        <div>
                            {/* <input type="checkbox" id="id_remember" />{" "}
                            <label htmlFor="id_remember">아이디 저장</label> */}
                        </div>
                        <div>
                            <Link className="subbtn on" onClick={clickLogin}>
                                로그인
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="login_wrap"></div> */}
        </>
    );
};

export default Login;
