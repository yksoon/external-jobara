import {
    Box,
    Button,
    CircularProgress,
    Modal,
    Pagination,
    Skeleton,
} from "@mui/material";
import {
    CommonConsole,
    CommonErrModule,
    CommonModal,
    CommonNotify,
    CommonRest,
    CommonTest,
} from "common/js/Common";
import useAlert from "hook/useAlert";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { successCode } from "resultCode";
import { apiPath } from "webPath";
import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";
import $ from "jquery";
import { useSetRecoilState } from "recoil";
import { isSpinnerAtom } from "recoils/atoms";

const Notice = () => {
    // const dispatch = useDispatch();
    // const { alert } = useAlert();
    // const err = { dispatch, alert };
    const { alert } = useAlert();
    const err = CommonErrModule();
    const setIsSpinner = useSetRecoilState(isSpinnerAtom);

    const [boardList, setBoardList] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [isNeedUpdate, setIsNeedUpdate] = useState(false);
    const [modNotice, setModNotice] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        getBoardList(1, 10);
    }, []);

    // 리스트 가져오기
    const getBoardList = (pageNum, pageSize) => {
        setIsSpinner(true);

        // /v1/boards
        // POST
        const url = apiPath.api_admin_boards;
        const data = {
            page_num: pageNum,
            page_size: pageSize,
            board_type: "000",
        };

        // 파라미터
        const restParams = {
            method: "post",
            url: url,
            data: data,
            err: err,
            callback: (res) => responsLogic(res),
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
                const result_info = res.data.result_info;
                const page_info = res.data.page_info;

                setBoardList(result_info);
                setPageInfo(page_info);

                setIsSpinner(false);
                setIsLoading(false);
            } else {
                // 에러
                CommonConsole("log", res);
                setIsSpinner(false);
            }
        };
    };

    // 모달 닫기
    const handleModalClose = () => {
        setModNotice(null);
        setIsOpen(false);
    };

    // 화면 재 렌더링
    const handleNeedUpdate = () => {
        setIsNeedUpdate(!isNeedUpdate);
    };

    const openNotice = (board_idx, e) => {
        // dispatch(
        //     set_spinner({
        //         isLoading: true,
        //     })
        // );
        setIsSpinner(true);

        //console.log(e);
        //let offset = $(`#${e.target.id}`).offset(); //선택한 태그의 위치를 반환
        //$("html").animate({ scrollTop: offset.top });

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
        };

        CommonRest(restParams);

        const responsLogic = (res) => {
            let result_code = res.headers.result_code;
            let result_info = res.data.result_info;

            // 성공
            if (result_code === successCode.success) {
                // dispatch(
                //     set_spinner({
                //         isLoading: false,
                //     })
                // );

                setIsSpinner(false);

                setModNotice(result_info);

                setModalTitle(result_info.subject);
                setIsOpen(true);
            }
            // 에러
            else {
                CommonConsole("log", res);

                // dispatch(
                //     set_spinner({
                //         isLoading: false,
                //     })
                // );
                setIsSpinner(false);

                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: res.headers.result_message_ko,
                });
            }
        };
    };

    // 페이지네이션 이동
    const handleChange = (e, value) => {
        // const keyword = searchKeyword.current.value;

        // getBoardList(value, 10, keyword);

        getBoardList(value, 10, "");
    };

    return (
        <>
            {/* 헤더 */}
            <SubHeader />
            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container ">
                <div id="content">
                    <h2 id="subtitle">공지사항</h2>
                    <div className="notice">
                        <ul>
                            {isLoading ? (
                                <>
                                    <li>
                                        <Skeleton />
                                    </li>
                                    <li>
                                        <Skeleton />
                                    </li>
                                    <li>
                                        <Skeleton />
                                    </li>
                                </>
                            ) : boardList.length !== 0 ? (
                                boardList.map((item, idx) => (
                                    <li key={`main_notice_${idx}`}>
                                        <Link
                                            id={`main_notice_${idx}`}
                                            onClick={(e) => {
                                                openNotice(item.board_idx, e);
                                                e.preventDefault();
                                            }}
                                        >
                                            {item.subject}
                                        </Link>
                                        <span className="date">
                                            {item.reg_dttm.split(" ")[0]}
                                        </span>
                                    </li>
                                ))
                            ) : (
                                <li>
                                    <p className="notice_no">
                                        공지사항이 없습니다.
                                    </p>
                                </li>
                            )}
                        </ul>
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
                </div>
            </div>
            <CommonModal
                isOpen={isOpen}
                title={modalTitle}
                width={"1400"}
                handleModalClose={handleModalClose}
                component={"MainContentsNoticeModal"}
                handleNeedUpdate={handleNeedUpdate}
                modNotice={modNotice}
            />

            {/* 푸터 */}
            <Footer />
        </>
    );
};

export default Notice;
