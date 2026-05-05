# Context Rot과 Context Engineering: 긴 대화에서 AI가 맥락을 잃는 이유

## 핵심 요약

Context Rot은 대형 언어 모델(LLM)이 긴 대화, 많은 문서, 누적된 도구 결과, 중복된 지시를 한꺼번에 처리할 때 중요한 정보를 안정적으로 회수·구분·활용하지 못해 응답 품질이 저하되는 현상을 가리킨다. 이는 단순한 “망각”보다 넓은 개념이다. 모델은 입력된 정보를 인간처럼 장기 기억으로 저장해 두는 것이 아니라, 현재 컨텍스트 창 안의 토큰들을 바탕으로 다음 출력을 계산한다. 따라서 관련 정보가 컨텍스트 안에 존재해도, 그 정보가 노이즈·중복·상충 지시·위치 효과·도구 출력 더미 속에서 약해지면 실제 응답에는 충분히 반영되지 않을 수 있다.

이 문제는 컨텍스트 창이 커지면 자동으로 해결되는 종류의 문제가 아니다. Chroma의 2025년 기술 보고서는 입력 길이가 늘어날수록 여러 최신 LLM의 성능이 비균일하게 흔들릴 수 있음을 보였고, Liu 등은 「Lost in the Middle」에서 관련 정보가 입력의 앞이나 끝에 있을 때보다 중간에 있을 때 성능이 떨어질 수 있음을 보였다. Anthropic은 이를 “context is a finite resource”라는 관점에서 설명하며, OpenAI Agents SDK 문서는 장기 다중 턴 상호작용에서 trimming과 compression 같은 context management 기법을 별도의 설계 문제로 다룬다.

Context Engineering은 이 문제에 대한 실천적 대응이다. 이는 단순히 프롬프트 문장을 잘 쓰는 기술이 아니라, 추론 시점에 모델에게 어떤 토큰을 넣을지, 어떤 정보는 외부 상태로 보관할지, 어떤 정보는 검색으로 늦게 불러올지, 어떤 작업은 별도 에이전트나 하위 호출로 분리할지를 설계하는 작업이다. 핵심은 “많이 넣기”가 아니라 “필요한 순간에 필요한 정보를 올바른 밀도와 구조로 넣기”이다.

## 문제의식

LLM 사용자는 긴 대화를 이어가다 보면 한 가지 반복적인 현상을 경험한다. 초기에 정한 규칙이 뒤쪽 응답에서 흐려지고, 이미 결정한 사항이 다시 논의되며, 중간에 제공한 조건이 사라지고, 긴 문서의 어느 부분에 있는 사실을 모델이 놓친다. 겉으로 보면 “AI가 까먹었다”처럼 보인다. 그러나 기술적으로는 인간식 기억 상실이라기보다 긴 입력을 처리하는 모델의 정보 활용 성능이 일정하지 않게 변하는 문제에 가깝다.

이 현상이 중요한 이유는 LLM의 사용 방식이 단발성 질의응답에서 장기 작업으로 이동하고 있기 때문이다. 문서 작성, 코드베이스 수정, 리서치, 법률 검토, 고객 지원, 데이터 분석, 에이전트 자동화는 모두 여러 단계의 판단과 상태 유지를 요구한다. 한 번의 응답 품질보다 중요한 것은 작업 전체의 일관성이다. 초기에 정한 목표, 제약, 출처, 결정 사항이 유지되지 않으면 모델은 그럴듯한 문장을 만들 수 있어도 작업 시스템으로는 불안정해진다.

따라서 Context Rot을 이해한다는 것은 “LLM이 왜 가끔 말을 바꾸는가”를 설명하는 데 그치지 않는다. 더 근본적으로는 AI 작업을 어떻게 설계해야 긴 시간 동안 신뢰 가능한 결과를 낼 수 있는지를 다루는 문제다.

## 개념의 정의

Context Rot은 LLM의 컨텍스트가 길어지고 복잡해질수록 모델이 중요한 정보를 안정적으로 회수·구분·활용하지 못해 응답 품질이 저하되는 현상이다. 여기서 컨텍스트(context)는 모델이 추론 시점에 볼 수 있는 입력 토큰들의 전체 집합을 뜻한다. 시스템 지시, 사용자 메시지, 이전 대화, 검색 결과, 도구 출력, 파일 내용, 예시, 스키마, 중간 산출물이 모두 컨텍스트가 될 수 있다.

