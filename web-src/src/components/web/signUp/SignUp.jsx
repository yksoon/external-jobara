import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPath, routerPath } from "webPath";
import { useDispatch, useSelector } from "react-redux";
import { RestServer } from "common/js/Rest";
import { set_cert_info } from "redux/actions/certAction";

import Header from "components/web/common/Header";
import Footer from "components/web/common/Footer";

import {
    CommonConsole,
    CommonNotify,
    CommonRest,
    CommonSpinner,
} from "common/js/Common";
import { set_spinner } from "redux/actions/commonAction";
import useAlert from "hook/useAlert";

import SignUpID from "./signupComponents/SignUpID";
import SignUpPW from "./signupComponents/SignUpPW";
import SignUpCaptcha from "./signupComponents/SignUpCaptcha";
import SignUpName from "./signupComponents/SignUpName";
import SignUpMobile from "./signupComponents/SignUpMobile";
import SignUpOrg from "./signupComponents/SignUpOrg";
import SignUpDepartment from "./signupComponents/SignUpDepartment";
import SignUpBirthday from "./signupComponents/SignUpBirthday";
import SignUpSpecialized from "./signupComponents/SignUpSpecialized";
import SignUpSpecialCheck from "./signupComponents/SignUpSpecialCheck";
import SignUpFile from "./signupComponents/SignUpFile";
import { signupModel, signupMultiModel } from "models/user/signUp";
import { idPattern, pwPattern } from "common/js/Pattern";

