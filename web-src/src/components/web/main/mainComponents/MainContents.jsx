import MainContentsInfo from "./contents/MainContentsInfo";
import MainContentsNoti from "./contents/MainContentsNoti";
import MainContentsProgram from "./contents/MainContentsProgram";
import MainContentsTalk from "./contents/MainContentsTalk";

const MainContents = () => {
    return (
        <>
            <div id="container">
                {/* 인포 */}
                <MainContentsInfo />

                {/* 프로그램, 참여기업 */}
                <MainContentsProgram />

                {/* 공지사항 */}
                {/* <MainContentsNoti /> */}

                {/* 응원 댓글 */}
                <MainContentsTalk />
                <br />
            </div>
        </>
    );
};

export default MainContents;
