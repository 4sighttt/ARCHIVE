# Hong Wang
## 모든 방향을 품은 공간 - Hong Wang과 Kakeya의 세기적 문제

작성일: 2026-04-25  
범위: 공개적으로 확인 가능한 학문적 이력, 연구 성과, 수상 내역, 연구사적 의미에 한정한다. 사생활, 내면 동기, 가족사, 공식 근거 없는 수상 예측은 서술하지 않는다.

---

## 1. 바늘 하나가 남긴 질문

바늘 하나를 돌리는 데 필요한 공간은 얼마나 넓어야 하는가. 처음에는 장난 같은 질문이다. 길이가 정해진 선분 하나를 평면 위에서 180도 돌릴 수 있으려면, 우리는 적당한 원판이나 부채꼴을 떠올릴 수 있다. 그러나 수학은 종종 이런 사소해 보이는 질문 속에서 가장 단단한 구조를 발견한다. 문제는 바늘을 실제로 돌리는 일이 아니었다. 문제는 모든 방향의 선분을 한 공간 안에 담을 때, 그 공간이 어디까지 작아질 수 있는가였다.

이 질문은 Soichi Kakeya가 1917년에 제기한 Kakeya needle problem에서 출발했다. 하지만 현대의 Kakeya 문제는 더 이상 바늘을 회전시키는 기하 퍼즐에 머물지 않는다. 그것은 면적, 부피, 차원, 방향, 겹침의 문제로 이동한다. 어떤 집합이 모든 방향의 단위 선분을 하나씩 포함한다고 하자. 그 집합은 얼마나 얇아질 수 있는가. 면적이나 부피는 거의 사라질 수 있다. 그렇다면 차원도 사라질 수 있는가.

Kakeya set conjecture의 핵심은 바로 이 지점에 있다. 모든 방향의 단위 선분을 포함하는 집합은 측도상으로는 작아질 수 있어도, 차원상으로는 전체 공간과 같은 복잡도를 가져야 한다는 주장이다. 평면에서 Besicovitch-type construction은 모든 방향의 선분을 포함하면서도 면적이 0인 집합이 가능하다는 사실을 보여주었다. 이 결과는 직관을 뒤집는다. 모든 방향을 품은 집합이 넓지 않을 수 있다. 그러나 “넓지 않다”는 것과 “차원까지 낮다”는 것은 다르다.

여기서 차원은 초등 기하학의 길이, 넓이, 부피보다 더 섬세한 개념이다. 어떤 대상은 평면 안에 놓여 있으면서도 선처럼 얇고, 선처럼 보이면서도 무수한 방향으로 번진다. 프랙털이 바로 그런 중간 지대를 보여준다. Kakeya 문제는 이 중간 지대에서 묻는다. 모든 방향을 품은 집합이 정말로 공간 전체의 차원을 피할 수 있는가.

Hong Wang(王虹)의 이름이 2020년대 수학의 중심에 놓이게 된 것은 이 질문 때문이다. 그는 Joshua Zahl과 함께 2025년 3차원 Kakeya set conjecture를 해결하는 논문을 공개했다. 그들의 결론은 단순하게 들린다. 3차원 공간에서 모든 방향의 단위 선분을 포함하는 Kakeya set은 Minkowski dimension과 Hausdorff dimension이 모두 3이어야 한다. 아무리 교묘하게 선분들을 겹치고 흩어 놓아도, 차원만큼은 3에서 도망칠 수 없다는 것이다.

이 성과는 단순한 전기적 사건이 아니다. 한 수학자가 오래된 문제 하나를 풀었다는 말만으로는 충분하지 않다. 더 정확히 말하면, Hong Wang은 Fourier analysis의 진동 문제와 geometric measure theory의 방향·차원 문제를 연결함으로써 현대 해석학의 지형을 재배열한 수학자다. 그의 수학에서 함수의 진동과 공간 속 선분의 배열은 서로 다른 문제가 아니다. 그것들은 모두 “방향이 공간 안에서 어떻게 겹치고 퍼지는가”라는 하나의 질문을 향한다.

---

## 2. Hong Wang이라는 이름이 형성된 자리

Hong Wang을 설명할 때 가장 쉬운 방식은 연대기다. 중국 광시(Guangxi) 출신, Peking University, 프랑스 École Polytechnique와 Université Paris-Saclay, MIT 박사학위, IAS, UCLA, NYU, IHES. 이 경로는 인상적이다. 그러나 연대기를 따라가는 것만으로는 왜 그가 3차원 Kakeya 문제의 중심에 서게 되었는지 설명되지 않는다. 중요한 것은 이동한 장소보다 통과한 문제들이다.

