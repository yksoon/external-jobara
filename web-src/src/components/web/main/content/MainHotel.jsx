import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import $ from "jquery";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainHotel = (props) => {
    const hotelItems = [
        {
            imgUrl: "/img/web/main/hotel01.png",
            title: "세인트존스호텔 강릉",
            subtitle: "St.JOHN’S HOTEL",
            event: "Y",
        },
        {
            imgUrl: "/img/web/main/hotel02.png",
            title: "킨텍스 바이 케이트리 호텔",
            subtitle: "KINTEX by K-TREEL",
        },
        {
            imgUrl: "/img/web/main/hotel03.png",
            title: "호텔 뮬리아 자카르타",
            subtitle: "HOTEL MULIA & THE SUIT ...",
        },
        {
            imgUrl: "/img/web/main/hotel04.png",
            title: "웨스틴호텔 자카르타",
            subtitle: "The Westin Jakarta",
        },
        {
            imgUrl: "/img/web/main/hotel05.png",
            title: "노보텔  보고 골프 리조트 & 컨벤션 센터 자카르타",
            subtitle: "NOVOTEL BOGOR GOLF RESORT & CONVENTION CENTER",
        },
        {
            imgUrl: "/img/web/main/hotel01.png",
            title: "세인트존스호텔 강릉",
            subtitle: "St.JOHN’S HOTEL",
            event: "Y",
        },
        {
            imgUrl: "/img/web/main/hotel02.png",
            title: "킨텍스 바이 케이트리 호텔",
            subtitle: "KINTEX by K-TREEL",
        },
        {
            imgUrl: "/img/web/main/hotel03.png",
            title: "호텔 뮬리아 자카르타",
            subtitle: "HOTEL MULIA & THE SUIT ...",
        },
        {
            imgUrl: "/img/web/main/hotel04.png",
            title: "웨스틴호텔 자카르타",
            subtitle: "The Westin Jakarta",
        },
        {
            imgUrl: "/img/web/main/hotel05.png",
            title: "노보텔  보고 골프 리조트 & 컨벤션 센터 자카르타",
            subtitle: "NOVOTEL BOGOR GOLF RESORT & CONVENTION CENTER",
        },
    ];

    useEffect(() => {
        // let slick_length = $(".slick-dots li").length;
        // $(".slick-dots button").text("");
        // $(".slick-dots li").css("width", "calc(100% /" + slick_length + " )");
        // $(".slick-dots").css("display", "flex");
        // $(".slick-dots").css("position", "unset");
    }, []);

    return (
        <div className="main_hotel">
            <div className="title">
                <h3>메디씨티와 함께하는 시원한 여름나기 호캉스!</h3>
                <p>추천 HOTEL</p>
            </div>

            <Swiper
                modules={[Pagination, Autoplay]}
                id="hotel-slide"
                className="swiper-container"
                slidesPerView={4}
                spaceBetween={40}
                loop={true}
                pagination={{
                    el: ".swiper-scrollbar",
                    type: "progressbar",
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
            >
                <ul className="swiper-wrapper">
                    {hotelItems.map((item, idx) => (
                        <SwiperSlide
                            key={`hotel_${idx}`}
                            className={item.event === "Y" ? "event" : ""}
                        >
                            <Link>
                                <span className="hotel_thumb">
                                    <img src={item.imgUrl} alt="" />
                                </span>
                                <h4 className="font-24">{item.title}</h4>
                                <p className="font-21 gray-8">
                                    {item.subtitle}
                                </p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </ul>
                <div className="swiper-scrollbar"></div>
            </Swiper>
        </div>
    );
};

export default MainHotel;
