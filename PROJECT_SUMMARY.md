# 프로젝트 요약

## 프로젝트 구조 및 폴더 기능

### 주요 디렉토리
- **`_pages/`**: 웹사이트의 주요 페이지들 (About, CV, Publications, Projects 등)
- **`_layouts/`**: 페이지 레이아웃 템플릿
- **`_includes/`**: 재사용 가능한 HTML 컴포넌트
- **`_news/`**: 연구실 뉴스 및 공지사항
- **`_bibliography/`**: 출판물 정보 (BibTeX 형식)
- **`_data/`**: 구조화된 데이터 파일 (YAML 형식)
- **`_sass/`**: SCSS 스타일시트 파일
- **`_scripts/`**: JavaScript 스크립트 파일
- **`_plugins/`**: Jekyll 플러그인
- **`assets/`**: 정적 파일 (이미지, CSS, JS, 폰트 등)
- **`bin/`**: 빌드 및 배포 스크립트

### 설정 파일
- **`_config.yml`**: Jekyll 사이트 설정
- **`Gemfile`**: Ruby 의존성 관리
- **`package.json`**: Node.js 의존성 관리 (Prettier 포맷터)
- **`requirements.txt`**: Python 의존성 관리

## 커밋 규칙
```
[동작] 대상: 간략한 설명

예시:
- Add: 새 기능 추가
- Update: 기존 기능 수정
- Fix: 버그 수정
- Remove: 파일/기능 제거
- Refactor: 코드 리팩토링
```

## 개발 및 테스트 실행 방법

### 1. 환경 설정
#### Ruby 환경 (Jekyll)
```bash
# Ruby 의존성 설치
bundle install
```

#### Node.js 환경 (Prettier)
```bash
# Node.js 의존성 설치
npm install
```

### 2. 로컬 개발 서버 실행
```bash
# Jekyll 개발 서버 실행
bundle exec jekyll serve

# 또는 변경사항 자동 감지
bundle exec jekyll serve --watch

# 브라우저에서 http://localhost:4000 접속
```

### 3. 사이트 빌드
```bash
# 프로덕션 빌드
bundle exec jekyll build

# 또는 bin 디렉토리의 스크립트 사용
./bin/cibuild
```

### 4. 배포
```bash
# GitHub Pages로 배포
./bin/deploy

# 옵션 사용 예시
./bin/deploy -s main -d gh-pages
```

### 5. 코드 포맷팅
```bash
# Prettier로 코드 포맷팅
npm run prettier
```

## 주요 기능

### 학술 기능
- **출판물 관리**: BibTeX 기반 자동 출판물 목록 생성
- **CV 페이지**: JSON 또는 YAML 기반 이력서
- **프로젝트 포트폴리오**: 연구 프로젝트 갤러리
- **뉴스/공지사항**: 연구실 소식 관리

### 기술적 특징
- **반응형 디자인**: 모바일/태블릿/데스크톱 지원
- **다크모드 지원**: 자동 테마 전환
- **수식 지원**: MathJax를 통한 LaTeX 수식 렌더링
- **코드 하이라이팅**: GitHub 스타일 문법 강조
- **이미지 최적화**: WebP 자동 변환 및 지연 로딩
- **검색 기능**: 사이트 내 컨텐츠 검색

## 유지보수 가이드

### 새로운 페이지 추가
1. `_pages/` 디렉토리에 `.md` 파일 생성
2. Front matter에 레이아웃 및 메타데이터 지정
3. 네비게이션 메뉴에 추가 시 `_config.yml` 수정

### 출판물 추가
1. `_bibliography/papers.bib`에 BibTeX 항목 추가
2. 필요시 PDF 파일을 `assets/pdf/`에 업로드

### 뉴스 추가
1. `_news/` 디렉토리에 날짜별 `.md` 파일 생성
2. 파일명 형식: `YYYYMMDD.md`

### 스타일 변경
1. `_sass/` 디렉토리의 SCSS 파일 수정
2. 색상 테마는 `_sass/_themes.scss`에서 관리

## 문제 해결

### 빌드 오류 발생 시
```bash
# 의존성 재설치
bundle install
rm -rf _site
bundle exec jekyll clean
bundle exec jekyll build
```

### 로컬 서버가 시작되지 않을 때
```bash
# 포트 충돌 확인 (기본 포트: 4000)
bundle exec jekyll serve --port 4001
```

## 참고 자료
- [Jekyll 공식 문서](https://jekyllrb.com/)
- [al-folio 테마 문서](https://github.com/alshedivat/al-folio)
- [GitHub Pages 문서](https://docs.github.com/en/pages)

---