Wang은 MIT에서 Larry Guth의 지도 아래 2019년 박사학위를 받았다. 박사학위 논문 제목은 *A restriction estimate in R³*이다. 이 제목은 그의 연구 경로를 압축한다. Fourier restriction problem은 함수의 Fourier transform이 특정 곡면 위에서 어떤 성질을 갖는지, 그리고 그 주파수 정보가 실제 공간에서 어떤 크기 추정을 강제하는지를 묻는다. 이 문제는 곧바로 wave packet, tube, polynomial partitioning 같은 현대 harmonic analysis의 도구들과 연결된다. 그러므로 Wang의 출발점은 이미 Kakeya 문제의 주변부가 아니라 핵심 통로에 가까웠다.

Larry Guth의 polynomial method는 여기서 중요한 배경이다. Polynomial partitioning은 공간을 다항식의 영점 집합을 기준으로 나누어 복잡한 기하학적 배열을 통제하려는 방법이다. 이 도구는 Fourier restriction problem과 Kakeya-type problem에서 강력한 역할을 해왔다. Wang은 이 전통을 단순히 계승한 것이 아니라, 그것을 restriction estimate, local smoothing, geometric measure theory의 다른 문제군으로 밀고 나갔다. 그의 연구 경로는 한 분야에서 다른 분야로 흩어진 것이 아니라, 같은 구조를 여러 언어로 추적한 것이다.

박사학위 이후 Wang은 Institute for Advanced Study의 postdoctoral member로 있었고, UCLA assistant professor를 거쳐 NYU Courant Institute의 수학 교수이자 IHES permanent professor of mathematics가 되었다. 이 이력은 현대 순수수학의 국제적 네트워크를 보여준다. 그러나 이 네트워크를 낭만화할 필요는 없다. 수학적 의미는 그가 어떤 제도적 공간을 거쳤는가보다, 그 공간들 속에서 어떤 문제를 붙잡고 있었는가에 있다.

“왜 Wang이어야 했는가”라는 질문에 대한 답도 여기서 나온다. Wang은 Kakeya 문제를 갑자기 만난 것이 아니다. 그는 restriction estimate에서 출발해 wave packet과 tube의 배열을 다루었고, local smoothing에서 파동과 진동의 시간적 평균을 분석했으며, Furstenberg set과 Kakeya set에서 방향과 차원의 극단적 배치를 추적했다. 하나의 난제를 푼 사람이 아니라, 그 난제를 향해 모여드는 여러 문제의 공통 구조를 오랫동안 다룬 사람이다.

이 지점에서 “천재”라는 단어는 조심해야 한다. Wang의 성과가 탁월하다는 사실은 분명하지만, 탁월성을 고립된 영감으로 설명하면 오히려 수학을 오해하게 된다. 그의 작업은 Larry Guth, Joshua Zahl, Shukun Wu, Kevin Ren, Tuomas Orponen, Pablo Shmerkin 등 여러 연구자와 연결된 문제군 안에서 형성되었다. 현대 수학에서 하나의 정리는 한 사람의 머릿속에서 완전히 갑자기 솟아나지 않는다. 그것은 부분 결과, 실패한 접근, 도구의 변형, 공동 연구, 오래된 질문의 압력이 한곳에 응축될 때 생긴다.

---

## 3. 진동은 어떻게 튜브가 되는가

Hong Wang의 연구를 이해하려면 많은 전문 용어가 필요해 보인다. Fourier restriction, wave packet, decoupling, polynomial partitioning, local smoothing, Furstenberg set, geometric measure theory. 그러나 모든 용어를 같은 무게로 설명하면 글은 곧장 해설 목록이 된다. 이 글에서 붙잡아야 할 축은 세 가지다. Kakeya, tube, dimension. 나머지 개념들은 이 세 축을 이해하기 위한 배경으로만 두는 편이 낫다.

Fourier analysis는 복잡한 함수를 진동 성분으로 분해해 이해하는 분야다. 가장 쉬운 비유는 소리다. 하나의 소리는 한 덩어리로 들리지만, 실제로는 여러 주파수의 합성으로 분석될 수 있다. Fourier transform은 이런 주파수 구조를 보는 도구다. 그러나 Hong Wang이 다루는 문제에서 Fourier analysis는 소리의 분석이라는 비유보다 훨씬 추상적인 영역으로 들어간다. 어떤 함수의 주파수 정보가 곡면 위에 놓일 때, 그 함수는 실제 공간에서 어떤 방향으로 퍼지는가.

