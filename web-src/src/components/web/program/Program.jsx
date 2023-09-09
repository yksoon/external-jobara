import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";

const Program = () => {
    return (
        <>
            {/* 헤더 */}
            <SubHeader />

            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container">
                <div id="content">
                    <h3 className="title_chap">
                        <span>2023 잡아라 페스티벌</span>에 당신을 초대합니다!
                    </h3>
                    <h2 id="subtitle">행사일정</h2>
                    <div className="program">
                        <table className="pro_table">
                            <colgroup>
                                <col width="*" />
                                <col width="22%" />
                                <col width="22%" />
                                <col width="22%" />
                                <col width="22%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>시간</th>
                                    <th colSpan="3">프로그램</th>
                                    <th>개회식</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="time">11:00~12:00</td>
                                    <td colSpan="3">
                                        기업 오리엔테이션 및 Company Play
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="time">12:00~13:00</td>
                                    <td colSpan="3" className="break">
                                        점심시간
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="time">13:00~14:00</td>
                                    <td rowSpan="4" className="step step1">
                                        <span>STEP 1</span>
                                        진로, 직무 탐색 및 이력서, 자기소개서
                                        컨설팅
                                    </td>
                                    <td rowSpan="4" className="step step2">
                                        <span>STEP 2</span>
                                        참여기업 채용 정보 확인 및 채용상담,
                                        글로벌 JOB FAIR
                                    </td>
                                    <td rowSpan="4" className="step step3">
                                        <span>STEP 3</span>
                                        바로채용면접, AI 면접체험, NCS모의고사,
                                        현직자토크콘서트 등
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="time">14:00~15:00</td>
                                    <td className="welcome">개회식</td>
                                </tr>
                                <tr>
                                    <td className="time">15:00~16:00</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="time">16:00~17:00</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="time">17:00~17:50</td>
                                    <td colSpan="3">경품추첨 & 폐회</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <p>※ 운영에 따라 일정이 변경될 수 있습니다.</p>
                    </div>
                </div>
            </div>
            {/* 서브컨텐츠     //E */}
            {/* 푸터 */}
            <Footer />
        </>
    );
};

export default Program;
