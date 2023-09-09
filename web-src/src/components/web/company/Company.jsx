import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import readXlsxFile from "read-excel-file";
import SubHeader from "../common/SubHeader";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import { routerPath } from "webPath";
import { CommonOpenUrl } from "common/js/Common";

const Company = () => {
    let { companyName } = useParams();
    const [companyList, setCompanyList] = useState([]);
    const [companyData, setCompanyData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        xlxsParsing(companyName);

        // if (companyName !== "list") {
        //     getCompanyData();
        // }
    }, [companyName]);

    // 엑셀 파싱
    const xlxsParsing = async (companyName) => {
        const url = "/jobara_company_list.xlsx";
        const file = await (await fetch(url)).arrayBuffer();
        // const workbook = XLSX.read(file);

        const map = {
            label: "companyLabel",
            부스참여번호: "boothnum",
            방식: "type",
            기업명: "companyName",
            홈페이지: "homepageUrl",
        };

        let compArr = [];
        readXlsxFile(file, { map }).then(({ rows }) => {
            // `rows` is an array of rows
            // each row being an array of cells.
            // console.log(rows);

            const length = rows.length;
            for (let i = 0; i < length; i++) {
                if (rows[i]["companyLabel"]) {
                    compArr.push(rows[i]);
                }
            }

            if (companyName === "list") {
                setCompanyList(compArr);
            } else {
                const company = compArr.filter(
                    (e) => e.companyLabel === companyName
                );

                if (company.length !== 0) {
                    setCompanyData(company[0]);
                } else {
                    navigate(`${routerPath.web_company_url}/list`);
                }
            }

            // console.log(compArr);
        });
    };

    return (
        <>
            {/* 헤더 */}
            <SubHeader />

            {/* 서브컨텐츠     //S */}
            <div id="container" className="sub_container">
                <div id="content">
                    {companyName === "list" ? (
                        <>
                            <h2 id="subtitle">참여기업</h2>
                            <div className="company">
                                <ul>
                                    {/* 기업 부스 리스트보기 */}
                                    {companyList.length !== 0 &&
                                        companyList.map((item, idx) => (
                                            <li key={`company_list_${idx}`}>
                                                <Link
                                                    to={`${routerPath.web_company_url}/${item.companyLabel}`}
                                                >
                                                    {item.boothnum && (
                                                        <span className="boothnum">
                                                            {item.boothnum}
                                                        </span>
                                                    )}

                                                    <div className="company_logo">
                                                        <img
                                                            src={`img/web/logo/logo_${item.companyLabel}.png`}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <h3>{item.companyName}</h3>
                                                    <div>
                                                        {
                                                            {
                                                                부스참여: (
                                                                    <p className="company_booth">
                                                                        {
                                                                            item.type
                                                                        }
                                                                    </p>
                                                                ),
                                                                바로채용: (
                                                                    <p className="company_recruit">
                                                                        {
                                                                            item.type
                                                                        }
                                                                    </p>
                                                                ),
                                                                간접채용: (
                                                                    <p className="company_indirect">
                                                                        {
                                                                            item.type
                                                                        }
                                                                    </p>
                                                                ),
                                                            }[item.type]
                                                        }
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* 기업 부스 상세보기 */}
                            {Object.keys(companyData).length !== 0 && (
                                <div className="booth">
                                    <Link
                                        className="booth_home"
                                        onClick={(e) => {
                                            CommonOpenUrl(
                                                companyData.homepageUrl
                                            );
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
                                                `/img/web/booth/booth_${companyData.companyLabel}.png`
                                            );
                                            e.preventDefault();
                                        }}
                                    >
                                        <img
                                            src={`img/web/booth/booth_${companyData.companyLabel}.png`}
                                            alt={companyData.companyLabel}
                                        />
                                    </Link>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* 푸터 */}
            <Footer />
        </>
    );
};

export default Company;