여기서 진동은 기하학적 형태를 갖기 시작한다. 특정한 주파수 조각은 실제 공간에서 길쭉한 wave packet으로 나타나며, 이 wave packet은 종종 아주 얇은 튜브처럼 행동한다. 하나의 튜브는 특정 방향을 가진다. 여러 튜브는 서로 겹치고, 비껴가고, 한곳에 몰리고, 여러 스케일에서 재배열된다. 결국 Fourier restriction problem은 어느 순간 “방향을 가진 튜브들이 공간 안에서 어떻게 배치되는가”라는 질문으로 바뀐다.

Kakeya 문제와의 연결은 여기서 생긴다. Kakeya set은 모든 방향의 단위 선분을 포함한다. Fourier analysis에서 나타나는 wave packet도 방향을 가진 튜브들의 집합으로 이해될 수 있다. 그러므로 한쪽에서는 함수의 진동을 분석하고 있는 것처럼 보이지만, 다른 쪽에서는 공간 속 방향들의 겹침을 분석하고 있는 셈이다. 분석학과 기하학이 서로 다른 언어로 같은 문제를 말하기 시작한다.

Dimension은 이 논의의 판정 기준이다. 집합이 얼마나 큰가를 물을 때, 단순한 면적이나 부피만으로는 충분하지 않다. Kakeya set은 면적이나 부피를 거의 잃어버릴 수 있다. 하지만 모든 방향을 담는다는 조건은 여전히 어떤 복잡성을 남긴다. Hausdorff dimension과 Minkowski dimension은 바로 그 복잡성을 측정한다. 그러므로 Kakeya 문제에서 핵심은 “얼마나 넓은가”가 아니라 “얼마나 많은 방향의 복잡성을 품고 있는가”다.

이 세 축을 잡으면 Wang의 연구 세계가 한결 선명해진다. Kakeya는 질문이다. Tube는 방법이다. Dimension은 판정이다. Wang의 3차원 Kakeya 해법은 이 세 요소가 한곳에서 만난 결과다. 모든 방향의 선분을 튜브로 두껍게 만들고, 그 튜브들의 겹침을 여러 스케일에서 추적하며, 결국 그 집합이 전체 차원 3을 가져야 한다는 결론으로 간다.

이 설명은 의도적으로 많은 용어를 뒤로 미룬다. Decoupling theory는 복잡한 진동을 더 작은 조각으로 나누어 통제하는 방법론이고, local smoothing은 파동방정식의 해가 시간 평균을 거치며 얼마나 더 매끄러워지는지를 묻는 문제다. Furstenberg set conjecture는 평면에서 선분과 얇은 집합의 교차 패턴을 다룬다. 이들은 모두 중요하지만, 이 글의 주축은 아니다. 중심에는 언제나 방향, 튜브, 차원이 있다.

---

## 4. Kakeya conjecture: 작아질 수 없는 차원

Kakeya set 또는 Besicovitch set은 모든 방향의 단위 선분을 하나씩 포함하는 집합이다. 정의는 짧다. 그러나 그 짧은 정의는 깊은 역설을 품고 있다. 모든 방향의 선분을 포함한다면 그 집합은 당연히 클 것처럼 보인다. 실제로 우리의 시각적 직관은 그렇게 작동한다. 방향이 많으면 공간을 많이 차지해야 한다. 하지만 수학은 이 직관을 곧장 허락하지 않는다.

Besicovitch의 구성은 모든 방향의 선분을 포함하면서도 면적이 0인 평면 집합이 가능하다는 사실을 보여주었다. 이 결과는 Kakeya 문제를 완전히 바꾸었다. 처음 질문은 “바늘을 돌리는 데 필요한 최소 면적은 얼마인가”처럼 보였지만, 이제 질문은 “면적이 사라져도 차원은 남는가”로 바뀌었다. 즉 문제는 넓이의 문제가 아니라 차원의 문제가 되었다.

