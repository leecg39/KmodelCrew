# Design System (기초 디자인 시스템)
## K모델크루 아카데미 홈페이지

**문서 버전:** v1.0  
**작성일:** 2026년 1월 7일  
**프로젝트 식별자:** KMODEL-2026  
**관련 문서:** PRD v1.0

---

## 1. 디자인 원칙

### 1.1 핵심 원칙

| 원칙 | 설명 | 적용 |
|------|------|------|
| **고급스러움** | 패션 매거진 같은 세련된 분위기 | 블랙 & 화이트 중심, 미니멀한 레이아웃 |
| **시니어 친화성** | 50~60대 사용자가 불편 없이 사용 | 큰 글씨, 넓은 터치 영역, 단순한 구조 |
| **신뢰감** | "믿을 만한 학원"이라는 인상 | 깔끔한 정보 배치, 전문적인 사진 |
| **단순함** | 복잡하지 않고 직관적인 경험 | 최소한의 메뉴, 명확한 CTA |

### 1.2 디자인 레퍼런스

- **EMA (ema.fashion)**: 고급스러운 모델 에이전시 느낌
- **패션 매거진**: 여백의 미, 타이포그래피 중심
- **시니어 친화 앱**: 토스, 카카오뱅크의 직관적 UI

---

## 2. 색상 팔레트

### 2.1 역할 기반 색상 시스템

| 역할 | 색상명 | HEX | RGB | 용도 |
|------|--------|-----|-----|------|
| **Primary** | Black | `#1A1A1A` | 26, 26, 26 | 주요 텍스트, 헤더, 강조 |
| **Primary Light** | Charcoal | `#333333` | 51, 51, 51 | 보조 텍스트, 호버 |
| **Secondary** | White | `#FFFFFF` | 255, 255, 255 | 배경, 카드 |
| **Secondary Dark** | Off-White | `#F8F8F8` | 248, 248, 248 | 섹션 배경, 구분 |
| **Accent** | Gold | `#C9A962` | 201, 169, 98 | CTA, 포인트, 고급스러운 강조 |
| **Accent Light** | Light Gold | `#E8D5A3` | 232, 213, 163 | 호버 상태, 부드러운 강조 |

### 2.2 피드백 색상

| 역할 | 색상명 | HEX | 용도 |
|------|--------|-----|------|
| **Success** | Green | `#2E7D32` | 성공 메시지, 완료 상태 |
| **Error** | Red | `#C62828` | 오류 메시지, 필수 항목 |
| **Warning** | Amber | `#F9A825` | 경고 메시지 |
| **Info** | Blue | `#1565C0` | 정보성 안내 |

### 2.3 그레이 스케일

| 이름 | HEX | 용도 |
|------|-----|------|
| Gray-50 | `#FAFAFA` | 배경 |
| Gray-100 | `#F5F5F5` | 카드 배경 |
| Gray-200 | `#EEEEEE` | 구분선, 비활성 배경 |
| Gray-300 | `#E0E0E0` | 테두리 |
| Gray-400 | `#BDBDBD` | 비활성 텍스트 |
| Gray-500 | `#9E9E9E` | 플레이스홀더 |
| Gray-600 | `#757575` | 보조 텍스트 |
| Gray-700 | `#616161` | 본문 텍스트 |
| Gray-800 | `#424242` | 강조 텍스트 |
| Gray-900 | `#212121` | 제목 텍스트 |

### 2.4 접근성 대비 확인

| 조합 | 대비율 | WCAG AA | WCAG AAA |
|------|--------|---------|----------|
| Black on White | 16.1:1 | ✓ | ✓ |
| White on Black | 16.1:1 | ✓ | ✓ |
| Gold on White | 3.2:1 | ✓ (대형텍스트) | ✗ |
| Gold on Black | 5.0:1 | ✓ | ✓ (대형텍스트) |
| Gray-600 on White | 5.7:1 | ✓ | ✓ (대형텍스트) |

---

## 3. 타이포그래피

### 3.1 폰트 패밀리

| 용도 | 폰트 | 웹폰트 | 대체 폰트 |
|------|------|--------|-----------|
| **한글 제목** | Pretendard | Google Fonts | Apple SD Gothic Neo, Malgun Gothic |
| **한글 본문** | Pretendard | Google Fonts | Apple SD Gothic Neo, Malgun Gothic |
| **영문 제목** | Cormorant Garamond | Google Fonts | Georgia, serif |
| **영문 본문** | Pretendard | Google Fonts | -apple-system, sans-serif |

