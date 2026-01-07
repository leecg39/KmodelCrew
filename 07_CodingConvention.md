# Coding Convention & AI Collaboration Guide
## K모델크루 아카데미 홈페이지

**문서 버전:** v1.0  
**작성일:** 2026년 1월 7일  
**프로젝트 식별자:** KMODEL-2026  
**관련 문서:** TRD, TASKS

---

## 1. 핵심 원칙

### 1.1 "신뢰하되, 검증하라" (Trust but Verify)

AI 코딩 파트너가 생성한 코드는 유용하지만, 항상 검증이 필요합니다.

| 원칙 | 설명 |
|------|------|
| **이해하고 수용** | AI가 생성한 코드를 복사하기 전에 그 작동 원리를 이해하세요 |
| **작은 단위로 검증** | 큰 변경보다 작은 단위로 나누어 테스트하세요 |
| **에러 메시지 공유** | 문제 발생 시 전체 에러 메시지를 AI에게 공유하세요 |
| **컨텍스트 제공** | 관련 코드와 문서를 함께 제공하면 더 나은 결과를 얻습니다 |

### 1.2 프로젝트 핵심 가치

| 가치 | 적용 |
|------|------|
| **단순성** | 복잡한 추상화보다 읽기 쉬운 코드 |
| **일관성** | 프로젝트 전반에 걸쳐 동일한 패턴 사용 |
| **시니어 친화** | 접근성과 가독성 우선 |
| **유지보수성** | 1인 운영에 적합한 관리 용이한 구조 |

---

## 2. 기술 스택 및 버전

### 2.1 핵심 기술

| 기술 | 버전 | 비고 |
|------|------|------|
| Node.js | 20.x LTS | 최신 LTS 권장 |
| Next.js | 14.x | App Router 사용 |
| React | 18.x | Next.js에 포함 |
| TypeScript | 5.x | Strict 모드 |
| Tailwind CSS | 3.x | JIT 모드 |
| Supabase | Latest | @supabase/supabase-js |

### 2.2 개발 도구

| 도구 | 용도 |
|------|------|
| ESLint | 코드 린팅 |
| Prettier | 코드 포맷팅 |
| TypeScript | 타입 검사 |

### 2.3 버전 관리 원칙

```
주요 의존성 업데이트 시:
1. package.json에서 버전 확인
2. 변경 로그 확인 (Breaking Changes)
3. 개발 환경에서 먼저 테스트
4. 문제 없으면 프로덕션 배포
```

---

## 3. 프로젝트 구조

### 3.1 폴더 구조

```
kmodel-academy/
├── public/                     # 정적 파일
│   ├── images/
│   └── fonts/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (public)/           # 공개 페이지 그룹
│   │   │   ├── page.tsx        # 홈
│   │   │   ├── about/
│   │   │   ├── programs/
│   │   │   ├── models/
│   │   │   └── contact/
│   │   ├── admin/              # 관리자 페이지
│   │   ├── api/                # API Routes (필요시)
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                 # 재사용 가능한 UI 컴포넌트
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Card.tsx
│   │   ├── layout/             # 레이아웃 컴포넌트
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── features/           # 기능별 컴포넌트
│   │       ├── ModelCard.tsx
│   │       └── InquiryForm.tsx
│   ├── lib/
│   │   ├── supabase/           # Supabase 클라이언트
│   │   │   ├── client.ts
│   │   │   ├── server.ts
│   │   │   └── queries/
│   │   └── utils/              # 유틸리티 함수
│   ├── hooks/                  # 커스텀 훅
│   └── types/                  # TypeScript 타입
│       └── database.ts
├── .env.local                  # 환경 변수 (gitignore)
├── .env.example                # 환경 변수 템플릿
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

### 3.2 폴더별 역할

| 폴더 | 역할 | 예시 |
|------|------|------|
| `app/` | 라우팅, 페이지 컴포넌트 | page.tsx, layout.tsx |
| `components/ui/` | 범용 UI 컴포넌트 | Button, Input, Modal |
| `components/layout/` | 레이아웃 컴포넌트 | Header, Footer |
| `components/features/` | 도메인 특화 컴포넌트 | ModelCard, InquiryForm |
| `lib/` | 라이브러리 설정, 유틸리티 | Supabase 클라이언트 |
| `hooks/` | 커스텀 React 훅 | useAuth, useModels |
| `types/` | TypeScript 타입 정의 | database.ts |

---

## 4. 코딩 컨벤션

### 4.1 파일 명명 규칙

| 유형 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase | `ModelCard.tsx` |
| 페이지 | kebab-case (폴더) | `models/[id]/page.tsx` |
| 유틸리티 | camelCase | `formatPhone.ts` |
| 타입 | PascalCase | `database.ts` |
| 상수 | SCREAMING_SNAKE_CASE | `API_ENDPOINTS.ts` |

### 4.2 컴포넌트 작성 규칙

#### 기본 구조

```typescript
// 1. 임포트 (외부 → 내부 → 타입 순서)
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import type { Model } from '@/types/database'

