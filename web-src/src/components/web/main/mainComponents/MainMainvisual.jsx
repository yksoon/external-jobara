import { Link } from "react-router-dom";

const MainMainvisual = () => {
    return (
        <>
            <div id="mainvisual">
                <div class="main_txt">
                    <h2>
                        <img
                            src="img/web/main/maintxt.png"
                            alt="잡아라 페스티벌"
                            data-aos="zoom-in"
                            data-aos-duration="800"
                        />
                    </h2>
                    <p class="txt1">
                        <span>2023</span> 청년취업 일자리박람회
                    </p>
                    <p class="date">
                        2023. <span class="pink">9. 14</span> (목){" "}
                        <span class="blue">10:00 ~ 18:00</span>
                        <br />
                        제주대학교 체육관
                    </p>

                    <p class="host">
                        <Link href="">
                            <img src="img/web/main/host01.png" alt="교육부" />
                        </Link>
                        <Link href="">
                            <img
                                src="img/web/main/host02.png"
                                alt="한국연구재단"
                            />
                        </Link>
                        <Link href="">
                            <img
                                src="img/web/main/host03.png"
                                alt="제주특별자치도"
                            />
                        </Link>
                        <Link href="">
                            <img
                                src="img/web/main/host04.png"
                                alt="제주대학교"
                            />
                        </Link>
                        <Link href="">
                            <img
                                src="img/web/main/host05.png"
                                alt="제주대학교LINC사업단"
                            />
                        </Link>
                        <Link href="">
                            <img
                                src="img/web/main/host06.png"
                                alt="대학일자리센터"
                            />
                        </Link>
                        <Link href="">
                            <img src="img/web/main/host07.png" alt="어울림" />
                        </Link>
                        <Link href="">
                            <img
                                src="img/web/main/host08.png"
                                alt="제주산학융합원"
                            />
                        </Link>
                        <Link href="">
                            <img
                                src="img/web/main/host09_1.png"
                                alt="제주한라대학교"
                            />
                        </Link>
                        <Link href="">
                            <img
                                src="img/web/main/host11.png"
                                alt="제주관광대학교"
                            />
                        </Link>
                    </p>

                    <div
                        class="menu"
                        data-aos="fade-left"
                        data-aos-auration="800"
                        data-aos-delay="500"
                    >
                        <Link href="" class="m01 active">
                            박람회안내
                        </Link>
                        <Link href="" class="m02">
                            프로그램
                        </Link>
                        <Link href="" class="m03">
                            사전등록
                        </Link>
                        <Link href="" class="m04">
                            참여기업
                        </Link>
                        <Link href="" class="m05">
                            공지
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainMainvisual;
