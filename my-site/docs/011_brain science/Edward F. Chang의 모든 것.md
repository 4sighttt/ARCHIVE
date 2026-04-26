# Edward F. Chang의 모든 것  
## 잃어버린 목소리를 다시 세계와 연결하는 과학

작성 기준일: 2026년 4월 26일  
주의: 이 글은 공개적으로 확인 가능한 자료와 논문·기관 자료를 바탕으로 작성했다. 생년월일, 가족사, 사적 일화처럼 공식 출처로 확인되지 않은 정보는 의도적으로 제외했다.

---

## Part I. 문제의 출발점: 언어는 어디에 남는가

### 1. 목소리를 잃은 사람에게도 말하려는 뇌는 남아 있는가

한 사람이 말할 수 없게 되었다고 하자. 입술은 움직이지 않고, 혀는 단어를 만들지 못하며, 후두는 소리를 밀어 올리지 못한다. 바깥에서 보면 말은 사라졌다. 그러나 더 어려운 질문은 그다음에 온다. 말이 몸 밖으로 나오지 못할 때, 말하려는 행위 자체도 사라지는가. 아니면 발화의 마지막 통로가 끊겼을 뿐, 뇌 안에서는 여전히 문장을 만들고 조음 운동을 준비하는 구조가 남아 있는가.

Edward F. Chang의 연구는 이 질문에서 출발한다. 그는 단순히 뇌-컴퓨터 인터페이스(Brain-Computer Interface, BCI)를 개발한 공학자가 아니다. 그는 인간의 언어가 피질에서 어떻게 듣기와 말하기로 조직되는지를 추적하고, 그 지식을 speech neuroprosthesis, 곧 말하기 능력을 잃은 사람의 speech-related neural activity를 텍스트·음성·얼굴 움직임으로 변환하는 신경보철 기술로 옮긴 신경외과학자-신경과학자다. 이 글에서 Chang의 핵심성은 “생각을 읽는 기계”에 있지 않다. 오히려 그 반대다. 그의 연구가 반복해서 보여주는 것은 뇌 신호 해독의 범위가 일반적 생각 전체가 아니라, 사용자가 말하려고 시도할 때 나타나는 speech motor activity에 한정된다는 점이다.

따라서 이 글의 중심 논제는 다음과 같다. Edward F. Chang의 연구는 “언어는 뇌의 어디에 있는가”라는 고전적 질문을 “말소리와 조음 운동은 피질에서 어떻게 계산되고, 그 계산은 어떻게 다시 목소리로 복원될 수 있는가”라는 임상적·기술적 질문으로 바꾸었다. 이 변환이 중요하다. 언어를 추상적 의미의 문제로만 다루면, 말을 잃은 사람에게 남아 있는 신경적 가능성이 보이지 않는다. 반대로 언어를 단순한 소리 산출로만 보면, 목소리를 잃은 사람이 여전히 말하려 한다는 사실을 설명하기 어렵다. Chang의 작업은 이 둘 사이, 곧 의미와 몸, 피질 계산과 사회적 의사소통 사이에 놓여 있다.

---

### 2. Edward F. Chang은 누구인가

Edward F. Chang은 University of California, San Francisco(UCSF)의 신경외과 교수이자 Joan and Sanford Weill Chair of Neurological Surgery를 맡고 있는 의사-과학자다. UCSF 프로필 기준으로 그는 Amherst College에서 화학을 전공했고, UCSF에서 의학 학위를 받은 뒤 UCSF 신경외과 레지던시를 마쳤으며, UC Berkeley에서 cognitive neuroscience 박사후연구를 수행했다. 그의 임상 영역은 epilepsy surgery, brain tumors, trigeminal neuralgia, hemifacial spasm, movement disorders, awake brain mapping 등으로 정리된다. 연구 영역은 speech, movement, human emotion, neural engineering으로 이어진다.

이 약력에서 중요한 점은 경력의 화려함이 아니라 위치의 특수성이다. Chang은 언어를 책상 위에서만 다루는 인지과학자가 아니다. 그는 인간의 피질을 실제 수술 장면에서 다루는 neurosurgeon-scientist다. 이 위치는 그의 연구를 독특하게 만든다. 인간 언어의 많은 측면은 동물모델로 직접 옮기기 어렵고, fMRI나 EEG 같은 비침습적 방법만으로는 말소리와 조음 운동이 밀리초 단위로 펼쳐지는 과정을 충분히 포착하기 어렵다. 반면 신경외과 수술과 연결된 intracranial recording은 시간 해상도와 공간 해상도에서 인간 언어 연구에 특별한 창을 제공한다. 물론 이 창은 환자 치료라는 윤리적 조건 위에서만 열릴 수 있다. 그래서 Chang의 과학은 처음부터 임상적 기회와 윤리적 제한을 동시에 포함한다.

그의 연구를 “AI가 말을 복원했다”라고 요약하면 핵심을 놓친다. AI는 그의 연구에서 강력한 도구이지만, 주인공은 AI 자체가 아니다. 주인공은 인간 speech cortex의 구조와, 그 구조가 손상된 몸을 우회해 다시 의사소통으로 연결될 수 있는가라는 문제다. Chang이 주목받는 이유는 신경외과, 인간 피질 기록, 언어 신경과학, BCI 공학을 한 축 위에 올려놓았기 때문이다.

---

### 3. 수술실에서 시작된 언어 과학

