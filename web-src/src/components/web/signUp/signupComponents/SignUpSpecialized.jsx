import { forwardRef } from "react";

const SignUpSpecialized = forwardRef((props, ref) => {
    const { inputSpecialized } = ref;
    return (
        <>
            <tr>
                <th>희망직종</th>
                <td>
                    <input
                        type="text"
                        className="input_l"
                        ref={inputSpecialized}
                    />
                </td>
            </tr>
        </>
    );
});

export default SignUpSpecialized;
