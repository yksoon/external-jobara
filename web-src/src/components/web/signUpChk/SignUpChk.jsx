import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "components/web/common/Footer";
import { apiPath, routerPath } from "webPath";
import SubHeader from "../common/SubHeader";
import { mobile1Pattern, mobile2Pattern } from "common/js/Pattern";
import { CommonNotify, CommonRest } from "common/js/Common";
import { useDispatch } from "react-redux";
import useAlert from "hook/useAlert";
import { signInModel } from "models/user/signIn";
import { set_spinner } from "redux/actions/commonAction";
import { set_user_info, set_user_token } from "redux/actions/userInfoAction";

function SignUpChk() {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };
    const navigate = useNavigate();

    const signUpChkRefs = {
        inputID: useRef(null),
        inputMobile1: useRef(null),
        inputMobile2: useRef(null),
        inputMobile3: useRef(null),
    };

    // 모바일 패턴 체크 및 다음칸으로 이동
    const mobileHandler = (e) => {
        let id = e.target.id;
        let val = e.target.value;

        switch (id) {
            case "mobile1":
                let test1 = mobile1Pattern.test(val);
                if (!test1) {
                    signUpChkRefs.inputMobile1.current.value = val.slice(0, -1);
                }
                // 다음칸으로 이동
                if (val.length >= 3) {
                    signUpChkRefs.inputMobile2.current.focus();
                }
                break;

            case "mobile2":
                let test2 = mobile2Pattern.test(val);
                if (!test2) {
                    signUpChkRefs.inputMobile2.current.value = val.slice(0, -1);
                }
                // 다음칸으로 이동
                if (val.length >= 4) {
                    signUpChkRefs.inputMobile3.current.focus();
                }
                break;

            case "mobile3":
                let test3 = mobile2Pattern.test(val);
                if (!test3) {
                    signUpChkRefs.inputMobile3.current.value = val.slice(0, -1);
                }
                break;

            default:
                break;
        }
    };

    // 알럿
    const signupAlert = (msg) => {
        CommonNotify({
            type: "alert",
            hook: alert,
            message: msg,
        });
    };

    // validation
    const validation = () => {
        if (!signUpChkRefs.inputID.current.value) {
            signupAlert("아이디를 입력해주세요");
            signUpChkRefs.inputID.current.focus();
            return false;
        }

        if (
            !signUpChkRefs.inputMobile1.current.value ||
            !signUpChkRefs.inputMobile2.current.value ||
            !signUpChkRefs.inputMobile3.current.value
        ) {
            signupAlert("연락처를 입력해주세요");
            signUpChkRefs.inputMobile1.current.focus();
            return false;
        }

        return true;
    };
    // 사전등록 확인 버튼 클릭
    const clickSubmit = () => {
        if (validation()) {
            const data = {
                ...signInModel,
                user_id: signUpChkRefs.inputID.current.value,
                mobile1: signUpChkRefs.inputMobile1.current.value,
                mobile2: signUpChkRefs.inputMobile2.current.value,
                mobile3: signUpChkRefs.inputMobile3.current.value,
            };

            signInToServer(data);
        }
    };

    // signin 요청
    const signInToServer = (data) => {
        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        const restParams = {
            method: "post",
            url: apiPath.api_auth_signin, // /v1/signin
            data: data,
            err: err,
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);

        const responsLogic = (res) => {
            const resultCode = res.headers.result_code;
            if (resultCode === "0000") {
                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );

                const resultInfo = res.data.result_info;

                // 리덕스 저장
                dispatch(set_user_info(JSON.stringify(resultInfo)));
                dispatch(set_user_token(JSON.stringify(resultInfo)));

                // 사전등록 수정 페이지 이동
                navigate(routerPath.web_signup_mod_url);
            } else {
                const resultMsg = res.headers.result_message_ko;

                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );

                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: resultMsg,
                });
            }
        };
    };

    return (
        <>
            <SubHeader />

            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container">
                <div id="content">
                    <h2 id="subtitle">사전등록 확인</h2>
                    <div className="registration_chk">
                        <table className="regi_form">
                            <colgroup>
                                <col widtd="30%" />
                                <col widtd="*" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>
                                        <input
                                            type="text"
                                            className="input_s"
                                            ref={signUpChkRefs.inputID}
                                            autoFocus
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>연락처</th>
                                    <td>
                                        <input
                                            type="text"
                                            className="input_m"
                                            id="mobile1"
                                            ref={signUpChkRefs.inputMobile1}
                                            onChange={(e) => mobileHandler(e)}
                                        />{" "}
                                        -
                                        <input
                                            type="text"
                                            className="input_m"
                                            id="mobile2"
                                            ref={signUpChkRefs.inputMobile2}
                                            onChange={(e) => mobileHandler(e)}
                                        />{" "}
                                        -
                                        <input
                                            type="text"
                                            className="input_m"
                                            id="mobile3"
                                            ref={signUpChkRefs.inputMobile3}
                                            onChange={(e) => mobileHandler(e)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="btnbox">
                            <Link onClick={(e) => clickSubmit()}>
                                사전등록 확인
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* 서브컨텐츠     //E */}

            <Footer />
        </>
    );
}

export default SignUpChk;
