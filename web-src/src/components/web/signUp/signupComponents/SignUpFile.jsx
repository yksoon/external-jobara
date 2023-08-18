import { CommonNotify } from "common/js/Common";
import useAlert from "hook/useAlert";
import { forwardRef } from "react";
import { useDispatch } from "react-redux";

const SignUpFile = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };

    const { inputAttachmentFile } = ref;

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
                        onChange={(e) => attachFile(e.target)}
                    />
                </td>
            </tr>
        </>
    );
});

export default SignUpFile;
