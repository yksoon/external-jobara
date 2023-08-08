// 콜론, slash
const colon = ":";
const slash = "/";

// 프로토콜
// 호스트
// 포트
// 버전
const protocol = "http://";

//const host = "jejujobara.com";
const host = "210.116.101.159";

const port = "60000";

const version = "v1";

// 기본 url
// const base_url = protocol + host + colon + port + slash + version + slash;
const base_url = "/";
const base_api_url = protocol + host + colon + port;

// admin
const admin = "admin";

// route
const routerPath = {
    // ---------------------- web -------------------------
    // 메인
    // /
    web_main_url: `${base_url}`,

    // 회원가입
    // /signup
    web_signup_url: `${base_url}signup`,

    // 회원가입 완료
    // /signupok
    web_signupok_url: `${base_url}signupok`,

    // ---------------------- admin -------------------------
    // 메인
    // /admin
    admin_main_url: `${base_url + admin}`,

    // 로그인
    // /admin/login
    admin_login_url: `${base_url + admin + slash}login${slash}`,
};

// api
const apiPath = {
    // http://jejujobara.com:60000/auth/v1/signin

    // ------------------ 공통 ------------------
    // /v1/_codes
    // POST
    // 공통 코드
    api_codes: `${base_api_url + slash + version + slash}_codes`,

    // /v1/info/result
    // GET
    // 공통 코드
    api_result: `${base_api_url + slash + version + slash}info/result`,

    // ------------------ Auth ------------------
    // Refresh POST
    api_auth_refresh: `${base_api_url + slash + version + slash}refresh`,

    // 로그인 POST
    api_auth_login: `${base_api_url + slash + version + slash}signin`,

    // 로그아웃 POST
    api_auth_signout: `${base_api_url + slash + version + slash}signout`,
};

export { routerPath, apiPath };
