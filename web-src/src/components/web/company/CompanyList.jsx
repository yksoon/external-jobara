import { useLayoutEffect, useState } from "react";
import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";
import { Link } from "react-router-dom";
import readXlsxFile from "read-excel-file";
import { routerPath } from "webPath";

// "./잡아라_기업소개리스트_230828.xlsx"
const CompanyList = () => {
    const [companyList, setCompanyList] = useState([]);

    useLayoutEffect(() => {
        getCompanyData();
    }, []);

    const getCompanyData = () => {
        // setCompanyList(companyData);

        xlxsParsing();
    };

    const xlxsParsing = async () => {
        const url = "/잡아라_기업소개리스트.xlsx";
        const file = await (await fetch(url)).arrayBuffer();
        // const workbook = XLSX.read(file);

        const map = {
            label: "companyLabel",
            부스참여번호: "boothnum",
            방식: "type",
            기업명: "companyName",
            홈페이지: "homepageUrl",
        };

        readXlsxFile(file, { map }).then(({ rows }) => {
            // `rows` is an array of rows
            // each row being an array of cells.
            // console.log(rows);

            let compArr = [];
            const length = rows.length;
            for (let i = 0; i < length; i++) {
                if (rows[i]["companyLabel"]) {
                    compArr.push(rows[i]);
                }
            }

            setCompanyList(compArr);
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
                    <h2 id="subtitle">참여기업</h2>
                    <div className="company">
                        <ul>
                            {companyList.length !== 0 &&
                                companyList.map((item, idx) => (
                                    <li key={`company_list_${idx}`}>
                                        <Link
                                            to={`${
                                                routerPath.web_company_detail_url
                                            }/?label=${
                                                item.companyLabel
                                            }&homepageUrl=${encodeURIComponent(
                                                item.homepageUrl
                                            )}`}
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
                                                                {item.type}
                                                            </p>
                                                        ),
                                                        바로채용: (
                                                            <p className="company_recruit">
                                                                {item.type}
                                                            </p>
                                                        ),
                                                        간접채용: (
                                                            <p className="company_indirect">
                                                                {item.type}
                                                            </p>
                                                        ),
                                                    }[item.type]
                                                }
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            {/* <li>
                                <a href="">
                                    <span class="boothnum">02</span>
                                    <div class="company_logo">
                                        <img
                                            src="img/web/main/com37.png"
                                            alt=""
                                        />
                                    </div>
                                    <h3>한국지능정보사회진흥원</h3>
                                    <div>
                                        <p class="company_booth">부스참여</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span class="boothnum">03</span>
                                    <div class="company_logo">
                                        <img
                                            src="img/web/main/com01.png"
                                            alt=""
                                        />
                                    </div>
                                    <h3>엑세스랩 주식회사</h3>
                                    <div>
                                        <p class="company_recruit">바로채용</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span class="boothnum">04</span>
                                    <div class="company_logo">
                                        <img
                                            src="img/web/main/com33.png"
                                            alt=""
                                        />
                                    </div>
                                    <h3>주식회사 나눔에너지</h3>
                                    <div>
                                        <p class="company_booth">부스참여</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span class="boothnum">05</span>
                                    <div class="company_logo">
                                        <img
                                            src="img/web/main/com01.png"
                                            alt=""
                                        />
                                    </div>
                                    <h3>㈜캐플릭스</h3>
                                    <div>
                                        <p class="company_indirect">간접채용</p>
                                    </div>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>

            {/* 푸터 */}
            <Footer />
        </>
    );
};

export default CompanyList;
