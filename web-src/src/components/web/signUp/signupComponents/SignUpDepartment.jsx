import { forwardRef } from "react";

const SignUpDepartment = forwardRef((props, ref) => {
    const { inputDepartment } = ref;
    return (
        <>
            <div style={{ marginTop: 20 }}>
                <h4>학과</h4>
            </div>
            <div>
                <input type="text" ref={inputDepartment} />
            </div>
        </>
    );
});

export default SignUpDepartment;
