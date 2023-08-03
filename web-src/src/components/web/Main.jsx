import { React, useEffect, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { routerPath } from "webPath";
import { CommonAlert, CommonConfirm } from "common/js/Common";

import Header from "components/web/common/Header";
import Footer from "components/web/common/Footer";

import MainCarousel from "components/web/main/crousel/MainCarousel";
import MainMenu from "components/web/main/content/MainMenu";
import MainHotel from "components/web/main/content/MainHotel";
import MainBanner from "components/web/main/content/MainBanner";
import MainNews from "components/web/main/content/MainNews";
import MainBoard from "components/web/main/content/MainBoard";

// import Login from "common/js/Login";
import styles from "common/css/Main/Main.module.css";

function Main() {
    //   const handleModalOpen = () => {
    //     const [isOpen, setIsOpen] = useState(false);
    //     const [modalTitle, setModalTitle] = useState("");
    //     const [modalContent, setModalContent] = useState([]);

    //     setIsOpen(true);
    // };

    return (
        <>
            <Header />

            <MainCarousel />

            <div className={`content ${styles.mainContent}`}>
                <MainMenu />

                <MainHotel />

                <MainBanner />

                <MainNews />

                <MainBoard />
            </div>

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
