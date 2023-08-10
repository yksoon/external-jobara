import { mobile1Pattern, mobile2Pattern } from "common/js/Pattern";
import { forwardRef } from "react";

const SignUpMobile = forwardRef((props, ref) => {
    const { inputMobile1, inputMobile2, inputMobile3 } = ref;

    const mobileHandler = (e) => {
        let id = e.target.id;
        let val = e.target.value;

        switch (id) {
            case "mobile1":
                let test1 = mobile1Pattern.test(val);
                if (!test1) {
                    val = val.slice(0, -1);
                }
                // 다음칸으로 이동
                if (val.length >= 3) {
                    inputMobile2.current.focus();
                }
                break;

            case "mobile2":
                let test2 = mobile2Pattern.test(val);
                if (!test2) {
                    val = val.slice(0, -1);
                }
                // 다음칸으로 이동
                if (val.length >= 4) {
                    inputMobile3.current.focus();
                }
                break;

            case "mobile3":
                let test3 = mobile2Pattern.test(val);
                if (!test3) {
                    val = val.slice(0, -1);
                }
                break;

            default:
                break;
        }
    };
    return (
        <>
            <div style={{ marginTop: 20 }}>
                <h4>휴대전화</h4>
            </div>
            <div>
                <input
                    type="tel"
                    id="mobile1"
                    ref={inputMobile1}
                    onChange={(e) => mobileHandler(e)}
                />
                <input
                    type="tel"
                    id="mobile2"
                    ref={inputMobile2}
                    onChange={(e) => mobileHandler(e)}
                />
                <input
                    type="tel"
                    id="mobile3"
                    ref={inputMobile3}
                    onChange={(e) => mobileHandler(e)}
                />
            </div>
        </>
    );
});

export default SignUpMobile;
