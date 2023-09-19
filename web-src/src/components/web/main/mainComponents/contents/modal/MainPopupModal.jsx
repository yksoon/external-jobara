import { Modal } from "@mui/material";
import { useState } from "react";

const MainPopupModal = (props) => {
    const modalOption = {
        isOpen: props.isOpen,
        title: props.title,
        handleModalClose: props.handleModalClose,
        width: props.width,
    };

    return (
        <>
        {modalOption.isOpen && (
            <div className="popup_wrap" id="modal_wrap">
            <div className={`popup w600`}>
                <div className="form">
                    {/* 모달 컨텐츠 드가자 */}
                    <div id="transition-modal-description">
                        <img
                            src="img/web/main/main_popup_event.jpg"
                            alt=""
                        />
                    </div>
                    {/* 모달 컨텐츠 드가자 END */}
                </div>
                <div
                    className="popup_btm"
                >
                    <div>
                        <input type="checkbox" id="popup_24" />
                        <label for="popup_24">24시간동안 보지 않기</label>
                    </div>
                    <div onClick={modalOption.handleModalClose}>
                        <img src="img/common/modal_close.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    );
};

export default MainPopupModal;
