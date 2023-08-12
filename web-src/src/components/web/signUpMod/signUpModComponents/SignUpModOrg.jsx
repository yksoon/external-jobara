import { forwardRef } from "react";

const SignUpModOrg = forwardRef((props, ref) => {
    const { inputOrg } = ref;
    return (
        <>
            <tr>
                <th>학교</th>
                <td>
                    <input type="text" className="input_l" ref={inputOrg} />
                </td>
            </tr>
        </>
    );
});

export default SignUpModOrg;