// 회원가입
function SignUp() {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };

    const signUpRefs = {
        inputID: useRef(null),
        inputPW: useRef(null),
        inputPW2: useRef(null),
        inputFirstName: useRef(null),
        inputLastName: useRef(null),
        inputMobile1: useRef(null),
        inputMobile2: useRef(null),
        inputMobile3: useRef(null),
        inputCaptcha: useRef(null),
        inputOrg: useRef(null),
        inputDepartment: useRef(null),
        inputBirthYear: useRef(null),
        inputBirthMonth: useRef(null),
        inputBirthDay: useRef(null),
        inputSpecialized: useRef(null),
        inputAttachmentFile: useRef(null),
    };

    // 제출
    const clickForm = () => {
        if (validation()) {
            dispatch(
                set_spinner({
                    isLoading: true,
                })
            );

            const formData = new FormData();
            const model = signupMultiModel;
            let data = {};

            let fileArr = [];
            let files = signUpRefs.inputAttachmentFile.current.files;
            fileArr.push(signUpRefs.inputAttachmentFile.current.files[0]);

            console.log(
                Array.from(signUpRefs.inputAttachmentFile.current.files)
            );

            data = {
                ...model,
                userId: signUpRefs.inputID.current.value,
                userPwd: signUpRefs.inputPW.current.value,
                userNameFirstKo: signUpRefs.inputFirstName.current.value,
                userNameLastKo: signUpRefs.inputLastName.current.value,
                mobile1: signUpRefs.inputMobile1.current.value,
                mobile2: signUpRefs.inputMobile2.current.value,
                mobile3: signUpRefs.inputMobile3.current.value,
                securityCode: signUpRefs.inputCaptcha.current.value,
                organizationNameKo: signUpRefs.inputOrg.current.value,
                departmentNameKo: signUpRefs.inputDepartment.current.value,
                birthYyyy: signUpRefs.inputBirthYear.current.value,
                birthMm: signUpRefs.inputBirthMonth.current.value,
                birthDd: signUpRefs.inputBirthDay.current.value,
                specializedNameKo: signUpRefs.inputSpecialized.current.value,
            };

            // 기본 formData append
            for (const key in data) {
                formData.append(key, data[key]);
            }

            // 파일 formData append
            fileArr = Array.from(signUpRefs.inputAttachmentFile.current.files);
            let len = fileArr.length;
            for (let i = 0; i < len; i++) {
                formData.append("attachmentFile", fileArr[i]);
            }

            const responsLogic = (res) => {
                dispatch(
                    set_spinner({
                        isLoading: true,
                    })
                );

                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: "가입 완료 되었습니다",
                });

                console.log(res);
            };

            const restParams = {
                method: "post_multi",
                url: apiPath.api_auth_reg_user,
                data: formData,
                err: err,
                callback: (res) => responsLogic(res),
            };

            CommonRest(restParams);
        }
    };

    // 검증
    const validation = () => {
        // --------------------아이디----------------------
        if (!signUpRefs.inputID.current.value) {
            signupAlert("아이디를 입력해주세요");
            signUpRefs.inputID.current.focus();
            return false;
        }
        if (!idPattern.test(signUpRefs.inputID.current.value)) {
            signupAlert("아이디는 4글자이상 20글자 이하입니다");
            signUpRefs.inputID.current.focus();
            return false;
        }

        // --------------------비밀번호----------------------
        if (!signUpRefs.inputPW.current.value) {
            signupAlert("비밀번호를 입력해주세요");
            signUpRefs.inputPW.current.focus();
            return false;
        }
        if (!signUpRefs.inputPW2.current.value) {
            signupAlert("비밀번호를 입력해주세요");
            signUpRefs.inputPW2.current.focus();
            return false;
        }
        if (
            signUpRefs.inputPW.current.value !==
            signUpRefs.inputPW2.current.value
        ) {
            signupAlert("비밀번호가 일치하지 않습니다");
            signUpRefs.inputPW.current.focus();
            return false;
        }
        if (!pwPattern.test(signUpRefs.inputPW.current.value)) {
            signupAlert(
                "비밀번호는 특수문자, 문자, 숫자 포함 형태의 6~16자리 입니다"
            );
            signUpRefs.inputPW.current.focus();
            return false;
        }

        // --------------------성명----------------------
        if (
            !signUpRefs.inputFirstName.current.value ||
            !signUpRefs.inputLastName.current.value
        ) {
            signupAlert("성명을 입력해주세요");
            signUpRefs.inputFirstName.current.focus();
            return false;
        }

        // --------------------휴대전화----------------------
        if (
            !signUpRefs.inputMobile1.current.value ||
            !signUpRefs.inputMobile2.current.value ||
            !signUpRefs.inputMobile3.current.value
        ) {
            signupAlert("전화번호를 입력해주세요");
            signUpRefs.inputMobile1.current.focus();
            return false;
        }

        // --------------------학교----------------------
        if (!signUpRefs.inputOrg.current.value) {
            signupAlert("학교를 입력해주세요");
            signUpRefs.inputOrg.current.focus();
            return false;
        }

        // --------------------학과----------------------
        if (!signUpRefs.inputDepartment.current.value) {
            signupAlert("학과를 입력해주세요");
            signUpRefs.inputDepartment.current.focus();
            return false;
        }

        // --------------------생년월일----------------------
        if (
            !signUpRefs.inputBirthYear.current.value ||
            !signUpRefs.inputBirthMonth.current.value ||
            !signUpRefs.inputBirthDay.current.value
        ) {
            signupAlert("생년월일을 입력해주세요");
            signUpRefs.inputBirthYear.current.focus();
            return false;
        }

        // --------------------희망직종----------------------
        if (!signUpRefs.inputSpecialized.current.value) {
            signupAlert("희망직종을 입력해주세요");
            signUpRefs.inputSpecialized.current.focus();
            return false;
        }

        // --------------------파일----------------------
        if (!signUpRefs.inputAttachmentFile.current.value) {
            signupAlert("이력서를 첨부해주세요");
            signUpRefs.inputAttachmentFile.current.focus();
            return false;
        }

        // --------------------captcha----------------------
        if (!signUpRefs.inputCaptcha.current.value) {
            signupAlert("보안번호를 입력해주세요");
            signUpRefs.inputCaptcha.current.focus();
            return false;
        }
        return true;
    };

    // 알럿
    const signupAlert = (msg) => {
        CommonNotify({
            type: "alert",
            hook: alert,
            message: msg,
        });
    };

    return (
        <>
            <Header />
            <div id="con_area">
                <div className="form sign" id="sign_form">
                    {/* <h3 className="title">회원가입</h3> */}
                    <div>
                        {/* 컨텐츠 */}
                        {/* ID Component */}
                        {/* 아이디 */}
                        <SignUpID ref={signUpRefs} />

                        {/* PW Component */}
                        {/* 비밀번호 */}
                        <SignUpPW ref={signUpRefs} />

                        {/* Name Component */}
                        {/* 이름 */}
                        <SignUpName ref={signUpRefs} />

                        {/* Mobile Component */}
                        {/* 휴대전화 */}
                        <SignUpMobile ref={signUpRefs} />

                        {/* Org Component */}
                        {/* 학교 */}
                        <SignUpOrg ref={signUpRefs} />

                        {/* Department Component */}
                        {/* 학과 */}
                        <SignUpDepartment ref={signUpRefs} />

                        {/* Birthday Component */}
                        {/* 생년월일 */}
                        <SignUpBirthday ref={signUpRefs} />

                        {/* Specialized Component */}
                        {/* 희망직종 */}
                        <SignUpSpecialized ref={signUpRefs} />

                        {/* SignUpSpecialCheck Component */}
                        {/* 체크박스 */}
                        <SignUpSpecialCheck ref={signUpRefs} />

                        {/* SignUpFile Component */}
                        {/* 파일첨부 */}
                        <SignUpFile ref={signUpRefs} />

                        {/* Captcha Component */}
                        {/* Captcha */}
                        <SignUpCaptcha ref={signUpRefs} />

                        <div style={{ marginTop: 20 }}>
                            <Link onClick={(e) => clickForm()}>제출</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SignUp;
