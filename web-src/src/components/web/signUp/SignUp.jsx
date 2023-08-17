import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPath, routerPath } from "webPath";
import { useDispatch, useSelector } from "react-redux";

import SubHeader from "../common/SubHeader";
import Footer from "components/web/common/Footer";

import { CommonConsole, CommonNotify, CommonRest } from "common/js/Common";
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
import { signupMultiModel } from "models/user/signUp";
import { idPattern, pwPattern } from "common/js/Pattern";

// 회원가입
function SignUp() {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };
    const navigate = useNavigate();

    // 참여프로그램 체크박스
    const [checkItems, setCheckItems] = useState([]);

    // 체크박스 단일 선택
    const handleSingleCheck = (checked, id) => {
        if (checked) {
            // 단일 선택 시 체크된 아이템을 배열에 추가
            setCheckItems((prev) => [...prev, id]);
        } else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    useEffect(() => {
        // 로딩
        startLoding();
    }, []);

    const startLoding = () => {
        dispatch(
            set_spinner({
                isLoading: true,
            })
        );
    };

    const signUpRefs = {
        inputID: useRef(null),
        // inputPW: useRef(null),
        // inputPW2: useRef(null),
        inputFirstName: useRef(null),
        inputLastName: useRef(null),
        inputMobile1: useRef(null),
        inputMobile2: useRef(null),
        inputMobile3: useRef(null),
        inputCaptcha: useRef(null),
        inputOrg: useRef(null),
        inputDepartment: useRef(null),
        inputBirth: useRef(null),
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
            // let files = signUpRefs.inputAttachmentFile.current.files;
            // fileArr.push(signUpRefs.inputAttachmentFile.current.files[0]);

            // console.log(Array.from(signUpRefs.inputAttachmentFile.current.files));

            // 생년월일 가공
            const birthArr = signUpRefs.inputBirth.current.value
                ? signUpRefs.inputBirth.current.value.split("-")
                : "";

            data = {
                ...model,
                userId: signUpRefs.inputID.current.value,
                // userPwd: signUpRefs.inputPW.current.value,
                userNameFirstKo: signUpRefs.inputFirstName.current.value,
                userNameLastKo: signUpRefs.inputLastName.current.value,
                mobile1: signUpRefs.inputMobile1.current.value,
                mobile2: signUpRefs.inputMobile2.current.value,
                mobile3: signUpRefs.inputMobile3.current.value,
                securityCode: signUpRefs.inputCaptcha.current.value,
                organizationNameKo: signUpRefs.inputOrg.current.value,
                departmentNameKo: signUpRefs.inputDepartment.current.value,
                birthYyyy: birthArr[0],
                birthMm: birthArr[1],
                birthDd: birthArr[2],
                specializedNameKo: signUpRefs.inputSpecialized.current.value,
                additionalIdxs: checkItems.join(),
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
                let result_code = res.headers.result_code;
                if (result_code === "0000") {
                    // 등록 완료 후 확인페이지 이동
                    const goToChk = () => {
                        navigate(routerPath.web_signupchk_url);
                    };

                    dispatch(
                        set_spinner({
                            isLoading: false,
                        })
                    );

                    CommonNotify({
                        type: "alert",
                        hook: alert,
                        message: "사전등록이 완료 되었습니다",
                        callback: goToChk(),
                    });
                } else {
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

            const restParams = {
                method: "post_multi",
                url: apiPath.api_auth_reg_user, // /v1/_user
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
        // if (!signUpRefs.inputPW.current.value) {
        //     signupAlert("비밀번호를 입력해주세요");
        //     signUpRefs.inputPW.current.focus();
        //     return false;
        // }
        // if (!signUpRefs.inputPW2.current.value) {
        //     signupAlert("비밀번호를 입력해주세요");
        //     signUpRefs.inputPW2.current.focus();
        //     return false;
        // }
        // if (
        //     signUpRefs.inputPW.current.value !==
        //     signUpRefs.inputPW2.current.value
        // ) {
        //     signupAlert("비밀번호가 일치하지 않습니다");
        //     signUpRefs.inputPW.current.focus();
        //     return false;
        // }
        // if (!pwPattern.test(signUpRefs.inputPW.current.value)) {
        //     signupAlert(
        //         "비밀번호는 특수문자, 문자, 숫자 포함 형태의 6~16자리 입니다"
        //     );
        //     signUpRefs.inputPW.current.focus();
        //     return false;
        // }

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
        if (!signUpRefs.inputBirth.current.value) {
            signupAlert("생년월일을 입력해주세요");
            signUpRefs.inputBirth.current.focus();
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
            <SubHeader />

            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container">
                <div id="content">
                    <h2 id="subtitle">사전등록</h2>
                    <div className="registration">
                        <table className="regi_form">
                            <colgroup>
                                <col widtd="30%" />
                                <col widtd="*" />
                            </colgroup>
                            <tbody>
                                {/* ID Component */}
                                {/* 아이디 */}
                                <SignUpID ref={signUpRefs} />

                                {/* PW Component */}
                                {/* 비밀번호 */}
                                {/* <SignUpPW ref={signUpRefs} /> */}

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
                                {/* 참여프로그램 */}
                                <SignUpSpecialCheck
                                    ref={signUpRefs}
                                    handleSingleCheck={handleSingleCheck}
                                />

                                {/* SignUpFile Component */}
                                {/* 파일첨부 */}
                                <SignUpFile ref={signUpRefs} />

                                {/* Captcha Component */}
                                {/* Captcha */}
                                <SignUpCaptcha ref={signUpRefs} />
                            </tbody>
                        </table>

                        <div className="btnbox">
                            <Link
                                onClick={(e) => {
                                    clickForm();
                                    e.preventDefault();
                                }}
                            >
                                사전등록하기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* 서브컨텐츠     //E */}

            <Footer />
        </>
    );
}

export default SignUp;
