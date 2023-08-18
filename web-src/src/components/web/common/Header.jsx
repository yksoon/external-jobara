import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import { apiPath, routerPath } from "webPath";
import { RestServer } from "common/js/Rest";
import Login from "common/js/Login";
import MobileNav from "./MobileNav";
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

    const menuDepth = (e) => {
        //$(".nav_2depth").slideToggle();
        $(".nav_2depth").slideUp();
        $(e.target).siblings(".nav_2depth").slideToggle();
    };


    // URL 열기
    const openUrl = (url) => {
        window.open(url, "_blank", "noopener, noreferrer");
    };

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
                    <MobileNav />
                    {/* 모바일메뉴 // E */}
                </div>
            </div>
        </>
    );
}

export default Header;
