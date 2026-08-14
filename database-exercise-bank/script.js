document.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-toggle");
  if (!button) return;
  const answer = button.nextElementSibling;
  const opening = answer.hidden;
  answer.hidden = !opening;
  button.setAttribute("aria-expanded", String(opening));
  button.querySelector(".symbol").textContent = opening ? "−" : "＋";
  button.querySelector(".label").textContent = opening ? "收起参考答案" : "查看参考答案";
  button.lastElementChild.textContent = opening ? "↑" : "↓";
});

const search = document.querySelector("#search");
if (search) {
  search.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();
    const cards = [...document.querySelectorAll(".question-card")];
    let visible = 0;
    cards.forEach((card) => {
      const matches = card.dataset.search.toLowerCase().includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    document.querySelector("#result-count").textContent = `当前显示 ${visible} 组`;
  });
}
