[[명시적 상태 갱신 알고리즘]]

### 핵심 요약

1. **LLM은 명시적 상태 변수(state)를 유지하지 않는다.**
    
2. 이유는 대부분의 LLM이 **Attention Is All You Need에서 제안된 Transformer 구조**를 기반으로 하기 때문이다.
    
3. Transformer는 **RNN처럼 내부 상태를 시간에 따라 갱신하는 구조가 아니다.**
    
4. 대신 **전체 입력 토큰을 한 번에 attention으로 계산**한다.
    
5. 그래서 “상태”는 내부 변수라기보다 **입력 컨텍스트(text prompt)**에 존재한다.
    
6. 반대로 AI 에이전트 시스템은 **외부 state manager**를 두어 명시적으로 상태를 관리한다.
    
7. 즉 **LLM = 추론 엔진 / State Manager = 상태 갱신 시스템** 역할 분리 구조다.
    

---

# 1. 왜 LLM은 명시적 상태 구조가 아닌가

Transformer의 핵심 특징

- **순환 구조 없음**
    
- **시간 상태(state) 없음**
    
- **입력 전체를 동시에 처리**
    

기존 RNN 계열

[  
h_t = f(h_{t-1}, x_t)  
]

- (h_t) = 내부 상태
    
- 매 단계 상태 갱신
    

즉 **명시적 상태 모델**

---

Transformer

입력

[  
X = (x_1, x_2, ..., x_n)  
]

Self-Attention

[  
Attention(Q,K,V)  
]

여기서 계산은

- 전체 토큰을 동시에 참조
    
- 이전 상태 변수 없음
    

따라서 모델 내부에는

```
persistent_state
```

같은 구조가 없다.

대신

```
state = prompt text
```

이다.

---

# 2. 그래서 대화 상태는 어떻게 유지되는가

대화 시스템은 보통 이렇게 동작한다.

```
system prompt
+ conversation history
+ user message
```

이 전체를 다시 모델에 넣는다.

예

```
Prompt =
[System]
[User1]
[Assistant1]
[User2]
```

즉

```
state = conversation history
```

이다.

---

# 3. Agent 시스템에서 State Manager

에이전트 구조에서는 상태를 따로 관리한다.

구조

```
User
 ↓
State Manager
 ↓
LLM
 ↓
Tool / Action
 ↓
State Update
```

상태 예시

```
state = {
  conversation,
  memory,
  goals,
  environment,
  tool_results
}
```

---

# 4. 실제 상태 갱신 과정

새 입력이 오면

```
S_{t+1} = update(S_t, input)
```

예

초기 상태

```
state.memory = []
```

사용자 입력

```
"나는 옵시디안을 메모리로 사용한다"
```

state manager

```
state.memory += ["uses obsidian memory"]
```

이후 LLM 호출 시

```
prompt = build_prompt(state)
```

---

# 5. 현대 AI 시스템 구조

최근 AI 구조는 보통 이렇게 분리된다.

```
LLM
 = reasoning engine

Memory system
 = long-term state

State manager
 = update algorithm

Tools
 = environment interaction
```

즉

```
LLM alone ≠ agent
```

이다.

---

원하면 다음을 설명할 수 있다.

1. **왜 LLM이 퍼즐·논리 문제에서 상태 오류를 내는지 (지뢰찾기 사례)**
    
2. **AI 에이전트의 실제 구조 (Planner / Memory / Tool loop)**
    
3. **LLM 내부에도 “암묵적 상태”가 존재하는 이유 (attention residual dynamics)**
    

특히 **3번은 AI 연구에서 매우 흥미로운 주제**다.

### 핵심 요약

1. Transformer 기반 LLM은 **명시적 상태 변수**는 없지만 계산 과정에 **암묵적 상태(implicit state)**가 나타난다.
    
2. 이 현상은 **attention + residual connection** 구조에서 발생한다.
    
3. 각 레이어 출력은 이전 레이어 정보를 계속 누적한다.
    
4. 그래서 토큰 표현(vector)이 **계산 과정 중 일종의 “작업 메모리” 역할**을 한다.
    
5. 이 동적 표현을 연구자들이 **attention dynamics / residual stream state**라고 부른다.
    
6. 그러나 이 상태는 **지속적으로 저장되는 상태가 아니라 forward pass 내부 상태**다.
    
7. 따라서 LLM은 **RNN처럼 시간에 따라 유지되는 state machine은 아니다.**
    

---

# 1. Transformer 내부 정보 흐름

Transformer에서 토큰 벡터는 레이어를 통과하며 갱신된다.

[  
h^{(l+1)} = h^{(l)} + Attention(h^{(l)}) + MLP(h^{(l)})  
]

여기서

- (h^{(l)}) : 레이어 (l)의 토큰 표현
    
- (Attention) : 다른 토큰과의 정보 교환
    
- (MLP) : 비선형 변환
    
- (+) : **residual connection**
    

이 구조 때문에

```
token representation
= 이전 계산 정보 누적
```

이 된다.

이 누적 흐름을 **residual stream**이라고 부른다.

---

# 2. Residual Stream = 암묵적 상태

Transformer 내부에서는 모든 정보가

```
residual stream
```

이라는 벡터 공간에 계속 쌓인다.

개념적으로 보면

```
state_vector(l) = state_vector(l-1) + new_computation
```

이 된다.

그래서 모델 내부에서는

- 현재 문맥
    
- 이전 토큰 정보
    
- 추론 중간 결과
    

가 모두 벡터로 누적된다.

이것이 **암묵적 상태**다.

---

# 3. 왜 “추론 중간 상태”처럼 보이는가

예를 들어 모델이 이런 문장을 처리한다고 하자.

```
Alice gave Bob a book because he asked for it.
```

attention은

- Alice
    
- Bob
    
- he
    

사이 관계를 계산한다.

이 과정에서

```
token vector("he")
```

는 점점

```
"Bob" reference
```

로 변한다.

즉

```
vector state evolves
```

한다.

---

# 4. 연구 분야

이 현상을 연구하는 분야

- **mechanistic interpretability**
    
- **attention dynamics**
    
- **residual stream analysis**
    

대표 연구

- Anthropic **Transformer Circuits**
    
- induction head 연구
    

예

induction head는

```
A B ... A → B
```

패턴을 감지하는 attention 구조다.

이때 residual stream이

```
pattern memory
```

처럼 작동한다.

---

# 5. 중요한 차이

암묵적 상태 vs 명시적 상태

|구분|명시적 상태|암묵적 상태|
|---|---|---|
|저장|변수에 저장|벡터 표현|
|지속성|시간 유지|forward pass 내부|
|구조|state machine|attention dynamics|
|예|RNN hidden state|residual stream|

즉

```
LLM = state machine
```

은 아니지만

```
LLM 내부 계산
≈ temporary state dynamics
```

은 존재한다.

---

원하면 다음 주제도 설명할 수 있다.

1. **왜 LLM이 논리 퍼즐에서 상태 추적을 자주 틀리는가**
    
2. **Transformer가 실제로 “알고리즘을 실행”한다는 연구 (circuits)**
    
3. **LLM이 내부적으로 간단한 프로그램처럼 동작한다는 가설**
    

특히 **Transformer circuits 연구**는 현재 AI 해석 연구에서 가장 중요한 분야 중 하나다.