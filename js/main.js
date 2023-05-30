const custom_body = document.querySelector(".custom_body");

const submit_btn = document.querySelector(".submit_btn");
submit_btn.addEventListener("click", () => {
  custom_body.remove();
  submit_btn.remove();
});
