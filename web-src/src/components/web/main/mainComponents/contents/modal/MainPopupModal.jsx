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
            <Modal
                open={modalOption.isOpen}
                onClose={modalOption.handleModalClose}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
            >
                <div className="modal_wrap" id="modal_wrap">
                    <div className={`modal w${modalOption.width}`}>
                        <div
                            className="modal_close"
                            onClick={modalOption.handleModalClose}
                        >
                            <img src="img/common/modal_close.png" alt="" />
                        </div>
                        <div className="form">
                            <h4
                                className="mo_title"
                                id="transition-modal-title"
                            >
                                {modalOption.title}
                            </h4>
                            {/* 모달 컨텐츠 드가자 */}
                            <div id="transition-modal-description">
                                <img
                                    src="img/web/main/main_popup_event.jpg"
                                    alt=""
                                />
                            </div>
                            {/* 모달 컨텐츠 드가자 END */}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default MainPopupModal;
