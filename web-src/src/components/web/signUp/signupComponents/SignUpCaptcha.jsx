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
    const imgUrl = apiPath.api_captcha_img;

    const refreshCaptcha = () => {
        let imgElement = document.getElementById("captchaImg");

        imgElement.src = "";
        imgElement.src = imgUrl;
    };

    return (
        <>
            <tr>
                <th>자동입력방지</th>
                <td>
                    <span className="cap">
                        {isLoading ? (
                            ""
                        ) : (
                            <img
                                className="imgClass"
                                id="captchaImg"
                                src={imgUrl}
                                alt=""
                                decoding="async"
                                style={{ background: "white" }}
                            />
                        )}
                    </span>
                    <span>
                        <Link
                            onClick={(e) => {
                                refreshCaptcha();
                                e.preventDefault();
                            }}
                        >
                            <RefreshIcon />
                        </Link>
                    </span>
                    <input type="text" className="input_s" ref={inputCaptcha} />
                </td>
            </tr>
        </>
    );
});

export default SignUpCaptcha;
