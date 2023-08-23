import { Pagination } from "@mui/material";
import { CommonConsole, CommonModal, CommonRest } from "common/js/Common";
import useAlert from "hook/useAlert";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { set_spinner } from "redux/actions/commonAction";
import { apiPath } from "webPath";
import { dummy } from "./dummy";

const Notice = () => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };

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

        console.log(isDeveloping);
        console.log(typeof isDeveloping);
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
                                            <tr>
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>1</td>
                                                <td>공지사항 제목</td>
                                                <td>
                                                    <div className="file_wrap">
                                                        <Link href="">
                                                            <img
                                                                src="img/common/file.svg"
                                                                alt=""
                                                            />{" "}
                                                            파일이름1.docx
                                                        </Link>
                                                        <Link href="">
                                                            <img
                                                                src="img/common/file.svg"
                                                                alt=""
                                                            />{" "}
                                                            파일이름2.pdf
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="viewer_wrap">
                                                        <img
                                                            src="img/common/user_icon.png"
                                                            alt=""
                                                        />{" "}
                                                        16
                                                    </div>
                                                </td>
                                                <td>2023-08-16</td>
                                            </tr>
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
                            <div
                                dangerouslySetInnerHTML={{ __html: dummy }}
                            ></div>
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
                component={"RegNoticeModal"}
                handleNeedUpdate={handleNeedUpdate}
                // modUserData={modUserData}
            />
        </>
    );
};

export default Notice;
