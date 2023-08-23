import useAlert from "hook/useAlert";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { apiPath } from "webPath";
import RefreshIcon from "@mui/icons-material/Refresh";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import $ from "jquery";
import "quill-paste-smart";
import { CommonNotify } from "common/js/Common";

const RegNoticeModal = (props) => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };

    const [boardData, setBoardData] = useState("");
    const [files, setFiles] = useState([]);
    const [img, setImg] = useState({});
    const imgUrl = apiPath.api_captcha_img;

    const inputTitle = useRef(null);
    const inputCaptcha = useRef(null);
    const quillRef = useRef();

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

    // 등록
    const regBoard = () => {
        console.log(files);
        console.log(boardData);

        // getFiles();
    };

    /*
    // 에디터 내부 이미지 파일로 변환
    const getFiles = () => {
        const parser = new DOMParser();

        const doc = parser.parseFromString(boardData, "text/html");

        const imgArr = doc.getElementsByTagName("img");

        let fileArr = [];

        const length = imgArr.length;
        for (let i = 0; i < length; i++) {
            let file;
            file = dataURLtoFile(imgArr[i].src, `notice_img_${i}`);

            fileArr.push(file);
        }

        setFiles(fileArr);
    };

    // base64 => file 변환
    const dataURLtoFile = (dataurl, fileName) => {
        var arr = dataurl.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], fileName, { type: mime });
    };
    */

    /*
    const imageHandler = () => {
        // 1. 이미지를 저장할 input type=file DOM을 만든다.
        const input = document.createElement("input");

        // 속성 써주기
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
        // input이 클릭되면 파일 선택창이 나타난다.

        // input에 변화가 생긴다면 = 이미지를 선택
        input.addEventListener("change", async () => {
            const file = input.files[0];
            // multer에 맞는 형식으로 데이터 만들어준다.
            let fileArr = files;
            fileArr.push(file);
            setFiles(fileArr);

            const editor = quillRef.current.getEditor();

            const range = editor.getSelection(true);
            // 가져온 위치에 이미지를 삽입한다

            let IMG_URL;
            let reader = new FileReader(file);
            reader.onload = (e) => {
                // IMG_URL = reader.result; // base64
                IMG_URL = e.target.result;

                console.log(e);
            };

            editor.insertEmbed(range.index, "image", IMG_URL);
        });
    };
*/
    const imageHandler = () => {
        const input = document.createElement("input");

        input.setAttribute("type", "file");
        input.setAttribute("multiple", "true");
        input.setAttribute("accept", "image/*");
        input.click();

        input.addEventListener("change", async () => {
            const inputFiles = input.files;
            const length = inputFiles.length;

            const editor = quillRef.current.getEditor();
            const range = editor.getSelection();

            if (isFileImage(inputFiles)) {
                for (let i = 0; i < length; i++) {
                    let file = inputFiles[i];

                    let IMG_URL;
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        IMG_URL = reader.result;

                        editor?.clipboard.dangerouslyPasteHTML(
                            range.index,
                            `<img src="${IMG_URL}" alt="" />`
                        );
                    };
                }
            } else {
                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: "이미지만 업로드 가능합니다.",
                });

                input.value = "";

                return false;
            }
        });
    };

    // 이미지 파일인지 확인
    function isFileImage(file) {
        if (file) {
            for (let i = 0; i < file.length; i++) {
                return file[i] && file[i]["type"].split("/")[0] === "image";
            }
        }
    }

    // 에디터 설정
    // Quill 에디터에서 사용하고싶은 모듈들을 설정한다.
    // useMemo를 사용해 modules를 만들지 않는다면 매 렌더링 마다 modules가 다시 생성된다.
    // 그렇게 되면 addrange() the given range isn't in document 에러가 발생한다.
    // -> 에디터 내에 글이 쓰여지는 위치를 찾지 못하는듯
    const quillModules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                    ],
                    // ["link"],
                    ["image"],
                    [{ color: [] }, { background: [] }],
                    ["clean"],
                ],
                handlers: {
                    // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
                    image: imageHandler,
                    // link: linkHandler,
                },
            },
            clipboard: {
                allowed: {
                    tags: [
                        "a",
                        "b",
                        "strong",
                        "u",
                        "s",
                        "i",
                        "p",
                        "br",
                        "ul",
                        "ol",
                        "li",
                        "span",
                    ],
                    attributes: ["href", "rel", "target", "class"],
                },
                keepSelection: true,
                substituteBlockElements: true,
                magicPasteLinks: true,
                hooks: {
                    uponSanitizeElement(node, data, config) {
                        console.log(node);
                    },
                },
            },
        };
    }, []);

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "image",
        "color",
        "background",
        "link",
    ];

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
                            <th>제목</th>
                            <td>
                                <input
                                    type="text"
                                    className="input wp100"
                                    ref={inputTitle}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>파일첨부</th>
                            <td>
                                <input type="file" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="editor">
                                    <ReactQuill
                                        ref={quillRef}
                                        theme="snow"
                                        value={boardData}
                                        onChange={(e) => {
                                            setBoardData(e);
                                        }}
                                        modules={quillModules}
                                        formats={formats}
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

export default RegNoticeModal;
