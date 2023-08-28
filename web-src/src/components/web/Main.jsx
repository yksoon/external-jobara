import { React, useEffect } from "react";

import Header from "components/web/common/Header";
import Footer from "components/web/common/Footer";
import MainMainvisual from "./main/mainComponents/MainMainvisual";
import MainContents from "./main/mainComponents/MainContents";
import Aos from "aos";
import $ from "jquery";

function Main() {
    useEffect(() => {
        Aos.init();
    });

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
        </>
    );
}

export default Main;