Chang 연구의 방법론적 중심에는 awake brain mapping과 electrocorticography(ECoG)가 있다. Awake brain mapping은 환자가 깨어 있는 상태에서 언어와 운동 기능을 확인하며 수술 부위를 정밀하게 결정하는 방식이다. ECoG는 피질 표면에 전극을 놓고 뇌 활동을 기록하는 방법이다. 두 방법은 임상적으로는 기능 보존을 위해 쓰이고, 연구적으로는 인간 피질이 실제 언어 과제 중 어떻게 작동하는지 포착하는 데 쓰인다.

이 방법론의 장점은 분명하다. EEG는 두피 바깥에서 뇌 신호를 측정하기 때문에 안전하지만, 피질 표면의 미세한 활동을 고해상도로 구분하기 어렵다. 단일 뉴런 기록은 매우 정밀하지만, 인간 언어처럼 넓은 피질 네트워크가 관여하는 기능을 안정적으로 넓게 보기는 어렵다. ECoG는 그 중간에 있다. 피질 표면에서 직접 신호를 얻기 때문에 시간 해상도가 높고, 동시에 여러 전극을 통해 speech cortex 전반의 동역학을 추적할 수 있다.

그러나 이 장점은 언제나 제한과 함께 온다. 침습적 기록은 연구 편의만으로 정당화될 수 없다. 환자는 치료를 위해 수술을 받는 사람이지, 연구를 위해 존재하는 실험 대상이 아니다. Chang Lab이 윤리 원칙으로 환자 치료와 연구 참여의 분리, 자발적 동의, 충분한 정보 제공을 강조하는 이유도 여기에 있다. 이 점은 글 전체에서 중요하다. Chang의 연구는 기술적으로 급진적이지만, 그 급진성은 환자 안전과 동의라는 보수적 원칙 위에서만 정당화된다.

---

## Part II. 언어의 신경과학: 듣기와 말하기의 피질 구조

### 4. 듣는 뇌: STG와 말소리의 계산

앞 절에서 Chang의 방법론이 수술실과 피질 기록의 결합에서 나온다는 점을 보았다면, 이제 물어야 할 것은 그 방법이 무엇을 밝혀냈는가이다. 첫 번째 대답은 superior temporal gyrus(STG), 곧 상측두이랑에서 시작된다. STG는 말소리 처리와 관련된 중요한 측두엽 영역이다. Chang의 speech perception 연구는 STG를 단순한 “소리 수신기”로 보지 않는다. STG는 공기 중의 음향 신호를 자음, 모음, 운율, 단어 경계, 언어적 범주로 변환하는 계산 장치에 가깝다.

여기서 “계산”이라는 말은 기계적 산술을 뜻하지 않는다. 그것은 시간 속에서 흘러가는 소리 파형을 의미 있는 언어 단위로 묶어내는 신경적 변환을 가리킨다. 말소리는 연속적이다. 실제 대화에서는 단어 사이에 항상 명확한 물리적 경계가 있는 것이 아니다. 그런데도 우리는 그 연속적 흐름을 “하나의 단어”, “하나의 음절”, “하나의 문장”으로 듣는다. 카페의 소음 속에서 누군가가 빠르게 “물 좀 줄래”라고 말해도 우리는 세 단어를 따로 듣는다. 실제 음향 신호는 겹치고 흐려졌지만, 뇌는 말소리의 단서를 묶어 의사소통 가능한 단위로 재구성한다. STG 연구의 의미는 바로 이 변환의 피질적 조건을 보여준다는 데 있다.

Chang Lab의 정리와 관련 논문들을 종합하면, STG는 phoneme category, acoustic-phonetic feature, prosody, word boundary, lexical information을 동적으로 처리한다. 2026년 Neuron에 실린 “Human cortical dynamics of auditory word form encoding”은 STG 활동이 word boundary에서 reset되고, 단어 내부에서는 acoustic-phonetic, prosodic, lexical information을 통합한다는 모델을 제시했다. 또한 2026년 Nature에 실린 “Shared and language-specific phonological processing in the human temporal lobe”는 STG가 언어 경험과 무관하게 공유되는 acoustic-phonetic feature를 처리하면서도, 익숙한 언어에서는 word boundary, word frequency, language-specific sound sequence statistics를 더 강하게 부호화한다는 점을 보여준다.

이 결과는 언어를 단순한 단어 목록으로 이해하는 관점을 흔든다. 단어는 머릿속 사전에 고정된 표지처럼 저장되어 있다가 꺼내지는 것만이 아니다. 적어도 듣기 과정에서 단어는 시간 속에서 구성된다. STG는 흐르는 소리를 잘라내고, 묶고, 예측하고, 복원하며, 언어 경험에 따라 다르게 가중치를 부여한다. 이때 언어는 정적인 저장물이 아니라, 피질의 시간적 동역학이다.

---

### 5. 말하는 뇌: 의미 이전의 조음 운동

듣는 뇌가 소리를 언어 단위로 변환한다면, 말하는 뇌는 그 역방향의 문제를 안고 있다. 생각이나 의도를 어떻게 혀, 입술, 턱, 후두, 성대의 정밀한 운동으로 바꾸는가. 이 지점에서 Chang의 두 번째 축이 등장한다. 그는 speech production을 추상적 언어 능력으로만 보지 않고, vocal tract articulator의 빠르고 정교한 coordination으로 분석한다.

2013년 Nature에 발표된 “Functional organization of human sensorimotor cortex for speech articulation”은 이 방향의 중요한 전환점이다. 이 연구는 consonant-vowel syllable을 발화하는 동안 고해상도 cortical recording을 사용해 speech sensorimotor cortex의 조직을 분석했다. 핵심은 말하기가 단순히 phoneme을 순서대로 출력하는 일이 아니라는 점이다. 실제 말하기는 혀, 입술, 턱, 후두가 짧은 시간 안에 서로 조율되는 운동이다. Chang Lab의 설명처럼 말하기에는 vocal tract의 100개가 넘는 근육 조정이 관여한다.

