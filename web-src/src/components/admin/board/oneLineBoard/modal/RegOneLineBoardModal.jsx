import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useEffect, useRef, useState } from "react";
import { apiPath } from "webPath";
import RefreshIcon from "@mui/icons-material/Refresh";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const RegOneLineBoardModal = () => {
    const [img, setImg] = useState({});
    const imgUrl = apiPath.api_captcha_img;
    const [boardData, setBoardData] = useState("");

    const inputTitle = useRef(null);
    const inputCaptcha = useRef(null);

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
        console.log(boardData);
    };

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

    return (
        <>
            <table className="table_bb">
                <colgroup>
                    <col width="30%" />
                    <col width="*" />
                </colgroup>
                <tbody>
                    <tr>
                        <th>제목</th>
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
                    <tr>
                        <td colSpan="2">
                            {/* <textarea name="" id="" class="input"></textarea> */}
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
                    </tr>
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
                <Link href="" className="btn btn02">
                    취소
                </Link>
            </div>
        </>
    );
};

export default RegOneLineBoardModal;
