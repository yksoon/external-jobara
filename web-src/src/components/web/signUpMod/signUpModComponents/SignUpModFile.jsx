import { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUpModFile = forwardRef((props, ref) => {
    const { inputAttachmentFile } = ref;
    const [fileList, setFileList] = useState([]);

    const userInfo = props.userInfo;

    useEffect(() => {
        getFileList();
    }, []);

    const getFileList = () => {
        const files = userInfo.file_info;

        setFileList(files);
    };

    const attachFile = (e) => {
        // console.log(e.target.value);
        console.log(e.target.files);
    };

    const fileBaseUrl = "http://jejujobara.com:60000/v1/_file/000/";
    return (
        <>
            <tr>
                <th>이력서업로드</th>
                <td>
                    <div style={{ marginBottom: 5 }}>
                        {fileList.length !== 0 &&
                            fileList.map((item, idx) => (
                                <Link
                                    to={`${fileBaseUrl}${item.file_path_enc}`}
                                    key={`file_${idx}`}
                                >
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
                    <input
                        type="file"
                        ref={inputAttachmentFile}
                        multiple
                        onChange={(e) => attachFile(e)}
                    />
                    <div>
                        여러 파일 선택이 가능합니다. 여러 파일 선택 시 ctrl 누른
                        후 선택하시면 됩니다.
                    </div>
                </td>
            </tr>
        </>
    );
});

export default SignUpModFile;
