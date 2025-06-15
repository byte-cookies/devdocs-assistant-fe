# 1. 기본 이미지 설정 (Node.js LTS 버전 권장)
FROM node:22-alpine AS base

# 2. pnpm 설치
RUN npm install -g pnpm

# 3. 작업 디렉토리 설정
WORKDIR /app

# 4. 의존성 설치를 위한 파일 복사
COPY package.json pnpm-lock.yaml ./

# 5. 프로덕션 의존성만 설치 (빌드에 필요한 devDependencies도 포함될 수 있음)
RUN pnpm install --frozen-lockfile

# 6. 소스 코드 복사
COPY . .

# Next.js 빌드 전 .next 폴더 삭제 (빌드 캐시 초기화)
RUN rm -rf .next

# 7. 애플리케이션 빌드
RUN pnpm build

# 8. 애플리케이션 실행 포트 노출 (기본 Next.js 포트)
EXPOSE 3000

# 9. 애플리케이션 시작 명령
CMD ["pnpm", "start"]
