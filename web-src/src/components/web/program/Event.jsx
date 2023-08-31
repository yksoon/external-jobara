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
                    <div className="pro_event">
                        <div className="prepare">
                            <img
                                src="img/web/main/maintxt.png"
                                alt="잡아라 페스티벌"
                            />
                            <p>준비중입니다.</p>
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
