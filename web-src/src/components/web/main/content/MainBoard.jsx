import React from "react";
import { Box } from "@mui/material";

function MainBoard() {
  const faqItems = [
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
  ];

  const noticeItems = [
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
    {
      title: "메디씨티 포인트는 어디에서 확인 가능한가요?",
    },
  ];

  return (
    <div className="main_board">
      <div className="flex">
        <div className="main_faq">
          <div className="title">
            <h3>FAQ</h3>
            <p>자주묻는질문</p>
          </div>
          <ul>
            {faqItems.map((item, idx) => (
              <li key={`main_board_faq_${idx}`}>
                <a href="">
                  <h4 className="font-21">{item.title}</h4>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="main_notice">
          <div className="title">
            <h3>NOTICE</h3>
            <p>공지사항</p>
          </div>
          <ul>
            {noticeItems.map((item, idx) => (
              <li key={`main_board_notice_${idx}`}>
                <a href="">
                  <h4 className="font-21">{item.title}</h4>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainBoard;
