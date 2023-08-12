import { forwardRef } from "react";

const SignUpModSpecialized = forwardRef((props, ref) => {
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

export default SignUpModSpecialized;
