# null

 <img width="300" alt="logo" src="https://github.com/0hhanum/null_ios/assets/79507291/9477f6c4-b251-46c8-944e-2858a01cbd92">

## 개요

IOS Dev Quiz 어플리케이션입니다.

양질의 dev 정보를 큐레이션하여 퀴즈로 제공해, 즐겁게 지식을 습득하는 프로젝트입니다.

앱스토어 -> https://zrr.kr/8KYS

## 기술 스택

- React Native
- TypeScript
- Expo
- Jest
- Recoil
- styled components
- Firebase
- Gatsby
- Github Actions

## 상세 내용

- ✅ 개발 완료
- 🟩 진행중
- ⬜️ TODO

### Firebase 기반의 모바일 서버리스 어플리케이션

- ⬜️ Firebase Auth, OAuth를 통한 인증 및 회원정보 관리
- 🟩 Firebase Realtime Database를 통한 퀴즈 정보 DB 관리
  - ✅ DB단 스키마 설계
    - Recoil Async Selector를 View Model로 활용해, View Model 계층에서의 캐싱 및 처리 전략으로 db 데이터 요청 최소화
- Github Pages를 통한 퀴즈 답안 상세설명 허브 개발

  - ✅ Gatsby 기반 모바일 친화 퀴즈 답안 상세설명 페이지 개발
    - 레포지토리: https://github.com/0hhanum/null_quiz_answers
    - 배포 링크: https://0hhanum.github.io/null_quiz_answers/
  - ✅ mdx 마크다운 파일을 이용해 편리한 컨텐츠 작성 기능 개발
  - ✅ CI/CD

    - 새로운 퀴즈 답안 등록 시 테스트, 자동 배포 및 mdx 내 퀴즈 메타정보를 firebase db에 저장하는 파이프라인 구축
      <img width="781" alt="image" src="https://github.com/0hhanum/null_ios/assets/79507291/82904afd-6f09-4285-88f9-10e396cde870">

  - ✅ 상세설명 페이지 웹뷰 삽입

- ✅ 새로운 문제 푸시 알림
  - 상세 설명 허브에 새로운 문제 등록 시 푸시 알림 자동화

### React Native 기반 개발

- ✅ Atomic 디자인 패턴 적용
  - 컴포넌트의 재활용성을 극대화
  - 상태를 분산해 렌더링 효율 최적화
- ✅ 퀴즈 메타정보 기반 동적 퀴즈 출제 구현
  - 객관식, 주관식, OX 퀴즈 등 퀴즈 유형에 따른 동적 퀴즈 출제

## 제작

[0hhanum](https://github.com/0hhanum) - <rntls123@naver.com>
