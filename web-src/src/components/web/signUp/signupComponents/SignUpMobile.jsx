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
                    inputMobile1.current.value = val.slice(0, -1);
                }
                // 다음칸으로 이동
                if (val.length >= 3) {
                    inputMobile2.current.focus();
                }
                break;

            case "mobile2":
                let test2 = mobile2Pattern.test(val);
                if (!test2) {
                    inputMobile2.current.value = val.slice(0, -1);
                }
                // 다음칸으로 이동
                if (val.length >= 4) {
                    inputMobile3.current.focus();
                }
                break;

            case "mobile3":
                let test3 = mobile2Pattern.test(val);
                if (!test3) {
                    inputMobile3.current.value = val.slice(0, -1);
                }
                break;

            default:
                break;
        }
    };
    return (
        <>
            <tr>
                <th>연락처</th>
                <td>
                    <input
                        type="text"
                        id="mobile1"
                        className="input_m"
                        ref={inputMobile1}
                        onChange={(e) => mobileHandler(e)}
                    />{" "}
                    -{" "}
                    <input
                        type="text"
                        id="mobile2"
                        className="input_m"
                        ref={inputMobile2}
                        onChange={(e) => mobileHandler(e)}
                    />{" "}
                    -{" "}
                    <input
                        type="text"
                        id="mobile3"
                        className="input_m"
                        ref={inputMobile3}
                        onChange={(e) => mobileHandler(e)}
                    />
                </td>
            </tr>
        </>
    );
});

export default SignUpMobile;