이 정의에서 중요한 점은 세 가지다. 첫째, 정보가 컨텍스트 창 안에 존재한다는 사실과 모델이 그 정보를 실제로 잘 사용한다는 사실은 다르다. 둘째, 성능 저하는 단순히 “처음 내용이 사라지는” 방식만으로 나타나지 않는다. 관련 정보의 위치, 주변 노이즈, 중복 정보, 유사하지만 틀린 distractor, 지시 간 충돌, 요약 품질에 따라 다른 형태로 나타난다. 셋째, Context Rot은 특정 모델의 우연한 버그라기보다 긴 컨텍스트를 다루는 모델과 시스템에서 반복적으로 관찰되는 구조적 위험으로 보는 편이 적절하다.

Instruction Drift는 Context Rot과 인접한 개념이다. Instruction Drift는 대화가 길어지면서 초기 지시, 역할, 목표, 출력 형식이 흐려지는 현상에 더 가깝다. Context Rot은 긴 컨텍스트에서 정보 활용 성능 전반이 약해지는 더 넓은 범주이고, Instruction Drift는 그 결과 중 하나로 발생할 수 있다. 예를 들어 초기에 “본문에는 각주를 넣지 말고 참고자료는 말미에 모아라”라는 지시가 있었는데 긴 작성 과정 뒤에 각주가 삽입된다면, 이는 Instruction Drift로 볼 수 있다. 그 원인 중 하나가 Context Rot일 수 있다.

Context Engineering은 추론 시점에 모델이 사용할 컨텍스트를 설계·선별·압축·검색·분리·갱신하는 작업이다. Anthropic은 context engineering을 프롬프트 문구의 최적화를 넘어, 제한된 컨텍스트 창에 들어갈 토큰을 전체 상태 중에서 어떻게 고를 것인가의 문제로 설명한다. OpenAI Agents SDK 문서도 장기 상호작용에서 전체 대화 이력을 그대로 유지하는 방식이 비용, 속도, 일관성, hallucination 관리 측면에서 취약해질 수 있음을 전제로 trimming과 compression을 다룬다.

## 배경과 맥락

LLM은 Transformer 계열 구조에 기반한다. Vaswani 등의 2017년 논문 「Attention Is All You Need」는 순환 구조나 합성곱 없이 attention mechanism을 중심으로 한 Transformer 구조를 제안했다. 이 구조는 현대 LLM의 핵심 기반이 되었다. Self-attention은 각 토큰이 다른 토큰들과 관계를 형성할 수 있게 하지만, 입력 길이가 길어질수록 토큰 간 관계의 조합은 급격히 늘어난다. Anthropic의 설명처럼 n개의 토큰이 있을 때 토큰 간 쌍별 관계는 대략 n² 규모로 증가한다. 실제 구현은 다양한 최적화와 근사, 위치 인코딩, 긴 컨텍스트 확장 기법을 사용하지만, 긴 입력에서 모든 정보가 동일한 품질로 활용된다고 보기는 어렵다.

초기 LLM 사용에서 중요한 문제는 “프롬프트를 어떻게 쓰는가”였다. 사용자가 원하는 역할, 형식, 제약, 예시를 명확히 쓰면 단발성 작업의 품질이 크게 달라졌다. 그러나 에이전트와 장기 작업에서는 문제의 중심이 달라진다. 한 번의 프롬프트보다 전체 작업 상태가 더 중요해진다. 어떤 자료를 먼저 넣을지, 검색 결과를 얼마나 넣을지, 오래된 도구 출력은 버릴지, 작업 결정을 어디에 기록할지, 이전 대화를 언제 요약할지, 하위 작업을 어떤 모델 호출로 분리할지가 결과를 좌우한다.

이 변화가 context engineering이라는 용어의 배경이다. Anthropic은 context engineering을 prompt engineering의 자연스러운 확장으로 보면서도, 두 개념을 구분한다. Prompt engineering이 주로 지시문을 어떻게 작성하고 조직할 것인가의 문제라면, context engineering은 모델 추론 시점에 들어가는 전체 정보 상태를 어떻게 유지하고 선별할 것인가의 문제다. 즉, “어떻게 말할 것인가”에서 “무엇을, 언제, 얼마나, 어떤 구조로 보여줄 것인가”로 초점이 이동한다.