이 관점은 Broca’s area 중심의 단순 도식을 넘어선다. 물론 Broca’s area는 언어 생산 연구에서 중요한 위치를 차지해 왔다. 그러나 말하기를 실제 발화 운동의 관점에서 보면 ventral sensorimotor cortex(vSMC)와 middle precentral gyrus(midPrCG)의 역할이 더 뚜렷해진다. vSMC는 조음 운동과 밀접한 관련을 가지며, midPrCG는 speech planning과 production의 중요한 축으로 다뤄진다. 예컨대 “바”와 “파”는 글자로 보면 한 획 차이처럼 보이지만, 실제 발화에서는 입술의 닫힘, 공기의 압력, 성대 진동의 타이밍이 다르게 배열된다. “라”와 “나” 역시 혀끝의 위치와 공기 흐름이 다르다. 이 미세한 운동 차이가 사회적으로는 전혀 다른 단어와 의미를 만든다. 이때 “말한다”는 것은 문법을 아는 것만도, 의미를 떠올리는 것만도 아니다. 말한다는 것은 의미를 몸의 운동으로 변환하는 일이다.

이 대목에서 Chang 연구의 철학적 의미가 이미 시작된다. 우리는 흔히 언어를 정신의 작용으로 생각한다. 그러나 발화는 정신의 투명한 외화가 아니다. 발화는 몸의 기술이다. 혀의 위치, 입술의 닫힘, 성대의 떨림, 호흡의 압력, 턱의 움직임이 없다면 의미는 사회적 소리로 나타나지 않는다. Chang의 speech production 연구는 인간 언어의 고상한 측면을 낮추는 것이 아니라, 그 고상함이 얼마나 정교한 신체 운동 위에 놓여 있는지를 보여준다.

---

## Part III. 신경보철의 진화: 문장, 목소리, 아바타, 시간성

### 6. 뇌 신호를 다시 문장으로 바꾸다

앞 절에서 말하기가 피질의 조음 운동 조직과 연결된다는 점이 성립한다면, 이제 물어야 할 것은 그 운동 조직이 실제 발화 없이도 해독될 수 있는가이다. 이 질문이 Chang의 speech neuroprosthesis 연구를 이끈다. speech neuroprosthesis는 말을 잃은 사람의 speech-related neural activity를 텍스트나 음성으로 변환하는 장치다. 여기서 중요한 표현은 “speech-related”이다. 이 기술은 무작위 생각을 읽는 것이 아니라, 말하려는 시도와 관련된 피질 활동을 해독한다.

2019년 Nature 논문 “Speech synthesis from neural decoding of spoken sentences”는 이 전환의 초기 돌파구였다. 연구팀은 cortical activity를 곧바로 소리로 단순 변환한 것이 아니라, articulatory kinematics와 acoustic representation을 매개로 audible speech를 합성하는 방식을 설계했다. 이 점이 중요하다. 말은 소리이기 전에 조음 운동이고, 조음 운동은 피질 활동과 연결된다. 따라서 신경 신호에서 음성을 복원하려면, 피질 활동과 소리 사이에 vocal tract의 운동 구조를 넣어야 한다.

2021년 New England Journal of Medicine에 발표된 연구는 이 가능성을 실제 severe paralysis and anarthria를 가진 참가자에게 적용했다. 참가자 BRAVO1은 뇌간 stroke 이후 15년 이상 말을 하지 못했고, 제한된 움직임으로만 의사소통했다. 연구팀은 speech motor cortex 위에 high-density electrode array를 이식하고, 참가자가 50개 어휘를 말하려고 시도하는 동안 22시간의 neural activity를 48회 세션에 걸쳐 기록했다. 이후 deep-learning model과 natural-language model을 이용해 단어와 문장을 화면에 출력했다. UCSF 보도는 50개 어휘 기반 실험에서 단어 해독이 최대 18 words per minute, 최대 93% accuracy, median 75% 수준에 도달했다고 설명한다. 다만 이 수치는 하나의 단일 조건에서 나온 절대 지표로 읽으면 안 된다. NEJM 논문 초록의 실시간 문장 해독 지표는 median 15.2 words per minute, median word error rate 25.6%로 제시되며, 어휘 집합, 언어모델 사용, 평가 방식에 따라 정확도와 오류율의 의미가 달라진다. 따라서 이 성과는 “완성된 자연 대화”가 아니라, 제한된 어휘와 한 명의 참가자 조건에서 단어와 문장을 직접 해독한 원리 증명으로 읽어야 한다.

이 성과의 의미는 수치 자체보다 구조에 있다. 첫째, 발화가 물리적으로 불가능해도 speech motor cortex에는 말하려는 시도와 관련된 신호가 남아 있을 수 있다. 둘째, 그 신호는 단순한 yes/no 명령이 아니라 단어와 문장으로 해독될 수 있다. 셋째, communication restoration은 더 이상 손가락, 눈동자, 머리 움직임만을 매개로 하지 않고, speech cortex 자체를 매개로 삼을 수 있다. 이것이 Chang 연구의 임상적 전환점이다.

다만 이 시점의 기술은 아직 제한적이었다. 어휘는 50개였고, 참가자는 한 명이었다. 속도도 자연 대화와 비교하면 느렸다. 그러나 모든 전환점은 처음부터 완전한 형태로 나타나지 않는다. 2021년의 성과는 완성품이 아니라 원리 증명이었다. 말할 수 없는 사람이 여전히 말하려고 할 때, 그 시도가 피질 신호로 남고, 그 신호가 문장으로 복원될 수 있음을 보여준 사건이었다.

