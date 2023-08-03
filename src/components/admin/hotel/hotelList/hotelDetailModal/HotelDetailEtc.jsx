const HotelDetailEtc = () => {
    return (
        <>
            <div className="hotel_box">
                <h4 className="mo_subtitle">호텔 기타 정보</h4>
                <table className="table_bb">
                    <colgroup>
                        <col width="20%" />
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>소개(국문)</th>
                            <td>
                                <textarea
                                    name=""
                                    id=""
                                    className="hotel_info"
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th>소개(영문)</th>
                            <td>
                                <textarea
                                    name=""
                                    id=""
                                    className="hotel_info"
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th>규정(국문)</th>
                            <td>
                                <textarea
                                    name=""
                                    id=""
                                    className="hotel_info"
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th>규정(영문)</th>
                            <td>
                                <textarea
                                    name=""
                                    id=""
                                    className="hotel_info"
                                ></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="subbtn_box">
                    <a
                        // href="javascript:alert('저장되었습니다.');"
                        className="subbtn on"
                    >
                        저장
                    </a>
                </div>
            </div>
        </>
    );
};

export default HotelDetailEtc;
