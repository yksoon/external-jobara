import useAlert from "hook/useAlert";
import useConfirm from "hook/useConfirm";
import { CommonNotify, CommonRest } from "common/js/Common";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPath } from "webPath";
import { useDispatch } from "react-redux";
import { set_spinner } from "redux/actions/commonAction";
import DashBoardChart from "./components/DashBoardChart";

const DashBoardMain = () => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };
    const navigate = useNavigate();

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
            data: {
                file_download_yn: "N",
            },
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

                // console.log("###############", res);

                setTotalCountInfo(resultInfo.total_count_info);
            }
        };
    };

    const downloadExcel = () => {
        // 대시보드
        // /v1/dashboard
        // POST
        const restParams = {
            method: "post",
            url: apiPath.api_admin_dashboard, // /v1/_user
            data: {
                file_download_yn: "Y",
            },
            err: err,
            admin: "Y",
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);

        const responsLogic = (res) => {
            const resultCode = res.headers.result_code;
            if (resultCode === "0000") {
                console.log("###############", res);

                // // Blob은 배열 객체 안의 모든 데이터를 합쳐 blob으로 반환하기 때문에 []안에 담는다!
                // const blob = new Blob([res.data]);

                // // window 객체의 createObjuctURL을 이용해서 blob:http://~~~ 식의 url을 만들어 준다.
                // const fileUrl = window.URL.createObjectURL(blob);

                // // link 안에 위에서 만든 url을 가지고 있는 a 태그를 만들고 보이지 않도록 해준다.
                // // a 태그는 노출하지 않고 자동으로 클릭되도록 할 예정!
                // const link = document.createElement("a");
                // link.href = res.data;
                // link.style.display = "none";
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
                    <div className="adm_search">
                        <div></div>
                        <div>
                            <Link
                                className="btn btn01"
                                title="#memberInsert"
                                onClick={downloadExcel}
                            >
                                엑셀 다운로드
                            </Link>
                        </div>
                    </div>
                    {/* 차트영역 */}
                    <DashBoardChart totalCountInfo={totalCountInfo} />
                    {/* 차트영역 END */}

                    {/* 표영역 */}
                    <div style={{ marginTop: 20 }}>
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
                                                    .length !== 0 &&
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
                                                    <th colSpan="2">
                                                        소속기관 수 (학교)
                                                    </th>
                                                </tr>
                                                {Object.keys(totalCountInfo)
                                                    .length !== 0 &&
                                                    totalCountInfo.total_organization_count.map(
                                                        (item, idx) => (
                                                            <tr
                                                                key={`total_organization_${idx}`}
                                                            >
                                                                <th>
                                                                    {
                                                                        item.organization_name
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
                                                <tr>
                                                    <th colSpan="2">
                                                        전공과 수 (학과)
                                                    </th>
                                                </tr>
                                                {Object.keys(totalCountInfo)
                                                    .length !== 0 &&
                                                    totalCountInfo.total_department_count.map(
                                                        (item, idx) => (
                                                            <tr
                                                                key={`total_department_${idx}`}
                                                            >
                                                                <th>
                                                                    {
                                                                        item.department_name
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
                                                <tr>
                                                    <th colSpan="2">
                                                        전공분야 수 (희망직종)
                                                    </th>
                                                </tr>
                                                {Object.keys(totalCountInfo)
                                                    .length !== 0 &&
                                                    totalCountInfo.total_specialized_count.map(
                                                        (item, idx) => (
                                                            <tr
                                                                key={`total_specialized_${idx}`}
                                                            >
                                                                <th>
                                                                    {
                                                                        item.specialized_name
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
                                                {/* 참여프로그램 카운트 */}
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
                    {/* 표영역 END */}
                </div>
            </div>
        </>
    );
};

export default DashBoardMain;
