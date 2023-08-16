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
