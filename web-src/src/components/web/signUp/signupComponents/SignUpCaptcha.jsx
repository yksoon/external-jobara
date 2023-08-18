import { CommonRest } from "common/js/Common";
import useAlert from "hook/useAlert";
import { forwardRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { apiPath } from "webPath";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    LoadCanvasTemplateNoReload,
    validateCaptcha,
} from "react-simple-captcha";
import { CircularProgress } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const SignUpCaptcha = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const { inputCaptcha } = ref;
    const err = { dispatch, alert };
    const [isLoading, setIsLoading] = useState(false);
    const [img, setImg] = useState({});
    const imgUrl = apiPath.api_captcha_img;

    const refreshCaptcha = () => {
        setImg({
            imageSrc: imgUrl,
            imageHash: Date.now(),
        });
    };

    useEffect(() => {
        setImg({
            imageSrc: imgUrl,
            imageHash: Date.now(),
        });
    }, []);

    return (
        <>
            <tr>
                <th>자동입력방지</th>
                <td>
                    <div className="cap_wrap">
                        <div>
                            <span className="cap">
                                <img
                                    className="imgClass"
                                    id="captchaImg"
                                    src={`${img.imageSrc}?${img.imageHash}`}
                                    alt=""
                                    decoding="async"
                                    style={{ background: "white" }}
                                />
                            </span>
                            <span className="cap_refresh">
                                <Link
                                    onClick={(e) => {
                                        refreshCaptcha();
                                        e.preventDefault();
                                    }}
                                    to="javascript:void(0);"
                                >
                                    <RefreshIcon />
                                    새로고침
                                </Link>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="input_s"
                            ref={inputCaptcha}
                        />
                    </div>
                </td>
            </tr>
        </>
    );
});

export default SignUpCaptcha;
