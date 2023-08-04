import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPath, routerPath } from "webPath";
import { RestServer } from "common/js/Rest";
import Login from "common/js/Login";
import { useSelector, useDispatch } from "react-redux";
import { init_user_info, set_user_info } from "redux/actions/userInfoAction";
import {
    CommonConsole,
    CommonErrorCatch,
    CommonNotify,
} from "common/js/Common";
import { set_spinner } from "redux/actions/commonAction";
import useAlert from "hook/useAlert";

let resultCode;
function Header({ props }) {
    const [userId, setUserId] = useState("");
    const [userPwd, setUserPwd] = useState("");

    const [isSignOut, setIsSignOut] = useState(false);

    const inputId = useRef(null);
    const inputPw = useRef(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { alert } = useAlert();

    // let loginInfo;
    // (() => {
    //     loginInfo = JSON.parse(localStorage.getItem("userInfo"));
    // })();

    let loginInfo = useSelector((state) => state.userInfo.userInfo);
    resultCode = useSelector((state) => state.codes.resultCode);
    useEffect(() => {
        // resultCode = JSON.parse(localStorage.getItem("result_code"));

        // 처음 렌더시 아이디 인풋 포커싱
        if (!loginInfo) {
            inputId.current.focus();
        }
    }, []);

    const menu_show = () => {
        const nav = document.getElementById("menu");
        const sitemap = document.getElementById("sitemap");
        if (nav.classList.contains("nav_on")) {
            sitemap.style.left = "-200vh";
            nav.classList.remove("nav_on");
        } else {
            sitemap.style.left = 0;
            nav.classList.add("nav_on");
        }
    };

    const onEmailHandler = (event) => {
        setUserId(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setUserPwd(event.currentTarget.value);
    };

    const signIn = () => {
        if (!userId) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "아이디를 입력해주세요",
            });

            inputId.current.focus();
            return false;
        }
        if (!userPwd) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "비밀번호를 입력해주세요",
            });

            inputPw.current.focus();
            return false;
        }

        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        const url = apiPath.api_login;

        let data = {
            signup_type: "000",
            user_id: userId,
            user_pwd: userPwd,
        };

        Login(url, data, resultCode, dispatch, alert);
    };

    const signout = () => {
        setIsSignOut(true);

        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        const url = apiPath.api_signout;
        let data = {};

        RestServer("post", url, data)
            .then(function (response) {
                // response
                let result_code = response.headers.result_code;

                if (result_code === "0000") {
                    // localStorage.removeItem("userInfo");
                    // dispatch(set_user_info(null));
                    dispatch(init_user_info(null));

                    setUserId("");
                    setUserPwd("");

                    setIsSignOut(false);

                    dispatch(
                        set_spinner({
                            isLoading: false,
                        })
                    );

                    navigate(routerPath.web_main_url);
                    // window.location.replace(routerPath.main_url);
                }
            })
            .catch(function (error) {
                // 오류발생시 실행
                CommonErrorCatch(error, dispatch, alert);

                // localStorage.removeItem("userInfo");
                // dispatch(set_user_info(null));
                dispatch(init_user_info(null));
                setIsSignOut(false);
                navigate(routerPath.web_main_url);
            });
    };

    const handleOnKeyPress = (e) => {
        if (e.key === "Enter") {
            signIn(); // Enter 입력이 되면 클릭 이벤트 실행
        }
    };

    return (
        <>
            <header>
                <div className="header_content">
                    <h1 className="logo">
                        <Link to={routerPath.web_main_url}>
                            <img src="/img/common/logo.png" alt="" />
                        </Link>
                    </h1>
                    <div className="flex">
                        <div className="login">
                            {!loginInfo ? (
                                <>
                                    <div className="flex">
                                        <input
                                            type="email"
                                            placeholder="ID"
                                            className="login"
                                            onChange={(e) => onEmailHandler(e)}
                                            onKeyDown={handleOnKeyPress} // Enter 입력 이벤트 함수
                                            ref={inputId}
                                        />
                                        <input
                                            type="password"
                                            placeholder="PASSWORD"
                                            className="login"
                                            onChange={(e) =>
                                                onPasswordHandler(e)
                                            }
                                            onKeyDown={handleOnKeyPress} // Enter 입력 이벤트 함수
                                            ref={inputPw}
                                        />

                                        <Link
                                            className="login"
                                            id="header_login"
                                            onClick={signIn}
                                        >
                                            LOGIN
                                        </Link>

                                        <Link
                                            to={routerPath.web_signup_url}
                                            className="login"
                                        >
                                            SIGN UP
                                        </Link>
                                    </div>
                                    {/* <Link to={"/mobile_test"}>!</Link> */}
                                    <Link
                                        to={routerPath.findId_url}
                                        className="font-12"
                                    >
                                        로그인에 문제가 발생하였나요?
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <div className="flex profile">
                                        <div>
                                            <h5>
                                                환영합니다{" "}
                                                {`${loginInfo.user_name_first_ko}${loginInfo.user_name_last_ko}`}
                                                님
                                            </h5>
                                            {isSignOut ? (
                                                <>
                                                    <p
                                                        className="font-12"
                                                        id="header_logout"
                                                    >
                                                        로그아웃
                                                    </p>
                                                </>
                                            ) : (
                                                <Link
                                                    className="font-12"
                                                    id="header_logout"
                                                    onClick={signout}
                                                >
                                                    로그아웃
                                                </Link>
                                            )}

                                            {/* <a
                                                href="mypage_modify_step1.html"
                                                className="font-12"
                                            >
                                                회원정보수정
                                            </a> */}
                                        </div>
                                        <Link
                                            to={routerPath.myPage_url}
                                            className="profile_img_wrap"
                                        >
                                            <span className="profile_img">
                                                <img
                                                    src="img/web/common/profile01.png"
                                                    alt=""
                                                />
                                            </span>
                                            <div
                                                id="gradeLabel"
                                                className="grade"
                                                name="gold"
                                            >
                                                <img
                                                    src="img/web/common/grade_gold.png"
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>

                        <nav id="menu" onClick={menu_show}>
                            <div className="menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </nav>
                        <div id="sitemap">
                            <div>
                                <div>
                                    <h3 className="font-38">SERVICE</h3>
                                    <ul>
                                        <li>
                                            <a href="sitemap.html">
                                                <span>
                                                    <img
                                                        src="/img/web/main/quick09.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>전체 서비스</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>
                                                    <img
                                                        src="/img/web/main/quick03.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>호텔 특가</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>
                                                    <img
                                                        src="/img/web/main/quick04.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>MEDI ART</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>
                                                    <img
                                                        src="/img/web/main/quick05.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>세무/회계 컨설팅</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>
                                                    <img
                                                        src="/img/web/main/quick06.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>MICE/PCO</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex">
                                    <div>
                                        <h3 className="font-38">COMMUNITY</h3>
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <span>
                                                        <img
                                                            src="/img/web/main/quick10.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <p>학회소식</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span>
                                                        <img
                                                            src="/img/web/main/quick11.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <p>EVENT</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-38">MEMBERSHIP</h3>
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <span>
                                                        <img
                                                            src="/img/web/main/quick02.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <p>MEDI POINT</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span>
                                                        <img
                                                            src="/img/web/main/quick07.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <p>K-MEDI CREATOR</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span>
                                                        <img
                                                            src="/img/web/main/quick08.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                    <p>MYPAGE</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={routerPath.main_url} className="home">
                            <img src="/img/web/common/header_home.png" alt="" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
