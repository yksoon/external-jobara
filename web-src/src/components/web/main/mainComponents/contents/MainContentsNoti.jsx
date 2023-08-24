import { Skeleton } from "@mui/material";
import {
    CommonConsole,
    CommonModal,
    CommonNotify,
    CommonRest,
} from "common/js/Common";
import useAlert from "hook/useAlert";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { set_spinner } from "redux/actions/commonAction";
import { successCode } from "resultCode";
import { apiPath } from "webPath";

const MainContentsNoti = () => {
    const dispatch = useDispatch();
    const { alert } = useAlert();
    const err = { dispatch, alert };

    const [boardList, setBoardList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [isNeedUpdate, setIsNeedUpdate] = useState(false);
    const [modNotice, setModNotice] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBoardList(1, 5);
    }, []);

    // 리스트 가져오기
    const getBoardList = (pageNum, pageSize) => {
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
                let result_info = res.data.result_info;

                // console.log(res);
                setBoardList(result_info);

                setIsLoading(false);
            } else {
                // 에러
                CommonConsole("log", res);
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

    const openNotice = (board_idx) => {
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

                setModNotice(result_info);

                setModalTitle(result_info.subject);
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

    return (
        <>
            <div className="section03">
                <div className="notice">
                    <h3>공지사항</h3>
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
                                        onClick={(e) => {
                                            openNotice(item.board_idx);
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
        </>
    );
};

export default MainContentsNoti;
