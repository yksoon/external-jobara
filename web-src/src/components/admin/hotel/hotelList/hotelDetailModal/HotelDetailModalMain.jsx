import React, { useRef } from "react";
import { Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import $ from "jquery";
import { regHotelModel } from "models/hotel/hotel";
import { Link } from "react-router-dom";
import HotelDetailEssential from "./HotelDetailEssential";
import HotelDetailBasic from "./HotelDetailBasic";
import HotelDetailEtc from "./HotelDetailEtc";
import HotelDetailManager from "./HotelDetailManager";
import HotelDetailAdditional from "./HotelDetailAdditional";

const HotelDetailModalMain = () => {
    const dispatch = useDispatch();

    let hotelModel = { ...regHotelModel };

    let hotelRefs = {
        nationType: useRef(null),
        nameKo: useRef(null),
        nameEn: useRef(null),
        zipcode: useRef(null),
        addr1Ko: useRef(null),
        addr2Ko: useRef(null),
        addr1En: useRef(null),
        addr2En: useRef(null),
        latitude: useRef(null),
        longitude: useRef(null),
    };

    const clickSave = () => {
        let data = {
            ...hotelModel,
            nationType: hotelRefs.nationType.current.value,
            nameKo: hotelRefs.nameKo.current.value,
            nameEn: hotelRefs.nameEn.current.value,
            addr1Ko: hotelRefs.addr1Ko.current.value,
            addr2Ko: hotelRefs.addr2Ko.current.value,
            addr1En: hotelRefs.addr1En.current.value,
            addr2En: hotelRefs.addr2En.current.value,
            latitude: hotelRefs.latitude.current.value,
            longitude: hotelRefs.longitude.current.value,
        };

        console.log(data);
    };

    return (
        <>
            <HotelDetailEssential ref={hotelRefs} />

            <HotelDetailBasic />

            <HotelDetailEtc />

            <HotelDetailManager />

            <HotelDetailAdditional />

            <div className="subbtn_box modal_btn_footer_box">
                <Link className="modal_btn subbtn off" title="#hotelPreview">
                    미리보기
                </Link>
                <Link className="subbtn on">저장</Link>
            </div>
        </>
    );
};

export default HotelDetailModalMain;
