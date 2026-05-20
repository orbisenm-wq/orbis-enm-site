# ORBIS ENM 공식 홈페이지

도메인: `orbis-enm.com`

## 포함 기능
- 실제 배포용 Next.js 프로젝트
- 모바일 반응형
- 스크롤 애니메이션
- 로딩 인트로
- 무대 배경 영상 `/public/orbis-hero.mp4`
- 실제 로고 이미지 `/public/orbis-logo.png`
- 문의메일 API `/api/contact`
- 크리에이터 지원 페이지 `/creators/apply`
- 관리자 문의폼: Contact/Creator Apply 제출 내용을 관리자 이메일로 전송

## 실행
```bash
npm install
npm run dev
```

## 배포 추천: Vercel
1. GitHub에 이 폴더 업로드
2. Vercel에서 Import Project
3. Domain에 `orbis-enm.com` 추가
4. 도메인 구매처 DNS에서 Vercel이 안내하는 A/CNAME 값 설정

## 이메일 연동
Vercel 환경변수에 추가:
```bash
RESEND_API_KEY=발급받은_Resend_API_Key
ADMIN_EMAIL=받을_관리자_이메일
FROM_EMAIL=ORBIS ENM <noreply@orbis-enm.com>
```

Resend를 쓰지 않으면 개발 중에는 서버 로그에 문의 내용이 기록됩니다.
