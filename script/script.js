document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.submit-btn');
  const input = document.querySelector('.ipt');

  btn.addEventListener('click', () => {
    const answer = "A9F!Q2@KR#7MX$4ZP8";

    // 공백 제거 + 대소문자 통일 + 이상한 문자 제거
    const userValue = input.value
      .trim()
      .replace(/\s/g, '')
      .toUpperCase();

    const correctValue = answer.toUpperCase();

    if (userValue === correctValue) {
      $('main .result-box').addClass('show');
      $('main .failure-box').removeClass('show');
    } else {
      $('main .result-box').removeClass('show');
      $('main .failure-box').addClass('show');
    }
  });
});