Hausdorff dimension과 Minkowski dimension은 이런 상황에서 필요한 도구다. 길이, 넓이, 부피는 정수 차원의 세계에 익숙한 개념이다. 그러나 프랙털적 집합은 그 사이에 놓인다. 선처럼 얇지만 선보다 복잡하고, 면처럼 퍼져 있지만 면적은 0일 수 있다. Kakeya set은 이 애매한 영역을 극단까지 밀어붙인다. 모든 방향의 선분을 담고도 면적이나 부피를 잃을 수 있다면, 그 집합의 차원은 어디까지 낮아질 수 있는가.

Kakeya set conjecture는 n차원 Euclidean space에서 모든 방향의 단위 선분을 포함하는 집합이 Hausdorff dimension과 Minkowski dimension n을 가져야 한다고 말한다. 다시 말해, 측도상으로는 작아질 수 있어도 차원상으로는 전체 공간과 같은 복잡도를 가져야 한다. 모든 방향을 담는다는 조건이 결국 공간 전체의 차원을 강제한다는 주장이다.

3차원이 어려운 이유는 단순히 차원이 하나 늘었기 때문이 아니다. 3차원에서 선분들은 훨씬 다양한 방식으로 서로를 피하거나 겹친다. 평면에서 두 선분은 교차하거나 평행하거나 가까이 지나간다. 3차원에서는 서로 꼬이고, 비껴가고, 한 영역에 몰리면서도 직접 만나지 않을 수 있다. 방향의 자유도가 커지면 겹침의 양상도 복잡해진다. 따라서 단순히 교차점을 세거나 부피를 비교하는 방식으로는 충분하지 않다.

튜브가 필요한 이유도 여기에 있다. 이상적인 선분은 폭이 없다. 폭이 없으면 부피를 직접 비교하기 어렵다. 그래서 수학자는 선분을 아주 얇게 두꺼워진 튜브로 바꾸어 생각한다. 튜브는 부피를 가진다. 그러면 수많은 튜브의 합집합이 얼마나 커야 하는지를 물을 수 있다. 이 부피 추정은 차원 추정으로 이어진다. 선분을 튜브로 바꾸는 일은 문제를 흐리는 것이 아니라, 문제를 계산 가능한 형태로 바꾸는 일이다.

Hong Wang과 Joshua Zahl의 3차원 해법은 바로 이 지점에서 결정적이다. 그들은 모든 방향을 가진 튜브들의 배열이 지나치게 작은 부피 안에 갇힐 수 없음을 보이는 방향으로 문제를 밀고 갔다. 튜브들이 많이 겹치면 합집합은 작아질 수 있다. 그러나 너무 많이 겹치면 그 겹침 자체가 구조를 만든다. 그 구조는 다시 여러 스케일에서 추적될 수 있고, 결국 전체 차원을 피할 수 없게 만든다. 작은 공간 안에 모든 방향을 숨기려는 시도는, 마지막에는 자신이 품은 방향의 양을 드러내야 한다.

---

## 5. Wang–Zahl proof: 튜브들의 숲을 읽는 법

Hong Wang과 Joshua Zahl은 2025년 arXiv에 *Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions*를 공개했다. 제목은 건조하지만, 그 안에는 100년 넘게 이어진 질문의 한 결절점이 들어 있다. 논문의 핵심 결론은 명확하다. 모든 Kakeya set in R³는 Minkowski dimension과 Hausdorff dimension이 3이다. 이것이 3차원 Kakeya set conjecture의 해결이다.

증명의 세부 내용을 산문에서 재현하는 것은 적절하지 않다. 중요한 것은 증명의 감각이다. Wang과 Zahl은 선분들을 아주 얇은 튜브로 두껍게 만든 뒤, 그 튜브들의 합집합이 얼마나 큰 부피를 가져야 하는지 추정한다. 만약 합집합의 부피가 너무 작다면, 많은 튜브들이 서로 겹친다는 뜻이다. 하지만 겹침은 단순한 우연이 아니다. 방향이 많은 튜브들이 작은 공간에 몰리려면, 그들은 어떤 방식으로든 조직되어야 한다.

이 조직을 읽어내는 것이 증명의 핵심이다. 튜브들이 한곳에 몰려 있다고 해서 끝나는 것이 아니다. 어떤 튜브들은 방향이 비슷하고, 어떤 튜브들은 서로 다른 방향으로 지나가며, 어떤 배열은 더 큰 convex set 안에 갇힌다. 한 스케일에서 보이는 겹침은 더 큰 스케일에서 다른 형태로 나타난다. 증명은 이런 다중 스케일 구조를 추적한다. 작은 튜브들의 숲을 확대하고 축소하면서, 그 숲이 정말로 얼마나 많은 공간을 차지할 수밖에 없는지를 계산하는 일이다.

