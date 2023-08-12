import { forwardRef } from "react";

const SignUpModBirthday = forwardRef((props, ref) => {
    const { inputBirth } = ref;

    return (
        <>
            <tr>
                <th>생년월일</th>
                <td>
                    <input type="date" ref={inputBirth} />
                </td>
            </tr>
        </>
    );
});

export default SignUpModBirthday;
