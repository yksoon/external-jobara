import { forwardRef } from "react";

const SignUpFile = forwardRef((props, ref) => {
    const { inputAttachmentFile } = ref;

    const attachFile = (e) => {
        // console.log(e.target.value);
        console.log(e.target.files);
    };

    return (
        <>
            <div style={{ marginTop: 20 }}>
                <input
                    type="file"
                    ref={inputAttachmentFile}
                    multiple
                    onChange={(e) => attachFile(e)}
                />
            </div>
        </>
    );
});

export default SignUpFile;
