import { forwardRef } from "react";

const SignUpSpecialCheck = forwardRef((props, ref) => {
    return (
        <>
            <div style={{ marginTop: 20 }}>
                <input type="checkbox" /> NCS 모의고사 (10:00~15:00 체육관 내
                강의실)
            </div>
            <div style={{ marginTop: 20 }}>
                <input type="checkbox" /> 현직자 토크콘서트 (15:00~17:00 /
                체육관 내)
            </div>
        </>
    );
});

export default SignUpSpecialCheck;