## 핵심 논리

Context Rot의 첫 번째 원리는 컨텍스트 창이 메모리와 같지 않다는 점이다. 대화 이력이 창 안에 들어가 있어도 모델은 그것을 데이터베이스처럼 조회하지 않는다. 모델은 현재 입력 전체를 바탕으로 다음 토큰을 생성한다. 이 과정에서 관련 정보가 멀리 떨어져 있거나, 중간에 묻혀 있거나, 유사한 반례와 섞여 있거나, 최근 대화의 강한 신호와 충돌하면 응답에 반영되는 정도가 달라진다.

두 번째 원리는 길이가 늘수록 정보의 한계효용이 감소한다는 점이다. 긴 컨텍스트는 더 많은 정보를 제공하지만, 동시에 더 많은 잡음과 경쟁 신호를 만든다. 한 문서 안에 정확한 답이 있어도, 그 주변에 비슷하지만 틀린 문장, 오래된 결정, 폐기된 초안, 중복된 도구 결과가 많으면 모델은 어떤 정보를 우선해야 할지 덜 안정적으로 판단할 수 있다. Chroma의 보고서는 최신 장문 모델들이 단순한 lexical retrieval 벤치마크에서는 높은 성능을 보일 수 있지만, 의미적 연결, distractor, haystack 구조, 입력 길이 변화가 결합되면 성능이 비균일하게 흔들릴 수 있음을 보였다.

세 번째 원리는 위치 효과다. 「Lost in the Middle」은 장문 입력에서 관련 정보의 위치가 성능에 영향을 준다는 점을 체계적으로 보였다. 해당 논문은 multi-document question answering과 key-value retrieval 과제에서 관련 정보가 앞이나 끝에 있을 때보다 중간에 있을 때 성능이 크게 떨어질 수 있음을 보고했다. 이 결과는 “앞부분만 잊힌다”는 단순한 설명을 수정하게 만든다. 긴 컨텍스트 문제는 초반 정보의 약화만이 아니라, 중간 정보의 접근성 저하, 최근 정보의 과대 반영, 전체 구조의 혼탁화가 함께 얽힌 문제다.

네 번째 원리는 작업 상태와 언어적 대화 이력을 구분해야 한다는 점이다. 모델에게 “우리는 앞에서 A를 결정했다”라고 말하는 것과, 시스템이 외부 상태 객체나 파일에 `decision: A`라고 저장해 두고 필요할 때 다시 주입하는 것은 다르다. OpenAI Agents SDK의 context object 문서는 로컬 애플리케이션 상태로서의 context object가 LLM에 직접 보내지는 것이 아니라 도구, 훅, 실행 환경에서 읽고 쓸 수 있는 객체라고 설명한다. 이 구조는 모델 내부 기억에 모든 것을 맡기는 방식과 외부 상태를 명시적으로 관리하는 방식을 구분하게 해 준다.

## 구체적 사례

가장 단순한 사례는 긴 글 작성이다. 사용자가 처음에 “본문은 한국어 문어체로 쓰고, 참고자료는 말미에 모으며, 각주는 쓰지 말라”고 지시했다고 하자. 이후 모델이 자료 조사, 개요 작성, 문단 확장, 사례 추가, 반론 정리, 참고자료 정리를 여러 턴에 걸쳐 수행한다. 중간에 사용자가 새 조건을 추가하고, 모델이 일부 문단을 다시 쓰며, 출처 목록이 늘어난다. 이때 초기 조건은 여전히 중요하지만, 실제 컨텍스트 안에서는 새 지시, 임시 초안, 폐기된 문장, 검색 결과, 형식 예시와 경쟁하게 된다. 최종 문서에서 각주가 삽입되거나 참고자료 형식이 흔들리면 Instruction Drift가 발생한 것이다.

