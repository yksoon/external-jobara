import { CommonErrModule, CommonRest } from "common/js/Common";
import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { isSpinnerAtom } from "recoils/atoms";
import { apiPath } from "webPath";

const SignUpModSpecialCheck = forwardRef((props, ref) => {
    // const dispatch = useDispatch();
    // const { alert } = useAlert();
    // const err = { dispatch, alert };
    const err = CommonErrModule();
    const setIsSpinner = useSetRecoilState(isSpinnerAtom);

    const [programInfo, setProgramInfo] = useState([]);

    const handleSingleCheck = props.handleSingleCheck;
    const userInfo = props.userInfo;
    const checkItems = props.checkItems;
    const navigate = useNavigate();

    useEffect(() => {
        getInfo();
    }, []);

    const responsLogic = async (res) => {
        // console.log(res);
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
                                        checked={
                                            checkItems.includes(
                                                item.additional_idx
                                            )
                                                ? true
                                                : false
                                        }
                                        disabled={true}
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

export default SignUpModSpecialCheck;
