import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";
import { CommonOpenUrl } from "common/js/Common";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Intro = () => {
    return (
        <>
            {/* 헤더 */}
            <SubHeader />

            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container">
                <div id="content">
                    <h2 id="subtitle">박람회 소개</h2>
                    <div className="registration">
                        <table className="regi_form">
                            <colgroup>
                                <col width="16%" />
                                <col width="*" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>행사명</th>
                                    <td>
                                        2023 JOB-ARA FESTIVAL(일자리 박람회)
                                    </td>
                                </tr>
                                <tr>
                                    <th>행사일</th>
                                    <td>
                                        <b>2023. 9. 14.(목) 13:00 ~ 18:00</b>
                                    </td>
                                </tr>
                                <tr>
                                    <th>장소</th>
                                    <td>
                                        제주대학교 체육관{" "}
                                        <Link
                                            onClick={() =>
                                                // url열기
                                                CommonOpenUrl(
                                                    "http://kko.to/m34X0ZnoZp"
                                                )
                                            }
                                            className="table_btn"
                                        >
                                            <span>
                                                <MapOutlinedIcon />
                                            </span>{" "}
                                            지도 바로가기
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th>참가대상</th>
                                    <td>
                                        제주대학교 재학생 및 구직 관심 대상자 등
                                        1,500명 내외
                                    </td>
                                </tr>
                                <tr>
                                    <th>참여기업</th>
                                    <td>48개사 내외 (도내외 기업 및 기관)</td>
                                </tr>
                                <tr>
                                    <th>주최</th>
                                    <td className="imgtd">
                                        <img
                                            src="img/web/main/host04.png"
                                            alt="제주대학교"
                                        />{" "}
                                        &nbsp;&nbsp;{" "}
                                        <img
                                            src="img/web/main/host01.png"
                                            alt="교육부"
                                        />{" "}
                                        &nbsp;&nbsp;{" "}
                                        <img
                                            src="img/web/main/host02.png"
                                            alt="한국연구재단"
                                        />&nbsp;&nbsp;{" "}
                                        <img
                                            src="img/web/main/host03.png"
                                            alt="제주특별자치도"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>주관</th>
                                    <td>
                                        제주특별자치도, 제주대학교 LINC
                                        3.0사업단,
                                        진로취업과‧대학일자리플러스센터,
                                        제주대학교 총학생회, 제주산학융합원,
                                        한국중부발전㈜, 한국산업인력공단,
                                        제주관광대학교 LINC3.0사업단,
                                        제주한라대학교 LINC3.0사업단
                                    </td>
                                </tr>
                                <tr>
                                    <th>프로그램</th>
                                    <td>
                                        <ul className="list_dot">
                                            <li>
                                                <b>진로탐색</b> - 진로탐색 (버크만 진단 등) , 이력서 및 자기소개서 컨설팅
                                            </li>
                                            <li>
                                                <b>기업탐방</b> - 참여기업 채용 정보 확인 및 채용상담, 글로벌 JOB FAIR
                                            </li>
                                            <li>
                                                <b>취업대비 실전!</b> -  현장 채용면접, AI 면접체험, NCS모의고사, 현직자토크콘서트 등
                                            </li>
                                            <li>
                                                <b>이벤트</b> - 프로필촬영, 나만의 명함 만들기, 가족회사 홍보관, 경품 행사 등

                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* 서브컨텐츠     //E */}
            {/* 푸터 */}
            <Footer />
        </>
    );
};

export default Intro;
