import { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiPath } from "webPath";

const SignUpModFile = forwardRef((props, ref) => {
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

    const attachFile = (e) => {
        // console.log(e.target.value);
        console.log(e.target.files);
    };

    const fileBaseUrl = apiPath.api_file;
    return (
        <>
            <tr>
                <th>이력서업로드</th>
                <td className="regi_file">
                    <div>
                        여러 파일 선택이 가능합니다. 여러 파일 선택 시 ctrl 누른
                        후 선택하시면 됩니다.
                    </div>
                    <input
                        type="file"
                        ref={inputAttachmentFile}
                        multiple
                        onChange={(e) => attachFile(e)}
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
                                // <span>
                                //     <img
                                //         key={`file_${idx}`}
                                //         src={`${fileBaseUrl}${item.file_path_enc}`}
                                //         alt=""
                                //     />
                                //     {item.file_name}
                                // </span>
                            ))}
                    </div>
                </td>
            </tr>
        </>
    );
});

export default SignUpModFile;
