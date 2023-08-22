import { forwardRef } from "react";

const SignUpModMemo = forwardRef((props, ref) => {
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

export default SignUpModMemo;