여기서 Wang만의 연구 경로가 구체적으로 드러난다. 그는 이미 박사학위 단계에서 restriction estimate in R³를 다루었고, 이후 wave packet과 tube의 기하학적 배열을 분석하는 문제들을 계속 통과했다. Joshua Zahl과의 공동 연구도 2025년 결과 하나로 갑자기 시작된 것이 아니다. 두 사람은 sticky Kakeya sets와 Assouad dimension of Kakeya sets in R³ 등 관련 문제를 통해 3차원 Kakeya의 핵심 구조를 단계적으로 파고들었다. 최종 결과는 “한 번의 번뜩임”이라기보다, 문제의 주변부를 오랫동안 압박한 끝에 생긴 균열이다.

2026년에는 Larry Guth, Hong Wang, Joshua Zahl이 *A streamlined proof of the Kakeya set conjecture in R³*를 공개했다. 이 후속 작업은 원래 증명의 흐름을 더 정리하고 단순화하려는 시도로 이해할 수 있다. 중요한 것은 이 사실이 원 증명의 성격을 오히려 더 잘 보여준다는 점이다. 큰 수학적 증명은 한 번 쓰였다고 곧바로 완전히 투명해지지 않는다. 연구 공동체는 그것을 읽고, 압축하고, 재배열하고, 더 견고한 형태로 다듬는다. 난제의 해결은 논문 제출의 순간에 끝나는 사건이 아니라, 이해 가능한 지식으로 정착하는 과정이다.

이 성과를 말할 때 반드시 지켜야 할 경계도 있다. Wang과 Zahl이 해결한 것은 Kakeya conjecture의 3차원 사례다. 모든 차원의 일반 Kakeya conjecture가 해결된 것은 아니다. 또한 이 결과가 곧바로 특정 산업 기술이나 응용으로 이어진다고 말할 근거도 부족하다. 그러나 그 의미를 줄일 필요는 없다. 3차원은 오랫동안 harmonic analysis와 geometric measure theory가 공유해온 중심 장벽이었다. 그 장벽을 통과했다는 사실만으로도 충분히 크다.

Wang–Zahl proof의 산문적 이미지는 튜브들의 숲이다. 한두 개의 튜브는 어렵지 않다. 문제는 모든 방향의 튜브가 한꺼번에 공간을 통과할 때다. 그 숲은 서로 겹치고, 갈라지고, 한곳에 몰리고, 다시 흩어진다. Wang과 Zahl은 그 숲이 실제로 얼마나 넓은지 읽어냈다. 겹침은 은폐가 아니라 흔적이 된다. 숲은 자신이 차지한 공간을 끝까지 숨기지 못한다.

---

## 6. 하나의 정리 바깥에서 보이는 의미

3차원 Kakeya 해법은 Kakeya 안에서만 중요한 결과가 아니다. 다만 이 의미를 설명할 때 모든 관련 문제를 길게 늘어놓으면 글의 중심이 흐려진다. 핵심은 하나다. Wang의 성과는 방향과 진동과 차원이 서로 분리된 문제가 아니라는 사실을 보여준다.

Fourier restriction problem은 Wang의 출발점에 가까운 문제다. 주파수 공간의 곡면 정보가 실제 공간에서 어떤 크기 추정을 허용하는지를 묻는 이 문제는 wave packet과 tube의 기하학을 불러낸다. 여기서 이미 Kakeya적 구조가 나타난다. 특정 방향으로 뻗는 많은 조각들이 공간 안에서 어떻게 겹치는가. 겹침이 크기 추정에 어떤 영향을 주는가. 이런 질문은 Kakeya 문제의 질문과 멀지 않다.

Local smoothing conjecture는 파동방정식과 관련된다. 파동은 시간 속에서 퍼지고, 그 퍼짐을 평균적으로 보면 일정한 매끄러움이 드러날 수 있다. Larry Guth, Hong Wang, Ruixiang Zhang의 cone에 대한 sharp square function estimate는 2차원 공간의 wave equation local smoothing conjecture 해결과 연결되어 소개된다. 여기서도 핵심은 진동이 공간 속에서 어떻게 퍼지는가이다. 파동의 언어로 말하면 local smoothing이고, 주파수 곡면의 언어로 말하면 restriction이며, 선분과 튜브의 언어로 말하면 Kakeya다.

