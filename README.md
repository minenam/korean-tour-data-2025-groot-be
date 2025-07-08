# Korean Tour Data 2025 Groot Backend (Monorepo)

NestJS + TypeScript 기반 모노레포 백엔드 서버

## 주요 도메인

- **auth**: 로그인, 회원가입, 권한 관리
- **course**: 지역별 생태관광 코스, 지도, 필터별 검색, 탄소 발자국
- **carbon**: 여행 탄소 발자국 계산, 비교, 메트릭 공식
- **gamification**: 대시보드, 스탬프, SNS 공유, 칭호/뱃지, 미션 인증, 좋아요, 마이페이지
- **review**: 여행 코스 리뷰

## 프로젝트 구조

```
korean-tour-data-2025-groot-be/
├── apps/                    # 마이크로서비스 애플리케이션
│   ├── auth/               # 인증 서비스
│   ├── course/             # 코스 관리 서비스
│   ├── carbon/             # 탄소 발자국 서비스
│   ├── gamification/       # 게이미피케이션 서비스
│   └── review/             # 리뷰 서비스
├── packages/               # 공유 패키지
│   ├── common/             # 공통 유틸리티, 인터페이스, 데코레이터
│   └── shared/             # 공유 상수, 타입, 열거형
├── .husky/                 # Git hooks
├── eslint.config.js        # ESLint 설정 (Flat Config)
├── jest.config.base.js     # Jest 기본 설정
├── tsconfig.base.json      # TypeScript 기본 설정
└── pnpm-workspace.yaml     # pnpm 워크스페이스 설정
```

## 기술 스택

- **Runtime**: Node.js, NestJS
- **Language**: TypeScript
- **Package Manager**: pnpm (workspace)
- **Testing**: Jest
- **Linting**: ESLint 9.x (Flat Config)
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged
- **Commit Convention**: Conventional Commits

## 초기 설정

```bash
# 의존성 설치
pnpm install

# Git hooks 설정
pnpm prepare
```

## 개발 워크플로우

### 커밋하기

```bash
# 대화형 커밋 (권장)
pnpm commit

# 또는 직접 커밋
git commit -m "feat: add new feature"
```

### 린트 및 포맷팅

```bash
# 전체 프로젝트 린트
pnpm lint

# 특정 앱 린트
pnpm --filter auth lint

# 포맷팅
pnpm format
```

### 테스트

```bash
# 전체 테스트 실행
pnpm test

# 특정 앱 테스트
pnpm --filter auth test

# 테스트 커버리지
pnpm --filter auth test:cov
```

### 빌드

```bash
# 전체 빌드
pnpm build

# 특정 앱 빌드
pnpm --filter auth build
```

## Git Hooks

### Pre-commit Hook

커밋 시 자동으로 실행되는 검사:

- **lint-staged**: 스테이지된 파일만 ESLint + Prettier 적용
- 빠른 커밋을 위해 staged 파일만 검사

### Pre-push Hook

Push 시 자동으로 실행되는 검사:

- **Jest**: 전체 테스트 실행
- **TypeScript**: 타입 체크 및 빌드 검증
- 코드 품질 보장을 위한 최종 검증

## 커밋 및 린트 규칙

자세한 커밋 메시지 규칙, 린트 규칙, pre-commit 검사 등은 [doc/commit-rules.md](doc/commit-rules.md) 파일을 참고하세요.

---

## 개발 환경

### 필수 요구사항

- Node.js 18+
- pnpm 8+

### 권장 개발 도구

- VS Code
- ESLint, Prettier 확장 프로그램

## 문제 해결

### ESLint 에러

```bash
# ESLint 자동 수정
pnpm lint:fix
```

### TypeScript 에러

```bash
# 타입 체크
pnpm build
```

### 테스트 실패

```bash
# 테스트 재실행
pnpm test
```
