## 핵심 요약

1. 자율 AI 에이전트에서 **Memory architecture**는 가장 큰 기술 문제 중 하나다.
    
2. 이유는 **LLM 자체는 장기 기억을 가지지 않기 때문**이다.
    
3. 컨텍스트 창(context window)은 **일시적 작업 기억**에 가깝다.
    
4. 따라서 장기 작업을 위해 **외부 메모리 시스템**이 필요하다.
    
5. 주요 구조는 **Vector DB, Knowledge Graph, File Memory** 같은 방식이다.
    
6. 핵심 문제는 **무엇을 저장하고 무엇을 버릴지 결정하는 것**이다.
    
7. 이 문제를 일부 연구자들은 **Memory Triage Problem**이라고 부른다.
    

---

# 1️⃣ 왜 Memory Architecture가 문제인가

LLM 구조

```
입력 → 모델 → 출력
```

특징

- 상태가 없다 (stateless)
    
- 장기 기억 없음
    
- 매 요청마다 새로 계산
    

즉 AI는 기본적으로

```
항상 처음부터 생각한다
```

그래서 장기 작업이 어렵다.

예

```
연구 프로젝트
↓
자료 수집
↓
정리
↓
분석
↓
논문 작성
```

이 과정은 **수백~수천 단계 작업**이 필요하다.

---

# 2️⃣ 단순 컨텍스트 메모리

가장 기본 방식

```
대화 기록 → context window
```

하지만 문제

- 토큰 제한
    
- 오래된 정보 사라짐
    
- 중요도 구분 없음
    

예

```
최근 200k tokens만 기억
```

대표 모델

- GPT-4.1
    
- Claude 3
    

---

# 3️⃣ Vector Memory

가장 널리 사용되는 방식.

구조

```
텍스트
↓
Embedding
↓
Vector database
↓
Similarity search
```

작동

```
질문
↓
관련 기억 검색
↓
LLM에 다시 제공
```

대표 DB

- Pinecone
    
- FAISS
    

장점

- 의미 기반 검색
    

단점

- 시간 구조 약함
    
- 인과 관계 약함
    

---

# 4️⃣ Knowledge Graph Memory

정보를 **관계 구조로 저장**.

예

```
User → likes → physics
User → wrote → blog post
Blog post → topic → AI
```

장점

- 관계 추론 가능
    
- 구조적 기억
    

단점

- 구축 비용 큼
    

대표 DB

- Neo4j
    

---

# 5️⃣ Episodic Memory

사건 기반 기억.

예

```
2026-03-10
사용자가 논문 분석 요청
→ 결과 저장
```

구조

```
event
timestamp
context
result
```

인간 기억과 유사한 방식이다.

---

# 6️⃣ 가장 어려운 문제

### Memory Triage

모든 정보를 저장하면

```
메모리 폭발
검색 오류
비용 증가
```

따라서 시스템은 계속 결정해야 한다.

```
저장할 것
버릴 것
요약할 것
```

이 문제를 일부 연구자들은

```
Memory triage
```

라고 부른다.

---

# 7️⃣ 미래 방향

현재 연구 흐름

```
Working memory
↓
Short-term memory
↓
Long-term memory
```

3계층 구조.

유사한 개념

```
CPU cache
RAM
Disk
```

AI도 결국 **계층형 메모리 시스템**으로 발전할 가능성이 높다.

---

## 핵심 정리

==자율 에이전트에서 가장 어려운 문제는==

```
지능
보다
기억 관리
```

==이다.==

왜냐하면

```
지능 = 추론
지속적 행동 = 기억
```

이기 때문이다.