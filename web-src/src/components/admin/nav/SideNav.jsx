import {
    CommonConsole,
    CommonErrorCatch,
    CommonModal,
    CommonNotify,
    CommonRest,
} from "common/js/Common";
import { RestServer } from "common/js/Rest";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { set_spinner } from "redux/actions/commonAction";
import { init_user_info } from "redux/actions/userInfoAction";
import { apiPath, routerPath } from "webPath";

import $ from "jquery";
import useAlert from "hook/useAlert";
import { init_user_info_admin } from "redux/actions/userInfoAdminAction";

const SideNav = (props) => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };

    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modUserData, setModUserData] = useState(null);
    const [isNeedUpdate, setIsNeedUpdate] = useState(false);
    const navigate = useNavigate();

    let userInfoAdmin;
    const switchPage = props.switchPage;

    (() => {
        userInfoAdmin = props.userInfoAdmin;
    })();

    const navList = props.menuList;

    let page = useSelector((state) => state.page.page);

    // console.log($(`#${page}`).parents());

    useEffect(() => {
        // 새로고침 하더라도 현재 메뉴 활성화
        if (page) {
            $(".sub_2depth").hide();
            $(".sub_3depth").hide();

            $(".depth1").removeClass("on");
            $(".depth2").removeClass("on");

            $(`#${page}`).parents("li").children(".depth1").addClass("on");
            $(`#${page}`).parents("li").children(".depth2").addClass("on");
            $(`#${page}`).parents("li").children(".sub_2depth").slideToggle();
            $(`#${page}`).parents("li").children(".sub_3depth").slideToggle();
        }
    }, [navList]);

    // 모달창 닫기
    const handleModalClose = () => {
        setModUserData(null);
        setIsOpen(false);
    };

    // 화면 재 렌더
    const handleNeedUpdate = () => {
        setIsNeedUpdate(!isNeedUpdate);
    };

    // 회원 정보 수정
    const modUser = (user_idx) => {
        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        let userIdx = String(user_idx);

        // account/v1/user/info/{user_idx}
        // GET
        const url = apiPath.api_user_info + `/${userIdx}`;
        const data = {};

        RestServer("get", url, data)
            .then((response) => {
                let res = response;
                let result_code = res.headers.result_code;
                let result_info = res.data.result_info;

                // 성공
                if (result_code === "0000") {
                    dispatch(
                        set_spinner({
                            isLoading: false,
                        })
                    );

                    setModUserData(result_info);

                    setModalTitle("회원수정");
                    setIsOpen(true);
                }
                // 에러
                else {
                    CommonConsole("log", response);

                    dispatch(
                        set_spinner({
                            isLoading: false,
                        })
                    );

                    CommonNotify({
                        type: "alert",
                        hook: alert,
                        message: response.headers.result_message_ko,
                    });
                }
            })
            .catch((error) => {
                CommonErrorCatch(error, dispatch, alert);
            });
    };

    // 로그아웃
    const signOut = () => {
        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        // signout
        // url : /v1/signout
        // method : POST
        const url = apiPath.api_auth_signout;
        let data = {};

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

        const responsLogic = (res) => {
            // response
            let result_code = res.headers.result_code;

            if (result_code === "0000") {
                // localStorage.removeItem("userInfo");
                dispatch(init_user_info_admin(null));

                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );

                // dispatch(
                //     set_page({
                //         page: "dashboard",
                //     })
                // );
                navigate(routerPath.admin_signin_url);
            }
        };
    };

    const depth1click = (e) => {
        $(".sub_2depth").hide();
        $(".sub_3depth").hide();

        $(".depth1").removeClass("on");

        if (e.target.nextElementSibling.style.display === "none") {
            e.target.classList.add("on");

            $(e.target).siblings(".sub_2depth").slideToggle();
        } else {
            $(e.target).siblings(".sub_2depth").slideUp();
        }
    };

    const depth2click = (e) => {
        if (e.target.nextElementSibling.style.display === "none") {
            $(e.target).siblings(".sub_3depth").slideToggle();
        } else {
            $(e.target).siblings(".sub_3depth").slideUp();
        }
    };

    return (
        <>
            <header>
                <div className="gnb">
                    <div className="adm_profile">
                        <Link onClick={(e) => modUser(userInfoAdmin.user_idx)}>
                            <p>
                                {userInfoAdmin && userInfoAdmin.user_name_ko}(
                                {userInfoAdmin && userInfoAdmin.user_id})
                            </p>
                        </Link>

                        <div>
                            <Link onClick={signOut} className="font-12">
                                로그아웃
                            </Link>{" "}
                            <Link
                                to={routerPath.web_main_url}
                                className="font-12"
                            >
                                HOMEPAGE
                            </Link>
                        </div>
                    </div>
                    <ul className="sub_gnb">
                        <li id="all_gnb">전체 메뉴 보기</li>
                        {navList.map((item1, idx1) => (
                            <li key={`depth1_${idx1}`}>
                                <Link
                                    className="depth1"
                                    onClick={(e) => {
                                        depth1click(e);
                                        item1.page !== "" &&
                                            switchPage(item1.page);
                                    }}
                                    id={item1.page ? item1.page : ""}
                                >
                                    {item1.title}
                                </Link>
                                <ul className="sub_2depth">
                                    {item1.child &&
                                        item1.child.map((item2, idx2) => (
                                            <li key={`depth2_${idx2}`}>
                                                <Link
                                                    onClick={(e) => {
                                                        depth2click(e);
                                                        item2.page !== "" &&
                                                            switchPage(
                                                                item2.page
                                                            );
                                                    }}
                                                    id={
                                                        item2.page
                                                            ? item2.page
                                                            : ""
                                                    }
                                                >
                                                    {item2.title}{" "}
                                                    {item2.child.length !==
                                                        0 && (
                                                        <img
                                                            src="img/common/arrow_drop.png"
                                                            alt=""
                                                        />
                                                    )}
                                                </Link>
                                                <ul className="sub_3depth">
                                                    {item2.child &&
                                                        item2.child.map(
                                                            (item3, idx3) => (
                                                                <li
                                                                    key={`depth2_${idx3}`}
                                                                >
                                                                    <Link
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            item3.page !==
                                                                                "" &&
                                                                            switchPage(
                                                                                item3.page
                                                                            )
                                                                        }
                                                                        id={
                                                                            item3.page
                                                                                ? item3.page
                                                                                : ""
                                                                        }
                                                                    >
                                                                        {
                                                                            item3.title
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                </ul>
                                            </li>
                                        ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            <CommonModal
                isOpen={isOpen}
                title={modalTitle}
                width={"800"}
                handleModalClose={handleModalClose}
                component={"RegUserModalMain"}
                handleNeedUpdate={handleNeedUpdate}
            />
        </>
    );
};

export default SideNav;
