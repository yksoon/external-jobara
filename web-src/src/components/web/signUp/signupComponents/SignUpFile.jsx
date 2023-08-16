import { forwardRef } from "react";

const SignUpFile = forwardRef((props, ref) => {
    const { inputAttachmentFile } = ref;

    const attachFile = (e) => {
        // console.log(e.target.value);
        console.log(e.target.files);
    };

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
                </td>
            </tr>
        </>
    );
});

export default SignUpFile;