Furstenberg set conjecture는 평면에서 얇은 집합과 선분의 교차 패턴을 다룬다. 이 문제 역시 “방향이 많은 집합이 얼마나 얇아질 수 있는가”라는 물음을 공유한다. Clay Research Award가 Tuomas Orponen, Pablo Shmerkin, Hong Wang, Joshua Zahl의 작업을 Furstenberg set conjecture in the plane과 Kakeya conjecture in three dimensions의 성과로 함께 평가한 것은 이 연결을 보여준다.

따라서 Wang의 연구를 하나의 정리로만 묶는 것은 부정확하다. 그의 성과는 문제군의 이동이다. Fourier restriction은 진동의 언어로, local smoothing은 파동의 언어로, Furstenberg와 Kakeya는 방향과 차원의 언어로 같은 구조를 가리킨다. Wang은 이 언어들 사이에서 움직이며, 겉으로 다른 문제들이 공유하는 기하학적 핵심을 드러냈다.

---

## 7. 학계의 평가는 무엇을 가리키는가

수상 내역은 이 글에서 길게 나열될 필요가 없다. 중요한 것은 목록이 아니라 반복되는 평가의 방향이다. Hong Wang이 받은 주요 상들의 citation을 함께 보면, 학계가 그의 업적을 어디에 위치시키는지 드러난다. Fourier restriction, local smoothing, Kakeya, Furstenberg, harmonic analysis, geometric measure theory. 같은 단어들이 반복된다.

2022년 Maryam Mirzakhani New Frontiers Prize는 restriction conjecture, local smoothing conjecture 및 관련 문제의 진전을 인정했다. 이것은 2025년 Kakeya 결과 이전부터 Wang이 이미 harmonic analysis의 주요 문제에서 강한 존재감을 가졌다는 뜻이다. 2025년 Salem Prize와 Ostrowski Prize는 harmonic analysis와 geometric measure theory의 중심 문제 해결에서 그의 역할을 강조했다. 2026년 AWM Sadosky Research Prize in Analysis는 Fourier restriction problem, Kakeya conjecture, geometric measure theory에 대한 기여를 명시했다. Clay Research Award와 New Horizons in Mathematics Prize도 Furstenberg, Kakeya, local smoothing, partial differential equations와의 연결 속에서 Wang의 성과를 평가한다.

이 평가는 한 가지 사실을 말해준다. Wang은 “한 문제를 푼 사람”으로만 인정받는 것이 아니다. 그는 현대 geometric harmonic analysis의 여러 장벽이 만나는 위치에서 성과를 낸 연구자로 평가받는다. 수상은 인물의 명성을 장식하는 부속물이 아니라, 그의 작업이 어느 연구 공동체에서 어떤 의미를 갖는지를 보여주는 외부 지표다.

Fields Medal과 관련한 표현은 신중해야 한다. 수학계 주변 담론이나 언론에서 Wang이 유력 인물로 거론될 수는 있다. 그러나 Fields Medal은 공식 후보 명단을 공개하는 제도가 아니므로 후보 여부를 단정할 근거는 없다. 정확한 글은 예측을 소비하지 않는다. 공개된 논문, 공식 직위, 수상 citation만으로도 Wang의 현재 위상은 충분히 설명된다. 과장은 필요하지 않다. 문제 자체가 이미 충분히 크다.

---

## 8. 수학은 혼자 전진하지 않는다

Hong Wang의 이야기를 고립된 영웅담으로 쓰는 것은 쉽다. 오래된 난제, 젊은 수학자, 세기적 해결이라는 요소들은 전기적 신화를 만들기에 충분하다. 그러나 그런 서사는 현대 수학의 실제 작동 방식을 흐린다. Wang의 성과는 협업, 누적, 문제군의 장기적 압박 속에서 이해해야 한다.

Joshua Zahl은 3차원 Kakeya 해결의 핵심 공동 연구자다. Wang과 Zahl의 공동 연구는 2025년 결과 이전부터 이어졌다. Sticky Kakeya sets, Assouad dimension of Kakeya sets in R³ 같은 작업은 최종 해결로 가는 중간 단계였다. 이 중간 단계들은 단순한 예비 작업이 아니다. 난제의 어느 부분이 실제로 단단한지, 어떤 구조가 반복적으로 나타나는지, 어떤 가정 아래에서 문제가 먼저 열리는지를 보여주는 실험장이다.

