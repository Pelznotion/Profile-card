document.addEventListener("DOMContentLoaded", () => {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  const updateTime = () => (timeEl.textContent = Date.now());
  updateTime();
  setInterval(updateTime, 1000);
});
