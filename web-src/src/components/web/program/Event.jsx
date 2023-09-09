import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";

const Event = () => {
    return (
        <>
            {/* 헤더 */}
            <SubHeader />

            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container">
                <div id="content">
                    <h2 id="subtitle">이벤트 프로그램</h2>
                    <div className="program pro_event">
                        <div className="over">
                            <table class="pro_table">
                                <colgroup>
                                    <col width="*" />
                                    <col width="11%"/>
                                    <col width="11%"/>
                                    <col width="11%"/>
                                    <col width="11%"/>
                                    <col width="11%"/>
                                    <col width="11%"/>
                                    <col width="11%"/>
                                    <col width="11%"/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>시간</th>
                                        <th colspan="8">프로그램</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="time">10:00~11:00</td>
                                        <td rowspan="8" className="sky">
                                            <span className="event_num">1</span>
                                            <h5>AI면접체험</h5>
                                            <p>기업에서 실제 사용중인 AI면접 프로그램을 이용한 면접 연습 및 자가진단</p>
                                        </td>
                                        <td></td>
                                        <td rowspan="8" className="pink">
                                            <span className="event_num">3</span>
                                            <h5>NCS모의고사</h5>
                                            <p>공공기관 및 대기업 취업 희망자 대상, NCS 모의고사 및 전략 특강 운영</p>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="time">11:00~12:00</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="time">12:00~13:00</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="time">13:00~14:00</td>
                                        <td></td>
                                        <td rowspan="5" className="red">
                                            <span className="event_num">4</span>
                                            <h5>프로필 사진 촬영</h5>
                                            <p>취업준비에 필요한 사진 촬영(현장 등록)</p>
                                        </td>
                                        <td rowspan="5" className="orange">
                                            <span className="event_num">5</span>
                                            <h5>퍼스널컬러</h5>
                                            <p>나에게 맞는 컬러 등 테스트를 통한 면접 대비 컨설팅</p>
                                        </td>
                                        <td></td>
                                        <td rowspan="5" className="mint">
                                            <span className="event_num">7</span>
                                            <h5>제주대학교 가족회사 홍보</h5>
                                            <p>제주대학교 가족회사 및 가족회사의 제품 또는 기업 홍보</p>
                                        </td>
                                        <td rowspan="5" className="blue">
                                            <span className="event_num">8</span>
                                            <h5>청년의날 주간 홍보</h5>
                                            <p>청년의날 주간의 시작 JOB-ARA !  청년의날 주간 행사 홍보 및 프로그램 안내</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="time">14:00~15:00</td>
                                        <td></td>
                                        <td className="bdr"></td>
                                    </tr>
                                    <tr>
                                        <td className="time">15:00~16:00</td>
                                        <td rowspan="2" className="long green">
                                            <span className="event_num">2</span>
                                            <h5>현직자토크콘서트</h5>
                                            <p>우수기업의 현직자를 초청하여 취업전략 토크 콘서트 및 소수 그룹 컨설팅 진행</p>
                                            <p><strong>참여기업: 아마존, LG, 카카오, 나이키, 아모레퍼시픽</strong></p>
                                        </td>
                                        <td className="bdr"></td>
                                    </tr>
                                    <tr>
                                        <td className="time">16:00~17:00</td>
                                        <td className="bdr"></td>
                                    </tr>
                                    <tr>
                                        <td className="time">17:00~17:50</td>
                                        <td></td>
                                        <td className="bdr long yellow">
                                            <span className="event_num">6</span>
                                            <h5>OX퀴즈 및 폐막식</h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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

export default Event;
