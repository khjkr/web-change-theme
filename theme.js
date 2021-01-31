const toggle = document.getElementById("toggleTheme")

// 사용자가 선호하는 테마가 다크테마 일경우, 다크테마 자동 활성화
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark")
}

// 다크테마를 토글 형식으로 전환시킴
toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark")
})