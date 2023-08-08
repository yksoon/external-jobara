import { React } from "react";

import Header from "components/web/common/Header";
import Footer from "components/web/common/Footer";

import MainCarousel from "components/web/main/crousel/MainCarousel";
import MainMenu from "components/web/main/content/MainMenu";
import MainHotel from "components/web/main/content/MainHotel";
import MainBanner from "components/web/main/content/MainBanner";
import MainNews from "components/web/main/content/MainNews";
import MainBoard from "components/web/main/content/MainBoard";

function Main() {
    return (
        <>
            <Header />

            <MainCarousel />

            <MainMenu />

            <MainHotel />

            <MainBanner />

            <MainNews />

            <MainBoard />

            {/* <CommonAlert
                isOpen={isOpen}
                handleModalClose={handleModalClose}
                content={modalContent}
                title={modalTitle}
            /> */}
            <Footer />
        </>
    );
}

export default Main;
