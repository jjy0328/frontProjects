import { createBlogContentThumbnail } from "./blogContentThumbnail.js";
import { recommendTopic } from "./recommendedContent.js";

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
});
