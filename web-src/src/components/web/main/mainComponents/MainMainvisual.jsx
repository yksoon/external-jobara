import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { routerPath } from "webPath";

const MainMainvisual = () => {
    const viewSchedule = useSelector((state) => state.schedule.viewSchedule);
    const [startYear, setStartYear] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [startDay, setStartDay] = useState("");
    const [dayOfWeek, setDayOfWeek] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [spot, setSpot] = useState("");
    const [imgChange, setImgChange] = useState(false);

    useEffect(() => {
        if (Object.keys(viewSchedule).length !== 0) {
            const startDate = viewSchedule.start_date;
            const startDateArr = startDate.split("-");

            // console.log(startDateArr);
            setStartYear(startDateArr[0]);
            setStartMonth(startDateArr[1]);
            setStartDay(startDateArr[2]);

            setDayOfWeek(viewSchedule.start_week);

            let startTimeArr = viewSchedule.start_time.split(":");
            setStartTime(startTimeArr[0] + ":" + startTimeArr[1]);

            let endTimeArr = viewSchedule.end_time.split(":");
            setEndTime(endTimeArr[0] + ":" + endTimeArr[1]);

            setSpot(viewSchedule.spot);
        }
    }, [viewSchedule]);

    const imgLoded = (e) => {
        // console.log(e);
        setImgChange(true);
    };

    // URL 열기
    const openUrl = (url) => {
        window.open(url, "_blank", "noopener, noreferrer");
    };

    return (
        <>
            <div id="mainvisual">
                <div className="main_txt">
                    <h2>
                        <img
                            src="img/web/main/maintxt.png"
                            alt="잡아라 페스티벌"
                            data-aos="zoom-in"
                            data-aos-duration="800"
                            onLoad={(e) => imgLoded(e)}
                        />
                    </h2>
                    <p className="txt1">
                        <span>2023</span> 청년취업 일자리박람회
                    </p>

                    {imgChange &&
                        (startYear ? (
                            <p className="date">
                                {startYear && startYear}.{" "}
                                <span className="pink">
                                    {startMonth && startMonth}.{" "}
                                    {startDay && startDay}
                                </span>{" "}
                                ({dayOfWeek}){" "}
                                <span className="blue">
                                    {startTime} ~ {endTime}
                                </span>
                                <br />
                                {spot}
                            </p>
                        ) : (
                            <div
                                className="date"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Skeleton
                                            variant="text"
                                            sx={{ fontSize: "1.5rem" }}
                                            width={350}
                                        />
                                    </p>
                                    <p
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Skeleton
                                            variant="text"
                                            sx={{
                                                fontSize: "1rem",
                                                textAlign: "center",
                                            }}
                                            width={300}
                                        />
                                    </p>
                                </div>
                            </div>
                        ))}

                    {imgChange && (
                        <p className="host">
                            <Link
                                onClick={() =>
                                    openUrl("https://www.moe.go.kr/")
                                }
                            >
                                <img
                                    src="img/web/main/host01.png"
                                    alt="교육부"
                                />
                            </Link>
                            <Link
                                onClick={() =>
                                    openUrl("https://www.nrf.re.kr/")
                                }
                            >
                                <img
                                    src="img/web/main/host02.png"
                                    alt="한국연구재단"
                                />
                            </Link>
                            <Link
                                onClick={() =>
                                    openUrl("https://www.jeju.go.kr/")
                                }
                            >
                                <img
                                    src="img/web/main/host03.png"
                                    alt="제주특별자치도"
                                />
                            </Link>
                            <Link
                                onClick={() =>
                                    openUrl("https://www.jejunu.ac.kr/")
                                }
                            >
                                <img
                                    src="img/web/main/host04.png"
                                    alt="제주대학교"
                                />
                            </Link>
                            <Link
                                onClick={() =>
                                    openUrl("https://lincplus.jejunu.ac.kr/")
                                }
                            >
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
                                <img
                                    src="img/web/main/host07.png"
                                    alt="어울림"
                                />
                            </Link>
                            <Link
                                onClick={() =>
                                    openUrl("http://www.jejuiucc.or.kr/")
                                }
                            >
                                <img
                                    src="img/web/main/host08.png"
                                    alt="제주산학융합원"
                                />
                            </Link>
                            <Link
                                onClick={() =>
                                    openUrl("https://www.chu.ac.kr/")
                                }
                            >
                                <img
                                    src="img/web/main/host09_1.png"
                                    alt="제주한라대학교"
                                />
                            </Link>
                            <Link
                                onClick={() =>
                                    openUrl("https://www.jtu.ac.kr/")
                                }
                            >
                                <img
                                    src="img/web/main/host11.png"
                                    alt="제주관광대학교"
                                />
                            </Link>
                        </p>
                    )}

                    <div
                        className="menu"
                        data-aos="fade-left"
                        data-aos-auration="800"
                        data-aos-delay="500"
                    >
                        <Link to={routerPath.web_intro_url} className="m01">
                            박람회안내
                        </Link>
                        <Link to="" className="m02">
                            프로그램
                        </Link>
                        <Link to={routerPath.web_signup_url} className="m03">
                            사전등록
                        </Link>
                        <Link
                            onClick={() =>
                                openUrl(
                                    "https://lincplus.jejunu.ac.kr/programs/notice.htm?act=view&seq=1364"
                                )
                            }
                            className="m04"
                        >
                            참여기업
                        </Link>
                        {/* <Link to="" className="m05">
                            공지
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainMainvisual;
