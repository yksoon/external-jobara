import React, { forwardRef } from "react";

const LicenseComponent = forwardRef((props, ref) => {
    const { md_licenses_number } = ref;
    return (
        <>
            <h5>면허번호</h5>
            <input
                type="text"
                className="input w370"
                ref={md_licenses_number}
            />
        </>
    );
});

export default LicenseComponent;
