import useAlert from "hook/useAlert";
import useConfirm from "hook/useConfirm";
import { CommonNotify, CommonRest } from "common/js/Common";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiPath } from "webPath";
import { useDispatch } from "react-redux";
import { set_spinner } from "redux/actions/commonAction";
import { Skeleton } from "@mui/material";

const DashBoardMain = () => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };

    const [totalCountInfo, setTotalCountInfo] = useState({});

    useEffect(() => {
        getDashboard();
    }, []);

    const getDashboard = () => {
        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        // 대시보드
        // /v1/dashboard
        // POST
        const restParams = {
            method: "post",
            url: apiPath.api_admin_dashboard, // /v1/_user
            data: {},
            err: err,
            admin: "Y",
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);

        const responsLogic = (res) => {
            dispatch(
                set_spinner({
                    isLoading: false,
                })
            );

            const resultCode = res.headers.result_code;

            if (resultCode === "0000") {
                const resultInfo = res.data.result_info;

                setTotalCountInfo(resultInfo.total_count_info);
            }
        };
    };

    return (
        <>
            <div className="content">
                <div className="title">
                    <h3>통계</h3>
                </div>
                <div className="con_area">
                    <div>
                        <table className="table_a">
                            <colgroup>
                                <col width="33%" />
                                <col width="33%" />
                                <col width="*" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th colSpan="4">총 사전등록 수</th>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        {Object.keys(totalCountInfo).length !==
                                            0 &&
                                            totalCountInfo.total_registration_count}
                                    </td>
                                </tr>
                                <tr>
                                    <th>연령별 등록 수</th>
                                    <th>등록구분</th>
                                    <th>참여프로그램</th>
                                </tr>
                                <tr>
                                    <td className="inner_table_wrap">
                                        <table className="inner_table">
                                            <colgroup>
                                                <col width="50%" />
                                                <col width="50%" />
                                            </colgroup>
                                            <tbody>
                                                {/* 연령별 카운트 */}
                                                {Object.keys(totalCountInfo)
                                                    .length !== 0 ? (
                                                    totalCountInfo.total_age_count.map(
                                                        (item, idx) => (
                                                            <tr
                                                                key={`total_age_${idx}`}
                                                            >
                                                                <th>
                                                                    {item.age}
                                                                </th>
                                                                <td>
                                                                    <Link>
                                                                        {
                                                                            item.count
                                                                        }
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )
                                                ) : (
                                                    <>
                                                        <tr>
                                                            <th>
                                                                <Skeleton
                                                                    variant="text"
                                                                    sx={{
                                                                        fontSize:
                                                                            "1rem",
                                                                    }}
                                                                    width={60}
                                                                />
                                                            </th>
                                                            <td>
                                                                <Skeleton
                                                                    variant="text"
                                                                    sx={{
                                                                        fontSize:
                                                                            "1rem",
                                                                    }}
                                                                    width={60}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                <Skeleton
                                                                    variant="text"
                                                                    sx={{
                                                                        fontSize:
                                                                            "1rem",
                                                                    }}
                                                                    width={60}
                                                                />
                                                            </th>
                                                            <td>
                                                                <Skeleton
                                                                    variant="text"
                                                                    sx={{
                                                                        fontSize:
                                                                            "1rem",
                                                                    }}
                                                                    width={60}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                <Skeleton
                                                                    variant="text"
                                                                    sx={{
                                                                        fontSize:
                                                                            "1rem",
                                                                    }}
                                                                    width={60}
                                                                />
                                                            </th>
                                                            <td>
                                                                <Skeleton
                                                                    variant="text"
                                                                    sx={{
                                                                        fontSize:
                                                                            "1rem",
                                                                    }}
                                                                    width={60}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                <Skeleton
                                                                    variant="text"
                                                                    sx={{
                                                                        fontSize:
                                                                            "1rem",
                                                                    }}
                                                                    width={60}
                                                                />
                                                            </th>
                                                            <td>
                                                                <Skeleton
                                                                    variant="text"
                                                                    sx={{
                                                                        fontSize:
                                                                            "1rem",
                                                                    }}
                                                                    width={60}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </>
                                                )}
                                            </tbody>
                                        </table>
                                    </td>
                                    <td className="inner_table_wrap">
                                        <table className="inner_table">
                                            <colgroup>
                                                <col width="50%" />
                                                <col width="50%" />
                                            </colgroup>
                                            <tbody>
                                                <tr>
                                                    <th>소속기관 수 (학교)</th>
                                                    <td>
                                                        <a href="">00</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>전공과 수 (학과)</th>
                                                    <td>
                                                        <a href="">00</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        전공분야 수 (희망직종)
                                                    </th>
                                                    <td>
                                                        <a href="">00</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <td>&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td className="inner_table_wrap">
                                        <table className="inner_table">
                                            <colgroup>
                                                <col width="50%" />
                                                <col width="50%" />
                                            </colgroup>
                                            <tbody>
                                                {/* 연령별 카운트 */}
                                                {Object.keys(totalCountInfo)
                                                    .length !== 0 &&
                                                    totalCountInfo.total_additional_count.map(
                                                        (item, idx) => (
                                                            <tr
                                                                key={`total_additional_${idx}`}
                                                            >
                                                                <th>
                                                                    {
                                                                        item.additional_name
                                                                    }
                                                                </th>
                                                                <td>
                                                                    <Link>
                                                                        {
                                                                            item.count
                                                                        }
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                {/* <tr>
                                                    <th>&nbsp;</th>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <td>&nbsp;</td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBoardMain;
