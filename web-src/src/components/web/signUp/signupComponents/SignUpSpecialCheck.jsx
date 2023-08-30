import { CommonErrModule, CommonRest } from "common/js/Common";
import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { isSpinnerAtom } from "recoils/atoms";
import { apiPath, routerPath } from "webPath";

const SignUpSpecialCheck = forwardRef((props, ref) => {
    // const dispatch = useDispatch();
    // const { alert } = useAlert();
    // const err = { dispatch, alert };
    const err = CommonErrModule();
    const setIsSpinner = useSetRecoilState(isSpinnerAtom);

    const [programInfo, setProgramInfo] = useState([]);

    const handleSingleCheck = props.handleSingleCheck;

    useEffect(() => {
        getInfo();
    }, []);

    const responsLogic = (res) => {
        let resultInfo = res.data.result_info;

        setProgramInfo(resultInfo);

        // dispatch(
        //     set_spinner({
        //         isLoading: false,
        //     })
        // );
        setIsSpinner(false);
    };

    const getInfo = () => {
        const restParams = {
            method: "get",
            url: apiPath.api_get_additional,
            data: {},
            err: err,
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);
    };

    return (
        <>
            <tr>
                <th>참여프로그램</th>
                <td>
                    {programInfo &&
                        programInfo.map((item, idx) => (
                            <div key={`programsLabel_${idx}`}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={item.additional_idx}
                                        onChange={(e) =>
                                            handleSingleCheck(
                                                e.target.checked,
                                                item.additional_idx
                                            )
                                        }
                                    />{" "}
                                    <b>{item.additional_name_ko}</b> (
                                    {item.additional_memo})
                                </label>
                            </div>
                        ))}
                </td>
            </tr>
        </>
    );
});

export default SignUpSpecialCheck;