---

### 7. 텍스트에서 음성, 얼굴, 아바타로

2021년의 연구가 단어와 문장의 복원을 보여주었다면, 2023년 Nature 논문 “A high-performance neuroprosthesis for speech decoding and avatar control”은 의사소통의 출력 형식을 확장했다. 이 연구는 severe limb and vocal paralysis를 가진 clinical-trial participant의 speech cortex에서 high-density surface recording을 수행하고, deep-learning model을 이용해 세 가지 출력 양식을 동시에 다뤘다. 텍스트, speech audio, facial-avatar animation이다.

논문 초록 기준으로 large-vocabulary text decoding은 median 78 words per minute, median word error rate 25%를 보였다. speech audio에서는 참가자의 pre-injury voice에 맞춘 개인화된 음성 합성을 시연했고, facial-avatar animation에서는 speech와 non-speech communicative gesture를 위한 orofacial movement control을 보여주었다. 이 성과가 중요한 이유는 의사소통이 단순한 텍스트 전달이 아니기 때문이다. 인간은 말할 때 단어만 전달하지 않는다. 목소리의 질감, 속도, 억양, 표정, 입 모양, 얼굴의 미세한 움직임이 함께 사회적 의미를 만든다.

여기서 “목소리를 되찾는다”는 말의 의미가 달라진다. 그것은 단지 화면에 문자가 뜨는 일이 아니다. 물론 텍스트는 중요하다. 그러나 인간의 말은 사회적 현존의 형식이기도 하다. 누군가가 자기 목소리와 닮은 소리로, 자기 얼굴의 움직임과 연결된 아바타로, 실시간에 가까운 속도로 반응할 수 있다면, 그 기술은 정보 전달 이상의 효과를 갖는다. 그것은 대화 속에서 다시 “있는 사람”이 되는 경험과 연결된다.

하지만 여기서도 과장은 금물이다. 2023년 연구는 강력한 성과였지만, 여전히 clinical-trial participant를 대상으로 한 연구이며, 일상적 상용 제품이 아니다. word error rate 25%는 놀라운 진전이지만 완전한 정확성을 뜻하지 않는다. 또한 pre-injury voice 복원은 개인의 정체성 회복과 관련된 깊은 가능성을 열지만, 동시에 합성 음성이 어디까지 사용자의 말인가라는 윤리적 질문도 함께 낳는다. 기술의 힘이 커질수록, 그 기술이 매개하는 말의 소유권과 책임도 더 정밀하게 물어야 한다.

---

### 8. bilingual speech neuroprosthesis: 두 언어를 가진 한 사람의 목소리

앞 절에서 의사소통의 출력 형식이 텍스트에서 음성·얼굴·아바타로 확장되었다면, 이제 남는 질문은 언어의 다양성이다. speech neuroprosthesis가 영어권 단일 언어 사용자에게만 최적화된다면, 그것은 인간 언어의 현실을 충분히 반영하지 못한다. 세계의 많은 사람은 bilingual 혹은 multilingual speaker이며, 한 사람의 정체성도 여러 언어적 맥락 속에서 나뉘고 결합된다.

2024년 Nature Biomedical Engineering 논문 “A bilingual speech neuroprosthesis driven by cortical articulatory representations shared between languages”는 이 문제를 정면으로 다뤘다. 연구팀은 Spanish-English bilingual participant의 speech-motor cortex 활동을 ECoG로 기록하고, deep-learning model과 statistical natural-language model을 이용해 영어와 스페인어 문장을 해독했다. 핵심은 시스템이 두 언어의 피질 신호와 문장 확률을 함께 이용해 intended language를 추정함으로써, 참가자가 매번 목표 언어를 수동으로 지정하지 않고도 영어와 스페인어 사이를 전환할 수 있었다는 점이다. 이것은 “완전한 언어 자동 인식”이라기보다, 두 언어 조건에서 language detection과 decoding이 결합된 초기 bilingual speech neuroprosthesis로 이해하는 편이 정확하다.

이 연구의 개념적 핵심은 shared articulatory representations다. 영어와 스페인어는 서로 다른 언어이지만, 둘 다 인간 vocal tract가 만들어내는 소리 운동 위에 놓여 있다. 연구팀은 두 언어에 공유되는 vocal-tract articulatory representation을 이용해 syllable classifier가 두 언어 사이에서 일반화될 수 있음을 보였다. UCSF 보도에 따르면 연구팀은 특정 전극이 한 언어에만 매우 특이적으로 반응한다기보다, 두 언어의 피질 활동이 상당히 공유된다는 점을 발견했다.

이 결과는 언어 정체성에 대한 섬세한 함의를 갖는다. 이중언어 사용자에게 한 언어는 단순한 번역 가능한 코드가 아니다. 스페인어는 가족과 집의 언어일 수 있고, 영어는 병원·직장·공적 관계의 언어일 수 있다. 따라서 bilingual speech neuroprosthesis는 단순히 어휘 목록을 늘린 기술이 아니다. 그것은 한 사람이 자신의 삶에서 실제로 사용하는 언어적 복수성을 복원하려는 시도다. 사람은 하나의 언어로만 존재하지 않는다. speech BCI도 이 사실을 따라가야 한다.

