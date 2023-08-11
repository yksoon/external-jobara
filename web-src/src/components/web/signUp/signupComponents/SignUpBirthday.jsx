import { forwardRef } from "react";

const SignUpBirthday = forwardRef((props, ref) => {
    const { inputBirthYear, inputBirthMonth, inputBirthDay } = ref;

    return (
        <>
            {/* <div style={{ marginTop: 20 }}>
                <h4>생년월일</h4>
            </div>
            <div>
                <input type="text" placeholder="년" ref={inputBirthYear} />
                <input type="text" placeholder="월" ref={inputBirthMonth} />
                <input type="text" placeholder="일" ref={inputBirthDay} />
            </div> */}
            <tr>
                <th>생년월일</th>
                <td>
                    <input type="date" />
                </td>
            </tr>
        </>
    );
});

export default SignUpBirthday;
