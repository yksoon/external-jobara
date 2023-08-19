import { useEffect, useState } from "react";
import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { routerPath } from "webPath";

const Location = () => {
    const [isNeedUpdate, setIsNeedUpdate] = useState(true);
    // useEffect(() => {
    //     new daum.roughmap.Lander({
    //         timestamp: "1692185036919",
    //         key: "2fuwn",
    //         mapHeight: "400",
    //     }).render();
    // }, []);

    useEffect(() => {
        InstallScript();
    }, [isNeedUpdate]);

    const executeScript = () => {
        const scriptTag = document.createElement("script");
        const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
            "timestamp" : "1692185036919",
            "key" : "2fuwn",
            "mapHeight" : "400"
        }).render();`);
        scriptTag.appendChild(inlineScript);
        document.body.appendChild(scriptTag);
    };

    const InstallScript = () => {
        (() => {
            // var c = window.location.protocol === "https:" ? "https:" : "http:";
            var c = "https:";
            var a = "16137cec";

            window.daum = {};
            if (
                window.daum &&
                window.daum.roughmap &&
                window.daum.roughmap.cdn
            ) {
                return;
            }
            window.daum = window.daum || {};
            window.daum.roughmap = {
                cdn: a,
                URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
                url_protocal: c,
            };
            var b =
                c +
                "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
                a +
                "/roughmapLander.js";

            // document.write -> doumnet.body.append로 수정
            const scriptTag = document.createElement("script");
            scriptTag.src = b;
            document.body.append(scriptTag);
            scriptTag.onload = () => {
                executeScript();
            };
        })();
    };

    return (
        <>
            {/* 헤더 */}
            <SubHeader />

            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container">
                <div id="content">
                    <h2 id="subtitle">행사장소</h2>
                    <div className="registration venue">
                        <div>
                            {/* * 카카오맵 - 지도퍼가기 */}
                            {/* 1. 지도 노드  */}
                            <div
                                id="daumRoughmapContainer1692185036919"
                                className="root_daum_roughmap root_daum_roughmap_landing"
                                style={{ width: "100%" }}
                            ></div>
                        </div>
                        <br />
                        <table className="regi_form">
                            <colgroup>
                                <col width="16%" />
                                <col width="*" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>주소</th>
                                    <td>
                                        63243 제주특별자치도 제주시 제주대학로
                                        102(아라일동,제주대학교)
                                    </td>
                                </tr>
                                <tr>
                                    <th>연락처</th>
                                    <td>
                                        Tel. LINC3.0사업단 이수민 064-754-4470
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="venue_bus">
                            <div className="linebox">
                                <h4>
                                    제주국제공항{" "}
                                    <span>
                                        <KeyboardDoubleArrowRightOutlinedIcon />
                                    </span>{" "}
                                    제주대학교 아라캠퍼스
                                </h4>
                                <div>
                                    <h5>
                                        제주국제공항(구제주방면) 정류장 승차 :
                                        환승없음 (약 1시간 소요)
                                    </h5>
                                    <p>
                                        365, 3003(심야){" "}
                                        <span>
                                            <ArrowForwardOutlinedIcon />
                                        </span>{" "}
                                        제주대학교 정류장 하차
                                    </p>
                                </div>
                                <div>
                                    <h5>
                                        제주국제공항(표선, 성산, 남원) 정류장
                                        승차 : 환승 1회 (약 40~50분 소요)
                                    </h5>
                                    <p>
                                        112, 122, 132{" "}
                                        <span>
                                            <ArrowForwardOutlinedIcon />
                                        </span>{" "}
                                        제주대학교 병원 정류장 환승{" "}
                                        <span>
                                            <ArrowForwardOutlinedIcon />
                                        </span>{" "}
                                        270, 341, 342, 345, 346, 351, 352, 355,
                                        356, 360, 365, 366(평일), 446, 447, 455,
                                        477, 3003(심야){" "}
                                        <span>
                                            <ArrowForwardOutlinedIcon />
                                        </span>{" "}
                                        제주대학교 정류장 하차
                                    </p>
                                </div>
                            </div>
                            <div className="linebox">
                                <h4>
                                    제주시청{" "}
                                    <span>
                                        <KeyboardDoubleArrowRightOutlinedIcon />
                                    </span>{" "}
                                    제주대학교 아라캠퍼스
                                </h4>
                                <div>
                                    <h5>
                                        제주시청 정류장 승차 : 환승없음 (약 25분
                                        소요)
                                    </h5>
                                    <p>
                                        341, 342, 351, 352, 355, 360, 365, 446,
                                        447, 455, 3003(심야){" "}
                                        <span>
                                            <ArrowForwardOutlinedIcon />
                                        </span>{" "}
                                        제주대학교 정류장 하차
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 서브컨텐츠     //E */}

            {/* 푸터 */}
            <Footer />
        </>
    );
};

export default Location;
