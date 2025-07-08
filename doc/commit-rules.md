# 커밋 및 린트 규칙

## 커밋 메시지 규칙

### Conventional Commits 형식

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 커밋 타입

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `refactor`: 코드 리팩토링
- `perf`: 성능 개선
- `test`: 테스트 추가/수정
- `build`: 빌드 시스템 변경
- `ci`: CI/CD 설정 변경
- `chore`: 기타 변경사항
- `revert`: 이전 커밋 되돌리기

### 예시

```
feat(auth): add JWT authentication middleware
fix(course): resolve carbon calculation bug
docs: update API documentation
style: format code with prettier
refactor(carbon): improve calculation algorithm
test(auth): add unit tests for auth service
```

## Pre-commit 검사

### 자동 실행되는 검사

1. **ESLint**: 코드 품질 및 스타일 검사
2. **Prettier**: 코드 포맷팅
3. **Jest**: 관련 테스트 실행
4. **TypeScript**: 타입 체크
5. **Commitlint**: 커밋 메시지 검증

### 수동 실행 명령어

```bash
# 린트 검사
pnpm lint

# 린트 자동 수정
pnpm lint:fix

# 포맷팅
pnpm format

# 테스트 실행
pnpm test

# 커밋 (대화형)
pnpm commit
```

## 린트 규칙

### ESLint 규칙

- TypeScript 엄격 모드 적용
- NestJS 베스트 프랙티스 준수
- 미사용 변수/import 제거
- 일관된 코드 스타일 유지

### Prettier 설정

- 탭 크기: 2
- 세미콜론: 자동
- 따옴표: 작은따옴표
- 후행 쉼표: ES5

## 개발 워크플로우

1. **브랜치 생성**: `git checkout -b feature/기능명`
2. **개발**: 코드 작성 및 테스트
3. **스테이징**: `git add .`
4. **커밋**: `pnpm commit` (대화형) 또는 `git commit -m "type: description"`
5. **푸시**: `git push origin 브랜치명`
6. **PR 생성**: GitHub에서 Pull Request 생성

## 문제 해결

### 커밋이 실패하는 경우

1. ESLint 오류 수정: `pnpm lint:fix`
2. 포맷팅 오류 수정: `pnpm format`
3. 테스트 실패 수정: 테스트 코드 확인
4. 타입 오류 수정: TypeScript 오류 해결

### 커밋 메시지가 거부되는 경우

1. Conventional Commits 형식 확인
2. 타입이 올바른지 확인
3. 설명이 명확한지 확인
4. 72자 이내인지 확인