// 2. 타입 정의
interface ModelCardProps {
  model: Model
  onClick?: () => void
}

// 3. 컴포넌트 (export default 사용)
export default function ModelCard({ model, onClick }: ModelCardProps) {
  // 4. 상태 및 훅
  const [isHovered, setIsHovered] = useState(false)
  
  // 5. 핸들러 함수
  const handleClick = () => {
    onClick?.()
  }
  
  // 6. 렌더링
  return (
    <div onClick={handleClick}>
      {/* JSX */}
    </div>
  )
}
```

#### 컴포넌트 분류

| 유형 | 위치 | 특징 |
|------|------|------|
| **UI 컴포넌트** | `components/ui/` | 도메인 무관, 재사용 가능 |
| **기능 컴포넌트** | `components/features/` | 특정 도메인 로직 포함 |
| **페이지 컴포넌트** | `app/` | 라우팅, 데이터 페칭 |

### 4.3 TypeScript 규칙

#### 타입 정의

```typescript
// 인터페이스 사용 (확장 가능)
interface Model {
  id: string
  name: string
  intro?: string  // 선택적 속성
}

// 유니온 타입
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

// 제네릭 활용
interface ApiResponse<T> {
  data: T | null
  error: string | null
}
```

#### 타입 안전성

```typescript
// ❌ 피해야 할 것
const data: any = fetchData()

// ✅ 권장
const data: Model[] = await fetchModels()

// ❌ 피해야 할 것
if (model) { ... }

// ✅ 권장 (명시적 null 체크)
if (model !== null && model !== undefined) { ... }
// 또는
if (model != null) { ... }
```

### 4.4 Tailwind CSS 규칙

#### 클래스 순서

```jsx
// 권장 순서: 레이아웃 → 박스모델 → 타이포그래피 → 시각 → 기타
<div className="
  flex items-center justify-between    {/* 레이아웃 */}
  w-full p-4 mt-2                       {/* 박스모델 */}
  text-lg font-medium                   {/* 타이포그래피 */}
  bg-white border rounded-lg shadow     {/* 시각 */}
  hover:bg-gray-50 transition           {/* 상태/애니메이션 */}
">
```

#### 반응형 작성

```jsx
// 모바일 퍼스트 (작은 화면 → 큰 화면)
<div className="
  grid grid-cols-2         {/* 모바일: 2열 */}
  md:grid-cols-3           {/* 태블릿: 3열 */}
  lg:grid-cols-4           {/* 데스크톱: 4열 */}
">
```

#### 커스텀 클래스 사용

```jsx
// Design System에 정의된 색상 사용
<button className="bg-primary text-white hover:bg-primary-light">
  상담 신청
</button>

<span className="text-accent">강조 텍스트</span>
```

### 4.5 함수 및 변수 명명

| 유형 | 규칙 | 예시 |
|------|------|------|
| 함수 | camelCase, 동사로 시작 | `getModels`, `handleSubmit` |
| 변수 | camelCase | `modelList`, `isLoading` |
| 상수 | SCREAMING_SNAKE_CASE | `API_URL`, `MAX_ITEMS` |
| 불리언 | is/has/can 접두사 | `isActive`, `hasError` |
| 배열 | 복수형 | `models`, `programs` |

---

## 5. AI 소통 원칙 (프롬프트 엔지니어링)

### 5.1 효과적인 지시 방법

#### 컨텍스트 제공

```
❌ 나쁜 예:
"버튼 만들어줘"