다만 언어적 복수성은 bilingual decoding만으로 끝나지 않는다. 실제 말하기에는 accent, dialect, code-switching이 함께 들어온다. 같은 영어라도 지역 억양과 사회적 억양이 다르고, 같은 스페인어라도 가족 안에서 쓰는 말과 병원에서 쓰는 말이 다르며, 이중언어 사용자는 한 문장 안에서도 언어를 전환한다. 2024년 연구는 이 모든 문제를 해결한 것이 아니라, 그 문제들을 speech neuroprosthesis가 앞으로 다루어야 할 방향으로 드러낸다. 언어를 복원한다는 것은 단어를 복원하는 일보다 넓다. 그것은 한 사람이 실제로 말해 온 방식, 곧 언어적 생애의 질감을 얼마나 회복할 수 있는가의 문제다.

---

### 9. streaming brain-to-voice: 대화의 시간성을 복원한다는 것

bilingual speech neuroprosthesis가 언어의 폭을 넓혔다면, 2025년 Nature Neuroscience 논문 “A streaming brain-to-voice neuroprosthesis to restore naturalistic communication”은 시간의 문제를 다뤘다. 대화는 내용만이 아니라 타이밍이다. 몇 초의 지연은 단순한 기술적 불편이 아니라, 대화의 흐름 자체를 깨뜨린다. 상대가 말하고, 내가 반응하고, 다시 상대가 대답하는 리듬이 무너지면 의사소통은 정보 교환으로는 남아도 대화로는 약해진다.

NIH Research Matters와 Berkeley Engineering 보도에 따르면, 이 연구는 severe paralysis and anarthria를 가진 47세 여성 참가자의 speech sensorimotor cortex 위에 electrode array를 이식하고, 참가자가 조용히 말하려고 시도하는 동안 deep-learning system으로 audible speech를 streaming 방식으로 합성했다. 시스템은 80ms 단위로 brain activity를 처리했고, full vocabulary set에서 47.5 words per minute, 50-word set에서 90.9 words per minute 성능을 보였다. Berkeley Engineering 보도는 이전 접근이 문장 하나에 약 8초의 지연을 가졌던 반면, 새 방식은 speech attempt 후 약 1초 안에 첫 소리를 내는 near-real-time synthesis를 구현했다고 설명한다.

이 성과의 핵심은 빠른 속도만이 아니다. streaming 방식은 발화가 끝난 뒤 문장을 일괄적으로 계산해 내보내는 방식과 다르다. 그것은 말하려는 동안 계속해서 소리를 만들어낸다. 자연 발화에 가까운 시간 구조를 복원하는 것이다. 이 차이는 기술적으로도 중요하지만, 경험적으로 더 중요하다. 사용자가 자신의 말이 거의 즉시 소리로 돌아오는 것을 들을 때, 그는 단순히 기계를 조작하는 것이 아니라, 자기 발화의 피드백을 다시 얻는다.

물론 이 연구도 아직 proof-of-concept 단계다. 더 많은 참가자, 더 긴 사용 기간, 더 다양한 임상 조건, 더 안정적인 장기 전극 성능, 더 풍부한 prosody와 emotion decoding이 필요하다. 그러나 방향은 분명하다. speech neuroprosthesis의 목표는 단어를 맞히는 데서 끝나지 않는다. 목표는 대화의 속도, 억양, 표정, 사회적 리듬을 점점 더 복원하는 것이다.

---

## Part IV. 회로 의학과 제도적 인정

### 10. speech를 넘어 emotion, pain, epilepsy로

Chang을 speech BCI 연구자 하나로만 축소하면 그의 작업의 폭을 놓친다. UCSF 프로필과 Chang Lab의 설명에 따르면 그의 연구는 speech, movement, human emotion, neural engineering을 포함하며, clinical trials는 speech neuroprosthesis뿐 아니라 depression과 epilepsy 관련 영역도 포괄한다. 이 확장은 우연이 아니다. Chang의 더 넓은 관심은 특정 기능이 인간 피질과 회로에서 어떻게 조직되고, 그 조직을 어떻게 치료나 기능 회복으로 번역할 수 있는가에 있다.

예를 들어 treatment-resistant depression 영역에서는 2021년 Nature Medicine에 발표된 closed-loop neuromodulation 사례가 중요하다. 이 연구는 개인 맞춤형 closed-loop deep brain stimulation을 치료저항성 우울증 사례에 적용했다. 다만 n-of-1 연구이므로 일반화에는 신중해야 한다. chronic pain 영역에서는 2023년 Nature Neuroscience 연구가 소수 참가자에서 chronic pain state를 intracranial neural biomarkers로 예측하는 가능성을 제시했다. 이 역시 대규모 임상 적용이 아니라 초기 인간 연구로 이해해야 한다.

epilepsy surgery와 brain mapping은 Chang의 임상 기반을 형성한다. 신경외과 의사에게 뇌 기능의 위치를 안다는 것은 이론적 호기심만이 아니다. 그것은 무엇을 절제할 수 있고, 무엇을 보존해야 하는가를 가르는 문제다. 언어, 운동, 통증, 감정, seizure focus는 서로 다른 주제처럼 보이지만, Chang의 연구에서는 하나의 더 큰 질문으로 묶인다. 인간 피질과 회로의 기능적 지도를 어떻게 만들고, 그 지도를 어떻게 치료와 회복으로 연결할 것인가.

이 지점에서 Chang의 연구는 “언어 과학”과 “회로 의학” 사이에 놓인다. 그는 인간 고등 기능을 설명하는 데서 멈추지 않고, 그 설명을 환자의 기능 회복으로 번역하려 한다. 이 번역의 윤리적 위험은 크다. 그러나 그 가능성 역시 크다. 뇌과학이 질병을 단순히 병리학적 결함으로 보는 데서 벗어나, 기능을 잃은 회로를 어떻게 다시 사회적 삶과 연결할 것인가를 묻기 시작하기 때문이다.