### 3.2 타이포그래피 스케일 (시니어 친화)

| 스타일 | 크기 (모바일) | 크기 (데스크톱) | 굵기 | 행간 | 용도 |
|--------|---------------|-----------------|------|------|------|
| **Display** | 36px | 56px | 700 | 1.2 | 히어로 헤드라인 |
| **H1** | 28px | 40px | 700 | 1.3 | 페이지 제목 |
| **H2** | 24px | 32px | 600 | 1.3 | 섹션 제목 |
| **H3** | 20px | 24px | 600 | 1.4 | 카드 제목 |
| **H4** | 18px | 20px | 600 | 1.4 | 소제목 |
| **Body Large** | 18px | 20px | 400 | 1.7 | 강조 본문, 리드 |
| **Body** | 16px | 18px | 400 | 1.7 | 기본 본문 |
| **Body Small** | 14px | 16px | 400 | 1.6 | 보조 텍스트 |
| **Caption** | 12px | 14px | 400 | 1.5 | 캡션, 레이블 |

### 3.3 Tailwind CSS 설정

```javascript
// tailwind.config.ts
fontSize: {
  'display': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
  'h1': ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],
  'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
  'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
  'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
  'body-lg': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }],
  'body': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
  'body-sm': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
  'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
}
```

---

## 4. 간격 시스템 (Spacing)

### 4.1 기본 단위

기본 단위: **4px** (0.25rem)

| 토큰 | 값 | 용도 |
|------|-----|------|
| `space-1` | 4px | 아이콘과 텍스트 사이 |
| `space-2` | 8px | 인라인 요소 간격 |
| `space-3` | 12px | 작은 패딩 |
| `space-4` | 16px | 기본 패딩, 버튼 내부 |
| `space-5` | 20px | 카드 내부 패딩 |
| `space-6` | 24px | 섹션 내 요소 간격 |
| `space-8` | 32px | 섹션 패딩 (모바일) |
| `space-10` | 40px | 큰 간격 |
| `space-12` | 48px | 섹션 패딩 (데스크톱) |
| `space-16` | 64px | 섹션 간 간격 |
| `space-20` | 80px | 큰 섹션 간격 |
| `space-24` | 96px | 페이지 섹션 구분 |

### 4.2 컨테이너

| 이름 | 최대 너비 | 용도 |
|------|-----------|------|
| `container-sm` | 640px | 좁은 콘텐츠 (폼) |
| `container-md` | 768px | 중간 콘텐츠 |
| `container-lg` | 1024px | 일반 콘텐츠 |
| `container-xl` | 1280px | 넓은 콘텐츠 |
| `container-full` | 100% | 전체 너비 (히어로) |

---

## 5. UI 컴포넌트

### 5.1 버튼 (Button)

#### 5.1.1 버튼 종류

| 종류 | 용도 | 스타일 |
|------|------|--------|
| **Primary** | 주요 CTA (상담 신청) | 골드 배경, 검정 텍스트 |
| **Secondary** | 보조 액션 | 검정 배경, 흰색 텍스트 |
| **Outline** | 덜 중요한 액션 | 투명, 검정 테두리 |
| **Ghost** | 텍스트 링크형 | 투명, 검정 텍스트 |

#### 5.1.2 버튼 크기 (시니어 친화)

| 크기 | 높이 | 패딩 | 폰트 크기 | 용도 |
|------|------|------|-----------|------|
| **Large** | 56px | 24px 32px | 18px | 주요 CTA |
| **Medium** | 48px | 16px 24px | 16px | 일반 버튼 |
| **Small** | 40px | 12px 16px | 14px | 인라인 버튼 |

#### 5.1.3 버튼 상태

| 상태 | Primary | Secondary | Outline |
|------|---------|-----------|---------|
| **기본** | bg: Gold, text: Black | bg: Black, text: White | border: Black, text: Black |
| **호버** | bg: Light Gold | bg: Charcoal | bg: Gray-100 |
| **활성** | bg: Darker Gold | bg: Gray-800 | bg: Gray-200 |
| **비활성** | bg: Gray-300, text: Gray-500 | bg: Gray-400 | border: Gray-300, text: Gray-400 |
| **포커스** | ring: Gold (3px) | ring: Black (3px) | ring: Black (3px) |

