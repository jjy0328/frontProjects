export function recommendStaffPick(
  staffPickHeaderText,
  staffPickProfileImgSrc,
  staffPickNickname,
  staffPickTitleText,
  staffPickFooterText
) {
  // 헤더 생성
  const staffPickHeader = document.createElement("h4");
  staffPickHeader.className = "staff-pick-header";
  staffPickHeader.textContent = staffPickHeaderText;

  // 섹션 생성
  const staffPickSection = document.createElement("div");
  staffPickSection.className = "staff-pick-section";

  // 프로필 섹션
  const staffPickProfileSection = document.createElement("div");
  staffPickProfileSection.className = "staff-pick-profile";

  const staffPickProfileImg = document.createElement("img");
  staffPickProfileImg.className = "staff-pick-profile-img";
  staffPickProfileImg.src = staffPickProfileImgSrc;
  staffPickProfileImg.alt = staffPickNickname;

  const staffPickProfileName = document.createElement("span");
  staffPickProfileName.className = "staff-pick-profile-name";
  staffPickProfileName.textContent = staffPickNickname;

  staffPickProfileSection.appendChild(staffPickProfileImg);
  staffPickProfileSection.appendChild(staffPickProfileName);

  // 콘텐츠 섹션
  const staffPickItem = document.createElement("div");
  staffPickItem.className = "staff-pick-item";

  const staffPickTitle = document.createElement("h5");
  staffPickTitle.textContent = staffPickTitleText;

  staffPickItem.appendChild(staffPickTitle);

  staffPickSection.appendChild(staffPickProfileSection);
  staffPickSection.appendChild(staffPickItem);

  // 푸터 생성
  const staffPickFooter = document.createElement("div");
  staffPickFooter.className = "staff-pick-footer";
  staffPickFooter.textContent = staffPickFooterText;

  return {
    staffPickHeaderElement: staffPickHeader,
    staffPickSectionElement: staffPickSection,
    staffPickFooterElement: staffPickFooter,
  };
}
