import { CommonRest } from "common/js/Common";
import useAlert from "hook/useAlert";
import { forwardRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { set_spinner } from "redux/actions/commonAction";
import { apiPath, routerPath } from "webPath";

const SignUpSpecialCheck = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };
    const [programInfo, setProgramInfo] = useState([]);
    const navigate = useNavigate();

    const handleSingleCheck = props.handleSingleCheck;

    useEffect(() => {
        getInfo();
    }, []);

    const responsLogic = (res) => {
        console.log(res);
        let resultInfo = res.data.result_info;

        setProgramInfo(resultInfo);

        dispatch(
            set_spinner({
                isLoading: false,
            })
        );
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
