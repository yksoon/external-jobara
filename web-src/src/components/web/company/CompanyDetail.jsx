import { useParams } from "react-router";
import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";

const CompanyDetail = () => {
    const { label } = useParams();

    console.log(label);
    return (
        <>
            {/* 헤더 */}
            <SubHeader />

            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container">
                <div id="content"></div>
            </div>

            {/* 푸터 */}
            <Footer />
        </>
    );
};

export default CompanyDetail;
