import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import MobileNav from "./MobileNav";

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

    return (
        <>
            <div id="header">
                <div id="header_content">
                    <h1 className="logo">
                        <a href="/">
                            <img src="img/web/main/logo_job.png" alt="" />
                        </a>
                        <a
                            href="https://lincplus.jejunu.ac.kr/index.htm"
                            target="_blank"
                        >
                            <img src="img/web/main/logo_linc.png" alt="" />
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
