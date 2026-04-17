## 핵심 요약

1. **Computer Use**는 AI가 실제 컴퓨터 화면을 보고 조작하는 기술이다.
    
2. 핵심 구성은 **UI 인식(Perception) + 행동 선택(Action model)** 두 단계로 나뉜다.
    
3. UI 인식은 화면을 **이미지처럼 분석**하여 버튼·텍스트·입력창을 이해한다.
    
4. 행동 모델은 **마우스 이동, 클릭, 키보드 입력** 같은 실제 행동을 결정한다.
    
5. 실행 구조는 보통 **Observe → Plan → Act → Observe** 반복 루프다.
    
6. 기술적으로는 **멀티모달 모델 + 행동 정책(policy)** 결합 구조다.
    
7. 브라우저 자동화나 RPA와 비슷하지만 **고정 스크립트가 아니라 추론 기반**이다.
    

---

## 1️⃣ 기본 구조

Computer Use 시스템은 보통 다음 구조로 작동한다.

```
화면 캡처
   ↓
UI 이해 (Vision model)
   ↓
행동 계획 (LLM reasoning)
   ↓
마우스 / 키보드 액션 실행
   ↓
새 화면 인식
   ↓
반복
```

즉 AI가 **사람처럼 화면을 보고 행동을 결정한다.**

---

## 2️⃣ UI 인식 (Perception)

AI는 화면을 **이미지 형태로 입력**받는다.

예시 화면

```
[ Gmail ]

Compose
Inbox (3)
Sent
Search mail [____]
```

모델이 인식하는 정보

|요소|의미|
|---|---|
|버튼|클릭 가능|
|입력창|텍스트 입력 가능|
|링크|페이지 이동|
|텍스트|현재 상태|

이 과정에서 사용되는 기술

- Vision Transformer
    
- Multimodal LLM
    
- OCR (텍스트 읽기)
    

대표 모델

- GPT-4V
    
- Gemini 1.5
    

---

## 3️⃣ 행동 모델 (Action Model)

UI를 이해한 후 **다음 행동을 결정한다.**

행동 종류

```
move_mouse(x,y)
click
double_click
scroll
type("hello")
press("enter")
```

AI는 이런 행동을 **순서로 계획한다.**

예시

```
1. Gmail 열기
2. Compose 버튼 클릭
3. 이메일 주소 입력
4. 제목 입력
5. 메시지 입력
6. Send 클릭
```

이 과정은 **LLM reasoning + policy**로 결정된다.

---

## 4️⃣ 실행 루프 (Agent Loop)

대부분 시스템은 다음 루프 구조를 사용한다.

```
while task_not_done:

    observe_screen()

    reason_about_state()

    decide_action()

    execute_action()
```

이걸 **Agent loop**라고 부른다.

---

## 5️⃣ 기존 자동화와 차이

|방식|특징|
|---|---|
|RPA|미리 정해진 스크립트|
|Computer Use|상황에 따라 판단|

예

RPA

```
좌표 (300,200) 클릭
```

Computer Use

```
"Send 버튼 찾기 → 클릭"
```

그래서 **웹사이트 구조가 조금 바뀌어도 대응 가능**하다.

---

## 6️⃣ 실제 사용 사례

Computer Use는 이미 일부 시스템에서 사용된다.

가능한 작업

- 웹사이트 탐색
    
- 이메일 작성
    
- 문서 작성
    
- 프로그램 설치
    
- 데이터 수집
    

대표 연구

- Claude Computer Use
    
- AutoGPT
    

---

## 핵심 포인트

Computer Use는 본질적으로

```
Vision + Language + Action
```

을 결합한 시스템이다.

즉 AI가

- **보고**
    
- **생각하고**
    
- **행동하는**
    

구조로 확장된 것이다.

---

원하면 다음도 설명할 수 있다.

1️⃣ Computer Use가 **왜 아직 완벽하지 않은지 (실패 원인)**  
2️⃣ **UI 인식 방식 3가지 (좌표 / DOM / vision)**  
3️⃣ 앞으로 나올 **완전 자율 AI 에이전트 구조**



## 핵심 요약

1. **완전 자율 AI 에이전트**는 인간의 지속적인 지시 없이 스스로 목표를 달성하는 시스템이다.
    
