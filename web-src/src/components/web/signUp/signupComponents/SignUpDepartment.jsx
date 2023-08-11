import { forwardRef } from "react";

const SignUpDepartment = forwardRef((props, ref) => {
    const { inputDepartment } = ref;
    return (
        <>
            <tr>
                <th>학과</th>
                <td>
                    <input
                        type="text"
                        className="input_l"
                        ref={inputDepartment}
                    />
                </td>
            </tr>
        </>
    );
});

export default SignUpDepartment;
