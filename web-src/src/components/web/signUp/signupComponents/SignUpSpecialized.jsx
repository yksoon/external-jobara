import { forwardRef } from "react";

const SignUpSpecialized = forwardRef((props, ref) => {
    const { inputSpecialized } = ref;
    return (
        <>
            <div style={{ marginTop: 20 }}>
                <h4>희망직종</h4>
            </div>
            <div>
                <input type="text" ref={inputSpecialized} />
            </div>
        </>
    );
});

export default SignUpSpecialized;
