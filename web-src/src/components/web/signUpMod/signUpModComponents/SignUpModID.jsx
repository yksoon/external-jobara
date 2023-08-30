import { forwardRef } from "react";

const SignUpModID = forwardRef((props, ref) => {
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
