import { forwardRef } from "react";

const SignUpOrg = forwardRef((props, ref) => {
    const { inputOrg } = ref;
    return (
        <>
            <div style={{ marginTop: 20 }}>
                <h4>학교</h4>
            </div>
            <div>
                <input type="text" ref={inputOrg} />
            </div>
        </>
    );
});

export default SignUpOrg;
