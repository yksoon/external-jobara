import { Link } from "react-router-dom";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useEffect, useRef, useState } from "react";
import { apiPath } from "webPath";
import RefreshIcon from "@mui/icons-material/Refresh";
import { CommonNotify, CommonRest } from "common/js/Common";
import { useDispatch } from "react-redux";
import useAlert from "hook/useAlert";
import { set_spinner } from "redux/actions/commonAction";
import { boardModel } from "models/board/board";
import { successCode } from "resultCode";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const RegOneLineBoardModal = (props) => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };

    const [img, setImg] = useState({});
    const imgUrl = apiPath.api_captcha_img;
    // const [boardData, setBoardData] = useState("");

    const inputTitle = useRef(null);
    const inputCaptcha = useRef(null);

    const modalOption = {
        isOpen: props.isOpen,
        title: props.title,
        content: props.content,
        handleModalClose: props.handleModalClose,
    };

    const handleNeedUpdate = props.handleNeedUpdate;

    useEffect(() => {
        // 캡차이미지
        setImg({
            imageSrc: imgUrl,
            imageHash: Date.now(),
        });
    }, []);

    // 캡차이미지 새로고침
    const refreshCaptcha = () => {
        setImg({
            imageSrc: imgUrl,
            imageHash: Date.now(),
        });
    };

    const regBoard = () => {
        // console.log(boardData);

        if (checkValidation()) {
            dispatch(
                set_spinner({
                    isLoading: true,
                })
            );

            const formData = new FormData();
            const model = boardModel;

            let data = {};

            let fileArr = [];

            data = {
                ...model,
                boardType: "400",
                mainSubject: inputTitle.current.value,
                subTitle: "",
                mainContent: "",
                showYn: "Y",
            };

            // 기본 formData append
            for (const key in data) {
                formData.append(key, data[key]);
            }

            // 파일 formData append
            // fileArr = Array.from(inputAttachmentFile.current.files);
            // let len = fileArr.length;
            // for (let i = 0; i < len; i++) {
            //     formData.append("attachmentFile", fileArr[i]);
            // }

            // 등록
            // /v1/board
            // POST mulit
            const url = apiPath.api_admin_board;

            const restParams = {
                method: "post_multi",
                url: url, // /v1/_user
                data: formData,
                err: err,
                admin: "Y",
                callback: (res) => responsLogic(res),
            };

            CommonRest(restParams);

            const responsLogic = (res) => {
                let result_code = res.headers.result_code;
                if (result_code === successCode.success) {
                    dispatch(
                        set_spinner({
                            isLoading: false,
                        })
                    );

                    CommonNotify({
                        type: "alert",
                        hook: alert,
                        message: "게시글 등록이 완료 되었습니다",
                        callback: () => requestBoardList(),
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

            // 수정, 등록 완료 로직
            const requestBoardList = () => {
                // 리스트 새로고침
                handleNeedUpdate();

                // 모달 닫기
                modalOption.handleModalClose();
            };
        }
    };

    // 검증
    const checkValidation = () => {
        // 내용
        if (!inputTitle.current.value) {
            inputTitle.current.blur();
            boardAlert({
                msg: "내용을 입력해주세요",
                ref: inputTitle,
            });
            return false;
        }

        // 캡차
        if (!inputCaptcha.current.value) {
            inputCaptcha.current.blur();
            boardAlert({
                msg: "자동입력방지 코드를 입력해주세요",
                ref: inputCaptcha,
            });
            return false;
        }

        return true;
    };

    // 알럿
    const boardAlert = (params) => {
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

    /*
    // CK에디터 설정
    const editorConfiguration = {
        placeholder: "내용을 입력하세요.",
        extraPlugins: [uploadPlugin],
    };

    function uploadPlugin(editor) {
        // (3)
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return customUploadAdapter(loader);
        };
    }

    const data = new FormData();

    const customUploadAdapter = (loader) => {
        // (2)
        return {
            upload() {
                return new Promise((resolve, reject) => {
                    loader.file.then((file) => {
                        // data.append("name", file.name);
                        data.append("attachmentFile", file);

                        console.log(file);
                    });
                });
            },
        };
    };
    */

    return (
        <>
            <div className="admin">
                <table className="table_bb">
                    <colgroup>
                        <col width="30%" />
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>내용</th>
                            <td>
                                <input
                                    type="text"
                                    className="input wp100"
                                    ref={inputTitle}
                                />
                            </td>
                        </tr>
                        {/* <tr>
                        <th>파일첨부</th>
                        <td>
                            <input type="file" />
                        </td>
                    </tr> */}
                        {/* <tr>
                        <td colSpan="2">
                            <div className="editor">
                                <CKEditor
                                    editor={ClassicEditor}
                                    config={editorConfiguration}
                                    data=""
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log(
                                            "Editor is ready to use!",
                                            editor
                                        );
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();

                                        setBoardData(data);
                                        console.log({ event, editor, data });
                                    }}
                                    // onBlur={(event, editor) => {
                                    //     console.log("Blur.", editor);
                                    // }}
                                    // onFocus={(event, editor) => {
                                    //     console.log("Focus.", editor);
                                    // }}
                                />
                            </div>
                        </td>
                    </tr> */}
                        <tr>
                            <th>자동등록방지</th>
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
                    </tbody>
                </table>
                <div className="btn_box">
                    <Link href="" className="btn btn01" onClick={regBoard}>
                        등록
                    </Link>
                    <Link
                        href=""
                        className="btn btn02"
                        onClick={modalOption.handleModalClose}
                    >
                        취소
                    </Link>
                </div>
            </div>
        </>
    );
};

export default RegOneLineBoardModal;