2. 일반 구조는 **Goal → Planning → Tool use → Memory → Action → Feedback** 순환 구조다.
    
3. 핵심 구성요소는 **LLM(추론), 도구 사용, 장기 메모리, 환경 상호작용**이다.
    
4. 대부분 시스템은 **Agent Loop**라는 반복 구조로 작동한다.
    
5. 완전 자율 에이전트는 단일 모델이 아니라 **여러 모듈의 시스템 아키텍처**다.
    
6. 현재 연구 단계에서는 안정성·신뢰성 문제로 **부분 자율 형태**가 대부분이다.
    

---

# 완전 자율 AI 에이전트 구조

## 1️⃣ 전체 아키텍처

일반적으로 다음 구조를 가진다.

```
Goal
 ↓
Planner
 ↓
Task Decomposition
 ↓
Tool / Computer Use
 ↓
Environment Interaction
 ↓
Memory Update
 ↓
Feedback → 다시 계획
```

즉 **목표 중심 루프 시스템**이다.

---

## 2️⃣ 핵심 모듈

### ① Goal System

에이전트가 해결해야 할 목표.

예

```
목표:
"웹에서 최신 AI 논문을 찾아 요약하고 블로그 글 작성"
```

목표는

- 사용자 입력
    
- 시스템 정책
    
- 내부 계획
    

에서 생성될 수 있다.

---

### ② Planner (계획 모듈)

목표를 **작은 작업으로 분해**한다.

예

```
1 논문 검색
2 PDF 다운로드
3 논문 분석
4 요약 작성
5 블로그 포스트 작성
```

여기서 사용되는 기술

- Chain of Thought
    
- Tree of Thought
    
- Planning LLM
    

---

### ③ Tool Use

에이전트는 다양한 도구를 사용한다.

예

|도구|역할|
|---|---|
|검색 API|정보 수집|
|브라우저|웹 탐색|
|Python|계산|
|파일 시스템|저장|

예

```
search("latest AI research")
download_pdf()
summarize()
```

---

### ④ Memory System

장기 작업을 위해 **메모리 시스템**이 필요하다.

메모리 유형

|유형|설명|
|---|---|
|Working memory|현재 작업|
|Short-term|대화 맥락|
|Long-term|축적 지식|

대표 구조

```
Vector DB
Knowledge graph
File storage
```

---

### ⑤ Action System

실제 행동 수행.

예

```
open_browser
click
write_file
send_email
run_code
```

Computer Use 기능이 여기에 포함된다.

---

### ⑥ Feedback / Evaluation

작업 결과를 평가한다.

예

```
결과 품질 검사
목표 달성 여부 확인
오류 수정
```

이 과정에서

- self-critique
    
- evaluator model
    

이 사용된다.

---

# 에이전트 루프 (Agent Loop)

자율 에이전트는 보통 다음 반복 구조다.

```
while goal_not_complete:

    observe_environment()

    reason()

    plan()

    act()

    evaluate()
```

이 루프가 **수십~수천 번 반복**될 수 있다.

---

# 대표 연구 및 시스템

다음 시스템들이 이 구조를 기반으로 한다.

- AutoGPT
    
- BabyAGI
    
- Devin
    

이들은 모두

```
LLM + Tool + Memory + Planning
```

조합 구조다.

---

# 가장 어려운 문제

완전 자율 에이전트의 핵심 난제는 3가지다.

### 1. 계획 오류

LLM이 잘못된 계획을 세우면 전체 작업 실패.

### 2. 장기 안정성

수백 단계 작업에서 오류가 누적된다.

### 3. 목표 정렬

에이전트가 **목표를 잘못 해석**할 수 있다.

---

# 핵심 정리

완전 자율 에이전트는 본질적으로

```
LLM (두뇌)
+ Tool use (손)
+ Memory (기억)
+ Planning (전략)
```

이 결합된 **AI 운영체제(OS)**에 가까운 구조다.

---

원하면 다음도 설명할 수 있다.

1️⃣ 현재 연구자들이 생각하는 **“AGI에 가장 가까운 에이전트 구조”**  
2️⃣ **GPT-5.4 같은 모델이 왜 에이전트에 유리한지**  
3️⃣ 자율 에이전트에서 가장 중요한 **“Memory architecture 문제”**