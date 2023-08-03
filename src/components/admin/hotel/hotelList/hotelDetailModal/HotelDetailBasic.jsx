import $ from "jquery";

const HotelDetailBasic = () => {
    const starClick = (e) => {
        //호텔신규등록 - 등급 별 스타일
        $(".star").removeClass("on");
        $(e.currentTarget).addClass("on");
        $(e.currentTarget).prevAll().addClass("on");
    };

    return (
        <>
            <div className="hotel_box">
                <h4 className="mo_subtitle">호텔 기본 정보</h4>
                <table className="table_bb">
                    <colgroup>
                        <col width="20%" />
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>서비스상태</th>
                            <td>
                                <select name="" id="" className="w180">
                                    <option defaultValue="">영업중</option>
                                    <option defaultValue="">휴업</option>
                                    <option defaultValue="">폐업</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>지점타입</th>
                            <td>
                                <select name="" id="" className="w180">
                                    <option defaultValue="">서울</option>
                                    <option defaultValue="">부산</option>
                                    <option defaultValue="">여수</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>건물타입</th>
                            <td>
                                <select name="" id="" className="w180">
                                    <option defaultValue="">콘도</option>
                                    <option defaultValue="">호텔</option>
                                    <option defaultValue="">리조트</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>위치타입</th>
                            <td>
                                <select name="" id="" className="w180">
                                    <option defaultValue="">???</option>
                                    <option defaultValue="">???</option>
                                    <option defaultValue="">???</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>홈페이지</th>
                            <td>
                                <input type="text" className="input w370" />
                            </td>
                        </tr>
                        <tr>
                            <th>홈페이지 노출 여부</th>
                            <td>
                                <div className="hotel_radio_box">
                                    <input
                                        type="radio"
                                        id="homepage_Y"
                                        name="homepage"
                                    />
                                    <label htmlFor="homepage_Y">노출</label>
                                </div>
                                <div className="hotel_radio_box">
                                    <input
                                        type="radio"
                                        id="homepage_N"
                                        name="homepage"
                                    />
                                    <label htmlFor="homepage_N">미노출</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>등급</th>
                            <td>
                                <div className="hotel_star_wrap">
                                    <span
                                        className="star"
                                        onClick={(e) => starClick(e)}
                                    >
                                        <svg
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 48 48"
                                            // style="enable-background:new 0 0 48 48;fill:#ddd;width:26px;"
                                            style={{
                                                enableBackground:
                                                    "new 0 0 48 48",
                                                fill: "#ddd",
                                                width: "26px",
                                            }}
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M41.8,21.2c-0.1-0.3-0.2-0.5-0.5-0.7c-0.2-0.2-0.5-0.3-0.8-0.3l-10.9-1l-4.2-10c-0.1-0.3-0.3-0.5-0.6-0.7
                                                c-0.3-0.2-0.5-0.2-0.8-0.2s-0.5,0.1-0.8,0.2c-0.3,0.1-0.5,0.4-0.6,0.7l-4.2,10l-10.9,1c-0.3,0-0.6,0.1-0.8,0.3
                                                c-0.2,0.2-0.4,0.4-0.5,0.7s-0.1,0.5,0,0.8c0.1,0.3,0.2,0.5,0.5,0.8l8.2,7.2l-2.5,10.6c-0.1,0.3,0,0.6,0.1,0.9
                                                c0.1,0.3,0.3,0.5,0.5,0.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.9-0.2l9.3-5.6l9.3,5.6c0.3,0.2,0.5,0.2,0.9,0.2
                                                c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.3,0.1-0.6,0.1-0.9L33.1,30l8.2-7.2c0.3-0.2,0.4-0.5,0.5-0.8
                                                C41.8,21.7,41.8,21.5,41.8,21.2z"
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        className="star"
                                        onClick={(e) => starClick(e)}
                                    >
                                        <svg
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 48 48"
                                            // style="enable-background:new 0 0 48 48;fill:#ddd;width:26px;"
                                            style={{
                                                enableBackground:
                                                    "new 0 0 48 48",
                                                fill: "#ddd",
                                                width: "26px",
                                            }}
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M41.8,21.2c-0.1-0.3-0.2-0.5-0.5-0.7c-0.2-0.2-0.5-0.3-0.8-0.3l-10.9-1l-4.2-10c-0.1-0.3-0.3-0.5-0.6-0.7
                                                c-0.3-0.2-0.5-0.2-0.8-0.2s-0.5,0.1-0.8,0.2c-0.3,0.1-0.5,0.4-0.6,0.7l-4.2,10l-10.9,1c-0.3,0-0.6,0.1-0.8,0.3
                                                c-0.2,0.2-0.4,0.4-0.5,0.7s-0.1,0.5,0,0.8c0.1,0.3,0.2,0.5,0.5,0.8l8.2,7.2l-2.5,10.6c-0.1,0.3,0,0.6,0.1,0.9
                                                c0.1,0.3,0.3,0.5,0.5,0.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.9-0.2l9.3-5.6l9.3,5.6c0.3,0.2,0.5,0.2,0.9,0.2
                                                c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.3,0.1-0.6,0.1-0.9L33.1,30l8.2-7.2c0.3-0.2,0.4-0.5,0.5-0.8
                                                C41.8,21.7,41.8,21.5,41.8,21.2z"
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        className="star"
                                        onClick={(e) => starClick(e)}
                                    >
                                        <svg
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 48 48"
                                            // style="enable-background:new 0 0 48 48;fill:#ddd;width:26px;"
                                            style={{
                                                enableBackground:
                                                    "new 0 0 48 48",
                                                fill: "#ddd",
                                                width: "26px",
                                            }}
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M41.8,21.2c-0.1-0.3-0.2-0.5-0.5-0.7c-0.2-0.2-0.5-0.3-0.8-0.3l-10.9-1l-4.2-10c-0.1-0.3-0.3-0.5-0.6-0.7
                                                c-0.3-0.2-0.5-0.2-0.8-0.2s-0.5,0.1-0.8,0.2c-0.3,0.1-0.5,0.4-0.6,0.7l-4.2,10l-10.9,1c-0.3,0-0.6,0.1-0.8,0.3
                                                c-0.2,0.2-0.4,0.4-0.5,0.7s-0.1,0.5,0,0.8c0.1,0.3,0.2,0.5,0.5,0.8l8.2,7.2l-2.5,10.6c-0.1,0.3,0,0.6,0.1,0.9
                                                c0.1,0.3,0.3,0.5,0.5,0.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.9-0.2l9.3-5.6l9.3,5.6c0.3,0.2,0.5,0.2,0.9,0.2
                                                c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.3,0.1-0.6,0.1-0.9L33.1,30l8.2-7.2c0.3-0.2,0.4-0.5,0.5-0.8
                                                C41.8,21.7,41.8,21.5,41.8,21.2z"
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        className="star"
                                        onClick={(e) => starClick(e)}
                                    >
                                        <svg
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 48 48"
                                            // style="enable-background:new 0 0 48 48;fill:#ddd;width:26px;"
                                            style={{
                                                enableBackground:
                                                    "new 0 0 48 48",
                                                fill: "#ddd",
                                                width: "26px",
                                            }}
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M41.8,21.2c-0.1-0.3-0.2-0.5-0.5-0.7c-0.2-0.2-0.5-0.3-0.8-0.3l-10.9-1l-4.2-10c-0.1-0.3-0.3-0.5-0.6-0.7
                                                c-0.3-0.2-0.5-0.2-0.8-0.2s-0.5,0.1-0.8,0.2c-0.3,0.1-0.5,0.4-0.6,0.7l-4.2,10l-10.9,1c-0.3,0-0.6,0.1-0.8,0.3
                                                c-0.2,0.2-0.4,0.4-0.5,0.7s-0.1,0.5,0,0.8c0.1,0.3,0.2,0.5,0.5,0.8l8.2,7.2l-2.5,10.6c-0.1,0.3,0,0.6,0.1,0.9
                                                c0.1,0.3,0.3,0.5,0.5,0.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.9-0.2l9.3-5.6l9.3,5.6c0.3,0.2,0.5,0.2,0.9,0.2
                                                c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.3,0.1-0.6,0.1-0.9L33.1,30l8.2-7.2c0.3-0.2,0.4-0.5,0.5-0.8
                                                C41.8,21.7,41.8,21.5,41.8,21.2z"
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        className="star"
                                        onClick={(e) => starClick(e)}
                                    >
                                        <svg
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 48 48"
                                            // style="enable-background:new 0 0 48 48;fill:#ddd;width:26px;"
                                            style={{
                                                enableBackground:
                                                    "new 0 0 48 48",
                                                fill: "#ddd",
                                                width: "26px",
                                            }}
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M41.8,21.2c-0.1-0.3-0.2-0.5-0.5-0.7c-0.2-0.2-0.5-0.3-0.8-0.3l-10.9-1l-4.2-10c-0.1-0.3-0.3-0.5-0.6-0.7
                                                c-0.3-0.2-0.5-0.2-0.8-0.2s-0.5,0.1-0.8,0.2c-0.3,0.1-0.5,0.4-0.6,0.7l-4.2,10l-10.9,1c-0.3,0-0.6,0.1-0.8,0.3
                                                c-0.2,0.2-0.4,0.4-0.5,0.7s-0.1,0.5,0,0.8c0.1,0.3,0.2,0.5,0.5,0.8l8.2,7.2l-2.5,10.6c-0.1,0.3,0,0.6,0.1,0.9
                                                c0.1,0.3,0.3,0.5,0.5,0.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.9-0.2l9.3-5.6l9.3,5.6c0.3,0.2,0.5,0.2,0.9,0.2
                                                c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.3,0.1-0.6,0.1-0.9L33.1,30l8.2-7.2c0.3-0.2,0.4-0.5,0.5-0.8
                                                C41.8,21.7,41.8,21.5,41.8,21.2z"
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        className="star"
                                        onClick={(e) => starClick(e)}
                                    >
                                        <svg
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 48 48"
                                            // style="enable-background:new 0 0 48 48;fill:#ddd;width:26px;"
                                            style={{
                                                enableBackground:
                                                    "new 0 0 48 48",
                                                fill: "#ddd",
                                                width: "26px",
                                            }}
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M41.8,21.2c-0.1-0.3-0.2-0.5-0.5-0.7c-0.2-0.2-0.5-0.3-0.8-0.3l-10.9-1l-4.2-10c-0.1-0.3-0.3-0.5-0.6-0.7
                                                c-0.3-0.2-0.5-0.2-0.8-0.2s-0.5,0.1-0.8,0.2c-0.3,0.1-0.5,0.4-0.6,0.7l-4.2,10l-10.9,1c-0.3,0-0.6,0.1-0.8,0.3
                                                c-0.2,0.2-0.4,0.4-0.5,0.7s-0.1,0.5,0,0.8c0.1,0.3,0.2,0.5,0.5,0.8l8.2,7.2l-2.5,10.6c-0.1,0.3,0,0.6,0.1,0.9
                                                c0.1,0.3,0.3,0.5,0.5,0.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.9-0.2l9.3-5.6l9.3,5.6c0.3,0.2,0.5,0.2,0.9,0.2
                                                c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.3,0.1-0.6,0.1-0.9L33.1,30l8.2-7.2c0.3-0.2,0.4-0.5,0.5-0.8
                                                C41.8,21.7,41.8,21.5,41.8,21.2z"
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        className="star"
                                        onClick={(e) => starClick(e)}
                                    >
                                        <svg
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 48 48"
                                            // style="enable-background:new 0 0 48 48;fill:#ddd;width:26px;"
                                            style={{
                                                enableBackground:
                                                    "new 0 0 48 48",
                                                fill: "#ddd",
                                                width: "26px",
                                            }}
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M41.8,21.2c-0.1-0.3-0.2-0.5-0.5-0.7c-0.2-0.2-0.5-0.3-0.8-0.3l-10.9-1l-4.2-10c-0.1-0.3-0.3-0.5-0.6-0.7
                                                c-0.3-0.2-0.5-0.2-0.8-0.2s-0.5,0.1-0.8,0.2c-0.3,0.1-0.5,0.4-0.6,0.7l-4.2,10l-10.9,1c-0.3,0-0.6,0.1-0.8,0.3
                                                c-0.2,0.2-0.4,0.4-0.5,0.7s-0.1,0.5,0,0.8c0.1,0.3,0.2,0.5,0.5,0.8l8.2,7.2l-2.5,10.6c-0.1,0.3,0,0.6,0.1,0.9
                                                c0.1,0.3,0.3,0.5,0.5,0.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.9-0.2l9.3-5.6l9.3,5.6c0.3,0.2,0.5,0.2,0.9,0.2
                                                c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.3,0.1-0.6,0.1-0.9L33.1,30l8.2-7.2c0.3-0.2,0.4-0.5,0.5-0.8
                                                C41.8,21.7,41.8,21.5,41.8,21.2z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>정렬순서</th>
                            <td>
                                <select name="" id="" className="w120">
                                    <option defaultValue="">1</option>
                                    <option defaultValue="">2</option>
                                    <option defaultValue="">3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>체크인시간</th>
                            <td>
                                <input type="text" className="input w120" />
                            </td>
                        </tr>
                        <tr>
                            <th>체크아웃시간</th>
                            <td>
                                <input type="text" className="input w120" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="subbtn_box">
                    <a
                        // href="javascript:alert('저장되었습니다.');"
                        className="subbtn off"
                    >
                        저장
                    </a>
                </div>
            </div>
        </>
    );
};

export default HotelDetailBasic;
