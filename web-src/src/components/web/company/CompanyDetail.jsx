import { useLocation, useParams } from "react-router";
import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";
import { Link, useSearchParams } from "react-router-dom";
import { CommonOpenUrl } from "common/js/Common";
import { useEffect } from "react";

const CompanyDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { pathname } = useLocation();

    const label = searchParams.get("label");
    const homepageUrl = decodeURIComponent(searchParams.get("homepageUrl"));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {/* 헤더 */}
            <SubHeader />

            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container">
                <div id="content">
                    <div className="booth">
                        <Link
                            className="booth_home"
                            onClick={(e) => {
                                CommonOpenUrl(homepageUrl);
                                e.preventDefault();
                            }}
                        >
                            Homepage
                        </Link>
                        <p className="mobile_text">
                            * 이미지를 클릭하면 크게 볼 수 있습니다.
                        </p>
                        <Link
                            onClick={(e) => {
                                CommonOpenUrl(
                                    `/img/web/booth/booth_${label}.png`
                                );
                                e.preventDefault();
                            }}
                        >
                            <img
                                src={`img/web/booth/booth_${label}.png`}
                                alt={label}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* 푸터 */}
            <Footer />
        </>
    );
};

export default CompanyDetail;
