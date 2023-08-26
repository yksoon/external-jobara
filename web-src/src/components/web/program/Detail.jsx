import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";
import { CommonOpenUrl } from "common/js/Common";
import { routerPath } from "webPath";

const Detail = () => {
    return (
        <>
            {/* 헤더 */}
            <SubHeader />

            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container">
                <div id="content">
                    <h2 id="subtitle">세부 프로그램</h2>
                    <div className="pro_detail">
						<div className="detail_step1">
							<div className="stepicon"><img src="img/web/main/picon01.png" alt=""/></div>
							<div className="detail_dot">
								<span className="color"></span>
								<span></span>
								<span></span>
							</div>
							<h4>STEP 01</h4>
							<h3>진로탐색</h3>
							<ul>
								<li>
									<img src="img/web/sub/pro_icon01.png" alt=""/>
									<h5>나를 알면 백전백승</h5>
									<p>버크만 진단 하나로 나의 MBTI 유형부터 내게 맞는 직무까지~ 내게 꼭 맞는 직업 찾기에 도전!</p>
									<p>전문가 컨설턴트와 함께하는 이력서&자기소개서 컨설팅</p>
									<div className="linebox">
										사전등록 → 버크만 진단서 개별 이메일 전송 → 진단서 제출 → 진단결과 확인(9/14, 이메일) → 현장상담(9/14)
									</div>
									<Link to={routerPath.web_signup_url}>
                                        사전등록 바로가기
                                    </Link>
								</li>
								<li>
									<img src="img/web/sub/pro_icon02.png" alt=""/>
									<h5>기업정보탐색</h5>
									<p>잡아라 페스티벌 참여하는 도내·외 기업의 정보 및 채용계획 정보 제공</p>
									<p>참여기업: 50개사</p>
								</li>
							</ul>
						</div>
						<div className="detail_step2">
							<div className="stepicon"><img src="img/web/main/picon02.png" alt="" /></div>
							<div className="detail_dot">
								<span className="color"></span>
								<span className="color"></span>
								<span></span>
							</div>
							<h4>STEP 02</h4>
							<h3>기업탐방</h3>
							<ul>
								<li>
									<img src="img/web/sub/pro_icon03.png" alt=""/>
									<h5>채용 정보 및 상담</h5>
									<p>50개의 참여기업 부스에서 1:1 직접상담을 통한 취업정보 제공</p>
								</li>
								<li>
									<img src="img/web/sub/pro_icon04.png" alt=""/>
									<h5>글로벌 JOB FAIR</h5>
									<p>해외 취업(채용) 상담</p>
									<p>글로벌 인턴십(현장실습) 상담</p>
								</li>
							</ul>
						</div>
						<div className="detail_step3">
							<div className="stepicon"><img src="img/web/main/picon03.png" alt=""/></div>
							<div className="detail_dot">
								<span className="color"></span>
								<span className="color"></span>
								<span className="color"></span>
							</div>
							<h4>STEP 03</h4>
							<h3>실전취업</h3>
							<ul>
								<li>
									<img src="img/web/sub/pro_icon06.png" alt=""/>
									<h5>AI면접 체험</h5>
									<p>실제 AI면접 체험을 통한 AI면접 연습 </p>
								</li>
								<li>
									<img src="img/web/sub/pro_icon07.png" alt=""/>
									<h5>NCS 모의고사</h5>
									<p>사전 신청자 대상 NCS 모의고사 및 전략 특강</p>
								</li>
								{/* <li>
									<img src="img/web/sub/pro_icon08.png" alt=""/>
									<h5>청년정책알기!</h5>
									<p>주요정책을 설명하고 홍보하며, 지원 받을 수 있는 방법 안내</p>
								</li> */}
								<li>
									<img src="img/web/sub/pro_icon09.png" alt=""/>
									<h5>현직자 토크 콘서트</h5>
									<p>아마존, LG전자, 아모레퍼시픽, 카카오, 나이키 현직자와 함께하는 토크 콘서트</p>
									<p>현직자와의 소규모 그룹형 멘토링</p>
								</li>
								<li>
									<img src="img/web/sub/pro_icon05.png" alt=""/>
									<h5>바로채용면접</h5>
									<p>사전 서류심사를 통과한 지원자의 직접면접 진행 후 현장에서 채용여부 확정</p>
									<p>취업 성공자에 대한 이벤트 진행</p>
									<Link to={routerPath.web_signup_url}>
                                        사전등록 바로가기
                                    </Link>
								</li>
							</ul>
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

export default Detail;
