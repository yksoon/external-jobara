import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer_content">
                <img src="/img/common/logo.png" alt="" />
                <ul className="sitemap">
                    <li>
                        <Link to="">회사소개</Link>
                    </li>
                    <li>
                        <Link to="">서비스 소개</Link>
                    </li>
                    <li>
                        <Link to="">공지사항</Link>
                    </li>
                    <li>
                        <Link to="" className="blue">
                            이용약관
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="blue">
                            개인정보처리방침
                        </Link>
                    </li>
                    <li>
                        <Link to="">고객센터</Link>
                    </li>
                    <li>
                        <Link to="">제휴문의</Link>
                    </li>
                </ul>
                <address>
                    법인명:(주)메디씨티 | 경기도 고양시 일산동구 무궁화로
                    성우사카르타워 43-55, 304호 | 대표:박성민 |
                    사업자등록번호:588-86-02555
                    <br />
                    대표전화 : 031-000-0000 | 이메일 : support@medi-city.co.kr
                    <br />
                    통신판매번호:제2023-경기고양-12345호 | 개인정보관리책임자 :
                    백광동 | 메일 : security@medi-city.co.kr |
                    Copyright©Medi-City All Rights Reserved.
                </address>
            </div>
        </footer>
    );
}

export default Footer;
