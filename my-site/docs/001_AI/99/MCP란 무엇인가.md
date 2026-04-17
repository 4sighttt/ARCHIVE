## 핵심 요약 (5–10줄)

1. **MCP(Model Context Protocol)**는 LLM이 **외부 도구·데이터에 접근하도록 하는 표준 인터페이스**다.
    
2. 기존에는 AI가 API마다 **개별 연결 코드**를 만들어야 했지만 MCP는 **하나의 공통 규격**을 제공한다.
    
3. 개념적으로 **USB-C처럼 “AI ↔ 도구” 연결 표준** 역할을 한다.
    
4. 이를 통해 AI는 **파일 시스템, 데이터베이스, API, 프로그램**을 직접 호출할 수 있다.
    
5. 예: Blender MCP → AI가 **3D 오브젝트 생성 명령 실행** 가능.
    
6. Claude Desktop에서는 **MCP 서버를 설정 파일(JSON)**로 연결해 외부 도구를 사용할 수 있다.
    
7. 개발자는 Python **fastmcp 라이브러리**로 간단한 MCP 서버를 만들어 AI에게 기능을 제공할 수 있다.
    
8. 만든 MCP 서버는 **원격 서버로 배포**해 여러 AI 클라이언트가 사용할 수 있다.
    
9. Porter AI 같은 플랫폼은 **MCP 연결을 쉽게 관리**하게 해준다.
    

---

# MCP 구조 이해

MCP는 기본적으로 **3개의 구성요소**로 이루어진다.

|구성요소|역할|
|---|---|
|**LLM Client**|AI 모델 (Claude, ChatGPT 등)|
|**MCP Server**|도구를 제공하는 서버|
|**Tools / Resources**|실제 기능 (API, DB, 계산기, 파일 등)|

작동 흐름:

```
사용자 질문
     ↓
LLM
     ↓
MCP 서버 호출
     ↓
외부 도구 실행
     ↓
결과 반환
     ↓
LLM이 자연어로 응답
```

---

# 왜 MCP가 중요한가

### 기존 방식

각 도구마다 **API 연결을 직접 구현**

```
AI → Weather API
AI → GitHub API
AI → File system
AI → Database
```

문제

- 연결 코드 반복
    
- 도구마다 다른 규격
    
- 유지보수 어려움
    

---

### MCP 방식

모든 도구를 **MCP 표준으로 통합**

```
AI
 ↓
MCP
 ↓
[Weather]
[Database]
[Files]
[GitHub]
[Slack]
```

장점

- 한 번 구현하면 **모든 AI에서 사용 가능**
    
- 도구 추가가 쉬움
    
- 표준화된 보안 구조
    

---

# 실제 활용 예

## 1️⃣ Blender 자동 3D 생성

AI에게 명령

```
Create a cube and scale it to 3 meters
```

AI가 하는 일

1. Blender MCP 호출
    
2. Blender Python API 실행
    
3. 3D 오브젝트 생성
    

즉

**AI → Blender 조작 가능**

---

## 2️⃣ 개발 문서 검색 (Context MCP)

Claude Desktop에서

```
claude_desktop_config.json
```

예

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["context7-mcp"]
    }
  }
}
```

결과

AI가 **최신 라이브러리 문서 검색 가능**

예

```
React 19 use hook 설명해줘
```

→ 최신 문서 기반 답변

---

## 3️⃣ 직접 MCP 서버 만들기

Python 예

```python
from fastmcp import FastMCP

mcp = FastMCP()

@mcp.tool()
def add(a: int, b: int):
    return a + b

mcp.run()
```

이제 AI는

```
add(2,3)
```

같은 **툴 호출** 가능.

---

# MCP 서버 배포

로컬이 아닌 **인터넷 서버**에 배포하면

```
AI
 ↓
인터넷
 ↓