두 번째 사례는 코드 수정 에이전트다. 코드베이스 전체를 한 번에 컨텍스트에 넣으면 많은 정보를 제공하는 것처럼 보인다. 그러나 실제로는 테스트 파일, 오래된 문서, 관련 없는 모듈, 유사한 함수 이름, 대량의 로그가 모두 함께 들어와 모델의 초점을 흐릴 수 있다. Anthropic은 just-in-time context 전략을 설명하면서, 전체 데이터 객체를 한꺼번에 넣기보다 파일 경로, 저장된 쿼리, 웹 링크 같은 가벼운 식별자를 유지하고 필요할 때 도구로 불러오는 방식을 제시한다. 이는 인간이 모든 문서를 암기하지 않고 파일 시스템, 북마크, 검색을 이용해 필요한 정보를 꺼내는 방식과 유사하다.

세 번째 사례는 고객 지원 챗봇이다. 사용자가 처음에는 노트북 배터리 문제를 말하고, 이어서 발열 문제, 펌웨어 버전, 오류 코드, 보증 기간, 이전 상담 기록을 순차적으로 제공할 수 있다. 모든 대화 이력을 그대로 유지하면 비용과 지연이 늘고, 오래된 문제가 최신 문제를 덮거나 반대로 최신 문제가 과거 해결 사항을 지울 수 있다. OpenAI Cookbook의 session memory 예시는 오래된 턴을 일부 잘라내는 trimming과 대화 내용을 요약해 유지하는 compression을 구분한다. trimming은 단순하고 재현 가능하지만 중요한 장기 조건을 갑자기 잃을 수 있고, compression은 장기 일관성을 돕지만 요약 오류가 이후 맥락을 오염시킬 수 있다.

네 번째 사례는 연구 에이전트다. 자료 조사 과정에서 검색 결과, 논문 초록, 표, 중간 판단, 폐기된 가설이 계속 쌓인다. 이때 모든 검색 결과를 컨텍스트에 유지하면 “많은 근거를 본다”는 장점보다 “무엇이 최신 판단인지 흐려진다”는 위험이 커진다. 더 나은 구조는 `sources.md`, `claims.json`, `open_questions.md`, `discarded_hypotheses.md`처럼 외부 메모리를 분리해 두고, 현재 단계에 필요한 파일만 불러오는 것이다. 이는 Anthropic Cookbook이 memory를 “structured note-taking”으로 설명하는 이유와 맞닿아 있다.

간단한 상태 기록 예시는 다음과 같다.

```json
{
  "goal": "Context Rot과 Context Engineering 설명문 작성",
  "current_phase": "drafting",
  "fixed_constraints": {
    "language": "Korean",
    "style": "expository prose",
    "citations": "references section only",
    "format": "Markdown"
  },
  "decisions": [
    "Context Rot과 Instruction Drift를 구분한다",
    "Harness Pattern은 agent harness 또는 orchestration layer로 설명한다",
    "Lost in the Middle을 위치 효과의 대표 연구로 사용한다"
  ],
  "open_questions": [
    "Context Rot이라는 용어의 표준화 정도를 과장하지 않는다"
  ]
}
```

이 예시의 핵심은 모델이 “어렴풋이 기억”하기를 기대하지 않고, 작업 상태를 외부 구조로 명시한다는 점이다. 이렇게 하면 다음 모델 호출에서 필요한 항목만 다시 컨텍스트에 넣을 수 있다.

## Context Engineering의 주요 전략

### 1. Just-in-Time Context

Just-in-Time Context는 모든 정보를 처음부터 넣지 않고, 필요한 순간에 필요한 정보만 불러오는 전략이다. 코드 작업에서는 전체 저장소를 넣는 대신 관련 파일 경로와 검색 도구를 제공하고, 문서 작업에서는 전체 참고문헌을 한꺼번에 넣는 대신 현재 문단에 필요한 출처만 넣는다. 이 방식은 토큰 비용을 줄이는 데 그치지 않는다. 모델이 현재 판단과 관련 없는 정보에 끌려가는 위험을 줄인다.

좋지 않은 방식은 다음과 같다.

```text
전체 규칙 + 전체 대화 + 전체 문서 + 전체 검색 결과 + 전체 도구 로그 → 한 번의 모델 호출
```

더 나은 방식은 다음에 가깝다.

