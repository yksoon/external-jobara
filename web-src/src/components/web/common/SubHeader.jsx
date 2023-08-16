import { Link } from "react-router-dom";
import $ from "jquery";
import { useEffect } from "react";
import { routerPath } from "webPath";

const SubHeader = () => {
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
            {/* header//S */}
            <div id="header">
                <div id="header_content">
                    <h1 className="logo">
                        <Link to={routerPath.web_main_url}>
                            <img src="img/web/main/logo.png" alt="" />
                        </Link>
                    </h1>

                    {/* 서브페이지용 상단메뉴(pc) //  S  */}

                    <div id="gnb">
                        <ul>
                            <li>
                                <Link href="">박람회안내</Link>
                                <div className="submenu">
                                    <Link href="">행사소개</Link>
                                    <Link href="">인사말</Link>
                                    <Link href="">행사장소</Link>
                                </div>
                            </li>
                            <li>
                                <Link href="">프로그램</Link>
                                <div className="submenu">
                                    <Link href="">취업연계프로그램</Link>
                                    <Link href="">무대프로그램</Link>
                                    <Link href="">이벤트프로그램</Link>
                                </div>
                            </li>
                            <li>
                                <Link href="">사전등록</Link>
                                <div className="submenu">
                                    <Link to={routerPath.web_signup_url}>
                                        사전등록
                                    </Link>
                                    <Link to={routerPath.web_signupchk_url}>
                                        사전등록 확인
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link href="">참여기업</Link>
                            </li>
                            {/* <li>
                                <Link href="">공지</Link>
                            </li> */}
                        </ul>
                    </div>

                    {/* 서브페이지용 상단메뉴(pc) // E */}

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
                    {/* 모바일메뉴 // E */}
                </div>
            </div>
            {/* header//E */}
        </>
    );
};

export default SubHeader;