MCP 서버
```

어디서든 사용 가능.

예

- Slack 봇
    
- 회사 업무 자동화
    
- 데이터 분석
    
- DevOps
    

---

# Porter AI 역할

Porter AI는

**MCP 서버 관리 플랫폼**

기능

- MCP 자동 생성
    
- 서버 배포
    
- Slack / 앱 연결
    
- 권한 관리
    

즉

**"MCP 인프라 관리 SaaS"**

---

# 핵심 의미 (중요)

MCP가 등장하면서 AI는 단순한 **텍스트 생성기**에서

**실제 작업을 수행하는 시스템**으로 변한다.

예

|이전 AI|MCP 기반 AI|
|---|---|
|설명만 가능|실제 실행|
|코드 작성|코드 실행|
|정보 제공|시스템 조작|

즉

**AI → 소프트웨어 운영체제 인터페이스**

---

원하면 다음도 설명할 수 있다.

- MCP가 **AI 에이전트 시대에서 왜 핵심 기술인지**
    
- OpenAI **function calling / tools와 MCP의 차이**
    
- 앞으로 **AI 앱 구조가 어떻게 바뀌는지** (굉장히 중요한 부분)

==**MCP가 AI 에이전트 시대에서 왜 핵심 기술인지**== 
==**앞으로 AI 앱 구조가 어떻게 바뀌는지**==

## 핵심 요약

MCP가 핵심인 이유는 간단하다.  
**에이전트의 본질은 “생각”이 아니라 “연결과 실행”**인데, MCP는 그 연결을 표준화한다.  
모델이 아무리 똑똑해도 외부 세계의 파일, DB, SaaS, 사내 시스템, 브라우저, 워크플로에 안정적으로 붙지 못하면 실제 업무 자동화는 늘 개별 커스텀 통합에 막힌다. MCP는 이 병목을 줄이기 위한 **공통 규격**이다. ([Claude API Docs](https://docs.anthropic.com/en/docs/mcp "What is the Model Context Protocol (MCP)? - Model Context Protocol"))

또 앞으로 AI 앱 구조는 “앱 안에 AI를 넣는 구조”에서 점점 **“AI가 여러 앱을 오케스트레이션하는 구조”**로 이동할 가능성이 크다. 이미 MCP는 AI 앱이 외부 시스템의 **데이터 소스, 도구, 워크플로, 프롬프트**에 연결되도록 설계되어 있고, OpenAI의 Responses API도 built-in tools와 **remote MCPs**를 하나의 agentic 인터페이스 안에 넣고 있다. ([Claude API Docs](https://docs.anthropic.com/en/docs/mcp "What is the Model Context Protocol (MCP)? - Model Context Protocol"))

---

# 1. 왜 MCP가 “에이전트 시대”의 핵심인가

에이전트라는 말은 흔히 “스스로 생각하고 행동하는 AI”처럼 들리지만, 실제 시스템 관점에서는 더 건조하게 볼 수 있다.

에이전트 =  
**모델 + 상태 + 도구 호출 + 실행 루프 + 권한 통제 + 결과 검증**

이 중에서 지금까지 가장 큰 병목은 대개 **도구 연결 계층**이었다.  
왜냐하면 모델 자체는 점점 좋아졌지만, 실제 업무는 거의 항상 외부 시스템을 건드려야 하기 때문이다.

예를 들면 이런 것들이다.

- 메일 읽기/요약
    
- 슬랙 검색/전송
    
- DB 조회
    
- 파일 읽기/수정
    
- 브라우저 조작
    
- 사내 API 호출
    
- 디자인 툴/3D 툴/개발 툴 연동
    

이 모든 것은 결국 “모델이 외부 세계와 어떻게 상호작용하느냐”의 문제다. MCP는 바로 이 지점에서 **AI 애플리케이션과 외부 시스템을 연결하는 오픈 표준**으로 정의된다. 공식 문서도 MCP를 AI용 **USB-C 포트**에 비유한다. ([Claude API Docs](https://docs.anthropic.com/en/docs/mcp "What is the Model Context Protocol (MCP)? - Model Context Protocol"))

---

# 2. MCP 이전의 문제: 에이전트는 똑똑해도 연결이 제각각이었다

MCP 이전에도 function calling, plugins, tool use, custom connectors는 있었다.  
문제는 **규격이 통일되지 않았다**는 점이다.

과거 구조는 대체로 이랬다.

```text
모델 A ↔ 자체 플러그인 규격 ↔ 도구 1, 2, 3
모델 B ↔ 또 다른 SDK/스키마 ↔ 도구 1, 2, 3
모델 C ↔ 또 다른 방식 ↔ 도구 1, 2, 3
```

즉, 도구 제공자 입장에서는 모델/플랫폼마다 따로 붙여야 하고,  
AI 앱 개발자 입장에서는 도구마다 또 따로 래핑해야 했다.

이 구조에서는 세 가지 비용이 계속 커진다.

1. **통합 비용**: 도구마다 커스텀 연결
    
2. **유지보수 비용**: 모델 플랫폼이 바뀔 때마다 재작업
    
3. **신뢰 비용**: 권한, 보안, 에러 처리, 취소, 로깅이 제각각
    

MCP 스펙은 단순 tool invocation만이 아니라 **configuration, progress tracking, cancellation, error reporting, logging** 같은 유틸리티까지 명시한다. 즉, 단순 “함수 호출 규격”을 넘어서 **에이전트 실행 인프라 규격**에 가까워지고 있다. ([Model Context Protocol](https://modelcontextprotocol.io/specification/2025-11-25 "Specification - Model Context Protocol"))

---

# 3. MCP의 진짜 의미: “모델 지능”을 “시스템 능력”으로 바꾸는 층

이걸 가장 압축해서 말하면:

> **MCP는 모델의 언어적 능력을 시스템적 능력으로 변환하는 인터페이스다.**

LLM은 본질적으로 다음에는 어떤 토큰이 올지 예측하는 모델이다.  
그 자체로는 메일을 보내지도 못하고, DB를 읽지도 못하고, 파일을 수정하지도 못한다.

그런데 MCP가 있으면 모델은 다음과 같은 식으로 행동할 수 있다.

1. 문제를 해석한다.
    
2. 필요한 자원(resource)과 도구(tool)를 찾는다.
    
3. 적절한 호출을 수행한다.
    
4. 결과를 다시 문맥에 반영한다.
    
5. 여러 번 반복한다.
    

즉, “답변 생성기”가 아니라 **실행 가능한 운영 주체**처럼 동작하게 된다.  
이 점에서 MCP는 에이전트 시대의 **실행 계층(execution layer)**이라고 볼 수 있다. 이 표현은 해석이지만, 위의 구조적 역할은 MCP 공식 문서와 OpenAI의 agentic primitives 설명으로 뒷받침된다. ([Claude API Docs](https://docs.anthropic.com/en/docs/mcp "What is the Model Context Protocol (MCP)? - Model Context Protocol"))

---

# 4. MCP가 중요한 이유를 한 단계 더 깊게 보면

## 4-1. 표준화가 생태계를 만든다

표준이 없으면 통합은 늘 1:1이다.  
표준이 생기면 통합은 **N:M 문제를 공통 프로토콜 문제**로 바꾼다.

- 도구 개발자는 MCP 서버를 만든다.
    
- AI 클라이언트는 MCP 클라이언트만 구현한다.
    
- 양쪽이 같은 프로토콜을 따르면 재사용된다.
    

이건 인터넷에서 HTTP가 했던 일, 하드웨어에서 USB가 했던 일과 구조적으로 유사하다. MCP가 정확히 HTTP급 표준이 된다는 뜻은 아니지만, **연결 비용을 줄여 생태계 확장을 촉진한다**는 점은 분명하다. MCP가 현재 오픈 표준으로 운영되고 있고, 2025년 말에는 Linux Foundation 산하 Agentic AI Foundation으로 기부되어 **중립적·커뮤니티 기반 거버넌스** 방향이 강화되었다는 점도 이 생태계 논리를 뒷받침한다. ([Anthropic](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation "Donating the Model Context Protocol and establishing the Agentic AI Foundation \ Anthropic"))

## 4-2. 에이전트는 결국 “도구 검색 비용”과 싸운다

도구가 많아질수록 다른 문제가 생긴다.  
모델은 매번 거대한 tool surface를 문맥에 넣고 판단해야 한다.

OpenAI는 2026년 3월 Responses API changelog에서 **tool search**를 도입하며, 이것이 큰 tool surface를 런타임에 미뤄 **token usage 감소, cache 성능 보존, latency 개선**에 도움 된다고 설명했다. 이것은 현재 에이전트 앱이 단순히 “툴 많이 붙이기”만으로 해결되지 않는다는 증거다. ([OpenAI 개발자 포털](https://developers.openai.com/api/docs/changelog/ "Changelog | OpenAI API"))

즉 앞으로 핵심은 단순 연결이 아니라:

- 어떤 도구가 있는지 발견하고
    
- 어떤 도구를 지금 써야 하는지 고르고
    
- 그 결과를 다시 다음 행동에 연결하는 것
    

이다.

MCP는 이 도구 세계를 표준화해 주고, 그 위에서 각 플랫폼은 tool search, planning, caching, compaction 같은 상위 최적화를 얹게 된다. 이 부분은 공식 기능 발표를 바탕으로 한 구조적 추론이다. ([OpenAI 개발자 포털](https://developers.openai.com/api/docs/changelog/ "Changelog | OpenAI API"))

## 4-3. “최신성”과 “사실성” 문제를 외부 연결로 완화한다

LLM의 고질적 문제 중 하나는 내부 파라미터만으로는 최신 데이터나 조직 내부 데이터를 알 수 없다는 점이다.  
MCP는 모델이 **로컬 파일, DB, 캘린더, 사내 시스템** 같은 외부 자원을 직접 참조하게 해준다. 공식 문서도 MCP가 로컬 파일, DB, 검색 엔진, 계산기, 워크플로 등에 연결될 수 있다고 설명한다. ([Claude API Docs](https://docs.anthropic.com/en/docs/mcp "What is the Model Context Protocol (MCP)? - Model Context Protocol"))

이건 중요한 변화다.  
예전 AI 앱은 모델에게 “아는 척 잘 하게” 만드는 방향이었다면,  
앞으로의 AI 앱은 모델이 **모르면 조회하고, 필요하면 실행하고, 확인한 뒤 답하게** 만드는 방향으로 간다.

---

# 5. MCP는 단순 툴 호출이 아니라 “컨텍스트 운영체제”에 가깝다

이름이 Model **Context** Protocol인 이유가 중요하다.

MCP는 보통 다음 세 축으로 이해된다.

- **Tools**: 실행 가능한 기능
    
- **Resources**: 읽을 수 있는 데이터/문맥
    
- **Prompts**: 워크플로/상호작용 템플릿
    

즉 MCP는 단순히 “계산기 호출”만 다루지 않는다.  
모델이 어떤 문맥을 가져오고, 어떤 도구를 실행하고, 어떤 절차적 가이드를 따를지도 표준화한다. Anthropic/MCP 문서가 데이터 소스, tools, workflows, specialized prompts를 함께 언급하는 이유가 여기에 있다. ([Claude API Docs](https://docs.anthropic.com/en/docs/mcp "What is the Model Context Protocol (MCP)? - Model Context Protocol"))

이 관점에서 보면 MCP는 API 게이트웨이와도 다르고, 단순 함수 호출 스키마와도 다르다.  
더 정확히는:

> **모델이 외부 세계를 이해하고 조작하기 위한 공용 문맥 인터페이스**

라고 보는 편이 맞다.

---

# 6. ==왜 에이전트 시대에는 “모델 성능”보다 “연결 성능”이 더 중요해질 수 있는가==

단일 Q&A에서는 모델 IQ가 중요하다.  
하지만 실제 업무 자동화에서는 종종 다음이 더 중요하다.

- 필요한 정보에 접근할 수 있는가
    
- 올바른 도구를 고를 수 있는가
    
- 권한이 있는가
    
- 중간 실패를 복구할 수 있는가
    
- 여러 단계를 추적·취소·로깅할 수 있는가
    
- 장기 상태를 관리할 수 있는가
    

OpenAI Responses API는 자신을 단순 텍스트 생성 API가 아니라 **powerful, agent-like applications**를 위한 통합 인터페이스로 설명하고, web search, file search, computer use, code interpreter, remote MCPs를 같은 실행 루프 안에서 다룬다. 또 multi-turn 상태 유지, server-side compaction, 1M token context window 같은 기능도 에이전트 워크플로 강화를 위해 추가되고 있다. ([OpenAI 개발자 포털](https://developers.openai.com/api/docs/guides/migrate-to-responses/ "Migrate to the Responses API | OpenAI API"))

이 흐름이 시사하는 바는 분명하다.

앞으로의 경쟁은 단순히 “누가 더 그럴듯한 문장을 생성하나”가 아니라  
**누가 더 안정적으로 외부 세계를 다루나**로 이동한다.

그리고 MCP는 바로 그 연결 표준의 핵심 후보 중 하나다.

---

# 7. 앞으로 AI 앱 구조는 어떻게 바뀌는가

이 부분이 정말 중요하다.

## 과거 구조: 앱 중심 + AI는 기능 하나

전통적인 구조는 이렇다.

```text
사용자 → 특정 앱 → 앱 내부 기능들
                     └ AI 기능 하나(요약, 챗봇, 검색 보조)