```text
현재 목표 + 고정 제약 + 이번 단계에 필요한 자료 + 다음 행동 기준 → 모델 호출
```

이 구조에서는 모델이 세계 전체를 한 번에 들고 있지 않아도 된다. 대신 시스템이 외부 색인과 도구를 통해 필요한 정보를 단계적으로 공급한다.

### 2. Compression과 Compaction

Compression 또는 compaction은 긴 대화나 작업 이력을 요약해 새 컨텍스트로 이어가는 방식이다. Anthropic Cookbook은 compaction을 컨텍스트 창 한계에 가까워지는 대화를 요약한 뒤, 그 요약으로 세션을 다시 시작하는 전략으로 설명한다. 이 방법은 장기 작업에서 필수적일 수 있다. 대화 전체를 계속 유지하면 토큰 한계, 비용, 지연, context rot이 모두 커지기 때문이다.

다만 요약은 손실 없는 압축이 아니다. 어떤 숫자, 표현, 예외 조건, 반례가 나중에 중요해질지 요약 시점에는 확실히 알기 어렵다. 따라서 좋은 compression은 단순한 짧은 요약이 아니라, 작업 유형에 맞춘 구조화된 요약이어야 한다. 예를 들어 문서 작성에서는 핵심 논지, 확정된 용어, 폐기한 표현, 남은 쟁점을 분리해야 한다. 고객 지원에서는 기기 정보, 시도한 조치, 오류 코드, 현재 상태, 다음 단계가 분리되어야 한다. 코드 작업에서는 수정한 파일, 테스트 결과, 실패한 접근, 남은 TODO가 분리되어야 한다.

### 3. Structured Memory

Structured Memory는 모델이 장기 작업 중 중요한 정보를 외부 저장소에 구조화해 기록하고, 필요할 때 다시 읽는 방식이다. 이는 모델 내부 기억을 강화하는 것이 아니라, 모델 밖에 작업 상태를 둔다는 점에서 중요하다. Anthropic Cookbook은 memory를 context window 밖에 지속되는 구조적 노트 작성으로 설명하며, OpenAI Agents SDK도 로컬 context object를 LLM에 직접 보내는 텍스트가 아니라 실행 환경에서 접근하는 애플리케이션 상태로 다룬다.

Structured Memory의 장점은 세 가지다. 첫째, 세션이 바뀌어도 핵심 상태를 유지할 수 있다. 둘째, 현재 모델 호출에는 필요한 일부만 넣을 수 있다. 셋째, 사람이 디버깅하기 쉽다. `facts.json`, `decisions.md`, `source_index.md`, `task_state.json`처럼 파일이 분리되어 있으면 어떤 판단이 언제 생겼는지 추적하기 쉽다.

위험도 있다. 모델이 잘못된 내용을 메모리에 쓰면 이후 모든 작업이 그 오류를 반복할 수 있다. 오래된 메모리가 갱신되지 않으면 과거 상태가 현재 판단을 방해한다. 따라서 memory는 “많이 저장하기”보다 “검증된 것을 명확히 저장하고, 폐기·수정 이력을 관리하기”가 핵심이다.

### 4. Tool-result Clearing

에이전트는 검색, 파일 읽기, 코드 실행, API 호출을 반복하면서 도구 결과를 컨텍스트에 쌓는다. 도구 결과는 유용하지만, 대량 로그와 반복 출력은 빠르게 context bloat를 만든다. Anthropic Cookbook은 tool-result clearing을 오래된 도구 결과를 제거하되, 도구 호출이 있었다는 기록은 유지하는 전략으로 설명한다. 다시 필요하면 재호출할 수 있는 결과를 계속 컨텍스트에 들고 있을 필요는 없다.

예를 들어 검색 결과 20개를 모두 본문 컨텍스트에 유지하기보다, 최종적으로 채택한 출처와 그 이유만 `source_index.md`에 저장하고 원문은 링크나 파일 경로로 참조하는 편이 낫다. 코드 실행 로그도 전체를 남기기보다 실패한 테스트 이름, 오류 메시지 핵심, 재현 명령어를 구조화하는 편이 더 안정적이다.

### 5. Sub-agent와 Orchestration

