import { CommonRest } from "common/js/Common";
import { idPattern } from "common/js/Pattern";
import useAlert from "hook/useAlert";
import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { apiPath } from "webPath";

const SignUpModID = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };
    const { inputID } = ref;

    return (
        <>
            <tr>
                <th>ID</th>
                <td>
                    <input
                        type="text"
                        className="input_s hold"
                        ref={inputID}
                        readOnly
                    />
                </td>
            </tr>
        </>
    );
});

export default SignUpModID;
