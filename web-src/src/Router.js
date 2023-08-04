import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { routerPath } from "webPath";
import { Suspense } from "react";

import NotFoundPage from "NotFoundPage";
import Admin from "components/admin/Admin";
import Login from "components/admin/login/Login";
import SignUpOk from "components/web/signUpOk/SignUpOk";
import { Backdrop, CircularProgress } from "@mui/material";

const Router = () => {
    // 레이지 로딩 추가
    const Main = React.lazy(() => import("components/web/Main"));
    const SignUp = React.lazy(() => import("components/web/signUp/SignUp"));

    return (
        <Suspense
            fallback={
                <Backdrop
                    sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            }
        >
            <Routes>
                {/* /link를 입력하면 LinkPage 오픈 */}
                {/* -------------------------------web------------------------------- */}
                {/* 메인 */}
                {/* / */}
                <Route path={routerPath.web_main_url} element={<Main />} />

                {/* 회원가입 */}
                {/* /signup */}
                <Route path={routerPath.web_signup_url} element={<SignUp />} />

                {/* 회원가입 완료 */}
                {/* /signupok */}
                <Route
                    path={routerPath.web_signupok_url}
                    element={<SignUpOk />}
                />

                {/* -------------------------------admin------------------------------- */}
                {/* 메인 */}
                {/* /admin */}
                <Route path={routerPath.admin_main_url} element={<Admin />} />

                {/* 로그인 */}
                {/* /admin/login */}
                <Route path={routerPath.admin_login_url} element={<Login />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