복잡한 작업을 하나의 모델 호출이나 하나의 긴 대화에 모두 맡기면 context rot이 커진다. Sub-agent 또는 orchestration 구조는 작업을 작은 컨텍스트로 분리한다. Anthropic의 「Building effective agents」는 prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer 같은 패턴을 제시한다. 여기서 중요한 점은 여러 AI를 많이 쓰는 것이 아니라, 각 호출의 역할과 컨텍스트를 좁히는 것이다.

예를 들어 설명문 작성 시스템은 다음처럼 나눌 수 있다.

```text
Controller / Orchestrator
  ├── Research Agent: 출처 탐색과 근거 요약
  ├── Concept Agent: 핵심 개념 정의와 용어 구분
  ├── Writer Agent: 산문형 초안 작성
  └── Critic Agent: 논리 오류, 출처 누락, 과장 표현 검토
```

각 하위 에이전트는 전체 대화가 아니라 자기 역할에 필요한 정보만 받는다. Research Agent는 출처와 요약에 집중하고, Writer Agent는 확정된 개요와 근거 요약만 받으며, Critic Agent는 최종 초안과 검증 기준만 받는다. 이 구조는 단일 호출의 집중도를 높이고, 오류가 어느 단계에서 생겼는지 추적하기 쉽게 만든다.

“Harness Pattern”이라는 표현은 이 맥락에서 agent harness, orchestration layer, external state management로 설명하는 편이 더 안전하다. 핵심은 모델 호출을 감싸는 실행 계층이 목표, 상태, 도구, 메모리, 검증, 중단 조건을 관리한다는 점이다. 모델은 모든 것을 기억하는 주체가 아니라, 잘 설계된 작업 환경 안에서 특정 판단을 수행하는 구성요소가 된다.

## 주요 쟁점과 반론

첫 번째 쟁점은 “컨텍스트 창이 커지면 문제가 사라지는가”이다. 긴 컨텍스트 창은 분명히 유용하다. 더 많은 문서, 코드, 대화 이력을 한 번에 제공할 수 있기 때문이다. 그러나 연구와 실무 문서는 긴 창이 곧 균일한 정보 활용을 의미하지 않는다고 지적한다. Chroma 보고서는 입력 길이가 늘어날수록 모델 성능이 비균일해질 수 있음을 보였고, RULER 논문은 단순한 Needle-in-a-Haystack 평가가 장문 이해의 피상적 측면만 측정할 수 있다고 비판했다. 긴 창은 필요조건일 수 있지만 충분조건은 아니다.

두 번째 쟁점은 “RAG가 해결책인가”이다. 검색 증강 생성(RAG)은 중요한 context engineering 도구다. 필요한 문서를 검색해 컨텍스트에 넣으면 전체 문서를 무작정 넣는 것보다 효율적이다. 그러나 RAG도 만능이 아니다. 검색 단계가 틀리면 중요한 문서가 들어오지 않는다. 관련 문서가 너무 많이 들어오면 다시 context rot이 발생한다. 검색 결과 안에 유사하지만 틀린 distractor가 포함되면 모델이 잘못된 근거를 선택할 수 있다. 따라서 RAG는 retrieval, ranking, chunking, summarization, citation verification을 함께 설계해야 한다.

세 번째 쟁점은 “요약이 항상 좋은가”이다. Compression은 context rot을 줄이는 강력한 방법이지만, summary drift를 만들 수 있다. 요약 과정에서 숫자, 조건, 반례, 시간 순서가 잘못 보존되면 이후 모델은 그 요약을 사실처럼 사용한다. OpenAI Cookbook은 compression prompt를 설계할 때 contradiction check, temporal flow, chunking, hallucination control을 강조한다. 이는 요약이 단순한 부가 기능이 아니라 별도의 품질 관리 대상임을 뜻한다.

네 번째 쟁점은 “sub-agent가 항상 더 나은가”이다. 여러 하위 에이전트를 쓰면 각 호출의 컨텍스트를 좁힐 수 있지만, 조율 비용과 오류 전파 문제가 생긴다. Anthropic은 에이전트 시스템이 지연과 비용을 성능 향상과 맞바꾸며, 복잡성은 필요한 경우에만 늘려야 한다고 설명한다. 따라서 sub-agent 구조는 복잡한 문제를 분해할 수 있고, 각 단계의 산출물을 검증할 기준이 있을 때 특히 유용하다.