Larry Guth의 영향도 분명하다. Wang은 MIT에서 Guth의 지도 아래 박사학위를 받았고, Guth가 발전시킨 polynomial partitioning과 restriction theory의 흐름 속에서 성장했다. 2026년의 streamlined proof에는 Guth, Wang, Zahl이 함께 이름을 올렸다. 이 사실은 수학의 진전이 세대 간 도구 전달과 재구성을 통해 이루어진다는 점을 보여준다. 지도교수의 방법론은 제자의 작업 안에서 그대로 반복되는 것이 아니라, 새로운 문제와 협업 속에서 변형되고 확장된다.

Shukun Wu, Kevin Ren, Tuomas Orponen, Pablo Shmerkin 등 Wang의 연구와 연결되는 이름들도 같은 지도를 이룬다. 이들은 각각 restriction estimates, Furstenberg estimates, geometric measure theory의 문제군에서 Wang의 작업과 교차한다. 특정 난제가 풀렸을 때 그 결과에는 직접 공동저자뿐 아니라, 이전의 partial result, related conjecture, failed method, technical lemma의 긴 계보가 들어 있다.

그렇다고 개인의 탁월성이 사라지는 것은 아니다. 오히려 더 정확하게 보인다. 탁월성은 아무것도 없는 곳에서 번개처럼 생기지 않는다. 이미 존재하는 도구의 한계를 알고, 서로 떨어져 보이는 문제들의 공통 구조를 읽고, 여러 스케일에서 같은 현상을 다시 보는 능력에서 나온다. Wang의 경우 그 능력은 방향을 가진 튜브들의 배열을 읽는 감각, 그리고 그 배열이 차원과 진동의 문제로 동시에 작동한다는 통찰로 나타났다.

---

## 9. 남은 문제와 열린 지도

3차원 Kakeya set conjecture의 해결은 끝이면서 동시에 출발점이다. 모든 차원의 Kakeya conjecture가 해결된 것은 아니다. 고차원에서는 방향의 자유도와 튜브들의 배열 방식이 더 복잡해진다. 3차원에서 통했던 아이디어가 어느 정도까지 확장될 수 있는지는 열린 문제로 남아 있다.

Restriction conjecture의 남은 장벽도 그대로 중요하다. Kakeya conjecture와 restriction theory는 깊이 연결되어 있지만, 하나의 해결이 다른 하나의 자동 해결을 뜻하지는 않는다. 좋은 정리는 모든 질문을 닫는 것이 아니라, 어떤 질문이 진짜 어려운지를 더 선명하게 만든다. 3차원 Kakeya 이후 연구자들이 물어야 할 것은 이 증명의 어느 부분이 차원 3에 특수한가, 어느 부분이 고차원에서도 살아남는가, 어떤 관련 추정이 새롭게 접근 가능한가이다.

Local smoothing과 PDE 문제군도 마찬가지다. Wang의 작업은 파동방정식, Fourier restriction, geometric measure theory 사이의 연결을 보여주지만, 그 연결은 완결된 체계가 아니라 열린 연구 지형이다. 파동이 시간 속에서 퍼지며 만들어내는 매끄러움, 주파수 공간의 곡면 구조, 실제 공간의 튜브 배열은 서로 깊이 연결되어 있다. 그러나 각 문제는 여전히 고유한 난점을 가진다.

이런 남은 질문들은 Wang의 성과를 축소하지 않는다. 오히려 그 성과의 의미를 정확히 보여준다. 위대한 수학적 결과는 문제를 끝내는 동시에 문제의 지도를 다시 그린다. 이전에는 막연한 장벽처럼 보였던 것이 이제 구체적인 구조를 가진 대상으로 바뀐다. 증명은 답이지만, 동시에 새로운 좌표계다.

---

## 10. 결론: 모든 방향을 담는다는 것

바늘 하나에서 시작된 질문은 이제 현대 해석학의 깊은 지층을 통과했다. 처음에는 회전의 문제가 있었다. 그다음에는 면적의 문제가 있었다. 그러나 면적이 사라질 수 있다는 사실이 드러나자, 수학은 더 깊은 질문으로 내려갔다. 차원은 남는가. 모든 방향을 담는다는 조건은 결국 어떤 크기를 강제하는가.