```

예:

- 문서 앱 안에 “요약” 버튼
    
- 메일 앱 안에 “답장 초안” 버튼
    
- 디자인 툴 안에 “생성” 버튼
    

여기서 AI는 **앱 내부의 부가기능**이다.

---

## 현재 전환기 구조: AI 중심 + 앱은 도구들

점점 이런 구조가 나온다.

```text
사용자 → AI 에이전트
           ├ 캘린더
           ├ 메일
           ├ 슬랙
           ├ 문서
           ├ DB
           ├ 브라우저
           └ 사내 서비스
```

즉, 사용자는 개별 앱을 일일이 직접 조작하는 대신,  
AI에게 목표를 말하고 AI가 여러 앱을 조합해 처리한다.

이 구조에서는 개별 앱이 “최종 사용자 인터페이스”가 아니라  
**에이전트가 호출하는 백엔드 기능 단위**로 바뀐다.

MCP Apps 관련 공식 글도 기존 업계가 “각 앱 안에 비서를 넣는” 방식으로 분절되어 있었고, MCP가 이를 뒤집어 **앱을 에이전트 안의 플러그형 구성요소**로 만든다고 설명한다. ([Model Context Protocol Blog](https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/?utm_source=chatgpt.com "MCP Apps - Bringing UI Capabilities To MCP Clients"))

이건 굉장히 큰 구조 변화다.

---

# 8. 미래의 AI 앱은 5계층 구조로 재편될 가능성이 크다

이건 내가 구조적으로 정리한 모델이다. 아래는 추론이지만, 현재 공식 문서들의 방향성과 잘 맞는다. ([Claude API Docs](https://docs.anthropic.com/en/docs/mcp "What is the Model Context Protocol (MCP)? - Model Context Protocol"))

## 1층. 인터페이스 계층

- 채팅
    
- 음성
    
- 화면 기반 UI
    
- 멀티모달 입력
    

사용자는 더 이상 앱 메뉴를 탐색하기보다 목표를 말한다.

## 2층. 에이전트 오케스트레이션 계층

- 계획 세우기
    
- 툴 선택
    
- 단계별 실행
    
- 중간 상태 유지
    
- 실패 복구
    

여기가 사실상 “새로운 앱 로직”이 된다.

## 3층. 컨텍스트/메모리 계층

- 대화 상태
    
- 작업 상태
    
- 파일/문서 컨텍스트
    
- 장기 메모리
    
- 압축/요약/캐시
    

Responses API의 stateful context와 compaction은 이 층과 직접 연결된다. ([OpenAI 개발자 포털](https://developers.openai.com/api/docs/guides/migrate-to-responses/ "Migrate to the Responses API | OpenAI API"))

## 4층. 연결 프로토콜 계층

- MCP
    
- 내장 툴 인터페이스
    
- 함수 호출
    
- 인증/권한 체계
    

MCP는 여기서 핵심 표준 역할을 한다.

## 5층. 실행 대상 계층

- SaaS
    
- 로컬 앱
    
- 사내 시스템
    
- DB
    
- 파일 시스템
    
- 브라우저
    
- 코드 실행 환경
    

즉 미래 앱은 “단일 앱”이라기보다  
**오케스트레이터 + 연결 표준 + 실행 대상 묶음**에 더 가까워진다.

---

# 9. 그럼 기존 SaaS 앱은 사라지는가?

사라진다기보다는 **역할이 바뀐다**고 보는 편이 맞다.

## 지금의 SaaS

사용자가 직접 들어가서 클릭하고 조작하는 공간

## 앞으로의 SaaS

AI가 호출할 수 있도록 구조화된 기능과 데이터 권한을 제공하는 공간

즉 SaaS의 가치가 점점 다음으로 이동한다.

- 좋은 UI
    
- 좋은 데이터 모델
    
- 좋은 권한 체계
    
- 좋은 API/MCP 서버
    
- 좋은 감사 추적(audit trail)
    

사용자가 직접 앱을 쓰는 비중이 줄수록, 앱은 “화면”이 아니라  
**에이전트 친화적 실행 표면(agent-friendly surface)**이 되어야 한다.

---

# 10. UI는 어떻게 바뀌는가

앞으로 UI는 두 방향으로 갈 가능성이 높다.

## 방향 A: 대화형 슈퍼 UI

사용자는 “월요일 오전 빈 시간 찾아서 A안/B안 비교해서 회의 잡고 요약도 보내줘”처럼 말한다.

AI는:

- 캘린더 조회
    
- 참석자 확인
    
- 초안 작성
    
- 메시지 전송
    
- 결과 요약
    

을 한 번의 목표 지시로 처리한다.

## 방향 B: 검토/승인 중심 UI

보안과 실수 문제 때문에, 완전 자동보다 실제 제품은 종종 이런 식이 된다.

- AI가 제안
    
- 인간이 검토
    
- 승인 후 실행
    
- 로그 저장
    

MCP 스펙이 사용자 동의, 데이터 프라이버시, 명시적 승인, UI를 통한 검토를 강조하는 이유도 이 때문이다. 스펙은 사용자에게 데이터 공유와 작업 실행에 대한 **명시적 동의와 통제**가 필요하다고 말한다. ([Model Context Protocol](https://modelcontextprotocol.io/specification/2025-11-25 "Specification - Model Context Protocol"))

즉 미래 UI의 핵심은 “버튼 늘리기”가 아니라  
**제안-검토-승인-실행** 루프를 얼마나 잘 설계하느냐가 된다.

---

# 11. 왜 보안/권한이 훨씬 더 중요해지는가

에이전트가 강해질수록 보안은 부수 문제가 아니다.  
오히려 핵심이다.

MCP 공식 보안 문서는 다음 상황에서 authorization이 강하게 권장된다고 설명한다.

- 이메일, 문서, DB 같은 사용자별 데이터 접근
    
- 누가 어떤 행동을 했는지 감사가 필요한 경우
    
- 사용자 동의가 필요한 API 접근
    
- 엔터프라이즈 환경의 엄격한 access control
    
- 사용자별 rate limiting / usage tracking ([Model Context Protocol](https://modelcontextprotocol.io/docs/tutorials/security/authorization "Understanding Authorization in MCP - Model Context Protocol"))
    

즉 에이전트 시대의 진짜 문제는  
“AI가 일을 할 수 있느냐”보다  
“**무엇을, 누구 권한으로, 어느 범위까지, 어떻게 기록하며 하게 할 것이냐**”다.

이 점에서 MCP는 단지 편의 기술이 아니라  
**통제 가능한 실행 프레임워크의 일부**다.

---

# 12. MCP가 function calling보다 더 중요한 이유

function calling은 보통 “모델이 특정 함수를 호출한다”는 수준이다.  
MCP는 그보다 넓다.

비교하면:

## Function calling

- 앱 내부에 미리 정의된 함수 호출
    
- 보통 한 애플리케이션의 로컬 스키마
    
- 범용 생태계 표준으로 쓰기엔 제한적
    

## MCP

- 외부 시스템 연결을 위한 공용 표준
    
- tools + resources + prompts + authorization + utilities
    
- 클라이언트/서버 구조
    
- 다양한 앱과 플랫폼 간 재사용 가능
    

OpenAI도 Responses API에서 custom functions와 더불어 **remote MCPs**를 별도로 지원 항목에 포함하고 있다. 즉 업계 수준에서도 “함수 호출”과 “MCP 기반 연결”은 같은 것이 아니라, MCP가 더 넓은 연결 모델로 취급되고 있다고 볼 수 있다. ([OpenAI 개발자 포털](https://developers.openai.com/api/docs/guides/migrate-to-responses/ "Migrate to the Responses API | OpenAI API"))

---

# 13. 앞으로 개발자는 어떻게 앱을 만들게 될까

기존에는 보통 이렇게 만들었다.

```text
프론트엔드
  ↓
