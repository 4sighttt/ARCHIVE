# OpenAI가 LLM 시대를 열었을까


요약

1. **Transformer는 Google이 만들었다.** (2017 논문)
    
2. 그러나 **LLM 시대는 OpenAI가 먼저 열었다.**
    
3. 이유는 기술이 아니라 **연구 방향과 전략 차이**였다.
    
4. Google은 **검색·번역 중심 AI**에 집중했다.
    
5. OpenAI는 **범용 언어모델(AGI 방향)**에 집중했다.
    
6. 그래서 같은 기술로 **전혀 다른 결과**가 나왔다.
    

---

# 1. Google이 Transformer를 만든 이유

Google의 문제는 이것이었다.

```text
검색
번역
음성
```

즉 **특정 NLP 작업 성능 개선**이었다.

그래서 Transformer 논문도 목표가 명확하다.

```text
machine translation 성능 향상
```

논문의 실험도 대부분 번역이다.

즉 Google의 관점

```text
좋은 NLP 모델 만들기
```

였다.

---

# 2. OpenAI의 관점

OpenAI의 질문은 달랐다.

```text
언어 자체를 학습하는 모델을 만들 수 있을까?
```

즉

```text
범용 언어 지능
```

이다.

그래서 OpenAI는 문제 접근을 이렇게 바꾼다.

Google

```text
task → 모델
```

OpenAI

```text
데이터 → 언어모델 → 모든 task
```

이것이 **패러다임 차이**다.

---

# 3. 결정적 차이: 학습 방식

Google (초기 NLP)

```text
번역 모델
요약 모델
질문답변 모델
```

각각 따로 만든다.

---

OpenAI

```text
하나의 거대한 언어 모델
```

그리고 목표는 단 하나

```text
다음 단어 예측
```

이다.

예

```text
나는 밥을 → 먹었다
```

이 방식은 **Language Modeling**이다.

---

# 4. Transformer와 Language Model의 궁합

Transformer의 특징

```text
모든 단어 관계를 동시에 계산
```

Language Model의 요구

```text
문장 전체 맥락 이해
```

그래서

```text
Transformer + Language Modeling
```

이 조합이 매우 강력했다.

이것이

```text
GPT
```

이다.

---

# 5. GPT의 핵심 아이디어

OpenAI는 Transformer에서 **decoder만 사용**한다.

구조

```text
Masked Self-Attention
```

목표

```text
다음 토큰 예측
```

그리고 가장 중요한 변화

```text
데이터 규모
```

이다.

---

# 6. 규모 전략 (Scale)

OpenAI 전략

```text
더 큰 모델
더 많은 데이터
더 긴 학습
```

즉

```text
scale law
```

이다.

Google은 당시

```text
task-specific 모델
```

위주였다.

OpenAI는

```text
universal language model
```

을 밀었다.

---

# 7. 역사적 타이밍

실제 흐름

```
2017  Transformer (Google)
2018  GPT-1
2019  GPT-2
2020  GPT-3
2022  ChatGPT
```

즉

```text
Transformer → GPT → LLM
```

흐름이 만들어졌다.

---

# 8. 또 하나의 이유: 제품 전략

Google

```text
검색 광고 중심 회사
```

AI 공개가 조심스러웠다.

OpenAI

```text
AI 연구 조직
```

새 기술을 **직접 제품화**했다.

대표 예

```
ChatGPT
```

---

# 9. 결과

그래서 역사적으로

```text
핵심 알고리즘
→ Google
```

```text
대규모 언어모델 혁명
→ OpenAI
```

이 구조가 된다.

---

# 한 문장 핵심

AI 역사에서 Transformer는

```text
Google이 만든 엔진
```

이지만

```text
OpenAI가 그 엔진으로
우주선을 만든 셈
```

이다.

---

원하면 이어서 설명해줄 수 있다.

많은 AI 연구자들이 말하는 **진짜 질문**이 하나 있다.

> Transformer는 왜 **갑자기 이렇게까지 잘 작동했을까?**

사실 이건 아직도 완전히 설명되지 않은 부분이다.