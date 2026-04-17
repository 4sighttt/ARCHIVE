## 핵심 요약

AI 에이전트 시스템은 보통 **5개의 핵심 계층**으로 구성된다.

1. **사용자 인터페이스** – 채팅, 음성, 앱 UI
    
2. **에이전트 오케스트레이터** – 계획 수립, 작업 분해, 실행 루프
    
3. **LLM 모델** – 추론과 의사결정
    
4. **도구 연결 계층** – OpenAI Tools / Function Calling / MCP
    
5. **실행 시스템** – API, SaaS, DB, 파일, 브라우저
    

여기서 **MCP(Model Context Protocol)**는 4번 계층에서 **외부 도구와 AI를 연결하는 표준 인터페이스** 역할을 한다.  
OpenAI와 Claude는 모두 **LLM + Tool 사용 구조**를 갖지만 **도구 연결 방식**이 약간 다르다.

---

# 1. AI 에이전트 전체 구조

전체 구조를 단순화하면 다음과 같다.

```
사용자
 ↓
UI (chat / voice / app)
 ↓
Agent Orchestrator
 ↓
LLM (GPT / Claude)
 ↓
Tool Layer
 ↓
External Systems
```

각 계층의 역할을 보면 다음과 같다.

---

# 2. 사용자 인터페이스 계층

사용자가 AI와 상호작용하는 곳이다.

예

- 채팅 UI
    
- 음성 인터페이스
    
- 앱 화면
    
- API
    

예시

```
사용자:
"다음주 회의 일정 잡고 메일 보내줘"
```

이 요청은 에이전트 시스템으로 전달된다.

---

# 3. 에이전트 오케스트레이터

이 계층이 **에이전트의 핵심**이다.

주요 기능

- 작업 계획 (Planning)
    
- 작업 분해 (Task decomposition)
    
- 도구 선택
    
- 실행 루프 관리
    
- 상태 관리
    

예

요청

```
회의 일정 잡기
```

에이전트 내부 작업

```
1 캘린더 조회
2 가능한 시간 찾기
3 회의 생성
4 이메일 작성
5 이메일 전송
```

이 과정에서 LLM이 판단을 수행한다.

---

# 4. LLM 모델 계층

여기서 실제 **추론**이 이루어진다.

대표 모델

- OpenAI GPT
    
- Anthropic Claude
    
- Google Gemini
    

LLM은 다음 역할을 한다.

- 사용자 의도 파악
    
- 작업 계획
    
- 도구 선택
    
- 결과 해석
    

예

```
메일을 보내려면
send_email tool을 사용해야 한다
```

---

# 5. Tool Layer (도구 연결 계층)

이 계층이 **AI 에이전트의 핵심 인프라**다.

여기서 AI는 외부 기능을 사용한다.

대표 방식

### OpenAI

- function calling
    
- tools
    
- responses API tools
    

### Claude

- tool use
    
- MCP
    

---

# 6. MCP의 위치

MCP는 **Tool Layer의 표준 프로토콜**이다.

구조

```
LLM
 ↓
MCP Client
 ↓
MCP Server
 ↓
External Tools
```

예

```
AI
 ↓
MCP
 ↓
Weather API
Database
Filesystem
Slack
```

---

# 7. MCP 서버 내부 구조

일반적인 MCP 서버 구조

```
MCP Server
 ├ tools
 ├ resources
 ├ prompts
 └ handlers
```

예

```
tools
 ├ add
 ├ search
 ├ query_database
 └ send_email
```

AI는 필요한 tool을 호출한다.

---

# 8. OpenAI 구조

OpenAI 에이전트 구조

```
User
 ↓
OpenAI Responses API
 ↓
LLM
 ↓
Tools / Function Calling
 ↓
External APIs
```

예

```
GPT
 ↓
function call
 ↓
weather_api()
```

특징

- 함수 스키마 기반
    
- JSON 호출
    

---

# 9. Claude + MCP 구조

Claude 구조

```
User
 ↓
Claude
 ↓
MCP Client
 ↓
MCP Server
 ↓
Tools
```

특징

- 표준 프로토콜
    
- 여러 시스템 연결
    
- 서버 기반 도구
    

---

# 10. OpenAI vs MCP 차이

|항목|OpenAI Tools|MCP|
|---|---|---|
|방식|함수 호출|프로토콜|
|범위|앱 내부|외부 서버|
|확장성|제한적|매우 높음|
|표준화|플랫폼 종속|오픈 표준|

즉

```
Function calling = local tool
MCP = distributed tool network
```

---

# 11. 실제 AI 에이전트 예

예

```
사용자:
"이번달 매출 보고서 만들어줘"
```

AI 실행

```
1 DB 조회
2 데이터 분석
3 그래프 생성
4 문서 작성
5 이메일 전송
```

구조

```
User
 ↓
Agent
 ↓
LLM
 ↓
MCP tools
 ↓
DB / Analytics / Email
```

---

# 12. 미래 AI 앱 구조

앞으로 앱 구조는 이렇게 바뀔 가능성이 크다.

현재

```
사용자 → 앱 → 기능
```

미래

```
사용자 → AI 에이전트 → 여러 앱
```

즉

AI가 **앱을 조합**한다.

---

# 13. AI 에이전트 시스템의 핵심 요소

완전한 에이전트 시스템은 보통 다음을 포함한다.

```
LLM
Planning
Memory
Tools
Execution loop
State management
```

여기서 MCP는

```
Tools / Integration layer
```

역할을 한다.

---

# 14. 가장 중요한 개념

AI 에이전트에서 핵심은

**모델 지능보다 연결 능력**이다.

이유

모델이 아무리 똑똑해도

- DB 접근 못함
    
- 파일 수정 못함
    
- 메일 전송 못함
    
- 프로그램 실행 못함
    

이면 실제 작업을 할 수 없다.

그래서

```
LLM + Tool System
```

이 에이전트의 본질이다.

---

# 15. 전체 구조 한눈에 보기

최종 구조

```
사용자
 ↓
UI
 ↓
Agent Orchestrator
 ↓
LLM (GPT / Claude)
 ↓
Tool Layer
 ↓
MCP / Tools
 ↓
External Systems
```

---

## 한 문장 정리

AI 에이전트 시스템은 **LLM이 외부 도구를 사용해 실제 작업을 수행하도록 만드는 구조**이며,  
MCP는 그 과정에서 **AI와 외부 시스템을 연결하는 표준 인터페이스** 역할을 한다.

---

원하면 다음도 설명할 수 있다.

1️⃣ **실제 AI 에이전트 아키텍처 (2026 기준)**  
2️⃣ **AutoGPT / Devin / OpenAI Agents 구조**  
3️⃣ **MCP 기반 AI 운영체제 개념**

특히 **3번은 지금 AI 산업에서 가장 중요한 구조 변화**다.


