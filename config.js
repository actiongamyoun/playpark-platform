// ================================================================
// PlayPark 설정 파일
// 변경 시 이 파일만 수정하면 됨
// ================================================================

window.PLAYPARK_CONFIG = {
  // Supabase 연결 정보
  SUPABASE_URL: 'https://ybboyiibqxbwbeaywsmr.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliYm95aWlicXhid2JlYXl3c21yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2NjQyMDAsImV4cCI6MjA5NTI0MDIwMH0.vJNXH6tTvPtJ4rEqH5aCGAeOinHnSVptncr6XJOIU9I',

  // 관리자 비밀번호 (나중에 변경)
  // ⚠️ 클라이언트 코드라 노출되긴 하지만 일단 시작용
  ADMIN_PASSWORD: 'admin1234',

  // 디버그 모드 (개발 중 콘솔 로그 활성화)
  DEBUG: true,
};
