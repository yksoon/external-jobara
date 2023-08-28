import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { routerPath } from "webPath";
import { Suspense } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

import NotFoundPage from "NotFoundPage";
import Admin from "components/admin/Admin";
import SignIn from "components/admin/signin/SignIn";
import SignUpChk from "components/web/signUpChk/SignUpChk";
import SignUpMod from "components/web/signUpMod/SignUpMod";
import Intro from "components/web/intro/Intro";
import Location from "components/web/intro/Location";
import Program from "components/web/program/Program";
import Detail from "components/web/program/Detail";
import Event from "components/web/program/Event";
import Notice from "components/web/notice/Notice";
import { CommonSpinner } from "common/js/Common";
import { useSelector } from "react-redux";
import CompanyList from "components/web/company/CompanyList";
import CompanyDetail from "components/web/company/CompanyDetail";

// Router
const Router = () => {
    // 레이지 로딩 추가
    const Main = React.lazy(() => import("components/web/Main"));
    const SignUp = React.lazy(() => import("components/web/signUp/SignUp"));

    // 페이지 url 라우팅 추가 필요시 아래에 추가하세요
    return (
        <>
            {/* Route 밖에 Suspense로 감싼다 */}
            <Suspense
                fallback={
                    <Backdrop
                        sx={{
                            color: "#fff",
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={true}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                }
            >
                <Routes>
                    {/* /link를 입력하면 LinkPage 오픈 */}
                    {/* -------------------------------web------------------------------- */}
                    {/* 메인 */}
                    {/* URL : / */}
                    <Route path={routerPath.web_main_url} element={<Main />} />

                    {/* 행사소개 */}
                    {/* URL : /intro/intro */}
                    <Route
                        path={routerPath.web_intro_url}
                        element={<Intro />}
                    />

                    {/* 행사장소 */}
                    {/* URL : /intro/location */}
                    <Route
                        path={routerPath.web_intro_location_url}
                        element={<Location />}
                    />

                    {/* 프로그램 */}
                    {/* URL : /program/program */}
                    <Route
                        path={routerPath.web_program_url}
                        element={<Program />}
                    />
                    {/* 프로그램 */}
                    {/* URL : /program/detail */}
                    <Route
                        path={routerPath.web_program_detail_url}
                        element={<Detail />}
                    />

                    {/* 프로그램 */}
                    {/* URL : /program/event */}
                    <Route
                        path={routerPath.web_program_event_url}
                        element={<Event />}
                    />

                    {/* 공지사항 */}
                    {/* URL : /notice/notice */}
                    <Route
                        path={routerPath.web_notice_url}
                        element={<Notice />}
                    />

                    {/* 사전등록 */}
                    {/* URL : /signup */}
                    <Route
                        path={routerPath.web_signup_url}
                        element={<SignUp />}
                    />

                    {/* 사전등록 확인 */}
                    {/* URL : /signupchk */}
                    <Route
                        path={routerPath.web_signupchk_url}
                        element={<SignUpChk />}
                    />

                    {/* 사전등록 수정 */}
                    {/* URL : /signup_mod */}
                    <Route
                        path={routerPath.web_signup_mod_url}
                        element={<SignUpMod />}
                    />

                    {/* 공지사항 */}
                    {/* URL : /notice */}
                    <Route
                        path={routerPath.web_signup_mod_url}
                        element={<SignUpMod />}
                    />

                    {/* 참여기업 리스트 */}
                    {/* URL : /company/companylist */}
                    <Route
                        path={routerPath.web_company_list_url}
                        element={<CompanyList />}
                    />

                    {/* 참여기업 상세 */}
                    {/* URL : /company/companylist */}
                    <Route
                        path={`${routerPath.web_company_detail_url}/:label`}
                        element={<CompanyDetail />}
                    />

                    {/* -------------------------------admin------------------------------- */}
                    {/* 메인 */}
                    {/* URL : /admin */}
                    <Route
                        path={routerPath.admin_main_url}
                        element={<Admin />}
                    />

                    {/* 로그인 */}
                    {/* URL : /admin/signin */}
                    <Route
                        path={routerPath.admin_signin_url}
                        element={<SignIn />}
                    />

                    {/* 404 */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default Router;
