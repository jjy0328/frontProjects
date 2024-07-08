document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".blog-content-container");
  const thumbnailsData = Array(33).fill({
    profileImgSrc: "./images/content.png", // 프로필 이미지 경로
    nickname: "Plaban Nayak", // 닉네임
    forumName: "The AI Forum", // 포럼 이름
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
      data.forumName,
      data.titleText,
      data.excerptText,
      data.thumbnailImgSrc,
      data.dateText,
      data.likesCount,
      data.commentsCount
    );
    container.appendChild(thumbnail);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".blog-content-container");
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
    container.appendChild(thumbnail);
  });
});
