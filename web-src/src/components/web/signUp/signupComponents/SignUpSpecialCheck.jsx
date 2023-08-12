import { CommonRest } from "common/js/Common";
import useAlert from "hook/useAlert";
import { forwardRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiPath } from "webPath";

const SignUpSpecialCheck = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };
    const [programInfo, setProgramInfo] = useState([]);

    const handleSingleCheck = props.handleSingleCheck;

    useEffect(() => {
        getInfo();
    }, []);

    const responsLogic = (res) => {
        console.log(res);
        let resultInfo = res.data.result_info;

        setProgramInfo(resultInfo);
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
                    {/* <label>
                        <input type="checkbox" /> <b>NCS 모의고사</b>{" "}
                        (10:00~15:00 체육관 내 강의실)
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" /> <b>현직자 토크콘서트</b>{" "}
                        (15:00~17:00 / 체육관 내)
                    </label> */}
                </td>
            </tr>
        </>
    );
});

export default SignUpSpecialCheck;
