import { forwardRef } from "react";

const SignUpModName = forwardRef((props, ref) => {
    const { inputFirstName, inputLastName } = ref;

    return (
        <>
            <tr>
                <th>이름</th>
                <td>
                    <input
                        type="text"
                        className="input_s"
                        placeholder="성"
                        ref={inputFirstName}
                    />
                    <input
                        type="text"
                        className="input_s"
                        placeholder="이름"
                        ref={inputLastName}
                    />
                </td>
            </tr>
        </>
    );
});

export default SignUpModName;
