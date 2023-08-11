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

    // ------------------ Information ------------------

    // /v1/_codes
    // POST
    // 공통 코드
    api_codes: `${version + slash}_codes`,

    // /v1/info/result
    // GET
    // 공통 코드
    api_result: `${version + slash}info/result`,

    // /v1/captcha/img
    // GET
    // 자동가입방지-이미지
    api_captcha_img: `${version + slash}captcha/img`,

    // ------------------ Auth ------------------

    // /v1/signin
    // POST
    // 로그인
    // TODO: 파라미터명 통일시키자
    api_auth_signin: `${version + slash}signin`,

    // /v1/signout
    // POST
    // 로그아웃
    api_auth_signout: `${version + slash}signout`,

    // /v1/_user
    // POST(multi)
    // 등록
    api_auth_reg_user: `${version + slash}_user`,

    // ------------------ Refresh ------------------

    // /v1/refresh
    // POST
    // 토큰 리프레쉬
    api_refresh: `${version + slash}refresh`,

    // ------------------ Menu Management ------------------

    // /v1/menus
    // GET
    // 메뉴 리스트
    api_admin_menus: `${version + slash}menus`,

    // ------------------ User Info Management API 사용자 정보 관리 API ------------------

    // /v1/user/infos
    // POST
    // 유저 리스트
    api_admin_user_infos: `${version + slash}user/infos`,

    // /v1/user/info/{user_idx}
    // POST
    // 유저 리스트
    api_admin_user_info: `${version + slash}user/info`,

    // /v1/user/_check
    // POST
    // 중복확인
    api_user_check: `${version + slash}user/_check`,

    // ------------------ Schedule API 스케줄 관리 API ------------------
    // /v1/schedules
    // GET
    // 스케줄 목록
    api_schedule_list: `${version + slash}schedules`,

    // ------------------ Additional API 스케줄 관리 API ------------------
    // /v1/meta/_additionals
    // GET
    // 부가정보관리 목록
    api_get_additional: `${version + slash}meta/_additionals`,
};

export { routerPath, apiPath };
