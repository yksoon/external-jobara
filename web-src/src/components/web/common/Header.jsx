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
                                    <Link
                                        to={routerPath.web_main_url}
                                        id="nav5"
                                    >
                                        홈
                                    </Link>
                                </li>
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
                                    <Link
                                        to={routerPath.web_signup_url}
                                        id="nav3"
                                    >
                                        사전등록
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={routerPath.web_signupchk_url}
                                        id="nav3"
                                    >
                                        사전등록 확인
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" id="nav4">
                                        참여기업
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="" id="nav5">
                                        공지
                                    </Link>
                                </li> */}
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
