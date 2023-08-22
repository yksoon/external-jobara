import { forwardRef } from "react";

const SignUpMemo = forwardRef((props, ref) => {
    const { inputMemo } = ref;
    return (
        <>
            <tr>
                <th>학번</th>
                <td>
                    <input type="text" className="input_l" ref={inputMemo} />
                </td>
            </tr>
        </>
    );
});

export default SignUpMemo;
