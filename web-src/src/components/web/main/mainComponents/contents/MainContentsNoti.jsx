import { Link } from "react-router-dom";

const MainContentsNoti = () => {
    return (
        <>
            <div className="section03">
                <div className="notice">
                    <h3>공지사항</h3>
                    <ul>
                        <li>
                            <Link href="">
                                공지사항이 작성되면 노출되는 영역입니다.
                            </Link>
                            <span className="date">2023-08-10</span>
                        </li>
                        <li>
                            <Link href="">
                                공지사항이 작성되면 노출되는 영역입니다.
                            </Link>
                            <span className="date">2023-08-10</span>
                        </li>
                        <li>
                            <Link href="">
                                공지사항이 작성되면 노출되는 영역입니다.
                            </Link>
                            <span className="date">2023-08-10</span>
                        </li>
                        <li>
                            <Link href="">
                                공지사항이 작성되면 노출되는 영역입니다.
                            </Link>
                            <span className="date">2023-08-10</span>
                        </li>
                        <li>
                            <Link href="">
                                공지사항이 작성되면 노출되는 영역입니다.
                            </Link>
                            <span className="date">2023-08-10</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MainContentsNoti;