#### 5.1.4 버튼 컴포넌트 명세

```
Button
├── variant: 'primary' | 'secondary' | 'outline' | 'ghost'
├── size: 'large' | 'medium' | 'small'
├── disabled: boolean
├── loading: boolean
├── fullWidth: boolean
├── icon?: ReactNode (왼쪽 또는 오른쪽)
└── children: ReactNode
```

---

### 5.2 입력 필드 (Input)

#### 5.2.1 입력 필드 종류

| 종류 | 용도 |
|------|------|
| **Text** | 일반 텍스트 (이름) |
| **Phone** | 전화번호 (자동 포맷팅) |
| **Email** | 이메일 |
| **Textarea** | 긴 텍스트 (문의 내용) |
| **Select** | 선택 (관심 프로그램) |
| **Checkbox** | 동의 항목 |

#### 5.2.2 입력 필드 크기 (시니어 친화)

| 크기 | 높이 | 폰트 크기 | 용도 |
|------|------|-----------|------|
| **Large** | 56px | 18px | 상담 신청 폼 (권장) |
| **Medium** | 48px | 16px | 관리자 페이지 |

#### 5.2.3 입력 필드 상태

| 상태 | 스타일 |
|------|--------|
| **기본** | border: Gray-300, bg: White |
| **호버** | border: Gray-400 |
| **포커스** | border: Black, ring: Black (2px) |
| **오류** | border: Error Red, ring: Error Red |
| **비활성** | bg: Gray-100, text: Gray-500 |

#### 5.2.4 입력 필드 컴포넌트 명세

```
Input
├── type: 'text' | 'phone' | 'email' | 'textarea'
├── label: string
├── placeholder: string
├── required: boolean
├── error: string | null
├── disabled: boolean
├── size: 'large' | 'medium'
└── helpText?: string
```

---

### 5.3 카드 (Card)

#### 5.3.1 카드 종류

| 종류 | 용도 | 특징 |
|------|------|------|
| **Model Card** | 모델 프로필 목록 | 이미지 중심, 호버 효과 |
| **Program Card** | 프로그램 목록 | 썸네일 + 정보 |
| **Instructor Card** | 강사 프로필 | 원형 이미지 + 텍스트 |
| **Content Card** | 일반 콘텐츠 | 유연한 구조 |

#### 5.3.2 Model Card 명세

```
ModelCard
├── image: string (URL)
├── name: string
├── intro: string
├── link: string
└── 상태
    ├── 기본: 그림자 없음
    ├── 호버: 그림자 + 이미지 확대(1.05) + 이름 강조
    └── 포커스: 테두리 강조
```

**스타일:**
- 비율: 3:4 (세로형)
- 테두리: 없음
- 배경: White
- 호버: `shadow-lg`, 이미지 `scale-105` (transition 300ms)

---

### 5.4 네비게이션 (Navigation)

#### 5.4.1 헤더 (Header)

**데스크톱:**
```
┌────────────────────────────────────────────────────────┐
│  [Logo]                    Menu1  Menu2  Menu3  [CTA] │
└────────────────────────────────────────────────────────┘
```

**모바일:**
```
┌────────────────────────────────────────────────────────┐
│  [Logo]                                    [햄버거]    │
└────────────────────────────────────────────────────────┘
```

**스타일:**
- 높이: 80px (데스크톱), 64px (모바일)
- 배경: White (스크롤 시 그림자 추가)
- 로고 높이: 40px
- 메뉴 폰트: 16px, Medium weight
- CTA 버튼: Primary Small

#### 5.4.2 모바일 메뉴

**스타일:**
- 전체 화면 오버레이
- 배경: White
- 메뉴 항목: 24px, 터치 영역 56px
- 애니메이션: 슬라이드 인 (오른쪽에서)

---

### 5.5 이미지 컴포넌트

#### 5.5.1 이미지 비율

| 용도 | 비율 | 예시 |
|------|------|------|
| 모델 프로필 | 3:4 | 포트폴리오 목록 |
| 모델 상세 | 2:3 | 상세 페이지 메인 |
| 프로그램 썸네일 | 16:9 | 프로그램 카드 |
| 히어로 | 자유 | 메인 히어로 섹션 |
| 강사 프로필 | 1:1 (원형) | 강사 소개 |

