import { RestServer } from "./Rest";
import { init_user_info, set_user_info } from "redux/actions/userInfoAction";
import { set_spinner } from "redux/actions/commonAction";
import { apiPath, routerPath } from "webPath";
import { CommonConsole, CommonNotify } from "./Common";
import { init_user_info_admin } from "redux/actions/userInfoAdminAction";

const tokenExpire = (dispatch, alert) => {
    dispatch(
        set_spinner({
            isLoading: true,
        })
    );

    // CommonNotify({
    //     type: "alert",
    //     hook: alert,
    //     message: "잠시후 다시 시도해주세요",
    // });

    // signout
    // url : /v1/signout
    // method : POST
    const url = apiPath.api_auth_signout;
    let data = {};

    RestServer("post", url, data)
        .then(function (response) {
            // response
            let result_code = response.headers.result_code;

            if (result_code === "0000") {
                // localStorage.removeItem("userInfo");
                // dispatch(set_user_info(null));
                dispatch(init_user_info_admin(null));

                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );

                window.location.replace(routerPath.admin_signin_url);
            }
        })
        .catch(function (error) {
            // 오류발생시 실행
            CommonConsole("log", error);
            CommonConsole("decLog", error);
            // CommonConsole("alertMsg", error);

            dispatch(init_user_info_admin(null));
            // Spinner
            dispatch(
                set_spinner({
                    isLoading: false,
                })
            );

            CommonNotify({
                type: "alert",
                hook: alert,
                message: error.response.headers.result_message_ko,
                callback: () => goToSignIn(),
            });

            const goToSignIn = () => {
                window.location.replace(routerPath.admin_signin_url);
            };
        });
};

export default tokenExpire;