Hong Wang의 업적은 이 질문의 결정적 장면에 놓여 있다. 그는 Fourier analysis의 진동 문제와 geometric measure theory의 차원 문제를 한 장면에 세웠다. 함수는 진동하고, 진동은 방향을 만들고, 방향은 튜브가 되며, 튜브는 공간 안에서 겹치고 흩어진다. 그 겹침을 충분히 오래 추적하면, 작은 집합처럼 보이던 것이 사실은 전체 차원의 복잡성을 품고 있음이 드러난다. 모든 방향을 담는 공간은 결국 자신의 차원을 숨길 수 없다.

이 문장은 수학적으로는 3차원 Kakeya set conjecture의 해결을 가리킨다. 산문적으로는 더 넓은 의미를 가진다. 어떤 대상은 표면상 작아 보인다. 면적은 사라지고, 부피는 줄어들고, 선분들은 서로 교묘하게 겹친다. 그러나 모든 방향을 품으려는 순간, 그 대상은 단순히 작을 수 없다. 방향의 풍부함은 차원의 책임을 요구한다.

따라서 Hong Wang을 설명하는 글은 “젊은 천재가 난제를 풀었다”에서 멈추면 안 된다. 그것은 너무 쉽고, 너무 얇다. 더 정확한 문장은 이렇다. Hong Wang은 모든 방향을 담으려는 공간이 결국 자신의 차원을 숨길 수 없다는 사실을 증명함으로써, 현대 해석학에서 진동과 기하가 만나는 방식을 새롭게 보여준 수학자다. 그의 작업은 한 사람의 탁월함을 보여주지만, 동시에 현대 수학이 어떻게 축적되고 협업하며 난제를 잠식해가는지도 보여준다.

모든 방향을 담는다는 것은 단지 공간을 채우는 일이 아니다. 그것은 차원을 감당하는 일이다.

---

## 참고자료

1. Hong Wang 개인 홈페이지, “Hong Wang（王虹）”, https://sites.google.com/view/hongwang/home  
2. IHES, “Hong Wang, mathematician”, https://www.ihes.fr/en/professeur/hong-wang/  
3. IHES, “Hong Wang joins IHES as Permanent Professor of Mathematics”, https://www.ihes.fr/en/hong-wang-ihes/  
4. Hong Wang and Joshua Zahl, “Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions”, arXiv:2502.17655, https://arxiv.org/abs/2502.17655  
5. Larry Guth, Hong Wang, Joshua Zahl, “A streamlined proof of the Kakeya set conjecture in R³”, arXiv:2601.14411, https://arxiv.org/abs/2601.14411  
6. Larry Guth, “The Kakeya conjecture, after Wang and Zahl”, arXiv:2604.03416, https://arxiv.org/abs/2604.03416  
7. Breakthrough Prize, “Hong Wang — 2026 New Horizons in Mathematics Prize”, https://breakthroughprize.org/Laureates/3/L4008  
8. Association for Women in Mathematics, “AWM Sadosky Research Prize in Analysis 2026”, https://awm-math.org/awards/awm-sadosky-research-prize/awm-sadosky-research-prize-2026/  
9. Clay Mathematics Institute, “2026 Clay Research Awards”, https://www.claymath.org/news/2026-clay-research-awards/  
10. Institute for Advanced Study, “2025 Salem Prize Winners”, https://www.ias.edu/math/2025-salem-prize-winners  
11. University of Basel, “Hong Wang receives Ostrowski Prize in Higher Mathematics”, https://www.unibas.ch/en/News-Events/News/Uni-People/Hong-Wang-receives-Ostrowski-Prize-in-Higher-Mathematics.html  
12. MIT DSpace, Hong Wang, “A restriction estimate in R³”, https://dspace.mit.edu/handle/1721.1/122176  
13. Quanta Magazine, “‘Once in a Century’ Proof Settles Math’s Kakeya Conjecture”, https://www.quantamagazine.org/once-in-a-century-proof-settles-maths-kakeya-conjecture-20250314/  
14. Institute for Advanced Study, “A Three-Dimensional Breakthrough”, https://www.ias.edu/ideas/three-dimensional-breakthrough  

---

## 사실 확인 메모

- 이 글은 공개적으로 확인 가능한 학문 정보에 한정한다.
- Wang과 Zahl의 결과는 3차원 Kakeya set conjecture 해결로 쓴다. 모든 차원의 일반 Kakeya conjecture 해결로 쓰지 않는다.
- Fields Medal 관련 표현은 공식 후보 명단이 공개되지 않는 상의 성격상 예측이나 후보 단정으로 쓰지 않는다.
- 수학적 설명의 중심축은 Kakeya, tube/wave packet, dimension으로 제한했다.
