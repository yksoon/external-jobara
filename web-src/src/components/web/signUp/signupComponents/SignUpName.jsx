import { forwardRef } from "react";

const SignUpName = forwardRef((props, ref) => {
    const { inputFirstName, inputLastName } = ref;

    return (
        <>
            <div style={{ marginTop: 20 }}>
                <h4>성명</h4>
            </div>
            <div>
                <input type="text" placeholder="성" ref={inputFirstName} />
                <input type="text" placeholder="이름" ref={inputLastName} />
            </div>
        </>
    );
});

export default SignUpName;
