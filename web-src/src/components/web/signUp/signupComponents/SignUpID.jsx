import { CommonRest } from "common/js/Common";
import { idPattern } from "common/js/Pattern";
import useAlert from "hook/useAlert";
import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { apiPath } from "webPath";

const SignUpID = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };
    const { inputID } = ref;

    // 아이디 중복 체크
    const idCheck = (e) => {
        const idVal = e.currentTarget.value;

        // 패턴체크
        let idChk = idPattern.test(idVal);

        if (idChk) {
            let data = { user_id: idVal };

            const testFunc = (res) => {
                console.log(res);
            };

            const restParams = {
                method: "post",
                url: apiPath.api_user_check,
                data: data,
                err: err,
                callback: (res) => testFunc(res),
            };

            CommonRest(restParams);
        }
    };

    return (
        <>
            <tr>
                <th>ID</th>
                <td>
                    <input
                        type="text"
                        className="input_s"
                        autoFocus
                        ref={inputID}
                        onChange={(e) => {
                            idCheck(e);
                        }}
                    />
                    <p className="pointtxt">※ 아이디는 신청확인 및 수정시 사용되며, 희망하는 아이디로 기입해주세요.</p>
                </td>
            </tr>
        </>
    );
});

export default SignUpID;
