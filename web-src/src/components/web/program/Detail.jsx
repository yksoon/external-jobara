import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";
import { CommonOpenUrl } from "common/js/Common";

const Detail = () => {
    return (
        <>
            {/* 헤더 */}
            <SubHeader />

            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container">
                <div id="content">
                    <h2 id="subtitle">세부프로그램</h2>
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
								<p>버크만 진단을 통한 나에게 맞는 직업 찾기</p>
								<p>이력서 & 자기소개서 작성 컨설팅</p>
							</li>
							<li>
								<img src="img/web/sub/pro_icon02.png" alt=""/>
								<h5>기업정보탐색</h5>
								<p>참여기업 사전정보 공개(온라인) 및 현장 정보제공</p>
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
								<p>참여기업 부스 운영을 통한 기업 채용 정보 제공 및 상담</p>
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
								<p>취업 선호 기업에 입사한 실무자와 함께하는 취업전략 토크콘서트</p>
							</li>
							<li>
								<img src="img/web/sub/pro_icon05.png" alt=""/>
								<h5>바로채용면접</h5>
								<p>사전 서류심사를 통과한 지원자의 직접면접 진행 후 현장에서 채용여부 확정</p>
								<p>취업 성공자에 대한 이벤트 진행</p>
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
