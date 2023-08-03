import React, { useState, useEffect, forwardRef } from "react";
import { apiPath } from "webPath";
import { RestServer } from "common/js/Rest";
import { CommonConsole } from "common/js/Common";

const IdComponent = forwardRef((props, ref) => {
    const { accountType, inputID } = ref;
    const idStatus = props.idStatus;

    // 0000 = 성공
    // 1000 = 중복
    // 400 = 형식 안맞음
    const [idchkCode, setIdchkCode] = useState("0");

    const idDuplicateCheck = (e) => {
        const user_chk_url = apiPath.api_user_check;
        let data = {
            signup_type: `${accountType.current.value}`,
            user_id: `${inputID.current.value}`,
        };

        RestServer("post", user_chk_url, data)
            .then((response) => {
                let res = response;

                if (res.headers.result_code === "0000") {
                    setIdchkCode("0000");
                    idStatus(true);
                } else if (res.headers.result_code === "1000") {
                    setIdchkCode("1000");
                    idStatus(false);
                }
            })
            .catch((error) => {
                CommonConsole("log", error);
                CommonConsole("decLog", error);

                setIdchkCode("400");
                idStatus(false);
            });
    };

    return (
        <>
            <h5>
                아이디 <span className="red">*</span>
            </h5>
            <div className="flex">
                <div>
                    <input type="hidden" ref={accountType} value="000" />
                    <input
                        type="email"
                        className="input w600"
                        onKeyUp={idDuplicateCheck}
                        ref={inputID}
                    />
                </div>
                {idchkCode === "0000" ? (
                    <p className="mark green" id="mark_id">
                        사용 가능한 아이디 입니다
                    </p>
                ) : idchkCode === "400" ? (
                    <p className="mark red" id="mark_id">
                        아이디는 이메일 형식으로 입력하세요
                    </p>
                ) : idchkCode === "1000" ? (
                    <p className="mark red" id="mark_id">
                        이미 사용중인 아이디입니다
                    </p>
                ) : (
                    <p className="mark red" id="mark_id">
                        아이디는 이메일 형식으로 입력하세요
                    </p>
                )}
            </div>
        </>
    );
});

export default IdComponent;