## 오해와 한계

첫 번째 오해는 Context Rot을 “초기 토큰만 잊는 현상”으로 보는 것이다. 초기 지시가 약해지는 일은 흔하지만, 긴 컨텍스트 문제는 그보다 넓다. 중간 정보가 약해질 수 있고, 최근 정보가 과도하게 반영될 수 있으며, 유사한 distractor가 정확한 정보를 밀어낼 수 있다. Context Rot은 위치, 길이, 구조, 노이즈, 중복, 의미적 유사성이 결합된 현상이다.

두 번째 오해는 “컨텍스트 안에 넣었으니 모델이 반드시 안다”는 생각이다. LLM에서 정보 존재와 정보 활용은 구분되어야 한다. 문서 안에 정답이 있어도, 그 정답을 찾아내고, 다른 정보와 구별하고, 현재 질문에 맞게 적용하는 일은 별도의 능력이다. LongBench, RULER, LongMemEval 같은 평가가 필요한 이유도 여기에 있다.

세 번째 오해는 “메모리는 모델이 알아서 만들면 된다”는 생각이다. 모델이 작성한 메모리는 편리하지만, 검증되지 않은 메모리는 오류의 저장소가 될 수 있다. 특히 장기 프로젝트에서는 메모리의 출처, 작성 시점, 갱신 여부, 폐기 여부를 관리해야 한다. 좋은 memory system은 기록뿐 아니라 정리, 갱신, 삭제, 재검증을 포함한다.

네 번째 오해는 “Context Engineering은 프롬프트 엔지니어링의 새 이름”이라는 생각이다. 두 개념은 겹치지만 동일하지 않다. 프롬프트 엔지니어링은 지시문, 예시, 출력 형식, 역할 설정의 설계에 가깝다. Context Engineering은 검색, 메모리, 상태, 도구 출력, 요약, 하위 호출, 오케스트레이션까지 포함한다. 즉, 프롬프트는 컨텍스트의 한 부분일 뿐이다.

현재 연구의 한계도 분명하다. Context Rot이라는 용어는 실무와 연구 커뮤니티에서 확산되고 있지만, 모든 논문에서 동일한 엄밀한 정의로 쓰이는 표준 용어는 아니다. Chroma 보고서와 Anthropic 문서가 이 용어를 적극적으로 사용하지만, 학술 문헌에서는 long-context degradation, position bias, long-context retrieval failure, long-term memory failure 같은 더 구체적인 표현도 함께 쓰인다. 또한 Chroma 보고서 자체도 성능 저하의 메커니즘을 완전히 설명하지는 못한다고 밝힌다. 따라서 이 현상을 하나의 단일 원인으로 환원하기보다, 긴 컨텍스트 처리에서 나타나는 여러 실패 양상의 묶음으로 이해하는 편이 더 정확하다.

## 실전 설계 원칙

실전에서는 다음 원칙이 가장 안정적이다.

첫째, 고정 제약은 반복 가능한 구조로 보존해야 한다. 프로젝트 목표, 출력 형식, 금지 사항, 검증 기준은 대화 중간에 흘려보내지 말고 별도 상태로 유지한다.

둘째, 현재 단계에 필요한 컨텍스트만 넣어야 한다. 자료 조사는 넓게 하되, 작성 단계에는 채택한 근거만 넣고, 검증 단계에는 초안과 검증 기준을 넣는 식으로 단계별 컨텍스트를 다르게 구성한다.

셋째, 긴 대화는 주기적으로 구조화된 요약으로 압축한다. 이때 단순 요약보다 결정 사항, 사실, 출처, 미해결 쟁점, 폐기된 가설, 다음 행동을 분리하는 것이 좋다.

넷째, 외부 메모리는 사람이 읽을 수 있어야 한다. AI만 이해하는 임시 문자열보다 JSON, Markdown, 표준 로그처럼 검토 가능한 형식이 낫다.

다섯째, 도구 결과는 원문 전체와 작업용 요약을 분리해야 한다. 전체 원문은 파일이나 링크로 보존하고, 모델 컨텍스트에는 현재 판단에 필요한 핵심만 넣는다.

