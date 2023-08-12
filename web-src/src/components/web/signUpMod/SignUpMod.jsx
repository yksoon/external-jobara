import { Link, useNavigate } from "react-router-dom";
import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";
import SignUpModID from "./signUpModComponents/SignUpModID";
import { useEffect, useRef, useState } from "react";
import SignUpModName from "./signUpModComponents/SignUpModName";
import SignUpModMobile from "./signUpModComponents/SignUpModMobile";
import SignUpModOrg from "./signUpModComponents/SignUpModOrg";
import SignUpModDepartment from "./signUpModComponents/SignUpModDepartment";
import SignUpModBirthday from "./signUpModComponents/SignUpModBirthday";
import SignUpModSpecialized from "./signUpModComponents/SignUpModSpecialized";
import SignUpModSpecialCheck from "./signUpModComponents/SignUpModSpecialCheck";
import SignUpModFile from "./signUpModComponents/SignUpModFile";
import { useDispatch, useSelector } from "react-redux";
import { apiPath, routerPath } from "webPath";
import useAlert from "hook/useAlert";
import { set_spinner } from "redux/actions/commonAction";
import { CommonNotify, CommonRest } from "common/js/Common";
import { idPattern } from "common/js/Pattern";
import { signupMultiModel } from "models/user/signUp";

const SignUpMod = () => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };

    const navigate = useNavigate();
    // 참여프로그램 체크박스
    const [checkItems, setCheckItems] = useState([]);

    const userToken = useSelector((state) => state.userInfo.userToken);
    const userInfo = useSelector((state) => state.userInfo.userInfo);

    const signUpRefs = {
        inputID: useRef(null),
        // inputPW: useRef(null),
        // inputPW2: useRef(null),
        inputFirstName: useRef(null),
        inputLastName: useRef(null),
        inputMobile1: useRef(null),
        inputMobile2: useRef(null),
        inputMobile3: useRef(null),
        // inputCaptcha: useRef(null),
        inputOrg: useRef(null),
        inputDepartment: useRef(null),
        inputBirth: useRef(null),
        inputSpecialized: useRef(null),
        inputAttachmentFile: useRef(null),
    };

    useEffect(() => {
        if (!userToken) {
            navigate(routerPath.web_main_url);
        } else {
            getDefaultValue();
        }
    }, []);

    const getDefaultValue = () => {
        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        // console.log("userInfouserInfouserInfo", userInfo);

        if (userInfo) {
            // 생일 가공
            const year = userInfo.birth_yyyy;
            const month = userInfo.birth_mm;
            const day = userInfo.birth_dd;
            const birthday = year + "-" + month + "-" + day;

            signUpRefs.inputID.current.value = userInfo.user_id;
            signUpRefs.inputFirstName.current.value =
                userInfo.user_name_first_ko;
            signUpRefs.inputLastName.current.value = userInfo.user_name_last_ko;
            signUpRefs.inputBirth.current.value = birthday;
            signUpRefs.inputMobile1.current.value = userInfo.mobile1;
            signUpRefs.inputMobile2.current.value = userInfo.mobile2;
            signUpRefs.inputMobile3.current.value = userInfo.mobile3;
            signUpRefs.inputOrg.current.value = userInfo.organization_name_ko;
            signUpRefs.inputDepartment.current.value =
                userInfo.department_name_ko;
            signUpRefs.inputSpecialized.current.value =
                userInfo.specialized_name_ko;
        }
    };

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
                // securityCode: signUpRefs.inputCaptcha.current.value,
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
                    dispatch(
                        set_spinner({
                            isLoading: false,
                        })
                    );

                    CommonNotify({
                        type: "alert",
                        hook: alert,
                        message: "사전등록 수정이 완료 되었습니다",
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
                method: "put_multi",
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
        // if (!signUpRefs.inputID.current.value) {
        //     signupAlert("아이디를 입력해주세요");
        //     signUpRefs.inputID.current.focus();
        //     return false;
        // }
        // if (!idPattern.test(signUpRefs.inputID.current.value)) {
        //     signupAlert("아이디는 4글자이상 20글자 이하입니다");
        //     signUpRefs.inputID.current.focus();
        //     return false;
        // }

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
        // if (!signUpRefs.inputCaptcha.current.value) {
        //     signupAlert("보안번호를 입력해주세요");
        //     signUpRefs.inputCaptcha.current.focus();
        //     return false;
        // }
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
                    <h2 id="subtitle">사전등록수정</h2>
                    <div className="registration">
                        <table className="regi_form">
                            <colgroup>
                                <col widtd="30%" />
                                <col widtd="*" />
                            </colgroup>
                            <tbody>
                                {/* ID Component */}
                                {/* 아이디 */}
                                <SignUpModID ref={signUpRefs} />

                                {/* Name Component */}
                                {/* 이름 */}
                                <SignUpModName ref={signUpRefs} />

                                {/* Mobile Component */}
                                {/* 휴대전화 */}
                                <SignUpModMobile ref={signUpRefs} />

                                {/* Org Component */}
                                {/* 학교 */}
                                <SignUpModOrg ref={signUpRefs} />

                                {/* Department Component */}
                                {/* 학과 */}
                                <SignUpModDepartment ref={signUpRefs} />

                                {/* Birthday Component */}
                                {/* 생년월일 */}
                                <SignUpModBirthday ref={signUpRefs} />

                                {/* Specialized Component */}
                                {/* 희망직종 */}
                                <SignUpModSpecialized ref={signUpRefs} />

                                {/* SignUpSpecialCheck Component */}
                                {/* 참여프로그램 */}
                                <SignUpModSpecialCheck
                                    ref={signUpRefs}
                                    handleSingleCheck={handleSingleCheck}
                                    userInfo={userInfo}
                                />

                                {/* SignUpFile Component */}
                                {/* 파일첨부 */}
                                <SignUpModFile
                                    ref={signUpRefs}
                                    userInfo={userInfo}
                                />
                            </tbody>
                        </table>

                        <div className="btnbox">
                            <Link
                                onClick={(e) => {
                                    clickForm();
                                    e.preventDefault();
                                }}
                            >
                                사전등록수정하기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* 서브컨텐츠     //E */}

            <Footer />
        </>
    );
};

export default SignUpMod;
