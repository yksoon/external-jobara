import { Pagination } from "@mui/material";
import { CommonConsole, CommonModal, CommonRest } from "common/js/Common";
import useAlert from "hook/useAlert";
import { useEffect, useRef, useState } from "react";
import { NavItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { set_spinner } from "redux/actions/commonAction";
import { apiPath } from "webPath";

const Notice = () => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };
    const fileBaseUrl = apiPath.api_file;

    const notice = process.env.REACT_APP_NOTICE;
    const isDeveloping = process.env.REACT_APP_ISDEVELOPING;

    const [boardList, setBoardList] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [isNeedUpdate, setIsNeedUpdate] = useState(false);

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
            board_type: "000",
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
            if (result_code === "0000" || result_code === "9997") {
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

    // 글쓰기
    const regBoard = () => {
        setModalTitle("글쓰기");
        setIsOpen(true);
    };

    return (
        <>
            <div className="content">
                <div className="title">
                    <h3>공지사항</h3>
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
                                    <Link className="btn btn02">검색</Link>
                                </div>
                                <div
                                    className="btn_box btn_right"
                                    style={{ margin: 0 }}
                                >
                                    <Link
                                        href=""
                                        className="btn btn01"
                                        onClick={regBoard}
                                    >
                                        글쓰기
                                    </Link>
                                    <Link href="" className="btn btn02">
                                        삭제
                                    </Link>
                                </div>
                            </div>
                            <div className="adm_notice">
                                <div className="adm_table">
                                    <table className="table_a">
                                        <colgroup>
                                            <col width="5%" />
                                            <col width="5%" />
                                            <col width="*" />
                                            <col width="20%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input type="checkbox" />
                                                </th>
                                                <th>번호</th>
                                                <th>제목</th>
                                                <th>파일</th>
                                                <th>조회수</th>
                                                <th>등록일</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {boardList.length !== 0 &&
                                                boardList.map((item, idx) => (
                                                    <tr key={`notice_${idx}`}>
                                                        <td>
                                                            <input type="checkbox" />
                                                        </td>
                                                        <td>
                                                            {item.board_idx}
                                                        </td>
                                                        <td>{item.subject}</td>
                                                        <td>
                                                            <div className="file_wrap">
                                                                {item.file_info
                                                                    .length !==
                                                                    0 &&
                                                                    item.file_info.map(
                                                                        (
                                                                            item2,
                                                                            idx2
                                                                        ) => (
                                                                            <Link
                                                                                to={`${fileBaseUrl}${item2.file_path_enc}`}
                                                                                key={`file_${idx2}`}
                                                                            >
                                                                                <img
                                                                                    src="img/common/file.svg"
                                                                                    alt={
                                                                                        item2.file_name
                                                                                    }
                                                                                    title={
                                                                                        item2.file_name
                                                                                    }
                                                                                />
                                                                                {
                                                                                    item2.file_name
                                                                                }
                                                                            </Link>
                                                                        )
                                                                    )}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="viewer_wrap">
                                                                <img
                                                                    src="img/common/user_icon_black.png"
                                                                    alt=""
                                                                />{" "}
                                                                {
                                                                    item.view_count
                                                                }
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {
                                                                item.reg_dttm.split(
                                                                    " "
                                                                )[0]
                                                            }
                                                        </td>
                                                    </tr>
                                                ))}
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
                            <div className="pagenation"></div>
                            {/* <div
                                dangerouslySetInnerHTML={{ __html: dummy }}
                            ></div> */}
                        </>
                    ) : (
                        notice
                    )}
                </div>
            </div>
            <CommonModal
                isOpen={isOpen}
                title={modalTitle}
                width={"1400"}
                handleModalClose={handleModalClose}
                component={"RegNoticeModal"}
                handleNeedUpdate={handleNeedUpdate}
                // modUserData={modUserData}
            />
        </>
    );
};

export default Notice;
