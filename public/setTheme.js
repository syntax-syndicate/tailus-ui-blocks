(() => {
  document.addEventListener('astro:after-swap', () => {
    localStorage.getItem("color-theme") === 'dark'
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
  });
})()