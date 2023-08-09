import { Link } from "react-router-dom";
import useAlert from "hook/useAlert";

const AlertModal = () => {
    const { alertList } = useAlert();

    if (alertList.length <= 0) return null;

    return (
        <div className="alert_wrap block">
            {alertList.map(
                ({ id, message, buttons: { ok, close, cancel } }, idx) => {
                    return (
                        <div className="alert" key={`confirm_${idx}`}>
                            <div>
                                <span
                                    className="noti_icon"
                                    id="modal-modal-title"
                                >
                                    <img src="img/common/alert.png" alt="" />
                                </span>
                                <h3>
                                    {message
                                        ? decodeURI(message)
                                              .replaceAll("%20", " ")
                                              .replaceAll("%40", "@")
                                        : ""}
                                </h3>
                                <p>
                                    {/* {message
                                        ? decodeURI(message)
                                              .replaceAll("%20", " ")
                                              .replaceAll("%40", "@")
                                        : ""} */}
                                </p>
                            </div>
                            <div className="btn_box">
                                <Link className="backbtn" onClick={ok.click}>
                                    {ok.text}
                                    <span>
                                        <img
                                            src="img/common/arrow.png"
                                            alt=""
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
};

export default AlertModal;