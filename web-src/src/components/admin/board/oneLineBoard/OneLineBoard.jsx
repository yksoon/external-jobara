import { Pagination } from "@mui/material";
import axios from "axios";
import {
    CommonConsole,
    CommonErrorCatch,
    CommonModal,
    CommonNotify,
    CommonRest,
} from "common/js/Common";
import useAlert from "hook/useAlert";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { set_spinner } from "redux/actions/commonAction";
import { successCode } from "resultCode";
import { apiPath } from "webPath";

const OneLineBoard = () => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };

    const notice = process.env.REACT_APP_NOTICE;
    const isDeveloping = process.env.REACT_APP_ISDEVELOPING;

    const userTokenAdmin = useSelector(
        (state) => state.userInfoAdmin.userTokenAdmin
    );
    const ip = useSelector((state) => state.ipInfo.ipInfo);

    const [boardList, setBoardList] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [isNeedUpdate, setIsNeedUpdate] = useState(false);
    const [modOneLine, setModOneLine] = useState(null);

    const searchKeyword = useRef(null);

    useEffect(() => {
        getBoardList(1, 10, "");
    }, [isNeedUpdate]);

    // 리스트 가져오기
    const getBoardList = (pageNum, pageSize, searchKeyword) => {
        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        // /v1/boards
        // POST
        const url = apiPath.api_admin_boards;
        const data = {
            page_num: pageNum,
            page_size: pageSize,
            search_keyword: searchKeyword,
            board_type: "400",
        };

        // 파라미터
        const restParams = {
            method: "post",
            url: url,
            data: data,
            err: err,
            callback: (res) => responsLogic(res),
            admin: "Y",
        };
        CommonRest(restParams);

        // 완료 로직
        const responsLogic = (res) => {
            let result_code = res.headers.result_code;

            // 성공
            if (
                result_code === successCode.success ||
                result_code === successCode.noData
            ) {
                let result_info = res.data.result_info;
                let page_info = res.data.page_info;

                setBoardList(result_info);
                setPageInfo(page_info);

                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );
            } else {
                // 에러
                CommonConsole("log", res);

                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );
            }
        };
    };

    // 검색
    const doSearch = () => {
        const keyword = searchKeyword.current.value;

        getBoardList(1, 10, keyword);
    };

    // 글쓰기
    const regBoard = () => {
        setModalTitle("글쓰기");
        setIsOpen(true);
    };

    // 페이지네이션 이동
    const handleChange = (e, value) => {
        const keyword = searchKeyword.current.value;

        getBoardList(value, 10, keyword);
    };

    // 모달 닫기
    const handleModalClose = () => {
        setIsOpen(false);
    };

    // 화면 재 렌더링
    const handleNeedUpdate = () => {
        setIsNeedUpdate(!isNeedUpdate);
    };

    // 게시글 수정
    const modBoard = (board_idx) => {
        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        const boardIdx = String(board_idx);

        // v1/board/{board_idx}
        // GET
        const url = apiPath.api_admin_get_board + `/${boardIdx}`;
        const data = {};

        // 파라미터
        const restParams = {
            method: "get",
            url: url,
            data: data,
            err: err,
            callback: (res) => responsLogic(res),
            admin: "Y",
        };
        CommonRest(restParams);

        const responsLogic = (res) => {
            let result_code = res.headers.result_code;
            let result_info = res.data.result_info;

            // 성공
            if (result_code === successCode.success) {
                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );

                setModOneLine(result_info);

                setModalTitle("한줄게시판 수정");
                setIsOpen(true);
            }
            // 에러
            else {
                CommonConsole("log", res);

                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );

                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: res.headers.result_message_ko,
                });
            }
        };
    };

    // 엑셀 다운로드
    const downloadExcel = () => {
        dispatch(
            set_spinner({
                isLoading: true,
            })
        );

        // 대시보드
        // /v1/board/_download
        // POST
        // !!!!!!!!!!!!! 엑셀 다운로드만 blob으로 response를 받아야하기때문에 rest 함수 사용하지 않고 따로 axios로 호출
        axios({
            method: "POST",
            url: apiPath.api_admin_board_download,
            responseType: "blob",
            headers: {
                "Content-Type": "application/json",
                "Jobara-Token": userTokenAdmin,
                "Jobara-Src": ip,
            },
            data: {
                board_type: "400",
                page_num: 1,
                page_size: 1,
            },
        })
            .then((response) => {
                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );

                console.log(response);

                // window 객체의 createObjuctURL을 이용해서 blob:http://~~~ 식의 url을 만들어 준다.
                const url = window.URL.createObjectURL(
                    // Blob은 배열 객체 안의 모든 데이터를 합쳐 blob으로 반환하기 때문에 []안에 담는다!
                    new Blob([response.data], {
                        type: response.headers["content-type"],
                    })
                );

                // link 안에 위에서 만든 url을 가지고 있는 a 태그를 만들고 보이지 않도록 해준다.
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", excelName());
                document.body.appendChild(link);
                link.style.display = "none";
                link.click();
            })
            .catch((error) => {
                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );

                CommonErrorCatch(error, dispatch, alert);
            });
    };

    // 엑셀 이름
    const excelName = () => {
        const now = new Date();
        const year = String(now.getFullYear());

        let month = String(now.getMonth() + 1);
        if (month.length === 1) {
            month = "0" + month;
        }

        let day = String(now.getDate());
        if (day.length === 1) {
            day = "0" + day;
        }

        const nowDate = `${year}${month}${day}`;

        const xlsName = `${nowDate}_잡아라_한줄게시판_자료`;

        return xlsName;
    };

    return (
        <>
            <div className="content">
                <div className="title">
                    <h3>한줄 게시판</h3>
                </div>
                <div className="con_area">
                    {isDeveloping === "true" ? (
                        <>
                            <div className="adm_search">
                                <div>
                                    {/* <select name="" id="">
                                        <option value="">구분</option>
                                        <option value="">이름</option>
                                        <option value="">소속</option>
                                    </select> */}
                                    <input
                                        type="text"
                                        className="input"
                                        ref={searchKeyword}
                                    />
                                    <Link
                                        className="btn btn02"
                                        onClick={doSearch}
                                    >
                                        검색
                                    </Link>
                                </div>
                                <div
                                    className="btn_box btn_right"
                                    style={{ margin: 0 }}
                                >
                                    {/* <Link
                                        href=""
                                        className="btn btn01"
                                        onClick={regBoard}
                                    >
                                        글쓰기
                                    </Link> */}
                                    {/* <Link href="" className="btn btn02">
                                        삭제
                                    </Link> */}
                                    <Link
                                        className="btn btn01"
                                        onClick={downloadExcel}
                                    >
                                        엑셀 다운로드
                                    </Link>
                                </div>
                            </div>
                            <div className="adm_notice">
                                <div className="adm_table">
                                    <table className="table_a">
                                        <colgroup>
                                            <col width="5%" />
                                            <col width="5%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                            <col width="*" />
                                            <col width="10%" />
                                            <col width="5%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input type="checkbox" />
                                                </th>
                                                <th>번호</th>
                                                <th>등록자</th>
                                                <th>연락처</th>
                                                <th>내용</th>
                                                <th>등록일</th>
                                                <th>수정</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {boardList.length !== 0 ? (
                                                boardList.map((item, idx) => (
                                                    <tr
                                                        key={`oneline_board_${idx}`}
                                                    >
                                                        <td>
                                                            <input type="checkbox" />
                                                        </td>
                                                        <td>{item.row_num}</td>
                                                        <td>
                                                            {item.user_name_ko}
                                                        </td>
                                                        <td>{`${item.mobile1}-${item.mobile2}-${item.mobile3}`}</td>
                                                        <td>{item.subject}</td>
                                                        <td>
                                                            {
                                                                item.reg_dttm.split(
                                                                    " "
                                                                )[0]
                                                            }
                                                        </td>
                                                        <td>
                                                            <Link
                                                                className="tablebtn"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    modBoard(
                                                                        item.board_idx
                                                                    );
                                                                }}
                                                            >
                                                                수정
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <>
                                                    <tr>
                                                        <td
                                                            colSpan="7"
                                                            style={{
                                                                height: "55px",
                                                            }}
                                                        >
                                                            <b>
                                                                데이터가
                                                                없습니다.
                                                            </b>
                                                        </td>
                                                    </tr>
                                                </>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {boardList.length !== 0 ? (
                                pageInfo && (
                                    <div className="pagenation">
                                        <Pagination
                                            count={pageInfo.pages}
                                            onChange={handleChange}
                                            shape="rounded"
                                            color="primary"
                                        />
                                    </div>
                                )
                            ) : (
                                <></>
                            )}
                        </>
                    ) : (
                        notice
                    )}
                </div>
            </div>
            <CommonModal
                isOpen={isOpen}
                title={modalTitle}
                width={"800"}
                handleModalClose={handleModalClose}
                component={"RegOneLineBoardModal"}
                handleNeedUpdate={handleNeedUpdate}
                modOneLine={modOneLine}
            />
        </>
    );
};

export default OneLineBoard;
