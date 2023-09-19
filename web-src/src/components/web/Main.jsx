import { React, useEffect, useState } from "react";

import Header from "components/web/common/Header";
import Footer from "components/web/common/Footer";
import MainMainvisual from "./main/mainComponents/MainMainvisual";
import MainContents from "./main/mainComponents/MainContents";
import Aos from "aos";
import MainPopupModal from "./main/mainComponents/contents/modal/MainPopupModal";

function Main() {
    useEffect(() => {
        Aos.init();
    });

    const [isOpen, setIsOpen] = useState(true);

    const handleModalClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* 헤더 */}
            <Header />

            {/* 메인비주얼 */}
            <MainMainvisual />

            {/* 메인컨텐츠 */}
            <MainContents />

            {/* 푸터 */}
            <Footer />

            {/* 팝업모달 */}
            <MainPopupModal
                isOpen={isOpen}
                title={""}
                width={"1000"}
                handleModalClose={handleModalClose}
            />
        </>
    );
}

export default Main;
