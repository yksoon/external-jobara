import { CommonNotify } from "common/js/Common";
import useAlert from "hook/useAlert";
import { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiPath } from "webPath";

const SignUpModFile = forwardRef((props, ref) => {
    const { alert } = useAlert();

    const { inputAttachmentFile } = ref;
    const [fileList, setFileList] = useState([]);

    const userInfo = props.userInfo;

    useEffect(() => {
        getFileList();
    }, []);

    const getFileList = () => {
        const files = userInfo ? userInfo.file_info : [];

        setFileList(files);
    };

    // 파일 첨부시
    const attachFile = (input) => {
        const maxFileCnt = 5; // 첨부파일 최대 개수

        if (input.files.length > maxFileCnt) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "이미지는 5장까지 업로드 가능합니다.",
            });

            input.value = "";

            return false;
        }
    };

    const fileBaseUrl = apiPath.api_file;
    return (
        <>
            <tr>
                <th>
                    이력서, 자기소개서
                    <br />
                    업로드
                </th>
                <td className="regi_file">
                    <div>
                        여러 파일 선택이 가능합니다. 여러 파일 선택 시 ctrl 누른
                        후 선택하시면 됩니다.
                    </div>
                    <input
                        type="file"
                        ref={inputAttachmentFile}
                        multiple
                        onChange={(e) => attachFile(e.target)}
                    />
                    <div>
                        {fileList.length !== 0 &&
                            fileList.map((item, idx) => (
                                <Link
                                    to={`${fileBaseUrl}${item.file_path_enc}`}
                                    key={`file_${idx}`}
                                >
                                    <img src="img/common/file.svg" alt="" />
                                    {item.file_name}{" "}
                                </Link>
                            ))}
                    </div>
                </td>
            </tr>
        </>
    );
});

export default SignUpModFile;