✅ 좋은 예:
"Design System 문서의 5.1 버튼 섹션을 참조해서,
Primary variant의 Large 사이즈 버튼 컴포넌트를 만들어줘.
호버, 비활성화, 로딩 상태도 포함해줘."
```

#### 구체적인 요청

```
❌ 나쁜 예:
"폼이 안 돼"

✅ 좋은 예:
"상담 신청 폼에서 제출 버튼을 누르면 
'TypeError: Cannot read property 'id' of undefined' 에러가 발생해.
InquiryForm.tsx의 handleSubmit 함수와 관련 코드를 공유할게.
[코드 붙여넣기]"
```

#### 단계별 요청

```
✅ 복잡한 기능을 작은 단위로 나누기:

1단계: "모델 목록을 가져오는 getModels() 함수를 만들어줘"
2단계: "가져온 데이터를 ModelCard 컴포넌트에 전달해줘"
3단계: "반응형 그리드로 카드를 배치해줘"
```

### 5.2 문서 참조 방법

```
효과적인 참조 예시:

"TASKS 문서의 M3-2 태스크를 진행하려고 해.
관련된 User Flow 문서의 UF-2 섹션과 
Database Design의 3.1 models 테이블을 참고해서
소속 모델 목록 페이지를 구현해줘."
```

### 5.3 피드백 및 수정 요청

```
✅ 구체적인 피드백:
"버튼은 잘 됐는데, 호버 시 색상이 Design System과 다른 것 같아.
Design System 5.1.3의 Primary 버튼 호버 상태는 
bg: Light Gold (#E8D5A3)인데, 지금은 더 어두워 보여."

✅ 부분 수정 요청:
"전체적으로 좋아. 한 가지만 수정해줘:
버튼 높이를 48px에서 56px (Large 사이즈)로 변경해줘."
```

---

## 6. 코드 품질 및 보안

### 6.1 보안 체크리스트

| 항목 | 확인 |
|------|------|
| 환경 변수로 API 키 관리 | ☐ |
| 클라이언트에 민감 정보 노출 안 함 | ☐ |
| 사용자 입력 유효성 검사 | ☐ |
| SQL 인젝션 방지 (Supabase RLS) | ☐ |
| XSS 방지 (React 기본 이스케이핑) | ☐ |

### 6.2 환경 변수 관리

```bash
# .env.local (gitignore에 포함)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...  # 서버에서만 사용

# NEXT_PUBLIC_ 접두사 규칙:
# - 있음: 브라우저에서 접근 가능 (공개 가능한 값만)
# - 없음: 서버에서만 접근 가능 (민감한 값)
```

```typescript
// 환경 변수 사용
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 서버 전용 (API Route, Server Component에서만)
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
```

### 6.3 에러 처리 패턴

```typescript
// 데이터 페칭 에러 처리
async function getModels() {
  try {
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .eq('is_active', true)
    
    if (error) {
      console.error('모델 조회 실패:', error.message)
      return []
    }
    
    return data
  } catch (err) {
    console.error('예상치 못한 에러:', err)
    return []
  }
}

// 폼 제출 에러 처리
async function handleSubmit(formData: FormData) {
  try {
    setIsLoading(true)
    setError(null)
    
    const result = await submitInquiry(formData)
    
    if (!result.success) {
      setError(result.message)
      return
    }
    
    // 성공 처리
    setIsSuccess(true)
  } catch (err) {
    setError('문제가 발생했습니다. 다시 시도해주세요.')
  } finally {
    setIsLoading(false)
  }
}
```

### 6.4 성능 최적화

| 기법 | 적용 |
|------|------|
| **이미지 최적화** | Next.js Image 컴포넌트 사용 |
| **코드 스플리팅** | 동적 import로 필요할 때 로드 |
| **서버 컴포넌트** | 데이터 페칭은 서버에서 |
| **캐싱** | Supabase 쿼리 결과 재검증 설정 |

```typescript
// Next.js Image 사용
import Image from 'next/image'

<Image
  src={model.profile_image_url}
  alt={model.name}
  width={400}
  height={533}
  className="object-cover"
  placeholder="blur"
  blurDataURL="data:image/png;base64,..."
/>

// 동적 import (큰 컴포넌트)
const KakaoMap = dynamic(() => import('@/components/features/KakaoMap'), {
  loading: () => <MapSkeleton />,
  ssr: false
})
```

---

## 7. 테스트 및 디버깅

### 7.1 검증 워크플로우

```
코드 작성 완료 후:

1. TypeScript 검사
   $ npm run type-check

2. 린트 검사
   $ npm run lint

3. 개발 서버 실행 및 수동 테스트
   $ npm run dev

4. 빌드 테스트
   $ npm run build

5. 브라우저에서 확인
   - 데스크톱/모바일 레이아웃
   - 콘솔 에러 확인
   - 네트워크 탭에서 API 응답 확인
```

### 7.2 디버깅 팁

```typescript
// 콘솔 로그 (개발 중)
console.log('모델 데이터:', models)
console.log('폼 상태:', { isLoading, error })

// 조건부 렌더링 디버깅
{process.env.NODE_ENV === 'development' && (
  <pre className="text-xs bg-gray-100 p-2">
    {JSON.stringify(data, null, 2)}
  </pre>
)}

// React DevTools 사용
// 컴포넌트 상태와 props 확인
```

### 7.3 일반적인 에러 해결

| 에러 | 원인 | 해결 |
|------|------|------|
| `Module not found` | 잘못된 import 경로 | `@/` alias 확인, 파일명 대소문자 확인 |
| `Hydration mismatch` | 서버/클라이언트 불일치 | `useEffect` 또는 `dynamic` import 사용 |
| `Cannot read property of undefined` | null 체크 누락 | 옵셔널 체이닝(`?.`) 또는 조건문 추가 |
| `CORS error` | API 도메인 문제 | Supabase URL 확인, 환경 변수 확인 |

---

## 8. Git 커밋 컨벤션

### 8.1 커밋 메시지 형식

```
<type>: <subject>

<body> (선택)

예시:
feat: 소속 모델 목록 페이지 구현
fix: 상담 신청 폼 유효성 검사 오류 수정
style: 버튼 호버 색상 Design System에 맞게 수정
refactor: 모델 데이터 페칭 로직 분리
docs: README 업데이트
```

### 8.2 커밋 타입

| 타입 | 설명 |
|------|------|
| `feat` | 새로운 기능 |
| `fix` | 버그 수정 |
| `style` | 스타일 변경 (코드 동작 무관) |
| `refactor` | 리팩토링 |
| `docs` | 문서 변경 |
| `chore` | 빌드, 설정 변경 |

---

## 9. 배포 체크리스트

### 9.1 배포 전 확인

| 항목 | 확인 |
|------|------|
| `npm run build` 성공 | ☐ |
| TypeScript 에러 없음 | ☐ |
| 환경 변수 설정 완료 (Netlify) | ☐ |
| 모든 페이지 수동 테스트 | ☐ |
| 모바일 반응형 확인 | ☐ |
| 콘솔 에러 없음 | ☐ |
| 이미지 로딩 확인 | ☐ |
| 폼 제출 테스트 | ☐ |

### 9.2 Netlify 설정

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 10. 문서 간 연결 맵

```
PRD (요구사항)
 │
 ├─→ TRD (기술 명세) ─→ 이 문서 (개발 규칙)
 │
 ├─→ User Flow (흐름도)
 │       │
 │       └─→ TASKS (개발 태스크) ←─ 이 문서 참조
 │
 ├─→ Database Design (DB 설계)
 │
 └─→ Design System (디자인 토큰)
         │
         └─→ 이 문서 (CSS 컨벤션)
```

### 자주 참조하는 조합

| 작업 | 참조 문서 |
|------|-----------|
| 새 페이지 개발 | PRD (사용자 스토리) + User Flow + TASKS |
| DB 작업 | Database Design + TRD (RLS) |
| UI 구현 | Design System + 이 문서 (Tailwind 규칙) |
| 배포 | TRD (호스팅) + 이 문서 (체크리스트) |

---

*이 문서는 프로젝트의 일관된 코드 품질과 효과적인 AI 협업을 위한 가이드입니다.*
