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

const SignUpCaptcha = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const { inputCaptcha } = ref;
    const err = { dispatch, alert };
    const [isLoading, setIsLoading] = useState(false);
    const imgUrl = "http://jejujobara.com:60000/v1/captcha/img";

    useEffect(() => {
        // getImg("팡순이3");
    }, []);

    const refreshCaptcha = () => {
        setIsLoading(true);

        let imgElement = document.getElementById("captchaImg");
        imgElement.src = "";
        imgElement.src = imgUrl;

        // promise 선언
        let imgPromise = new Promise((resolve, reject) => {
            resolve();
        });

        imgPromise.then(() => {
            imgElement.onload = () => {
                setIsLoading(false);
            };
        });
    };

    const getImg = () => {};
    return (
        <>
            <div style={{ marginTop: 20 }}>
                <div style={{ width: 150, height: 50 }}>
                    {isLoading ? (
                        <CircularProgress />
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
                </div>
                <Link onClick={(e) => refreshCaptcha()}>새로고침</Link>
                <input type="text" ref={inputCaptcha} />
            </div>
        </>
    );
});

export default SignUpCaptcha;