여섯째, 복잡한 작업은 역할별로 분해한다. 생성, 검증, 반박, 결정, 기록을 한 호출에 모두 맡기기보다 각 단계의 책임을 분리하면 context rot과 확증편향을 동시에 줄일 수 있다.

## 정리

Context Rot은 LLM이 긴 입력을 다룰 때 중요한 정보를 안정적으로 활용하지 못하는 현상을 설명하는 실용적 개념이다. 이는 모델이 인간처럼 “까먹는” 문제가 아니라, 제한된 컨텍스트 창, attention 자원, 위치 효과, 노이즈, 중복, distractor, 요약 손실, 외부 상태 부재가 결합되어 나타나는 성능 저하 현상이다.

Context Engineering은 이 문제에 대한 시스템 설계적 대응이다. 좋은 AI 작업 시스템은 모든 정보를 모델 안에 밀어 넣지 않는다. 필요한 정보는 필요한 순간에 불러오고, 장기 상태는 외부에 저장하며, 오래된 도구 결과는 정리하고, 긴 대화는 압축하고, 복잡한 작업은 작은 역할로 분해한다. 그러면 모델은 더 작은 작업 공간에서 더 분명한 신호를 바탕으로 판단할 수 있다.

따라서 핵심 결론은 분명하다. 긴 컨텍스트 창은 유용하지만, 긴 컨텍스트 창만으로는 장기 작업의 신뢰성이 보장되지 않는다. AI를 단순한 채팅 도구가 아니라 작업 시스템으로 사용하려면, 프롬프트보다 넓은 수준에서 정보 흐름, 상태 관리, 기억 구조, 검증 루프를 설계해야 한다. Context Engineering은 바로 그 설계 원리다.

## 참고자료

- Anthropic, “Effective context engineering for AI agents”, Engineering at Anthropic, 2025년 9월 29일. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- Anthropic, “Context engineering: memory, compaction, and tool clearing”, Claude Cookbook, 2026년 3월 20일. https://platform.claude.com/cookbook/tool-use-context-engineering-context-engineering-tools
- Anthropic, “Building effective agents”, Engineering at Anthropic, 2024년 12월 19일. https://www.anthropic.com/engineering/building-effective-agents
- OpenAI, “Context Engineering - Short-Term Memory Management with Sessions from OpenAI Agents SDK”, OpenAI Cookbook, 2025년 9월 9일. https://developers.openai.com/cookbook/examples/agents_sdk/session_memory
- OpenAI, “Context management”, OpenAI Agents SDK Documentation, 확인일 2026년 5월 5일. https://openai.github.io/openai-agents-python/context/
- Kelly Hong, Anton Troynikov, Jeff Huber, “Context Rot: How Increasing Input Tokens Impacts LLM Performance”, Chroma Technical Report, 2025년 7월 14일. https://www.trychroma.com/research/context-rot
- Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, Percy Liang, “Lost in the Middle: How Language Models Use Long Contexts”, Transactions of the Association for Computational Linguistics, Vol. 12, 2024, pp. 157–173. https://aclanthology.org/2024.tacl-1.9/
- Cheng-Ping Hsieh, Simeng Sun, Samuel Kriman, Shantanu Acharya, Dima Rekesh, Fei Jia, Yang Zhang, Boris Ginsburg, “RULER: What’s the Real Context Size of Your Long-Context Language Models?”, arXiv:2404.06654, 2024. https://arxiv.org/abs/2404.06654
- Yushi Bai, Xin Lv, Jiajie Zhang, Hongchang Lyu, Jiankai Tang, Zhidian Huang, Zhengxiao Du, Xiao Liu, Aohan Zeng, Lei Hou, Yuxiao Dong, Jie Tang, Juanzi Li, “LongBench: A Bilingual, Multitask Benchmark for Long Context Understanding”, ACL 2024. https://aclanthology.org/2024.acl-long.172/
- Di Wu, Hongwei Wang, Wenhao Yu, Yuwei Zhang, Kai-Wei Chang, Dong Yu, “LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory”, arXiv:2410.10813, 2024. https://arxiv.org/abs/2410.10813
- Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin, “Attention Is All You Need”, Advances in Neural Information Processing Systems, 2017. https://arxiv.org/abs/1706.03762
