import { createBlogContentThumbnail } from "./blogContentThumbnail.js";
import { recommendTopic } from "./recommendedTopics.js";
import { recommendStaffPick } from "./recommendedStaffPick.js";

document.addEventListener("DOMContentLoaded", function () {
  // 블로그 콘텐츠 썸네일을 추가하는 함수 호출
  const blogContainer = document.querySelector(".blog-content-container");
  const thumbnailsData = Array(33).fill({
    profileImgSrc: "./images/content.png", // 프로필 이미지 경로
    nickname: "Plaban Nayak", // 닉네임
    titleText: "Build A Financial Analyst Agent Using CrewAI and LlamaIndex", // 블로그 제목
    excerptText: "Introduction", // 블로그 컨텐츠 첫 문장
    thumbnailImgSrc: "path/to/thumbnail.jpg", // 썸네일 이미지 경로
    dateText: "3d ago", // 날짜
    likesCount: 33, // 좋아요 수
    commentsCount: 1, // 댓글 수
  });

  thumbnailsData.forEach((data) => {
    const thumbnail = createBlogContentThumbnail(
      data.profileImgSrc,
      data.nickname,
      data.titleText,
      data.excerptText,
      data.thumbnailImgSrc,
      data.dateText,
      data.likesCount,
      data.commentsCount
    );
    blogContainer.appendChild(thumbnail);
  });

  // 추천 주제 섹션을 추가하는 함수 호출
  const topicsContainer = document.querySelector(".recommend-topics-container");
  const topicsHeader = "Recommended Topics";
  const topics = [
    "JavaScript",
    "CSS",
    "HTML",
    "React",
    "Node.js",
    "Python",
    "Java",
  ];
  const topicsFooter = "See more topics";

  const { topicHeaderElement, topicSectionElement, topicFooterElement } =
    recommendTopic(topicsHeader, topics, topicsFooter);

  // 생성된 요소를 컨테이너에 추가
  topicsContainer.appendChild(topicHeaderElement);
  topicsContainer.appendChild(topicSectionElement);
  topicsContainer.appendChild(topicFooterElement);

  // 스태프 추천 섹션을 추가하는 함수 호출
  const staffPickContainer = document.querySelector(
    ".staff-recommend-container"
  );
  const staffPickHeaderText = "Staff Pick";
  const staffPickFooterText = "See more full list";

  // 스태프 추천 헤더와 푸터 추가
  const { staffPickHeaderElement, staffPickFooterElement } = recommendStaffPick(
    staffPickHeaderText,
    "",
    "",
    "",
    staffPickFooterText
  );

  staffPickContainer.appendChild(staffPickHeaderElement);

  // 스태프 추천 항목 추가
  const staffPickData = Array(3).fill({
    staffPickProfileImgSrc: "./images/profile.png",
    staffPickNickname: "John Doe",
    staffPickTitleText: "How to Build a Web Application",
  });

  staffPickData.forEach((data) => {
    const { staffPickSectionElement } = recommendStaffPick(
      "",
      data.staffPickProfileImgSrc,
      data.staffPickNickname,
      data.staffPickTitleText,
      ""
    );

    staffPickContainer.appendChild(staffPickSectionElement);
  });

  staffPickContainer.appendChild(staffPickFooterElement);
});
