# 🎮 PlayPark

다양한 웹 게임을 즐길 수 있는 게임 플랫폼

## 🎯 특징

- 🌐 반응형 웹 + PWA (모바일/PC 모두 지원)
- 🎨 한국어/영어 다국어 지원
- ❤️ 좋아요, 💬 댓글, 👁 조회수 (실시간 공유)
- 🔐 관리자 페이지로 게임 등록/수정/삭제
- 🎮 다양한 장르 (퍼즐, 액션, 리듬, 아케이드 등)

## 🚀 등록된 게임

- 🫧 **팝 앤 드롭** - 버블 터트리고 보석 모으기
- 🎹 **매직 펑크 타일** - 펑크 음악 리듬 게임

## 🛠 기술 스택

- **Frontend**: Vanilla JS, HTML, CSS (No framework)
- **Backend**: Supabase (PostgreSQL + REST API)
- **Hosting**: Vercel
- **Fonts**: Outfit, Fredoka (Google Fonts)

## 📂 폴더 구조

```
/
├── index.html              # 플랫폼 메인 페이지
├── config.js               # Supabase 연결 설정
├── pop-and-drop.html       # 게임 - 팝 앤 드롭
└── magic-funk-tiles.html   # 게임 - 매직 펑크 타일
```

## 🔧 로컬 실행

직접 `index.html`을 더블클릭으로 열면 `config.js` 로드가 안 될 수 있어요.
간단히 로컬 서버를 띄우려면:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

그 다음 브라우저에서 `http://localhost:8000` 접속.

## 🔐 관리자 페이지

URL 끝에 `?admin=true`를 붙이면 관리자 페이지로 들어가요.
예: `https://your-site.vercel.app/?admin=true`

## 📝 라이선스

Personal Project · All rights reserved
