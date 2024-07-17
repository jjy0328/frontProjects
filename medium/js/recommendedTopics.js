export function recommendTopic(header, topics, footer) {
  const recommendedTopicHeader = document.createElement("h4");
  recommendedTopicHeader.className = "recommended-topic-header";
  recommendedTopicHeader.textContent = header;

  const topicSection = document.createElement("div");
  topicSection.className = "recommended-topic-section";

  topics.forEach((topic) => {
    const topicElement = document.createElement("div");
    topicElement.className = "recommended-topic";
    topicElement.textContent = topic;
    topicSection.appendChild(topicElement);
  });

  const topicFooter = document.createElement("div");
  topicFooter.className = "recommended-topic-footer";
  topicFooter.textContent = footer;

  return {
    topicHeaderElement: recommendedTopicHeader,
    topicSectionElement: topicSection,
    topicFooterElement: topicFooter,
  };
}