#### 5.5.2 이미지 스타일

| 속성 | 값 |
|------|-----|
| 기본 테두리 | 없음 |
| 호버 효과 | scale 1.05 (카드 내) |
| 로딩 | Skeleton placeholder |
| 오류 | 기본 이미지 대체 |

---

## 6. 아이콘

### 6.1 아이콘 라이브러리

**Lucide Icons** 사용 (일관된 스타일, React 지원)

### 6.2 아이콘 크기

| 크기 | 픽셀 | 용도 |
|------|------|------|
| **xs** | 16px | 인라인, 라벨 옆 |
| **sm** | 20px | 버튼 내부 |
| **md** | 24px | 기본 아이콘 |
| **lg** | 32px | 강조 아이콘 |
| **xl** | 48px | 기능 아이콘 |

### 6.3 주요 아이콘 목록

| 용도 | 아이콘명 |
|------|----------|
| 메뉴 | `Menu`, `X` |
| 전화 | `Phone` |
| 이메일 | `Mail` |
| 위치 | `MapPin` |
| 인스타그램 | `Instagram` |
| 화살표 | `ChevronRight`, `ArrowRight` |
| 체크 | `Check`, `CheckCircle` |
| 경고 | `AlertCircle` |

---

## 7. 반응형 브레이크포인트

### 7.1 브레이크포인트 정의

| 이름 | 최소 너비 | 대상 기기 |
|------|-----------|-----------|
| `sm` | 640px | 큰 스마트폰 (가로) |
| `md` | 768px | 태블릿 |
| `lg` | 1024px | 작은 데스크톱, 태블릿 (가로) |
| `xl` | 1280px | 데스크톱 |
| `2xl` | 1536px | 큰 데스크톱 |

### 7.2 반응형 전략

| 요소 | 모바일 (< 768px) | 태블릿/데스크톱 (≥ 768px) |
|------|------------------|---------------------------|
| 메뉴 | 햄버거 메뉴 | 가로 메뉴 |
| 모델 그리드 | 2열 | 3~4열 |
| 프로그램 카드 | 1열 스택 | 2~3열 그리드 |
| 폰트 크기 | 기본 (위 표 참조) | 확대 (위 표 참조) |
| 여백 | 16~24px | 32~48px |

---

## 8. 모션 & 애니메이션

### 8.1 트랜지션 기본값

| 속성 | 값 |
|------|-----|
| Duration (기본) | 200ms |
| Duration (복잡한) | 300ms |
| Easing | `ease-out` |

### 8.2 애니메이션 용례

| 요소 | 애니메이션 | Duration |
|------|------------|----------|
| 버튼 호버 | 배경색 변경 | 200ms |
| 카드 호버 | 그림자 + 스케일 | 300ms |
| 페이지 전환 | 페이드 인 | 300ms |
| 모바일 메뉴 | 슬라이드 | 300ms |
| 이미지 로드 | 페이드 인 | 500ms |

### 8.3 접근성 고려

```css
/* 모션 감소 선호 사용자 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. 접근성 체크리스트

### 9.1 시니어 친화 필수 항목

| 항목 | 기준 | 체크 |
|------|------|------|
| 최소 폰트 크기 | 16px 이상 | ☐ |
| 터치 영역 | 44px × 44px 이상 | ☐ |
| 색상 대비 | WCAG AA (4.5:1) | ☐ |
| 포커스 표시 | 명확한 아웃라인 | ☐ |
| 키보드 네비게이션 | 모든 기능 접근 가능 | ☐ |

### 9.2 일반 접근성

| 항목 | 기준 |
|------|------|
| 이미지 대체 텍스트 | 모든 이미지에 alt 속성 |
| 링크 텍스트 | "여기 클릭" 대신 목적 명시 |
| 폼 레이블 | 모든 입력 필드에 label 연결 |
| 오류 메시지 | 색상 + 텍스트로 전달 |

---

## 10. Tailwind CSS 커스텀 설정

```javascript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          light: '#333333',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          dark: '#F8F8F8',
        },
        accent: {
          DEFAULT: '#C9A962',
          light: '#E8D5A3',
        },
        success: '#2E7D32',
        error: '#C62828',
        warning: '#F9A825',
        info: '#1565C0',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}

export default config
```

---

*이 문서는 PRD의 디자인 원칙을 구현 가능한 형태로 구체화한 것입니다.*
