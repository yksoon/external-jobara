import { forwardRef } from "react";

const SignUpPW = forwardRef((props, ref) => {
    const { inputPW, inputPW2 } = ref;

    return (
        <>
            <div style={{ marginTop: 20 }}>
                <h4>비밀번호</h4>
            </div>
            <div>
                <input type="password" placeholder="비밀번호" ref={inputPW} />
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    ref={inputPW2}
                />
            </div>
        </>
    );
});

export default SignUpPW;
