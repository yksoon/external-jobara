// 콜론, slash
const colon = ":";
const slash = "/";

// 프로토콜
// 호스트
// 포트
// 버전
const protocol = "http://";

const host = "jejujobara.com";
// const host = "210.116.101.159";

const port = "60000";

const version = "v1";

const gateway = "jobara";

// 기본 url
// const base_url = protocol + host + colon + port + slash + version + slash;
const base_url = "/";
const base_api_url = protocol + host + colon + port + slash + gateway;
// const base_api_url = protocol + host + colon + port;
// const base_api_url = process.env.REACT_APP_DB_HOST;
// const base_api_url = "http://localhost:3005";
// "proxy": "http://jejujobara.com:60000"

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

    // 사전등록 확인
    // /signupchk
    web_signupchk_url: `${base_url}signupchk`,

    // 사전등록 수정
    // /signup_mod
    web_signup_mod_url: `${base_url}signup_mod`,

    // ---------------------- admin -------------------------
    // 메인
    // /admin
    admin_main_url: `${base_url + admin}`,

    // 로그인
    // /admin/signin
    admin_signin_url: `${base_url + admin + slash}signin${slash}`,
};

// api
const apiPath = {
    // http://jejujobara.com:60000/auth/v1/signin

    // ------------------ Information ------------------

    // /v1/_codes
    // POST
    // 공통 코드
    api_codes: `${base_api_url + slash + version + slash}_codes`,
    // api_codes: `${slash + version + slash}_codes`,

    // /v1/info/result
    // GET
    // 공통 코드
    api_result: `${base_api_url + slash + version + slash}info/result`,
    // api_result: `${slash + version + slash}info/result`,

    // /v1/captcha/img
    // GET
    // 자동가입방지-이미지
    api_captcha_img: `${base_api_url + slash + version + slash}captcha/img`,
    // api_captcha_img: `${slash + version + slash}captcha/img`,

    // /v1/_file/000/
    // GET
    // 파일 다운로드
    api_file: `${base_api_url + slash + version + slash}_file/000/`,

    // ------------------ Auth ------------------

    // /v1/signin
    // POST
    // 로그인
    api_auth_signin: `${base_api_url + slash + version + slash}signin`,
    // api_auth_signin: `${slash + version + slash}signin`,

    // /v1/signout
    // POST
    // 로그아웃
    api_auth_signout: `${base_api_url + slash + version + slash}signout`,
    // api_auth_signout: `${slash + version + slash}signout`,

    // /v1/_user
    // POST(multi) 등록
    // PUT(multi) 수정
    api_auth_reg_user: `${base_api_url + slash + version + slash}_user`,
    // api_auth_reg_user: `${slash + version + slash}_user`,

    // ------------------ Refresh ------------------

    // /v1/refresh
    // POST
    // 토큰 리프레쉬
    api_refresh: `${base_api_url + slash + version + slash}refresh`,
    // api_refresh: `${slash + version + slash}refresh`,

    // ------------------ Menu Management ------------------

    // /v1/menus
    // GET
    // 메뉴 리스트
    api_admin_menus: `${base_api_url + slash + version + slash}menus`,
    // api_admin_menus: `${slash + version + slash}menus`,

    // ------------------ User Info Management API 사용자 정보 관리 API ------------------

    // /v1/user/infos
    // POST
    // 유저 리스트
    api_admin_user_infos: `${base_api_url + slash + version + slash}user/infos`,
    // api_admin_user_infos: `${slash + version + slash}user/infos`,

    // /v1/user/info/{user_idx}
    // POST
    // 유저 리스트
    api_admin_user_info: `${base_api_url + slash + version + slash}user/info`,
    // api_admin_user_info: `${slash + version + slash}user/info`,

    // /v1/user/_check
    // POST
    // 중복확인
    api_user_check: `${base_api_url + slash + version + slash}user/_check`,
    // api_user_check: `${slash + version + slash}user/_check`,

    // /v1/user/{user_idx}
    // GET
    // 유저 상세
    api_auth_user_idx: `${base_api_url + slash + version + slash}user/`,
    // api_auth_user_idx: `${slash + version + slash}user/`,

    // ------------------ Schedule API 스케줄 관리 API ------------------
    // /v1/schedules
    // GET
    // 스케줄 목록
    api_schedule_list: `${base_api_url + slash + version + slash}schedules`,
    // api_schedule_list: `${slash + version + slash}schedules`,

    // ------------------ Additional API 스케줄 관리 API ------------------
    // /v1/meta/_additionals
    // GET
    // 부가정보관리 목록
    api_get_additional: `${
        base_api_url + slash + version + slash
    }meta/_additionals`,
    // api_get_additional: `${slash + version + slash}meta/_additionals`,
};

export { routerPath, apiPath };
