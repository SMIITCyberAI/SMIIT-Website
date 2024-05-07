function toast() {
  // alert("Nice");
  const button = document.querySelector("button"),
    toast = document.querySelector(".toast1"),
    closeIcon = document.querySelector(".close1"),
    progress = document.querySelector(".progress1");

  let timer1, timer2;
  toast.classList.add("active");
  progress.classList.add("active");
  console.log(toast, progress);
  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000);

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);

  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  });
}
