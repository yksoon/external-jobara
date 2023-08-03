import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { routerPath } from "webPath";

import NotFoundPage from "NotFoundPage";
import Admin from "components/admin/Admin";
import Login from "components/admin/login/Login";
import Main from "components/web/Main";
import SignUp from "components/web/signUp/SignUp";
import SignUpOk from "components/web/signUpOk/SignUpOk";

const Router = () => {
    return (
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
            <Route path={routerPath.web_signupok_url} element={<SignUpOk />} />

            {/* -------------------------------admin------------------------------- */}
            {/* 메인 */}
            {/* /admin */}
            <Route path={routerPath.admin_main_url} element={<Admin />} />

            {/* 로그인 */}
            {/* /admin/login */}
            <Route path={routerPath.admin_login_url} element={<Login />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default Router;