---

### 11. 왜 2025년 이후 Chang은 더 주목받는가

Chang은 이미 2015년 Blavatnik National Laureate in Life Sciences로 선정되었고, 2020년 National Academy of Medicine에 선출되었다. 그러나 2025년은 그의 공적 인정이 한층 더 뚜렷해진 해다. UCSF Department of Neurological Surgery는 2025년 5월 8일 Chang이 National Academy of Sciences(NAS)에 선출되었다고 발표했다. 해당 발표는 그가 인간 뇌가 speech를 perceives and produces하는 방식을 밝히고, severe paralysis and speech loss를 가진 사람들의 communication을 가능하게 한 speech neuroprosthesis의 토대를 놓았다고 설명한다.

같은 해 Gruber Foundation은 2025 Gruber Neuroscience Prize를 Chang에게 수여한다고 발표했다. Gruber의 설명은 그의 공로를 두 가지로 압축한다. 하나는 인간 뇌가 spoken language의 sounds and movements를 어떻게 encode하는지 밝힌 연구이고, 다른 하나는 paralysis 환자의 communication을 복원하는 speech neuroprosthesis 개발이다. 이 수상은 단순한 명예 목록 이상의 의미를 갖는다. 그것은 Chang의 연구가 basic neuroscience, clinical neurosurgery, neuroengineering 사이의 경계를 실제로 이동시켰다는 제도적 판단이다.

중요한 것은 수상이 연구의 가치를 대신 증명해주는 것이 아니라, 어떤 종류의 가치가 인정받았는지를 보여준다는 점이다. Chang은 하나의 기술 제품을 만든 사람으로 평가받은 것이 아니다. 그는 speech comprehension, speech production, speech restoration을 하나의 연구 프로그램으로 묶은 사람으로 평가받았다. 이것이 2025년 이후 Chang을 “최근 주목할 만한 뇌과학자”로 분류할 수 있는 이유다.

---

## Part V. 의미와 책임: 과장, 윤리, 정체성

### 12. 과장하지 말아야 할 것들

앞 절에서 Chang의 성과가 왜 크게 인정받았는지를 보았다면, 이제 반드시 물어야 할 것은 이 성과를 어디까지 말할 수 있는가이다. Chang의 연구는 매우 중요하지만, 중요하다는 사실이 과장을 정당화하지는 않는다. 오히려 성과가 클수록 그 경계를 더 정확히 그어야 한다.

첫째, speech neuroprosthesis는 mind reading이 아니다. 이 기술은 사용자가 말하려고 시도할 때 나타나는 speech-related neural activity를 해독한다. Berkeley Engineering 보도에서 연구진은 이것이 “생각이 조음으로 번역되는 중간 지점”의 신호를 해독하는 것에 가깝다고 설명했다. 즉 사용자가 무엇을 말할지 결정하고, 그 말을 vocal tract muscle movement로 옮기려는 과정의 신호를 다루는 것이다. 무작위 생각, 숨은 욕망, 사적인 기억 전체를 읽는 기술로 묘사하면 과학적으로 틀리고 윤리적으로도 위험하다.

둘째, 연구 참가자 수가 아직 작다. 2021년, 2023년, 2024년, 2025년 연구는 모두 매우 강력한 proof-of-concept이지만, 대규모 임상시험과 동일하지 않다. 개인별 피질 조직, 손상 원인, 잔존 speech motor signal, 전극 위치, 훈련 시간에 따라 성능은 달라질 수 있다. 한 사람에게서 가능한 것이 곧 모든 환자에게 가능한 것은 아니다.

셋째, 기술은 침습적이다. ECoG array나 implantable electrode는 수술을 필요로 한다. 따라서 일반 소비자용 AI 장치처럼 상상해서는 안 된다. 감염 위험, 전극 안정성, 장기 유지보수, calibration, 보험, 규제, 의료 인프라가 모두 현실적 장벽이다. 특히 수년 이상 안정적으로 작동하는지, 다양한 생활 환경에서 얼마나 견고한지, 환자가 피로 없이 사용할 수 있는지는 아직 더 검증되어야 한다.

넷째, 언어와 문화 다양성의 문제가 남아 있다. 2024년 bilingual 연구는 영어와 스페인어 사이에서 중요한 가능성을 보였지만, 그것이 곧 모든 언어, 방언, 억양, 문자체계에 대한 검증을 뜻하지는 않는다. 인간 언어는 음운, 운율, 형태, 어순, 사회적 사용 맥락이 다르다. speech neuroprosthesis가 실제로 세계적 기술이 되려면, 영어 중심 데이터와 모델을 넘어 훨씬 넓은 언어적 현실을 다뤄야 한다.

다섯째, 정체성과 책임의 문제도 남는다. pre-injury voice를 반영한 합성 음성은 강력한 회복의 형식일 수 있다. 그러나 합성 음성이 사용자의 말로 사회적으로 받아들여질 때, 오류가 발생하면 그 책임은 누구에게 있는가. decoder가 잘못된 단어를 출력했을 때, 그것은 사용자의 말인가, 시스템의 오류인가, 혹은 둘 사이의 혼합물인가. 이런 질문은 기술의 주변 문제가 아니라, 기술이 실제 삶에 들어갈 때 핵심 문제가 된다.

---

### 13. 목소리, 정체성, 기계

