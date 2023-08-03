/*global kakao*/
import { forwardRef, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "@mui/material";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { CommonNotify } from "common/js/Common";
import useAlert from "hook/useAlert";
import { set_reg_hotel } from "redux/actions/hotelAction";

const HotelDetailEssential = forwardRef((props, ref) => {
    const codes = useSelector((state) => state.codes.codes);
    const [nationTypeState, setNationTypeState] = useState([]);
    const { alert } = useAlert();
    const open = useDaumPostcodePopup();
    let geocoder = new kakao.maps.services.Geocoder();
    const dispatch = useDispatch();
    let regHotelEssential = useSelector((state) => state.hotel.essential);
    // const [hotelEssentialState, setHotelEssentialState] = useState({
    //     ...regHotelEssential,
    // });

    const {
        zipcode,
        addr1Ko,
        addr2Ko,
        addr1En,
        addr2En,
        latitude,
        longitude,
        nationType,
        nameKo,
        nameEn,
    } = ref;
    const zipcode_en = useRef(null);

    useEffect(() => {
        const nation = codes.filter((e) => e.code_type === "NATION_TYPE");
        setNationTypeState(nation);
    }, []);

    function isFileImage(file) {
        if (file) {
            for (let i = 0; i < file.length; i++) {
                return file[i] && file[i]["type"].split("/")[0] === "image";
            }
        }
    }

    // 이미지 업로드 시 미리보기
    const readURL = (input) => {
        if (isFileImage(input.files)) {
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById("preview").src = e.target.result;
                };
                reader.readAsDataURL(input.files[0]);
            } else {
                document.getElementById("preview").src = "";
            }
        } else {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "이미지만 업로드 가능합니다.",
            });

            input.value = "";

            return false;
        }
    };

    // 이미지 업로드 시 미리보기 (멀티)
    const readURLMulti = (input) => {
        const maxFileCnt = 5; // 첨부파일 최대 개수

        console.log("1111111", input.files);

        if (isFileImage(input.files)) {
            if (input.files.length > maxFileCnt) {
                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: "이미지는 5장까지 업로드 가능합니다.",
                });

                input.value = "";

                return false;
            } else {
                document.querySelector("#imageContainer").replaceChildren();

                let i = input.files.length - 1;
                for (let image of input.files) {
                    let span = document.createElement("span");
                    span.setAttribute("class", "hotel_img");

                    let img = document.createElement("img");
                    span.appendChild(img);

                    // let img = document.createElement("img");
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        img.setAttribute("src", e.target.result);
                    };
                    reader.readAsDataURL(input.files[i--]);
                    // document.querySelector("#imageContainer").appendChild(img);
                    document.querySelector("#imageContainer").appendChild(span);
                }
            }
        } else {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "이미지만 업로드 가능합니다.",
            });

            input.value = "";

            return false;
        }
    };

    const handle = {
        // 버튼 클릭 이벤트
        openPost: () => {
            open({
                popupTitle: "medi-city.co.kr",
                // top: 400,
                // left: 500,
                onComplete: handle.selectAddress,
            });
        },

        // 주소 선택 이벤트
        selectAddress: (data) => {
            // console.log(data);
            // console.log(data.address);

            zipcode.current.value = data.zonecode;
            zipcode_en.current.value = data.zonecode;
            addr1Ko.current.value = data.address;
            addr1En.current.value = data.addressEnglish;

            geocoder.addressSearch(data.address, postCallback);
        },
    };

    // 위도 latitude
    // 경도 longitude
    const postCallback = (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
            console.log(result);
            let res = result[0];

            latitude.current.value = res.x;
            longitude.current.value = res.y;
        }
    };

    // TODO: key 방어코딩
    const changeHotelHandler = (e) => {
        console.log(e);

        const key = e.target.id
            ? e.target.id
            : `unknown_key_${e.target.nodeName}_${e.target.value}`;
        const val = e.target.value
            ? e.target.value
            : `unknown_value_${e.target.nodeName}`;

        dispatch(
            set_reg_hotel({
                ...regHotelEssential,
                [key]: val,
            })
        );

        // let hotelEssential = regHotelEssential;

        // switch (e.target.id) {
        //     // 구분
        //     case "nationType":
        //         val = e.target.value;
        //         dispatch(
        //             set_reg_hotel({
        //                 ...regHotelEssential,
        //                 nationType: val,
        //             })
        //         );

        //         break;

        //     case "nameKo":
        //         val = e.target.value;
        //         dispatch(
        //             set_reg_hotel({
        //                 ...regHotelEssential,
        //                 nameKo: val,
        //             })
        //         );

        //         break;

        //     case "nameEn":
        //         val = e.target.value;
        //         dispatch(
        //             set_reg_hotel({
        //                 ...regHotelEssential,
        //                 nameEn: val,
        //             })
        //         );

        //         break;

        //     case "addr1Ko":
        //         val = e.target.value;
        //         dispatch(
        //             set_reg_hotel({
        //                 ...regHotelEssential,
        //                 addr1Ko: val,
        //             })
        //         );

        //         break;

        //     case "addr2Ko":
        //         val = e.target.value;
        //         dispatch(
        //             set_reg_hotel({
        //                 ...regHotelEssential,
        //                 addr2Ko: val,
        //             })
        //         );

        //         break;

        //     case "addr1En":
        //         val = e.target.value;
        //         dispatch(
        //             set_reg_hotel({
        //                 ...regHotelEssential,
        //                 addr1En: val,
        //             })
        //         );

        //         break;

        //     case "addr2En":
        //         val = e.target.value;
        //         dispatch(
        //             set_reg_hotel({
        //                 ...regHotelEssential,
        //                 addr2En: val,
        //             })
        //         );

        //         break;

        //     case "zipcode":
        //         val = e.target.value;
        //         dispatch(
        //             set_reg_hotel({
        //                 ...regHotelEssential,
        //                 zipcode: val,
        //             })
        //         );

        //         break;
        //     default:
        //         break;
        // }
    };

    return (
        <>
            <div className="hotel_box">
                <h4 className="mo_subtitle">호텔 필수 정보</h4>
                <table className="table_bb">
                    <colgroup>
                        <col width="20%" />
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>구분</th>
                            <td>
                                <select
                                    name=""
                                    id="nationType"
                                    className="w120"
                                    ref={nationType}
                                    onChange={(e) => {
                                        changeHotelHandler(e);
                                    }}
                                    defaultValue="100"
                                >
                                    {nationTypeState.map((item, idx) => (
                                        <option
                                            value={item.code_key}
                                            key={`nationType_${idx}`}
                                        >
                                            {item.code_value}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                호텔명(국문) <span className="red">*</span>
                            </th>
                            <td>
                                <input
                                    type="text"
                                    className="input w370"
                                    id="nameKo"
                                    ref={nameKo}
                                    defaultValue={
                                        regHotelEssential.nameKo
                                            ? regHotelEssential.nameKo
                                            : ""
                                    }
                                    onChange={(e) => {
                                        changeHotelHandler(e);
                                    }}
                                    autoFocus
                                    autoComplete="off"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                호텔명(영문) <span className="red">*</span>
                            </th>
                            <td>
                                <input
                                    type="text"
                                    className="input w370"
                                    id="nameEn"
                                    ref={nameEn}
                                    defaultValue={
                                        regHotelEssential.nameEn
                                            ? regHotelEssential.nameEn
                                            : ""
                                    }
                                    onChange={(e) => {
                                        changeHotelHandler(e);
                                    }}
                                    autoComplete="off"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                고유번호 <span className="red">*</span>
                            </th>
                            <td>
                                <input type="text" className="input w180" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                썸네일 이미지 <span className="red">*</span>
                            </th>
                            <td>
                                <div className="hotel_thumb_wrap">
                                    <span className="hotel_thumb">
                                        <img src="" alt="" id="preview" />
                                    </span>
                                </div>
                                <input
                                    type="file"
                                    onChange={(e) => readURL(e.target)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                호텔 이미지 <span className="red">*</span>
                                <br />
                                (최대 5개)
                            </th>
                            <td>
                                <div
                                    className="hotel_img_wrap"
                                    id="imageContainer"
                                >
                                    <span className="hotel_img"></span>{" "}
                                    <span className="hotel_img"></span>{" "}
                                    <span className="hotel_img"></span>{" "}
                                    <span className="hotel_img"></span>{" "}
                                    <span className="hotel_img"></span>{" "}
                                </div>
                                <input
                                    type="file"
                                    multiple
                                    onChange={(e) => readURLMulti(e.target)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                주소(국문) <span className="red">*</span>
                            </th>
                            <td className="hotel_add_wrap">
                                <div>
                                    {/* 우편번호 */}
                                    <input
                                        type="text"
                                        className="input w120 hold"
                                        id="zipcode"
                                        ref={zipcode}
                                        onClick={handle.openPost}
                                        onChange={(e) => {
                                            changeHotelHandler(e);
                                        }}
                                        readOnly
                                    />{" "}
                                    <Link
                                        className="tablebtn"
                                        onClick={handle.openPost}
                                    >
                                        우편번호찾기
                                    </Link>
                                </div>
                                <div>
                                    <input
                                        type="name"
                                        className="input w370 hold"
                                        id="addr1Ko"
                                        ref={addr1Ko}
                                        onClick={handle.openPost}
                                        onChange={(e) => {
                                            changeHotelHandler(e);
                                        }}
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <input
                                        type="name"
                                        className="input w370"
                                        id="addr2Ko"
                                        ref={addr2Ko}
                                        placeholder="상세 주소 (선택사항)"
                                        onChange={(e) => {
                                            changeHotelHandler(e);
                                        }}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                주소(영문) <span className="red">*</span>
                            </th>
                            <td className="hotel_add_wrap">
                                <div>
                                    <input
                                        type="text"
                                        className="input w120 hold"
                                        ref={zipcode_en}
                                        onClick={handle.openPost}
                                        onChange={(e) => {
                                            changeHotelHandler(e);
                                        }}
                                        readOnly
                                    />{" "}
                                    <Link
                                        className="tablebtn"
                                        onClick={handle.openPost}
                                    >
                                        우편번호찾기
                                    </Link>
                                </div>
                                <div>
                                    <input
                                        type="name"
                                        className="input w370 hold"
                                        onClick={handle.openPost}
                                        id="addr1En"
                                        ref={addr1En}
                                        onChange={(e) => {
                                            changeHotelHandler(e);
                                        }}
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <input
                                        type="name"
                                        className="input w370"
                                        id="addr2En"
                                        ref={addr2En}
                                        placeholder="상세 주소 (선택사항)"
                                        onChange={(e) => {
                                            changeHotelHandler(e);
                                        }}
                                    />
                                </div>
                                {/* 위도, 경도 */}
                                <input type="hidden" ref={latitude} />
                                <input type="hidden" ref={longitude} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                전화번호 <span className="red">*</span>
                            </th>
                            <td>
                                <div id="phone_num" className="m0">
                                    <input
                                        type="tel"
                                        className="input w120"
                                        id="phone_num1"
                                        defaultValue="010"
                                        readOnly
                                    />
                                    <input
                                        type="tel"
                                        className="input w120"
                                        id="phone_num2"
                                    />
                                    <input
                                        type="tel"
                                        className="input w120"
                                        id="phone_num3"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>전화번호 (해외)</th>
                            <td>
                                <div id="phone_num" className="m0">
                                    <select name="" id="" className="w100">
                                        <option defaultValue="">+82</option>
                                    </select>
                                    <input
                                        type="tel"
                                        className="input w100"
                                        id="inter_phone_num1"
                                        defaultValue="010"
                                        readOnly
                                    />
                                    <input
                                        type="tel"
                                        className="input w120"
                                        id="inter_phone_num2"
                                    />
                                    <input
                                        type="tel"
                                        className="input w120"
                                        id="inter_phone_num3"
                                    />
                                </div>
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
});

export default HotelDetailEssential;
