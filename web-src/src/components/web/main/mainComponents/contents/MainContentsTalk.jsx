import {
    CommonConsole,
    CommonNotify,
    CommonRest,
    CommonSpinner,
} from "common/js/Common";
import useAlert from "hook/useAlert";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { set_spinner } from "redux/actions/commonAction";
import { successCode } from "resultCode";
import { apiPath } from "webPath";
import RefreshIcon from "@mui/icons-material/Refresh";
import { oneLinePattern, spacePattern } from "common/js/Pattern";
import { boardModel } from "models/board/board";
import { Skeleton } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { isSpinnerAtom } from "recoils/atoms";

const MainContentsTalk = () => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };

    const [boardList, setBoardList] = useState([]);
    const [img, setImg] = useState({});
    const [isNeedUpdate, setIsNeedUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const imgUrl = apiPath.api_captcha_img;

    const oneLineRefs = {
        inputUserFirstName: useRef(null),
        inputUserLastName: useRef(null),
        inputMobile1: useRef(null),
        inputMobile2: useRef(null),
        inputMobile3: useRef(null),
        inputContent: useRef(null),
        inputCaptcha: useRef(null),
    };

    const spinnerOption = useSelector((state) => state.common.spinner);
    const setSpinnerAtom = useSetRecoilState(isSpinnerAtom);

    useEffect(() => {
        setImg({
            imageSrc: imgUrl,
            imageHash: Date.now(),
        });

        getOneLineList(1, 8);
    }, [isNeedUpdate]);

    // 댓글 리스트
    const getOneLineList = (pageNum, pageSize) => {
        // dispatch(
        //     set_spinner({
        //         isLoading: true,
        //     })
        // );
        // setSpinnerAtom(true);

        // /v1/boards
        // POST
        const url = apiPath.api_admin_boards;
        const data = {
            page_num: pageNum,
            page_size: pageSize,
            board_type: "400",
        };

        // 파라미터
        const restParams = {
            method: "post",
            url: url,
            data: data,
            err: err,
            callback: (res) => responsLogic(res),
        };
        CommonRest(restParams);

        // 완료 로직
        const responsLogic = (res) => {
            let result_code = res.headers.result_code;

            // 성공
            if (
                result_code === successCode.success ||
                result_code === successCode.noData
            ) {
                let result_info = res.data.result_info;

                setBoardList(result_info);

                setIsLoading(false);

                // setSpinnerAtom(false);

                // dispatch(
                //     set_spinner({
                //         isLoading: false,
                //     })
                // );
            } else {
                // 에러
                CommonConsole("log", res);

                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );
            }
        };
    };

    // 캡차 새로고침
    const refreshCaptcha = () => {
        setImg({
            imageSrc: imgUrl,
            imageHash: Date.now(),
        });
    };

    // 응원하기
    const regOneLineBoard = () => {
        if (validation()) {
            // dispatch(
            //     set_spinner({
            //         isLoading: true,
            //     })
            // );

            setIsLoading(true);

            const formData = new FormData();
            const model = boardModel;
            let data = {};

            data = {
                ...model,
                showYn: "Y",
                boardType: "400",
                channelType: "000",
                categoryType: "900",
                subject: oneLineRefs.inputContent.current.value,
                subTitle: oneLineRefs.inputContent.current.value,
                alimYn: "N",
                securityCode: oneLineRefs.inputCaptcha.current.value,
                userNameFirstKo: oneLineRefs.inputUserFirstName.current.value,
                userNameLastKo: oneLineRefs.inputUserLastName.current.value,
                mobile1: oneLineRefs.inputMobile1.current.value,
                mobile2: oneLineRefs.inputMobile2.current.value,
                mobile3: oneLineRefs.inputMobile3.current.value,
            };

            // 기본 formData append
            for (const key in data) {
                formData.append(key, data[key]);
            }

            const restParams = {
                method: "post_multi",
                url: apiPath.api_admin_board, // /v1/_board
                data: formData,
                err: err,
                callback: (res) => responsLogic(res),
            };

            CommonRest(restParams);

            const responsLogic = (res) => {
                let result_code = res.headers.result_code;
                if (result_code === successCode.success) {
                    // dispatch(
                    //     set_spinner({
                    //         isLoading: false,
                    //     })
                    // );

                    setIsLoading(false);

                    CommonNotify({
                        type: "alert",
                        hook: alert,
                        message: "한줄 응원이 완료 되었습니다",
                        callback: () => requestBoards(),
                    });
                } else {
                    // dispatch(
                    //     set_spinner({
                    //         isLoading: false,
                    //     })
                    // );

                    CommonNotify({
                        type: "alert",
                        hook: alert,
                        message: "잠시 후 다시 시도해주세요",
                    });
                }
            };
        }
    };

    // 수정, 등록 완료 로직
    const requestBoards = () => {
        // 리스트 새로고침
        setIsNeedUpdate(!isNeedUpdate);
    };

    // 검증
    const validation = () => {
        // --------------------내용----------------------
        if (!oneLineRefs.inputContent.current.value) {
            oneLineRefs.inputContent.current.blur();
            regBoardAlert({
                msg: "내용을을 입력해주세요",
                ref: oneLineRefs.inputContent,
            });
            return false;
        }

        // --------------------이름----------------------
        if (
            !oneLineRefs.inputUserFirstName.current.value ||
            !oneLineRefs.inputUserLastName.current.value
        ) {
            oneLineRefs.inputUserFirstName.current.blur();
            oneLineRefs.inputUserLastName.current.blur();
            regBoardAlert({
                msg: "이름을 입력해주세요",
                ref: oneLineRefs.inputUserFirstName,
            });
            return false;
        }

        // --------------------전화번호----------------------
        if (
            !oneLineRefs.inputMobile1.current.value ||
            !oneLineRefs.inputMobile2.current.value ||
            !oneLineRefs.inputMobile3.current.value
        ) {
            oneLineRefs.inputMobile1.current.blur();
            oneLineRefs.inputMobile2.current.blur();
            oneLineRefs.inputMobile3.current.blur();
            regBoardAlert({
                msg: "전화번호를 입력해주세요",
                ref: oneLineRefs.inputMobile1,
            });
            return false;
        }

        // --------------------전화번호----------------------
        if (!oneLineRefs.inputCaptcha.current.value) {
            oneLineRefs.inputCaptcha.current.blur();
            regBoardAlert({
                msg: "자동입력방지 코드를 입력해주세요",
                ref: oneLineRefs.inputCaptcha,
            });
            return false;
        }

        return true;
    };

    // 알럿
    const regBoardAlert = (params) => {
        CommonNotify({
            type: "alert",
            hook: alert,
            message: params.msg,
            callback: () => focusFunc(params.ref),
        });
    };

    // 포커스
    const focusFunc = (ref) => {
        ref.current.focus();
    };

    // 글자수 감지 제한
    const contentFix = (e) => {
        let val = e.target.value;

        if (val.charAt(0) === " ") {
            oneLineRefs.inputContent.current.value = val.slice(0, -1);
        }

        let test = oneLinePattern.test(val);
        if (!test) {
            oneLineRefs.inputContent.current.value = val.slice(0, -1);
        }
    };

    return (
        <>
            <div className="section04">
                <div
                    className="bar01"
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-easing="linear"
                >
                    <img src="img/main/bar_green.png" alt="" />
                </div>
                <div className="talk">
                    <div className="title">
                        <h3 data-aos="fade-up">
                            <span>2023 잡아라 페스티벌</span> 응원글 한줄로
                            치킨을 잡아라!!
                        </h3>
                        <p>
                            2023 잡아라 페스티벌에 참석하시는 모든 청년들을 위해
                            따뜻한 응원의 한마디를 남겨주세요!
                        </p>
                    </div>
                    <div className="talkbox">
                        <ul>
                            {isLoading ? (
                                <>
                                    <li
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <p
                                            style={{
                                                width: "100%",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            <Skeleton height={30} />
                                        </p>
                                    </li>
                                    <li
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <p
                                            style={{
                                                width: "100%",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            <Skeleton height={30} />
                                        </p>
                                    </li>
                                    <li
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <p
                                            style={{
                                                width: "100%",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            <Skeleton height={30} />
                                        </p>
                                    </li>
                                    <li
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <p
                                            style={{
                                                width: "100%",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            <Skeleton height={30} />
                                        </p>
                                    </li>
                                </>
                            ) : boardList.length !== 0 ? (
                                boardList.map((item, idx) => (
                                    <li key={`main_oneline_${idx}`}>
                                        <span>{item.user_name_ko}</span>
                                        <p>{item.subject}</p>
                                    </li>
                                ))
                            ) : (
                                <li>
                                    <p>아직 응원 댓글이 없어요 ;(</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="talkinput">
                        <div className="input_box">
                            <div className="talk_name">
                                <p>이름</p>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="성"
                                    ref={oneLineRefs.inputUserFirstName}
                                />
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="이름"
                                    ref={oneLineRefs.inputUserLastName}
                                />
                            </div>
                            <div className="tel_input">
                                <p>전화번호</p>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="010"
                                    ref={oneLineRefs.inputMobile1}
                                />{" "}
                                -{" "}
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="0000"
                                    ref={oneLineRefs.inputMobile2}
                                />{" "}
                                -{" "}
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="0000"
                                    ref={oneLineRefs.inputMobile3}
                                />
                            </div>
                            <div className="talk_cap">
                                <p>자동입력방지</p>
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
                                            >
                                                <RefreshIcon />
                                                새로고침
                                            </Link>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="input_s"
                                        ref={oneLineRefs.inputCaptcha}
                                    />
                                </div>
                            </div>
                            <Link
                                className="input_btn"
                                onClick={(e) => {
                                    regOneLineBoard();
                                    e.preventDefault();
                                }}
                            >
                                응원하기
                            </Link>
                        </div>
                        <div>
                            <textarea
                                name=""
                                id=""
                                className="talk_txt"
                                placeholder="글자수는 60자까지 입력 가능합니다."
                                ref={oneLineRefs.inputContent}
                                onChange={(e) => {
                                    contentFix(e);
                                }}
                            ></textarea>
                        </div>
                        <br />
                        <p>
                            ※ 당첨자 발표는 9월 20일 홈페이지에서 확인
                            가능합니다.
                        </p>
                    </div>
                </div>
            </div>
            {/* {spinnerOption.isLoading && <CommonSpinner />} */}
            {/* {isLoading && <CommonSpinner />} */}
        </>
    );
};

export default MainContentsTalk;