과장하지 말아야 할 지점을 확인했다면, 이제 Chang 연구가 여는 철학적 질문을 말할 수 있다. 그 질문은 “기계가 인간처럼 말할 수 있는가”가 아니다. 더 정확한 질문은 이것이다. 기계가 매개한 말은 어디까지 한 사람의 말인가.

목소리는 단순한 음향 신호가 아니다. 목소리는 사회적 정체성의 표면이다. 우리는 누군가의 목소리에서 나이, 감정, 피로, 친밀감, 망설임, 자신감을 듣는다. 같은 문장이라도 목소리에 따라 다른 사람이 된다. 그러므로 말을 잃는다는 것은 정보 전달 능력을 잃는 것 이상이다. 그것은 사회적 현존의 한 형식을 잃는 일이다. 이 점에서 speech neuroprosthesis는 단순한 보조공학이 아니라, 사회적 자아를 부분적으로 복원하는 기술이다.

그러나 이 복원은 순수하지 않다. 사용자의 neural activity, decoder의 model, language model의 예측, speech synthesizer, avatar animation이 함께 하나의 발화를 만든다. 그렇다면 그 발화는 사용자의 말인가, 기계의 말인가. 답은 둘 중 하나가 아니다. 더 정확히 말하면, 그것은 기계가 매개한 사용자의 말이다. 사용자가 말하려는 의도를 제공하고, 시스템은 그 의도를 가능한 출력으로 번역한다. 이 구조는 안경이나 보청기와 비슷한 점이 있지만, 더 깊다. 안경은 시야를 보정하지만, speech neuroprosthesis는 사회적 발화를 생산한다.

따라서 윤리의 핵심은 기술을 인간화하는 데 있지 않다. 핵심은 매개의 조건을 투명하게 만드는 데 있다. 사용자가 무엇을 통제하는가. 시스템은 어디에서 예측을 개입시키는가. 오류는 어떻게 수정되는가. 합성 음성은 얼마나 개인화되는가. 다른 사람이 그 발화를 어떻게 받아들여야 하는가. 이 질문들에 답하지 않은 채 “목소리를 되찾았다”고 말하면, 회복의 서사는 너무 빠르게 완결된다.

특히 correction mechanism은 부가 기능이 아니라 발화의 책임을 배분하는 장치다. 사용자가 출력 전에 후보 단어를 확인할 수 있는가. 신뢰도 낮은 단어는 표시되는가. 잘못 출력된 문장을 즉시 취소하거나 정정할 수 있는가. 대화 속도와 사용자 통제권이 충돌할 때 어느 쪽을 우선할 것인가. 자연스러운 대화를 위해 자동완성 비중을 높이면 속도는 올라갈 수 있지만, 사용자의 의도와 language model의 예측이 더 자주 섞인다. 반대로 모든 출력을 확인하게 하면 통제권은 커지지만 대화의 리듬은 느려진다. speech neuroprosthesis의 윤리는 바로 이 절충을 어떻게 설계하느냐에 걸려 있다.

그럼에도 Chang 연구가 중요한 이유는 분명하다. 그것은 인간의 말이 순수하게 입과 목에서만 발생하지 않는다는 사실을 보여준다. 말은 뇌, 몸, 기계, 사회적 청자 사이에서 구성된다. 말하기 능력을 잃은 사람에게 남아 있는 것은 “내면의 생각”만이 아니다. 그에게는 여전히 말하려는 피질의 구조가 있고, 그 구조는 적절한 장치를 통해 다시 세계와 연결될 수 있다.

---

### 14. 결론: 인간의 말은 몸을 잃어도 완전히 사라지지 않는다

Edward F. Chang의 연구를 하나의 문장으로 요약하면, 그는 인간의 speech를 듣기, 말하기, 복원하기라는 세 단계에서 재구성한 연구자다. STG 연구는 말소리가 피질에서 어떻게 언어 단위로 계산되는지를 보여주었다. vSMC와 midPrCG를 중심으로 한 speech production 연구는 말하기가 의미 이전에 정교한 조음 운동이라는 사실을 드러냈다. speech neuroprosthesis 연구는 그 기초지식을 임상적 회복 기술로 번역했다.

이 글이 끝난 뒤 남아야 할 판단 기준은 단순하다. Chang의 성과를 평가할 때 우리는 “AI가 생각을 읽는다”라는 자극적 문장을 버려야 한다. 대신 “말하려는 운동 의도가 피질에 어떻게 남고, 그것이 어떤 조건에서 텍스트·음성·얼굴 움직임으로 복원될 수 있는가”를 물어야 한다. 이 질문이 더 좁아 보이지만, 실제로는 더 깊다. 넓고 흐린 신비화보다, 좁고 정확한 복원이 인간에게 더 많은 것을 돌려줄 수 있기 때문이다.

Chang의 연구가 보여주는 것은 기계가 인간의 말을 대체한다는 사실이 아니다. 오히려 반대다. 말이 사라진 자리에서도 인간의 뇌는 여전히 말하려 하고 있으며, 과학은 그 잔존하는 의도를 다시 세계와 연결하는 통로를 만들 수 있다. 목소리는 입에서만 나오는 것이 아니다. 때로 목소리는 끊어진 몸의 경로를 우회해, 피질과 기계와 타인의 귀 사이에서 다시 태어난다.

---

### 15. 참고자료

### 인물·기관 자료

- UCSF Profiles, “Edward Chang, MD”  
  https://profiles.ucsf.edu/edward.chang

- UCSF Health, “Edward F. Chang, MD”  
  https://www.ucsfhealth.org/providers/edward-chang

