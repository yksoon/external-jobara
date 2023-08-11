import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
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
let loginInfo;

function Header({ props }) {
    // const [userId, setUserId] = useState("");
    // const [userPwd, setUserPwd] = useState("");

    // const [isSignOut, setIsSignOut] = useState(false);

    // const inputId = useRef(null);
    // const inputPw = useRef(null);

    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const { alert } = useAlert();

    // // let loginInfo;
    // // (() => {
    // //     loginInfo = JSON.parse(localStorage.getItem("userInfo"));
    // // })();

    // loginInfo = useSelector((state) => state.userInfo.userInfo);
    // resultCode = useSelector((state) => state.codes.resultCode);

    // useEffect(() => {
    //     // resultCode = JSON.parse(localStorage.getItem("result_code"));

    //     // 처음 렌더시 아이디 인풋 포커싱
    //     if (!loginInfo) {
    //         inputId.current.focus();
    //     }
    // }, []);

    // const menu_show = () => {
    //     const nav = document.getElementById("menu");
    //     const sitemap = document.getElementById("sitemap");
    //     if (nav.classList.contains("nav_on")) {
    //         sitemap.style.left = "-200vh";
    //         nav.classList.remove("nav_on");
    //     } else {
    //         sitemap.style.left = 0;
    //         nav.classList.add("nav_on");
    //     }
    // };

    // // 아이디, 비번 handler
    // const onEmailHandler = (event) => {
    //     setUserId(event.currentTarget.value);
    // };
    // const onPasswordHandler = (event) => {
    //     setUserPwd(event.currentTarget.value);
    // };

    // // 로그인
    // const signIn = () => {
    //     if (!userId) {
    //         CommonNotify({
    //             type: "alert",
    //             hook: alert,
    //             message: "아이디를 입력해주세요",
    //         });

    //         inputId.current.focus();
    //         return false;
    //     }
    //     if (!userPwd) {
    //         CommonNotify({
    //             type: "alert",
    //             hook: alert,
    //             message: "비밀번호를 입력해주세요",
    //         });

    //         inputPw.current.focus();
    //         return false;
    //     }

    //     dispatch(
    //         set_spinner({
    //             isLoading: true,
    //         })
    //     );

    //     const url = apiPath.api_auth_signin;

    //     let data = {
    //         signup_type: "000",
    //         user_id: userId,
    //         user_pwd: userPwd,
    //     };

    //     Login(url, data, resultCode, dispatch, alert);
    // };

    // // 로그아웃
    // const signout = () => {
    //     setIsSignOut(true);

    //     dispatch(
    //         set_spinner({
    //             isLoading: true,
    //         })
    //     );

    //     const url = apiPath.api_auth_signout;
    //     let data = {};

    //     RestServer("post", url, data)
    //         .then(function (response) {
    //             // response
    //             let result_code = response.headers.result_code;

    //             if (result_code === "0000") {
    //                 // localStorage.removeItem("userInfo");
    //                 // dispatch(set_user_info(null));
    //                 dispatch(init_user_info(null));

    //                 setUserId("");
    //                 setUserPwd("");

    //                 setIsSignOut(false);

    //                 dispatch(
    //                     set_spinner({
    //                         isLoading: false,
    //                     })
    //                 );

    //                 navigate(routerPath.web_main_url);
    //                 // window.location.replace(routerPath.main_url);
    //             }
    //         })
    //         .catch(function (error) {
    //             // 오류발생시 실행
    //             CommonErrorCatch(error, dispatch, alert);

    //             // localStorage.removeItem("userInfo");
    //             // dispatch(set_user_info(null));
    //             dispatch(init_user_info(null));
    //             setIsSignOut(false);
    //             navigate(routerPath.web_main_url);
    //         });
    // };

    // // 엔터키 로그인 이벤트
    // const handleOnKeyPress = (e) => {
    //     if (e.key === "Enter") {
    //         signIn(); // Enter 입력이 되면 클릭 이벤트 실행
    //     }
    // };

    useEffect(() => {
        $("#nav").hide();
    }, []);

    const menuClick = () => {
        $("#nav").slideToggle();
        $("#menu-icon2").toggleClass("open");
    };

    $(function () {
        $("#nav1_s").hide();
        $("#nav1").click(function () {
            $("#nav1_s").slideToggle();

            $("#nav2_s").slideUp();
            $("#nav3_s").slideUp();
            $("#nav4_s").slideUp();
            $("#nav5_s").slideUp();
            $("#nav6_s").slideUp();
            $("#nav7_s").slideUp();
        });
    });

    $(function () {
        $("#nav2_s").hide();
        $("#nav2").click(function () {
            $("#nav2_s").slideToggle();

            $("#nav1_s").slideUp();
            $("#nav3_s").slideUp();
            $("#nav4_s").slideUp();
            $("#nav5_s").slideUp();
            $("#nav6_s").slideUp();
            $("#nav7_s").slideUp();
        });
    });
    $(function () {
        $("#nav3_s").hide();
        $("#nav3").click(function () {
            $("#nav3_s").slideToggle();

            $("#nav1_s").slideUp();
            $("#nav2_s").slideUp();
            $("#nav4_s").slideUp();
            $("#nav5_s").slideUp();
            $("#nav6_s").slideUp();
            $("#nav7_s").slideUp();
        });
    });
    $(function () {
        $("#nav4_s").hide();
        $("#nav4").click(function () {
            $("#nav4_s").slideToggle();

            $("#nav1_s").slideUp();
            $("#nav2_s").slideUp();
            $("#nav3_s").slideUp();
            $("#nav5_s").slideUp();
            $("#nav6_s").slideUp();
            $("#nav7_s").slideUp();
        });
    });

    $(function () {
        $("#nav5_s").hide();
        $("#nav5").click(function () {
            $("#nav5_s").slideToggle();

            $("#nav1_s").slideUp();
            $("#nav2_s").slideUp();
            $("#nav3_s").slideUp();
            $("#nav4_s").slideUp();
            $("#nav6_s").slideUp();
            $("#nav7_s").slideUp();
        });
    });

    $(function () {
        $("#nav6_s").hide();
        $("#nav6").click(function () {
            $("#nav6_s").slideToggle();

            $("#nav1_s").slideUp();
            $("#nav2_s").slideUp();
            $("#nav3_s").slideUp();
            $("#nav4_s").slideUp();
            $("#nav5_s").slideUp();
            $("#nav7_s").slideUp();
        });
    });

    $(function () {
        $("#nav7_s").hide();
        $("#nav7").click(function () {
            $("#nav7_s").slideToggle();

            $("#nav1_s").slideUp();
            $("#nav2_s").slideUp();
            $("#nav3_s").slideUp();
            $("#nav4_s").slideUp();
            $("#nav5_s").slideUp();
            $("#nav6_s").slideUp();
        });
    });

    return (
        <>
            <div id="header">
                <div id="header_content">
                    <h1 className="logo">
                        <a href="/">
                            <img src="img/web/main/logo.png" alt="" />
                        </a>
                    </h1>
                    {/* 모바일 메뉴 // S */}
                    <div id="top_right">
                        <div
                            id="menu-icon2"
                            className="all_menu"
                            onClick={(e) => menuClick(e)}
                        >
                            <span></span>
                            <span></span>
                            <span className="short"></span>
                        </div>
                        <nav>
                            <ul id="nav">
                                <li>
                                    <Link href="" id="nav1">
                                        박람회안내
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" id="nav2">
                                        프로그램
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" id="nav3">
                                        사전등록
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" id="nav4">
                                        참여기업
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" id="nav5">
                                        공지
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <script>				
                    $(document).ready(function(){
                        $('#menu-icon2').click(function(){
                            $(this).toggleClass('open');
                        });
                    });
                </script> */}
                    {/* 모바일메뉴 // E */}
                </div>
            </div>
        </>
    );
}

export default Header;
