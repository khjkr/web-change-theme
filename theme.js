const toggle = document.getElementById('toggleTheme')
const themeList = ['☀️ 밝은 테마', '🌙 어두운 테마']

// 사용자가 선호하는 테마가 다크테마 일경우, 다크테마 자동 활성화
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toggle.innerText = themeList[0]
  document.documentElement.classList.add('dark')
} else {
  toggle.innerText = themeList[1]
}

// 다크테마를 토글 형식으로 전환시킴
toggle.addEventListener('click', () => {
  toggle.innerText == themeList[0] ? toggle.innerText = themeList[1] : 
  toggle.innerText = themeList[0]
  document.documentElement.classList.toggle('dark')
})