백엔드
  ↓
DB / 외부 API
```

앞으로는 이런 식의 구조가 늘어날 가능성이 크다.

```text
UI(채팅/음성/대시보드)
  ↓
에이전트 오케스트레이터
  ↓
모델
  ↓
MCP 클라이언트 / built-in tools / function calls
  ↓
각종 MCP 서버 및 SaaS/사내 시스템
```

즉 개발의 중심이 바뀐다.

예전 핵심:

- 라우팅
    
- 폼
    
- CRUD 화면
    
- API 핸들러
    

앞으로 핵심:

- 작업 분해
    
- 권한 설계
    
- 도구 선택 정책
    
- 실패 복구
    
- 상태 관리
    
- 로그/감사
    
- 승인 UX
    
- 비용/지연 최적화
    

이 변화는 이미 agentic API들이 state, multi-turn, tools, compaction, runtime tool search를 강조하는 데서 드러난다. ([OpenAI 개발자 포털](https://developers.openai.com/api/docs/guides/migrate-to-responses/ "Migrate to the Responses API | OpenAI API"))

---

# 14. 어떤 회사가 유리해질까

이건 추론이지만, 꽤 강한 방향성이 있다.

앞으로 유리한 쪽은 단순히 “LLM 붙였다”가 아니라 다음을 가진 회사일 가능성이 높다.

1. **좋은 권한 모델**이 있는 회사
    
2. **구조화된 데이터**가 많은 회사
    
3. **감사 로그와 승인 체계**가 있는 회사
    
4. **MCP/API 표면을 잘 설계한 회사**
    
5. 인간이 최종 책임을 지는 업무 흐름을 잘 나눈 회사
    

반대로 불리한 쪽은:

- 데이터가 사일로에 갇혀 있고
    
- 권한 구조가 엉성하고
    
- 외부 연결이 어렵고
    
- 모든 업무가 사람의 수동 클릭에 묶여 있는 조직
    

이다.

즉 AI 경쟁력은 점점 모델 자체보다  
**조직의 시스템 정리 수준**과 더 강하게 연결될 수 있다.

---

# 15. MCP 이후, 앱의 단위 자체가 바뀔 수 있다

아주 장기적으로 보면 “앱”이라는 단위가 지금과 다르게 느껴질 가능성이 있다.

지금은:

- 메일 앱
    
- 캘린더 앱
    
- 문서 앱
    
- 슬랙 앱
    
- CRM 앱
    

처럼 분리돼 있다.

하지만 에이전트 중심 세계에서는 사용자가 인식하는 단위가 이런 식으로 바뀔 수 있다.

- 일정 관리 작업
    
- 영업 후속 작업
    
- 리서치 작업
    
- 코드 수정 작업
    
- 콘텐츠 제작 작업
    

즉 사용자는 “무슨 앱을 열지”보다  
“무슨 목표를 달성할지”를 먼저 말하고,  
에이전트가 여러 시스템을 조합한다.

이 변화가 완전히 앱을 대체한다는 뜻은 아니다.  
다만 **앱 중심 사고가 작업 중심 사고로 이동**할 가능성은 매우 높다. MCP Apps가 “앱을 에이전트 안의 플러그 가능한 컴포넌트”로 본다는 점도 이 방향과 잘 맞는다. ([Model Context Protocol Blog](https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/?utm_source=chatgpt.com "MCP Apps - Bringing UI Capabilities To MCP Clients"))

---

# 16. MCP에도 한계는 있다

중요한 점이라 분명히 말하면, MCP가 만능은 아니다.

## 한계 1. 표준이 있다고 품질이 자동 보장되지는 않는다

MCP 서버가 있다고 해서

- 응답이 정확하고
    
- 안전하고
    
- 권한 설계가 좋고
    
- 에러 처리가 잘 되고
    
- 모델이 항상 올바르게 쓰는 것  
    은 아니다.
    

## 한계 2. 도구가 많아질수록 선택 문제가 커진다

tool overload, latency, token 비용, planning 실패가 생긴다.  
그래서 OpenAI가 tool search를 넣은 것이다. ([OpenAI 개발자 포털](https://developers.openai.com/api/docs/changelog/ "Changelog | OpenAI API"))

## 한계 3. 보안 표면이 넓어진다

외부 데이터 접근과 코드 실행 경로가 생길수록 위험도 커진다. MCP 스펙 자체도 arbitrary data access와 code execution path의 위험을 명시적으로 경고한다. ([Model Context Protocol](https://modelcontextprotocol.io/specification/2025-11-25 "Specification - Model Context Protocol"))

## 한계 4. 결국 인간 검토가 필요한 영역이 많다

특히 돈, 법률, 의료, 인사, 보안, 운영 자동화는  
완전 자율보다 승인 기반 반자동 구조가 더 현실적일 수 있다.

---

# 17. 결론

가장 압축하면 이렇게 정리할 수 있다.

### MCP가 핵심인 이유

에이전트의 가치는 “말 잘하기”가 아니라 **외부 세계와 연결되어 실제 일을 하는 능력**에서 나오기 때문이다. MCP는 그 연결을 표준화해, 에이전트를 일회성 데모가 아니라 **재사용 가능한 시스템 구조**로 만든다. ([Claude API Docs](https://docs.anthropic.com/en/docs/mcp "What is the Model Context Protocol (MCP)? - Model Context Protocol"))

### 앞으로 AI 앱 구조가 바뀌는 방향

AI는 더 이상 앱 안의 보조 기능이 아니라, 여러 앱과 시스템을 조율하는 **상위 오케스트레이터**가 된다. 앱은 사용자용 화면에서 점점 **에이전트가 호출하는 기능 표면**으로 재정의되고, 핵심 경쟁력은 UI 버튼 수가 아니라 **연결성, 권한, 상태 관리, 승인 흐름, 감사 가능성**으로 이동한다. 이 방향성은 MCP의 구조와 OpenAI Responses API의 agentic primitives, remote MCPs, tool search, long-running workflow 지원 흐름과 일치한다. ([OpenAI 개발자 포털](https://developers.openai.com/api/docs/guides/migrate-to-responses/ "Migrate to the Responses API | OpenAI API"))

한 문장으로 끝내면:

> **MCP는 AI를 “대답하는 모델”에서 “일하는 시스템”으로 바꾸는 표준 연결층이다.**

원하면 다음 단계로 이어서  
**“OpenAI tools/function calling vs MCP 차이”** 또는  
**“실제 MCP 기반 AI 앱 아키텍처를 도식으로 설계”**해드릴 수 있다.