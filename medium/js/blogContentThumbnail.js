function createBlogContentThumbnail(
  profileImgSrc,
  nickname,
  titleText,
  excerptText,
  thumbnailImgSrc,
  dateText,
  likesCount,
  commentsCount
) {
  const thumbnail = document.createElement("div");
  thumbnail.className = "blog-content-thumbnail";

  // 프로필 섹션
  const profileSection = document.createElement("div");
  profileSection.className = "blog-content-profile";

  const profileInfo = document.createElement("div");
  profileInfo.className = "profile-info";

  const profileImg = document.createElement("img");
  profileImg.className = "profile";
  profileImg.src = profileImgSrc;
  profileImg.alt = nickname;

  const profileName = document.createElement("span");
  profileName.className = "profile-name";
  profileName.textContent = nickname;

  profileInfo.appendChild(profileImg);
  profileInfo.appendChild(profileName);
  profileSection.appendChild(profileInfo);

  // 콘텐츠 정보 섹션
  const contentInfoSection = document.createElement("div");
  contentInfoSection.className = "content-info";

  // 콘텐츠 섹션
  const contentSection = document.createElement("div");
  contentSection.className = "content-section";

  const title = document.createElement("h2");
  title.textContent = titleText;

  const excerpt = document.createElement("p");
  excerpt.textContent = excerptText;

  contentSection.appendChild(title);
  contentSection.appendChild(excerpt);

  // 메타 섹션
  const metaSection = document.createElement("div");
  metaSection.className = "meta-section";

  const date = document.createElement("span");
  date.className = "date";
  date.textContent = dateText;

  const likesContainer = document.createElement("div");
  likesContainer.className = "likes-container";
  const likesIcon = document.createElement("i");
  likesIcon.className = "fas fa-heart";
  const likes = document.createElement("span");
  likes.className = "likes";
  likes.textContent = likesCount;

  likesContainer.appendChild(likesIcon);
  likesContainer.appendChild(likes);

  const commentsContainer = document.createElement("div");
  commentsContainer.className = "comments-container";
  const commentsIcon = document.createElement("i");
  commentsIcon.className = "fas fa-comment";
  const comments = document.createElement("span");
  comments.className = "comments";
  comments.textContent = commentsCount;

  commentsContainer.appendChild(commentsIcon);
  commentsContainer.appendChild(comments);

  // 아이콘 섹션 추가
  const iconSection = document.createElement("div");
  iconSection.className = "icon-section";

  const iconClasses = ["fas fa-minus", "fas fa-bookmark", "fas fa-ellipsis-h"];

  iconClasses.forEach((iconClass) => {
    const icon = document.createElement("i");
    icon.className = iconClass;
    iconSection.appendChild(icon);
  });

  metaSection.appendChild(date);
  metaSection.appendChild(likesContainer);
  metaSection.appendChild(commentsContainer);
  metaSection.appendChild(iconSection);

  contentInfoSection.appendChild(contentSection);
  contentInfoSection.appendChild(metaSection);

  // 이미지와 콘텐츠를 묶는 섹션
  const thumbnailContentWrapper = document.createElement("div");
  thumbnailContentWrapper.className = "thumbnail-content-wrapper";

  // 썸네일 이미지
  const thumbnailImg = document.createElement("img");
  thumbnailImg.className = "thumbnail";
  thumbnailImg.src = thumbnailImgSrc;
  thumbnailImg.alt = titleText;

  thumbnailContentWrapper.appendChild(contentInfoSection);
  thumbnailContentWrapper.appendChild(thumbnailImg);

  thumbnail.appendChild(profileSection);
  thumbnail.appendChild(thumbnailContentWrapper);

  return thumbnail;
}
