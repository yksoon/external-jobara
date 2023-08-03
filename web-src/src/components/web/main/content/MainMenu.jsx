import { React } from "react";

function MainMenu({ props }) {
  const items = [
    {
      imgUrl: "img/main/quick01.png",
      title: "전체",
    },
    {
      imgUrl: "img/main/quick02.png",
      title: "MEDI POINT",
    },
    {
      imgUrl: "img/main/quick03.png",
      title: "호텔 특가",
    },
    {
      imgUrl: "img/main/quick04.png",
      title: "MEDI ART",
    },
    {
      imgUrl: "img/main/quick05.png",
      title: "세무/회계 컨설팅",
    },
    {
      imgUrl: "img/main/quick06.png",
      title: "MICE/PCO",
    },
    {
      imgUrl: "img/main/quick07.png",
      title: "K-MEDI CREATOR",
    },
    {
      imgUrl: "img/main/quick08.png",
      title: "MYPAGE",
    },
  ];

  return (
    <>
      <div className="quick">
        <div className="title">
          <h3>메디씨티에서 다양한 혜택을 제공합니다!</h3>
        </div>
        <ul>
          {items.map((item, idx) => (
            <li key={`main_quick_${idx}`}>
              <a href="sitemap.html">
                <span>
                  <img src={item.imgUrl} alt="" />
                </span>
                <p>{item.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MainMenu;
