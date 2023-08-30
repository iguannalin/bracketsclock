window.addEventListener("load", () => {
  let container = document.getElementById("container");
  let timer;
  let breath = 500;
  let num = 245;
  let index = 0;
  let delta = 1;

  function init() {
    for (let i = 0; i < num; i++) {
      const p = document.createElement("p");
      p.innerHTML = "/";
      p.id = i;
      container.appendChild(p);
    }
  }

  function display() {
    const p = document.getElementById(index);
    p.innerHTML = p.innerHTML == "/" ? "\\" : "/";
    index += delta;
    if (index == num) { delta = -1; index = num-1; }
    else if (delta == -1 && index == 0) { delta = 1; }
  }

  // 32ch - 627 '/'
  init(num);
  timer = setInterval(display, breath);
});