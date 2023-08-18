import { React, useEffect, useRef, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { CircularProgress, Dialog, Modal } from "@mui/material";
import { set_spinner } from "redux/actions/commonAction";
import { routerPath } from "webPath";
import tokenExpire from "./tokenExpire";
import RegUserModalMain from "components/admin/user/userList/RegUserModalMain";
import { RestServer } from "./Rest";
import useAlert from "hook/useAlert";

// Alert (props)
// isOpen = state 상태값
// title = 제목
// content = 내용
// btn = 확인버튼
// closeModal = 닫기 (state를 변경할 수 있는 handler)
const CommonModal = (props) => {
    const modalOption = {
        isOpen: props.isOpen,
        title: props.title,
        handleModalClose: props.handleModalClose,
        width: props.width,
    };

    const component = props.component;

    const handleNeedUpdate = props.handleNeedUpdate
        ? props.handleNeedUpdate
        : null;

    // 모달 컴포넌트 렌더
    const renderComponent = (component) => {
        switch (component) {
            case "RegUserModalMain":
                return (
                    <RegUserModalMain
                        handleNeedUpdate={handleNeedUpdate}
                        handleModalClose={modalOption.handleModalClose}
                        modUserData={props.modUserData}
                    />
                );

            default:
                return;
        }
    };
    return (
        <>
            <Modal
                open={modalOption.isOpen}
                onClose={modalOption.handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modal_wrap" id="modal_wrap">
                    <div className={`modal w${modalOption.width}`}>
                        <div
                            className="modal_close"
                            onClick={modalOption.handleModalClose}
                        >
                            <img src="img/common/modal_close.png" alt="" />
                        </div>
                        <div className="form">
                            <h4 className="mo_title">{modalOption.title}</h4>
                            {/* 모달 컨텐츠 드가자 */}

                            {renderComponent(component)}

                            {/* 모달 컨텐츠 드가자 END */}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

// 디버깅용 콘솔
const CommonConsole = (type, responseData) => {
    let response;

    let result_message_ko;
    let result_message_en;
    let result_code;
    let message;

    if (!responseData.response) {
        response = responseData;
    } else {
        response = responseData.response;
    }

    if (response.headers) {
        result_message_ko = response.headers.result_message_ko;
        result_message_en = response.headers.result_message_en;
        result_code = response.headers.result_code;
        message = response.headers.message;
    } else {
        response = responseData;
    }

    switch (type) {
        case "log":
            return console.log(responseData);

        case "decLog":
            return console.log(
                decodeURI(result_message_ko),
                decodeURI(result_message_en),
                decodeURI(result_code),
                decodeURI(message)
            );

        case "alertMsg":
            return alert(decodeURI(result_message_ko).replace("%20", " "));

        case "alert":
            return alert(responseData);

        default:
            break;
    }
};

// 스피너
const CommonSpinner = (props) => {
    const [isLoading, setIsloading] = useState(false);
    const spinner = useRef(null);

    // const isLoading = props.option.isLoading;
    const alertMsg = props.option.alert ? props.option.alert : "";
    const error = props.option.error ? props.option.error : "";

    useEffect(() => {
        setIsloading(props.option.isLoading);

        if (error === "Y") {
            if (!alertMsg) {
                let spnin = spinner.current && spinner.current.childNodes[0];
                spinner.current && spnin.classList.add("error");
            } else {
                alert(decodeURI(alertMsg).replace("%20", " "));
            }
        }
    }, [props]);

    return (
        <>
            {isLoading && (
                <div className="spinner" ref={spinner}>
                    <CircularProgress />
                </div>
            )}
        </>
    );
};

// 에러처리
const CommonErrorCatch = async (error, dispatch, alert) => {
    // 오류발생시 실행
    CommonConsole("log", error);

    if (error.response) {
        if (error.response.status === 500 || error.response.status === 503) {
            dispatch(
                set_spinner({
                    isLoading: false,
                })
            );

            CommonNotify({
                type: "alert",
                hook: alert,
                message: "잠시 후 다시 시도해주세요",
            });
        }
        // 비정상접근 or 비정상토큰
        else if (
            error.response.headers.result_code === "9995" ||
            error.response.headers.result_code === "2003"
        ) {
            tokenExpire(dispatch, alert);
        }
        // 에러
        else {
            dispatch(
                set_spinner({
                    isLoading: false,
                })
            );

            CommonNotify({
                type: "alert",
                hook: alert,
                message: error.response.headers.result_message_ko,
            });
        }
    } else {
        dispatch(
            set_spinner({
                isLoading: true,
                error: "Y",
            })
        );
    }
    // 타임아웃
    if (error.message === "timeout of 5000ms exceeded") {
        dispatch(
            set_spinner({
                isLoading: false,
            })
        );

        CommonNotify({
            type: "alert",
            hook: alert,
            message: "잠시 후 다시 시도해주세요",
        });
    }
};

// 알림창
const CommonNotify = async (option) => {
    const type = option.type;
    const hook = option.hook;
    const message = option.message;
    const callback = option.callback ? option.callback : null;

    switch (type) {
        case "confirm":
            const resultConfirm = await hook({
                message: message,
                buttons: {
                    ok: "확인",
                    cancel: "취소",
                },
            });

            if (resultConfirm) {
                if (callback) {
                    const type = typeof callback;

                    if (type === "function") {
                        callback();
                    }
                }
            }

            break;

        case "alert":
            const resultAlert = await hook({
                message: message,
                buttons: {
                    ok: "확인",
                    cancel: "취소",
                },
            });

            if (resultAlert) {
                if (callback) {
                    const type = typeof callback;

                    if (type === "function") {
                        callback();
                    }
                }
            }

            break;
        default:
            break;
    }
};

// 공용 REST
/* 
-- restParams --
dispatch : useDispatch
alert : useAlert
method : "post", "get", "delete", "put", "post_multi", "put_multi"
url : ""
data : {}
callback : callback()
admin: ""
*/
const CommonRest = async (restParams = {}) => {
    const dispatch = restParams.err.dispatch;
    const alert = restParams.err.alert ? restParams.err.alert : "";

    const method = restParams.method;
    const url = restParams.url;
    const data = restParams.data;
    const admin = restParams.admin;

    await RestServer(method, url, data, admin)
        .then((response) => {
            restParams.callback(response);
        })
        .catch((error) => {
            CommonErrorCatch(error, dispatch, alert);

            // console.log(restParams);

            // restParams.errCallback(error);
            // console.log(error);
            // func(error);
        });
};

// 공용 날짜 체킹
/* 
-- restParams --
dispatch : useDispatch
alert : useAlert
type: ""
callback : callback()
*/
const CommonCheckDate = async (
    checkSchedule,
    ip,
    alert,
    callbackFunc,
    dispatch
) => {
    dispatch(
        set_spinner({
            isLoading: true,
        })
    );

    if (Object.keys(checkSchedule).length !== 0) {
        const allowedIp = checkSchedule.allowed_ip;

        const nowDate = new Date();

        const startDate = checkSchedule.start_date;
        const startTime = checkSchedule.start_time;
        const endDate = checkSchedule.end_date;
        const endTime = checkSchedule.end_time;

        const startDateTime = new Date(startDate + " " + startTime);
        const endDateTime = new Date(endDate + " " + endTime);

        if (nowDate > startDateTime && nowDate < endDateTime) {
            // 사전등록기간 내
            console.log("checkSchedule OK");

            dispatch(
                set_spinner({
                    isLoading: false,
                })
            );

            return true;
        } else {
            // 사전등록기간 외
            if (allowedIp.indexOf(ip) === -1) {
                // 예외 아이피가 없으면
                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: "사전등록 기간이 아닙니다",
                    callback: callbackFunc,
                });

                return false;
            }
        }
    } else {
        callbackFunc();

        return false;
    }

    return true;
};

// 공용 url 열기
// 파라미터 : url(string)
const CommonOpenUrl = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
};

export {
    CommonModal,
    CommonConsole,
    CommonSpinner,
    CommonErrorCatch,
    CommonNotify,
    CommonRest,
    CommonOpenUrl,
    CommonCheckDate,
};
