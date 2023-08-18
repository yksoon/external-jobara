import { Link } from "react-router-dom";

const MainContentsProgram = () => {
    // URL 열기
    const openUrl = (url) => {
        window.open(url, "_blank", "noopener, noreferrer");
    };

    return (
        <>
            <div className="section02">
                <div
                    className="bar01"
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-easing="linear"
                >
                    <img src="img/web/main/bar_green.png" alt="" />
                </div>
                <div
                    className="bar02"
                    data-aos="fade-left"
                    data-aos-delay="800"
                    data-aos-easing="linear"
                >
                    <img src="img/web/main/bar_blue.png" alt="" />
                </div>
                <div className="cloud">
                    <img src="img/web/main/cloud_pink.png" alt="" />
                </div>

                <div className="program">
                    <h3>프로그램</h3>
                    <ul>
                        <li className="p01" data-aos="flip-left">
                            <span className="num">01</span>
                            진로탐색
                            <span className="icon">
                                <img src="img/web/main/picon01.png" alt="" />
                            </span>
                        </li>
                        <li
                            className="p02"
                            data-aos="flip-left"
                            data-aos-delay="300"
                        >
                            <span className="num">02</span>
                            기업탐색
                            <span className="icon">
                                <img src="img/web/main/picon02.png" alt="" />
                            </span>
                        </li>
                        <li
                            className="p03"
                            data-aos="flip-left"
                            data-aos-delay="600"
                        >
                            <span className="num">03</span>
                            면접체험
                            <span className="icon">
                                <img src="img/web/main/picon03.png" alt="" />
                            </span>
                        </li>
                        <li
                            className="p04"
                            data-aos="flip-left"
                            data-aos-delay="900"
                        >
                            <span className="num">04</span>
                            NCS 모의고사
                            <span className="icon">
                                <img src="img/web/main/picon04.png" alt="" />
                            </span>
                        </li>
                        <li
                            className="p05"
                            data-aos="flip-left"
                            data-aos-delay="1200"
                        >
                            <span className="num">05</span>
                            현직자 토크콘서트
                            <span className="icon">
                                <img src="img/web/main/picon05.png" alt="" />
                            </span>
                        </li>
                        <li
                            className="p06"
                            data-aos="flip-left"
                            data-aos-delay="1500"
                        >
                            <span className="num">06</span>
                            기타 이벤트
                            <span className="icon">
                                <img src="img/web/main/picon06.png" alt="" />
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="company">
                    <h3>참여기업</h3>
                    <div
                        className="logobox"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <Link
                            onClick={() => openUrl("https://www.jejuair.net/")}
                        >
                            <img src="img/web/main/com01.png" alt="제주항공" />
                        </Link>
                        <Link
                            onClick={() => openUrl("https://jejusinh.nonghyup.com/user/indexMain.do?siteId=jejusinh")}
                        >
                            <img src="img/web/main/com02.png" alt="농협은행" />
                        </Link>
                        <Link onClick={() => openUrl("https://www.e-jejubank.com/JeJuBankInfo.do")}>
                            <img src="img/web/main/com03.png" alt="제주은행" />
                        </Link>
                        <Link onClick={() => openUrl("")}>
                            <img
                                src="img/web/main/com04.png"
                                alt="그랜드하야트 제주"
                            />
                        </Link>
                        <Link onClick={() => openUrl("http://www.jwmarriottjeju.co.kr/")}>
                            <img
                                src="img/web/main/com05.png"
                                alt="jw메리어트 제주"
                            />
                        </Link>
                        <Link onClick={() => openUrl("http://kalhotel.co.kr ")}>
                            <img
                                src="img/web/main/com06.png"
                                alt="칼호텔서귀포"
                            />
                        </Link>
                        <Link onClick={() => openUrl("https://www.shilla.net/jeju")}>
                            <img
                                src="img/web/main/com07.png"
                                alt="더신라제주"
                            />
                        </Link>
                        <Link onClick={() => openUrl("https://www.thepinx.co.kr")}>
                            <img src="img/web/main/com08.png" alt="skpinx" />
                        </Link>
                        <Link onClick={() => openUrl("https://www.xslab.co.kr/default/")}>
                            <img src="img/web/main/com09.png" alt="xslab" />
                        </Link>
                        <Link onClick={() => openUrl("https://www.goorm.io/")}>
                            <img src="img/web/main/com10.png" alt="goorm" />
                        </Link>
                        <Link onClick={() => openUrl("http://itnewcorp.com")}>
                            <img src="img/web/main/com11.png" alt="itnew" />
                        </Link>
                        <Link onClick={() => openUrl("https://www.wayplus.co.kr/")}>
                            <img src="img/web/main/com12.png" alt="wayplus" />
                        </Link>
                        <Link>
                            <img src="img/web/main/com13.png" alt="leaflog" />
                        </Link>
                        <Link onClick={() => openUrl("https://www.tilon.com/home")}>
                            <img src="img/web/main/com14.png" alt="tilonsoft" />
                        </Link>
                        <Link onClick={() => openUrl("http://www.intothecafe.co.kr/")}>
                            <img src="img/web/main/com15.png" alt="농업회사법인인투주식회사" />
                        </Link>
                        <Link onClick={() => openUrl("http://www.hallasan.co.kr/index.php")}>
                            <img
                                src="img/web/main/com16.png"
                                alt="한라산소주"
                            />
                        </Link>
                        <Link onClick={() => openUrl("http://www.jejumayu.com/")}>
                            <img src="img/web/main/com17.png" alt="제주마유㈜" />
                        </Link>
                        <Link onClick={() => openUrl("https://pitterpetter.com/")}>
                            <img
                                src="img/web/main/com18.png"
                                alt="pitterpetter"
                            />
                        </Link>
                        <Link onClick={() => openUrl("https://kcg.go.kr/jejucgh/main.do")}>
                            <img
                                src="img/web/main/com19.png"
                                alt="해양경찰청"
                            />
                        </Link>
                        <Link onClick={() => openUrl("https://www.kaflix.com/")}>
                            <img src="img/web/main/com20.png" alt="kaflix" />
                        </Link>
                        <Link onClick={() => openUrl("https://www.ncf.or.kr/")}>
                            <img src="img/web/main/com21.png" alt="넥스트챌린지" />
                        </Link>
                        <Link onClick={() => openUrl("http://jejusquare.kr")}>
                            <img
                                src="img/web/main/com22.png"
                                alt="JEJUSQUARE"
                            />
                        </Link>
                        <Link onClick={() => openUrl("https://www.981park.com/")}>
                            <img src="img/web/main/com23.png" alt="모노리스제주파크(981파크)" />
                        </Link>
                        <Link onClick={() => openUrl("https://mombly.kr/")}>
                            <img src="img/web/main/com24.png" alt="MOMBLY" />
                        </Link>
                        <Link onClick={() => openUrl("https://www.deslumieres.co.kr/bunker")}>
                            <img src="img/web/main/com25.png" alt="빛의 벙커/ (주)티모넷" />
                        </Link>
                        <Link onClick={() => openUrl("http://www.jejuenergy.or.kr/")}>
                            <img
                                src="img/web/main/com26.png"
                                alt="제주에너지공사"
                            />
                        </Link>
                        <Link onClick={() => openUrl("https://www.komipo.co.kr/kor/main/main.do")}>
                            <img
                                src="img/web/main/com27.png"
                                alt="한국중부발전"
                            />
                        </Link>
                        <Link onClick={() => openUrl("https://home.kepco.co.kr ")}>
                            <img src="img/web/main/com28.png" alt="한국전력" />
                        </Link>
                        <Link onClick={() => openUrl("https://kcg.go.kr/jejucgh/main.do")}>
                            <img src="img/web/main/com29.png" alt="KT" />
                        </Link>
                        <Link onClick={() => openUrl("https://www.kctvjeju.com/")}>
                            <img src="img/web/main/com30.png" alt="KCTV" />
                        </Link>
                        <Link onClick={() => openUrl("https://www.neople.co.kr")}>
                            <img src="img/web/main/com31.png" alt="NEOPLE" />
                        </Link>
                        <Link>
                            <img
                                src="img/web/main/com32.png"
                                alt="JEJUINDRONE"
                            />
                        </Link>
                        <Link onClick={() => openUrl("https://www.nanoomenergy.com/")}>
                            <img
                                src="img/web/main/com33.png"
                                alt="나눔에너지"
                            />
                        </Link>
                        <Link onClick={() => openUrl("https://www.daeeun.net/")}>
                            <img src="img/web/main/com34.png" alt="대은계전" />
                        </Link>
                        <Link onClick={() => openUrl("https://www.si-imaging.com/kr/")}>
                            <img src="img/web/main/com35.png" alt="SIIS" />
                        </Link>
                        <Link onClick={() => openUrl("http://www.windetect.co.kr/")}>
                            <img src="img/web/main/com36.png" alt="WINDETECT" />
                        </Link>
                        <Link onClick={() => openUrl("https://www.nia.or.kr/site/nia_kor/main.do")}>
                            <img
                                src="img/web/main/com37.png"
                                alt="한국지능정보사회진흥원"
                            />
                        </Link>
                        <Link onClick={() => openUrl("ijtohr@ijto.or.kr")}>
                            <img
                                src="img/web/main/com38.png"
                                alt="제주관광공사"
                            />
                        </Link>
                        <Link onClick={() => openUrl("https://www.jpdc.co.kr/index.htm")}>
                            <img
                                src="img/web/main/com39.png"
                                alt="제주특별자치도개발공사"
                            />
                        </Link>
                        <Link onClick={() => openUrl("http://www.nps.or.kr")}>
                            <img
                                src="img/web/main/com40.png"
                                alt="국민연금공단"
                            />
                        </Link>
                        <Link onClick={() => openUrl("https://www.jdcenter.com/main.cs")}>
                            <img
                                src="img/web/main/com41.png"
                                alt="제주국제자유도시개발센터"
                            />
                        </Link>
                        <Link onClick={() => openUrl("http://jpmeng.co.kr/index.php")}>
                            <img src="img/web/main/com42.png" alt="JPM" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContentsProgram;