- Chang Lab, “Discoveries”  
  https://changlab.ucsf.edu/discoveries

- Chang Lab, “Speech Neuroprosthesis”  
  https://changlab.ucsf.edu/speech-neuroprosthesis

- UCSF Department of Neurological Surgery, “Edward Chang, MD, Elected to the National Academy of Sciences”  
  https://neurosurgery.ucsf.edu/news/edward-chang-md-elected-to-the-national-academy-of-sciences

- Gruber Foundation, “2025 Gruber Neuroscience Prize Press Release”  
  https://gruber.yale.edu/press/2025-gruber-neuroscience-prize-press-release

### 핵심 논문·연구 자료

- Chang, E. F., Rieger, J. W., Johnson, K., Berger, M. S., Barbaro, N. M., & Knight, R. T. “Categorical speech representation in human superior temporal gyrus.” *Nature Neuroscience* 13, 1428–1432 (2010).  
  https://doi.org/10.1038/nn.2641

- Mesgarani, N., Cheung, C., Johnson, K., & Chang, E. F. “Phonetic feature encoding in human superior temporal gyrus.” *Science* 343(6174), 1006–1010 (2014).  
  https://doi.org/10.1126/science.1245994

- Leonard, M. K., Baud, M. O., Sjerps, M. J., & Chang, E. F. “Perceptual restoration of masked speech in human cortex.” *Nature Communications* 7, 13619 (2016).  
  https://doi.org/10.1038/ncomms13619

- Bouchard, K. E., Mesgarani, N., Johnson, K., & Chang, E. F. “Functional organization of human sensorimotor cortex for speech articulation.” *Nature* 495, 327–332 (2013).  
  https://doi.org/10.1038/nature11911

- Chartier, J., Anumanchipalli, G. K., Johnson, K., & Chang, E. F. “Encoding of articulatory kinematic trajectories in human speech sensorimotor cortex.” *Neuron* 98(5), 1042–1054.e4 (2018).  
  https://doi.org/10.1016/j.neuron.2018.04.031

- Anumanchipalli, G. K., Chartier, J., & Chang, E. F. “Speech synthesis from neural decoding of spoken sentences.” *Nature* 568, 493–498 (2019).  
  https://www.nature.com/articles/s41586-019-1119-1

- Moses, D. A., Metzger, S. L., Liu, J. R., et al. “Neuroprosthesis for Decoding Speech in a Paralyzed Person with Anarthria.” *New England Journal of Medicine* 385, 217–227 (2021).  
  https://www.nejm.org/doi/full/10.1056/NEJMoa2027540

- Metzger, S. L., Littlejohn, K. T., Silva, A. B., Moses, D. A., Seaton, M. P., et al. “A high-performance neuroprosthesis for speech decoding and avatar control.” *Nature* 620, 1037–1046 (2023).  
  https://www.nature.com/articles/s41586-023-06443-4

- Silva, A. B., Liu, J. R., Metzger, S. L., Bhaya-Grossman, I., Dougherty, M. E., et al. “A bilingual speech neuroprosthesis driven by cortical articulatory representations shared between languages.” *Nature Biomedical Engineering* 8, 977–991 (2024).  
  https://www.nature.com/articles/s41551-024-01207-5

- Littlejohn, K. T., Cho, C. J., Liu, J. R., Silva, A. B., Yu, B., et al. “A streaming brain-to-voice neuroprosthesis to restore naturalistic communication.” *Nature Neuroscience* 28, 902–912 (2025).  
  https://doi.org/10.1038/s41593-025-01905-6

- Zhang, Y., Leonard, M. K., Bhaya-Grossman, I., Gwilliams, L., & Chang, E. F. “Human cortical dynamics of auditory word form encoding.” *Neuron* 114(1), 167–180.e6 (2026).  
  https://doi.org/10.1016/j.neuron.2025.10.011

- Bhaya-Grossman, I., Leonard, M. K., Zhang, Y., Gwilliams, L., Johnson, K., Lu, J., & Chang, E. F. “Shared and language-specific phonological processing in the human temporal lobe.” *Nature* 649, 140–151 (2026).  
  https://www.nature.com/articles/s41586-025-09748-8

### 보도·해설 자료

- UCSF News, “Neuroprosthesis Restores Words to Man with Paralysis”  
  https://www.ucsf.edu/news/2021/07/420946/neuroprosthesis-restores-words-man-paralysis

- UCSF Department of Neurological Surgery, “Speaking Two Languages Again”  
  https://neurosurgery.ucsf.edu/news/speaking-two-languages-again

- NIH Research Matters, “Brain-computer interface restores natural speech after paralysis”  
  https://www.nih.gov/news-events/nih-research-matters/brain-computer-interface-restores-natural-speech-after-paralysis

- Berkeley Engineering, “Brain-to-voice neuroprosthesis restores naturalistic speech”  
  https://engineering.berkeley.edu/news/2025/03/brain-to-voice-neuroprosthesis-restores-naturalistic-speech/

### 관련 확장 연구

- Scangos, K. W., Khambhati, A. N., Daly, P. M., et al. “Closed-loop neuromodulation in an individual with treatment-resistant depression.” *Nature Medicine* 27, 1696–1700 (2021).  
  https://pubmed.ncbi.nlm.nih.gov/34608328/

- Shirvalkar, P., Prosky, J., Chin, G., et al. “First-in-human prediction of chronic pain state using intracranial neural biomarkers.” *Nature Neuroscience* 26, 1090–1099 (2023).  
  https://pmc.ncbi.nlm.nih.gov/articles/PMC10330878/

