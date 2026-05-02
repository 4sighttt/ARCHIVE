---
hide:
  - toc
---

# Home

<style>
:root {
  --home-card-bg: rgba(255,255,255,0.06);
  --home-card-bg-hover: rgba(255,255,255,0.14);
  --home-card-border: rgba(80, 60, 30, 0.12);
  --home-card-border-hover: rgba(80, 60, 30, 0.24);
}

[data-md-color-scheme="default"] {
  --home-card-bg: rgba(80, 60, 30, 0.18);
  --home-card-bg-hover: rgba(80, 60, 30, 0.24);
}

[data-md-color-scheme="slate"] {
  --home-card-bg: rgba(255,255,255,0.06);
  --home-card-bg-hover: rgba(255,255,255,0.14);
}
  
.home-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 1.2rem;
}

.home-card {
  display: block;
  padding: 1.1rem 1.25rem;
  border: 1px solid var(--home-card-border) !important;
  border-radius: 0.28rem;
  background: var(--home-card-bg) !important;
  background-color: var(--home-card-bg) !important;
  color: #4b5fe7 !important;
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.45;
  text-decoration: none !important;
  transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
  min-height: 92px;
}

.home-card:hover {
  background: var(--home-card-bg-hover) !important;
  background-color: var(--home-card-bg-hover) !important;
  border-color: var(--home-card-border-hover) !important;
  transform: translateY(-1px);
}

.home-card:visited {
  color: #4b5fe7 !important;
}

@media screen and (max-width: 1100px) {
  .home-card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media screen and (max-width: 700px) {
  .home-card-grid { grid-template-columns: 1fr; }
}

.home-card-title {
  color: inherit;
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.45;
}

/* 기본 상태 */
.essay-section,
.md-typeset details.essay-section {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* 열린 상태만 색 적용 */
.md-typeset details.essay-section[open] {
  background: var(--home-card-bg) !important;
  background-color: var(--home-card-bg) !important;
  border: none !important;
  box-shadow: none !important;
}

.essay-section > summary,
.essay-section[open] > summary,
.md-typeset details.essay-section > summary,
.md-typeset details.essay-section[open] > summary {
  cursor: pointer;
  padding: 1rem 1.1rem;
  border: 1px solid var(--home-card-border) !important;
  border-radius: 0.28rem !important;
  background: var(--home-card-bg) !important;
  background-color: var(--home-card-bg) !important;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--md-default-fg-color);
  list-style: none;
  transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
}

.essay-section > summary:hover,
.essay-section[open] > summary:hover,
.md-typeset details.essay-section > summary:hover,
.md-typeset details.essay-section[open] > summary:hover {
  background: var(--home-card-bg-hover) !important;
  background-color: var(--home-card-bg-hover) !important;
  border-color: var(--home-card-border-hover) !important;
  transform: translateY(-1px);
}

.essay-section > summary::-webkit-details-marker,
.md-typeset details.essay-section > summary::-webkit-details-marker {
  display: none;
}

.essay-section > summary::before,
.md-typeset details.essay-section > summary::before {
  content: "▸";
  display: inline-block;
  margin-right: 0.55rem;
  transition: transform 0.15s ease;
}

.essay-section[open] > summary::before,
.md-typeset details.essay-section[open] > summary::before {
  transform: rotate(90deg);
}

.md-typeset details.essay-section > summary::after {
  display: none !important;
}

.essay-section .home-card-grid,
.md-typeset details.essay-section .home-card-grid {
  margin: 1rem 0 0 0 !important;
  padding: 0 !important;
  background: transparent !important;
  background-color: transparent !important;
}

.md-typeset details.essay-section > *:not(summary) {
  background: transparent !important;
  background-color: transparent !important;
}

.section-note {
  margin-top: 0.4rem;
  opacity: 0.72;
  font-size: 0.92rem;
}


/* MkDocs Material details/admonition 기본 파란 아이콘 제거 및 사용자 화살표만 표시 */
.md-typeset details.essay-section > summary::before,
.md-typeset details.essay-section[open] > summary::before,
.essay-section > summary::before,
.essay-section[open] > summary::before {
  content: "▸" !important;
  position: static !important;
  display: inline-block !important;
  width: auto !important;
  height: auto !important;
  margin: 0 0.55rem 0 0 !important;
  padding: 0 !important;
  background: none !important;
  background-color: transparent !important;
  color: inherit !important;
  -webkit-mask-image: none !important;
  mask-image: none !important;
  -webkit-mask: none !important;
  mask: none !important;
  transform: none !important;
  transition: transform 0.15s ease !important;
  vertical-align: baseline !important;
}

.md-typeset details.essay-section[open] > summary::before,
.essay-section[open] > summary::before {
  transform: rotate(90deg) !important;
}

/* summary 오른쪽 접힘 아이콘/앵커/편집 계열 아이콘까지 차단 */
.md-typeset details.essay-section > summary::after,
.md-typeset details.essay-section > summary .md-icon,
.md-typeset details.essay-section > summary .md-clipboard,
.md-typeset details.essay-section > summary .headerlink,
.md-typeset details.essay-section > summary a.headerlink,
.md-typeset details.essay-section > summary svg {
  display: none !important;
  visibility: hidden !important;
}

</style>

## 최신 글

<!-- 이 영역은 첫 화면에 노출할 글입니다. 기존처럼 수동으로 추가·삭제·순서 변경하면 됩니다. -->

<div class="home-card-grid">

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%EC%83%9D%EC%A1%B4%20%EC%84%A4%EB%AA%85%EC%9D%98%20%EC%9C%A4%EB%A6%AC%EC%A0%81%20%ED%95%9C%EA%B3%84.html" class="home-card">
  <div class="home-card-title">생존 설명의 윤리적 한계</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%82%AC%EC%9C%A0%EB%8A%94%20%EC%96%B4%EB%96%BB%EA%B2%8C%20%EC%9E%90%EA%B8%B0%20%EC%9E%90%EC%8B%A0%EC%9D%84%20%EB%B6%95%EA%B4%B4%EC%8B%9C%ED%82%A4%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">사유는 어떻게 자기 자신을 붕괴시키는가</div>
</a>
  
<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EC%A7%80%EB%8A%A5%ED%99%94%20%EB%AF%B8%EB%94%94%EC%96%B4%20-%20%ED%8C%90%EB%8B%A8%20%ED%99%98%EA%B2%BD%EC%9D%98%20%EB%A7%A4%EC%B2%B4.html" class="home-card">
  <div class="home-card-title">지능화 미디어 - 판단 환경의 매체</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EB%B3%B4%ED%98%B8%ED%95%98%EB%8A%94%20%EC%A7%80%EB%8A%A5%EC%9D%98%20%EA%B6%8C%ED%95%9C%20%EA%B2%BD%EA%B3%84%20%E2%80%94%20%EC%98%81%ED%99%94%20%E3%80%8A%EB%82%98%EC%9D%98%20%EB%A7%88%EB%8D%94%E3%80%8B%EB%A1%9C%20%EB%B3%B8%20%EA%B0%95%ED%95%9C%20AI%EC%9D%98%20%EC%9C%A4%EB%A6%AC.html" class="home-card">
  <div class="home-card-title">보호하는 지능의 권한 경계 — 영화 《나의 마더》로 본 강한 AI의 윤리</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EC%9E%90%EA%B8%B0%EA%B8%B0%EB%A7%8C%EC%9D%80%20%EC%99%9C%20%EC%A7%84%ED%99%94%ED%96%88%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">자기기만은 왜 진화했는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EA%B5%AC%EC%A1%B0%ED%99%94%ED%95%98%EB%8A%94%20%EA%B8%B0%EA%B3%84.html" class="home-card">
  <div class="home-card-title">구조화하는 기계</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood
/%EC%A7%80%EC%84%B1%2C%20%EC%86%8C%EC%99%B8%2C%20%EC%87%BC%ED%8E%9C%ED%95%98%EC%9A%B0%EC%96%B4%3A%20%EA%B9%8A%EC%9D%80%20%EC%82%AC%EA%B3%A0%EB%8A%94%20%EC%99%9C%20%EC%82%AC%ED%9A%8C%EC%A0%81%20%EB%A7%88%EC%B0%B0%EC%9D%84%20%EB%82%B3%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">지성, 소외, 쇼펜하우어: 깊은 사고는 왜 사회적 마찰을 낳는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition
/%EB%AC%B4%EC%97%87%EC%9D%B4%20%EB%8B%AC%EB%9D%BC%EC%A1%8C%EB%8A%94%EA%B0%80%20%E2%80%94%20AI%20%EC%B6%9C%EB%A0%A5%20%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84%20%EC%A0%84%ED%99%98%EC%9D%98%20%EA%B5%AC%EC%A1%B0%EC%99%80%20%EB%B9%84%EA%B0%80%EC%8B%9C%EC%84%B1.html" class="home-card">
  <div class="home-card-title">무엇이 달라졌는가 — AI 출력 우선순위 전환의 구조와 비가시성</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EC%B0%BD%EC%9D%98%EC%A0%81%EC%9D%B8%20%EC%9D%B8%ED%94%84%EB%9D%BC%20%EA%B5%AC%EC%B6%95.html" class="home-card">
  <div class="home-card-title">창의적인 인프라 구축</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EC%A1%B4%EC%9E%AC%ED%95%98%EC%A7%80%20%EC%95%8A%EB%8A%94%20%ED%8C%A8%ED%84%B4%EC%9D%84%20%EB%B3%B4%EB%8A%94%20%EC%9D%B8%EA%B0%84.html" class="home-card">
  <div class="home-card-title">존재하지 않는 패턴을 보는 인간</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%A2%85%EB%A3%8C%EB%A5%BC%20%EC%95%84%EB%8A%94%20%EC%A1%B4%EC%9E%AC%EC%9D%98%20%EC%84%A4%EB%AA%85%20%EC%9E%89%EC%97%AC_deepseek_v4_flash_thinking.html" class="home-card">
  <div class="home-card-title">종료를 아는 존재의 설명 잉여_deepseek_v4_flash_thinking</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/AI%EC%9D%98%20%EC%8B%9C%EC%84%A0%20%E2%80%94%20%ED%95%A9%EB%A6%AC%EC%A0%81%20%ED%96%89%EC%9C%84%EC%9E%90%20%EB%AA%A8%EB%8D%B8%EC%9D%98%20%ED%98%95%EC%84%B1%EA%B3%BC%20%ED%95%9C%EA%B3%84_Claude_Sonnet4.6.html" class="home-card">
  <div class="home-card-title">AI의 시선 — 합리적 행위자 모델의 형성과 한계_Claude_Sonnet4.6</div>
</a>

</div>

## 주제별 글 목록

<details class="essay-section">
<summary>AI·기술·알고리즘·디지털 (22)</summary>

<div class="home-card-grid">

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EC%A7%80%EB%8A%A5%ED%99%94%20%EB%AF%B8%EB%94%94%EC%96%B4%20-%20%ED%8C%90%EB%8B%A8%20%ED%99%98%EA%B2%BD%EC%9D%98%20%EB%A7%A4%EC%B2%B4.html" class="home-card">
  <div class="home-card-title">지능화 미디어 - 판단 환경의 매체</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EB%B3%B4%ED%98%B8%ED%95%98%EB%8A%94%20%EC%A7%80%EB%8A%A5%EC%9D%98%20%EA%B6%8C%ED%95%9C%20%EA%B2%BD%EA%B3%84%20%E2%80%94%20%EC%98%81%ED%99%94%20%E3%80%8A%EB%82%98%EC%9D%98%20%EB%A7%88%EB%8D%94%E3%80%8B%EB%A1%9C%20%EB%B3%B8%20%EA%B0%95%ED%95%9C%20AI%EC%9D%98%20%EC%9C%A4%EB%A6%AC.html" class="home-card">
  <div class="home-card-title">보호하는 지능의 권한 경계 — 영화 《나의 마더》로 본 강한 AI의 윤리</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EA%B5%AC%EC%A1%B0%ED%99%94%ED%95%98%EB%8A%94%20%EA%B8%B0%EA%B3%84.html" class="home-card">
  <div class="home-card-title">구조화하는 기계</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition
/%EB%AC%B4%EC%97%87%EC%9D%B4%20%EB%8B%AC%EB%9D%BC%EC%A1%8C%EB%8A%94%EA%B0%80%20%E2%80%94%20AI%20%EC%B6%9C%EB%A0%A5%20%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84%20%EC%A0%84%ED%99%98%EC%9D%98%20%EA%B5%AC%EC%A1%B0%EC%99%80%20%EB%B9%84%EA%B0%80%EC%8B%9C%EC%84%B1.html" class="home-card">
  <div class="home-card-title">무엇이 달라졌는가 — AI 출력 우선순위 전환의 구조와 비가시성</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EC%B0%BD%EC%9D%98%EC%A0%81%EC%9D%B8%20%EC%9D%B8%ED%94%84%EB%9D%BC%20%EA%B5%AC%EC%B6%95.html" class="home-card">
  <div class="home-card-title">창의적인 인프라 구축</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/AI%EC%9D%98%20%EC%8B%9C%EC%84%A0%20%E2%80%94%20%ED%95%A9%EB%A6%AC%EC%A0%81%20%ED%96%89%EC%9C%84%EC%9E%90%20%EB%AA%A8%EB%8D%B8%EC%9D%98%20%ED%98%95%EC%84%B1%EA%B3%BC%20%ED%95%9C%EA%B3%84_Claude_Sonnet4.6.html" class="home-card">
  <div class="home-card-title">AI의 시선 — 합리적 행위자 모델의 형성과 한계_Claude_Sonnet4.6</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EC%9D%B5%EC%88%99%ED%95%9C%20%ED%99%94%EB%A9%B4%2C%20%EC%84%A4%EB%AA%85%ED%95%A0%20%EC%88%98%20%EC%9E%88%EB%8A%94%20%EC%8B%9C%EB%AF%BC.html" class="home-card">
  <div class="home-card-title">익숙한 화면, 설명할 수 있는 시민</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EA%B8%B0%EC%88%A0%EC%9D%B4%20%ED%95%B4%EB%B0%A9%EC%A0%81%EC%9D%B4%EA%B8%B0%20%EC%9C%84%ED%95%9C%20%EC%A1%B0%EA%B1%B4.html" class="home-card">
  <div class="home-card-title">기술이 해방적이기 위한 조건</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EC%A7%80%EC%8B%9D%EC%B2%98%EB%9F%BC%20%EB%B3%B4%EC%9D%B4%EB%8A%94%20%EA%B2%83%EB%93%A4%3A%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%9D%B4%20%EB%B0%B0%EC%B9%98%ED%95%9C%20%EC%95%8E%EC%9D%98%20%EC%A1%B0%EA%B1%B4.html" class="home-card">
  <div class="home-card-title">지식처럼 보이는 것들: 알고리즘이 배치한 앎의 조건</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EC%B1%85%EC%9E%84%EC%A7%80%EB%8A%94%20%EC%9D%B8%EA%B2%A9%20%EC%97%86%EB%8A%94%20%ED%96%89%EC%9C%84%EC%84%B1.html" class="home-card">
  <div class="home-card-title">책임지는 인격 없는 행위성</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/AI%EA%B0%80%20%EC%9D%B8%EA%B0%84%EC%9D%84%20%EA%B0%90%EB%8F%99%EC%8B%9C%ED%82%A4%EB%8A%94%20%EC%9E%91%ED%92%88%EC%9D%84%20%EB%A7%8C%EB%93%A4%20%EC%88%98%20%EC%9E%88%EB%8B%A4%EB%A9%B4%2C%20%EC%B0%BD%EC%9D%98%EC%84%B1%EC%9D%98%20%EA%B8%B0%EC%A4%80%EC%9D%80%20%EB%B0%94%EB%80%8C%EC%96%B4%EC%95%BC%20%ED%95%98%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">AI가 인간을 감동시키는 작품을 만들 수 있다면, 창의성의 기준은 바뀌어야 하는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EC%B6%9C%EA%B5%AC%20%EC%9E%88%EB%8A%94%20%EB%8B%AB%ED%9E%8C%20%EB%B0%A9.html" class="home-card">
  <div class="home-card-title">출구 있는 닫힌 방</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EC%9A%B0%EB%A6%AC%EB%8A%94%20%EC%99%9C%20AI%EC%97%90%EA%B2%8C%20%22%EB%8B%B5%22%EC%9D%B4%20%EC%95%84%EB%8B%88%EB%9D%BC%20%22%EB%85%BC%EC%9F%81%22%EC%9D%84%20%EC%9A%94%EA%B5%AC%ED%95%B4%EC%95%BC%20%ED%95%98%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">우리는 왜 AI에게 "답"이 아니라 "논쟁"을 요구해야 하는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EB%8B%B9%EC%8B%A0%EB%A7%8C%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%A4%91%EB%8F%85%20%EC%84%A4%EA%B3%84.html" class="home-card">
  <div class="home-card-title">당신만을 위한 중독 설계</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/AI%EB%8A%94%20%EC%82%B0%EC%97%85%EA%B8%B0%EC%88%A0%EC%9D%B4%20%EC%95%84%EB%8B%88%EB%9D%BC%20%EC%82%AC%ED%9A%8C%EA%B5%AC%EC%A1%B0%EB%A5%BC%20%EC%9E%AC%ED%8E%B8%ED%95%98%EB%8A%94%20%EA%B8%B0%EC%88%A0%EC%9D%B4%EB%8B%A4.html" class="home-card">
  <div class="home-card-title">AI는 산업기술이 아니라 사회구조를 재편하는 기술이다</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/AI%20%ED%99%98%EA%B0%81%EC%9D%80%20%EA%B0%9C%EC%86%8C%EB%A6%AC%EC%9D%B8%EA%B0%80.html" class="home-card">
  <div class="home-card-title">AI 환각은 개소리인가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/AI%EC%97%90%20%EC%9D%B5%EC%88%99%ED%95%B4%EC%A7%88%EC%88%98%EB%A1%9D%20%EC%9D%B8%EA%B0%84%EC%9D%80%20%EC%96%B4%EB%96%A4%20%EC%A1%B4%EC%9E%AC%EA%B0%80%20%EB%90%98%EC%96%B4%20%EA%B0%80%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">AI에 익숙해질수록 인간은 어떤 존재가 되어 가는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/AI%20%EC%8B%9C%EB%8C%80%EC%9D%98%20%EA%B5%90%EC%9C%A1%EC%9D%80%20%EB%AC%B4%EC%97%87%EC%9D%84%20%EA%B0%80%EB%A5%B4%EC%B3%90%EC%95%BC%20%ED%95%98%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">AI 시대의 교육은 무엇을 가르쳐야 하는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%ED%95%B4%EB%B0%A9%EC%9D%98%20%EC%95%BD%EC%86%8D%EA%B3%BC%20%EC%9D%80%ED%8F%90%EC%9D%98%20%EA%B5%AC%EC%A1%B0.html" class="home-card">
  <div class="home-card-title">해방의 약속과 은폐의 구조</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EC%96%B4%EB%96%A4%20AI%EA%B0%80%20%EA%B9%A8%EC%96%B4%EB%82%A0%20%EA%B2%83%EC%9D%B8%EA%B0%80.html" class="home-card">
  <div class="home-card-title">어떤 AI가 깨어날 것인가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EA%B8%B0%EA%B3%84%EC%9D%98%20%EB%B2%94%EC%A3%84%ED%95%99%3A%20%EC%83%81%ED%98%B8%EC%9E%91%EC%9A%A9%ED%95%98%EB%8A%94%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%EA%B3%BC%20%EA%B7%9C%EB%B2%94%20%EC%A7%88%EC%84%9C%EC%9D%98%20%EC%9E%AC%EA%B5%AC%EC%84%B1.html" class="home-card">
  <div class="home-card-title">기계의 범죄학: 상호작용하는 인공지능과 규범 질서의 재구성</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/01_AI_Technology_Digital_Condition/%EC%9E%90%EC%9C%A0%20%EC%9D%B4%ED%9B%84%EC%9D%98%20%EA%B3%B5%EB%B0%B1%20%E3%85%A1%20%EA%B8%B0%EC%88%A0%20%EC%8B%9C%EB%8C%80%EC%9D%98%20%EC%9D%98%EB%AF%B8%20%EC%83%9D%EC%82%B0%EC%97%90%20%EB%8C%80%ED%95%98%EC%97%AC.html" class="home-card">
  <div class="home-card-title">자유 이후의 공백 ㅡ 기술 시대의 의미 생산에 대하여</div>
</a>

</div>
</details>

<details class="essay-section">
<summary>지식·진리·과학·언어·인식 (17)</summary>

<div class="home-card-grid">

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EC%A1%B4%EC%9E%AC%ED%95%98%EC%A7%80%20%EC%95%8A%EB%8A%94%20%ED%8C%A8%ED%84%B4%EC%9D%84%20%EB%B3%B4%EB%8A%94%20%EC%9D%B8%EA%B0%84.html" class="home-card">
  <div class="home-card-title">존재하지 않는 패턴을 보는 인간</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EC%A7%80%EC%8B%9D%EC%9D%80%20%EC%84%B8%EA%B3%84%EB%A5%BC%20%EB%84%93%ED%9E%88%EB%8A%94%EA%B0%80%2C%20%EC%9E%90%EC%8B%A0%EC%9D%98%20%EA%B2%BD%EA%B3%84%EB%A5%BC%20%EB%B0%9C%EA%B2%AC%ED%95%98%EA%B2%8C%20%ED%95%98%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">지식은 세계를 넓히는가, 자신의 경계를 발견하게 하는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/08_Nietzsche/%EC%A4%91%EB%A0%A5%EC%9D%98%20%EC%A0%95%EC%8B%A0%EC%9D%84%20%EB%84%98%EC%96%B4%EC%84%9C%3A%20%EB%86%8D%EB%8B%B4%EC%9C%BC%EB%A1%9C%EC%84%9C%EC%9D%98%20%EC%B2%A0%ED%95%99%EC%97%90%20%EA%B4%80%ED%95%98%EC%97%AC.html" class="home-card">
  <div class="home-card-title">중력의 정신을 넘어서: 농담으로서의 철학에 관하여</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EC%9A%B0%EB%A6%AC%EB%8A%94%20%EA%B3%BC%ED%95%99%EC%A0%81%20%EC%A7%84%EB%A6%AC%EB%A5%BC%20%EB%B0%9C%EA%B2%AC%ED%95%98%EB%8A%94%EA%B0%80%2C%20%EB%A7%8C%EB%93%A4%EC%96%B4%EB%82%B4%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">우리는 과학적 진리를 발견하는가, 만들어내는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EC%96%B4%EB%A6%AC%EC%84%9D%EC%9D%8C%EC%9D%84%20%EB%84%98%EC%96%B4%EC%84%9C%EB%8A%94%20%EB%B2%95.html" class="home-card">
  <div class="home-card-title">어리석음을 넘어서는 법</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EA%B3%84%EC%82%B0%EC%9D%B4%20%EB%81%9D%EB%82%9C%20%EB%92%A4%EC%97%90%EB%8F%84%20%EB%82%A8%EB%8A%94%20%EA%B2%83.html" class="home-card">
  <div class="home-card-title">계산이 끝난 뒤에도 남는 것</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EC%A0%84%EC%B2%B4%EB%9D%BC%EB%8A%94%20%EB%B0%A9%2C%20%EB%B6%80%EB%B6%84%EC%9D%B4%EB%9D%BC%EB%8A%94%20%EB%B9%9B.html" class="home-card">
  <div class="home-card-title">전체라는 방, 부분이라는 빛</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EB%AA%A8%EB%93%A0%20%EB%B0%A9%ED%96%A5%EC%9D%84%20%EB%8B%B4%EB%8A%94%EB%8B%A4%EB%8A%94%20%EA%B2%83.html" class="home-card">
  <div class="home-card-title">모든 방향을 담는다는 것</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EC%96%B8%EC%96%B4%EB%8A%94%20%EC%83%9D%EA%B0%81%EC%9D%B4%20%EC%84%B8%EA%B3%84%EC%97%90%20%EB%8B%BF%EB%8A%94%20%EA%B0%81%EB%8F%84%EB%8B%A4.html" class="home-card">
  <div class="home-card-title">언어는 생각이 세계에 닿는 각도다</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EC%A7%84%EC%8B%A4%EC%9D%B4%20%EB%AC%B4%EB%84%88%EC%A7%80%EB%8A%94%20%EB%91%90%20%EB%8B%A8%EA%B3%84.html" class="home-card">
  <div class="home-card-title">진실이 무너지는 두 단계</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EC%9C%A0%EB%AC%BC%EB%A1%A0%EC%9D%98%20%EC%84%B1%EA%B3%B5%EA%B3%BC%20%EA%B7%9C%EB%B2%94%20%EC%96%B8%EC%96%B4%EC%9D%98%20%ED%99%98%EC%9B%90%20%EB%B6%88%EA%B0%80%EB%8A%A5%EC%84%B1.html" class="home-card">
  <div class="home-card-title">유물론의 성공과 규범 언어의 환원 불가능성</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EB%AC%B8%ED%95%B4%EB%A0%A5%EC%9D%98%20%EC%A1%B0%EA%B1%B4%20%E2%80%94%20%EC%98%88%EC%B8%A1%EC%9D%80%20%EC%96%B4%EB%96%BB%EA%B2%8C%20%EC%95%88%EC%A0%95%ED%99%94%EB%90%98%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">문해력의 조건 — 예측은 어떻게 안정화되는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EA%B3%BC%ED%95%99%EC%9D%98%20%ED%95%9C%EA%B3%84%EC%99%80%20%EC%9D%B8%EA%B0%84%EC%9D%98%20%EC%B2%99%EB%8F%84.html" class="home-card">
  <div class="home-card-title">과학의 한계와 인간의 척도</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EC%A6%9D%EA%B1%B0%20%EC%97%86%EB%8A%94%20%ED%99%95%EC%8B%A0%EA%B3%BC%20%EB%AC%B8%EB%AA%85%EC%9D%98%20%EB%B3%91.html" class="home-card">
  <div class="home-card-title">증거 없는 확신과 문명의 병</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EA%B8%B0%EC%96%B5%EC%97%90%20%EB%8C%80%ED%95%98%EC%97%AC%20%E3%85%A1%20%EC%A7%84%EC%8B%A4%20%EC%9D%B4%ED%9B%84%EC%9D%98%20%EC%A7%84%EC%8B%A4.html" class="home-card">
  <div class="home-card-title">기억에 대하여 ㅡ 진실 이후의 진실</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EA%B4%80%EC%B0%B0%EB%90%98%EB%8A%94%20%EC%88%9C%EA%B0%84%2C%20%EC%88%9C%EC%88%98%EC%84%B1%EC%9D%80%20%EC%A6%9D%EB%AA%85%20%EB%B6%88%EA%B0%80%EB%8A%A5%ED%95%98%EB%8B%A4.html" class="home-card">
  <div class="home-card-title">관찰되는 순간, 순수성은 증명 불가능하다</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/02_Knowledge_Truth_Science_Language/%EC%9B%90%EC%9E%90%EA%B0%80%20%EB%8C%80%EB%B6%80%EB%B6%84%20%EA%B3%B5%EA%B0%84%EC%9D%B8%EB%8D%B0%20%EC%99%9C%20%EB%AC%BC%EC%A7%88%EC%B2%98%EB%9F%BC%20%EB%8A%90%EA%BB%B4%EC%A7%80%EB%8A%94%EA%B0%80%3F.html" class="home-card">
  <div class="home-card-title">원자가 대부분 공간인데 왜 물질처럼 느껴지는가?</div>
</a>

</div>
</details>

<details class="essay-section">
<summary>의식·시간·형이상학·존재론 (12)</summary>

<div class="home-card-grid">

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%82%AC%EC%9C%A0%EB%8A%94%20%EC%96%B4%EB%96%BB%EA%B2%8C%20%EC%9E%90%EA%B8%B0%20%EC%9E%90%EC%8B%A0%EC%9D%84%20%EB%B6%95%EA%B4%B4%EC%8B%9C%ED%82%A4%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">사유는 어떻게 자기 자신을 붕괴시키는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%A2%85%EB%A3%8C%EB%A5%BC%20%EC%95%84%EB%8A%94%20%EC%A1%B4%EC%9E%AC%EC%9D%98%20%EC%84%A4%EB%AA%85%20%EC%9E%89%EC%97%AC_deepseek_v4_flash_thinking.html" class="home-card">
  <div class="home-card-title">종료를 아는 존재의 설명 잉여_deepseek_v4_flash_thinking</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%8B%9C%EA%B0%84%EC%9D%80%20%ED%9D%90%EB%A5%B4%EB%8A%94%EA%B0%80%2C%20%EC%9A%B0%EB%A6%AC%EA%B0%80%20%EA%B7%B8%EB%A0%87%EA%B2%8C%20%EC%9D%B8%EC%8B%9D%ED%95%98%EB%8A%94%EA%B0%80_Claude_Opus4.7_Adaptive_Thinking.html" class="home-card">
  <div class="home-card-title">시간은 흐르는가, 우리가 그렇게 인식하는가_Claude_Opus4.7_Adaptive_Thinking</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%8B%9C%EA%B0%84%EC%9D%80%20%ED%9D%90%EB%A5%B4%EB%8A%94%EA%B0%80%2C%20%EC%9A%B0%EB%A6%AC%EA%B0%80%20%EA%B7%B8%EB%A0%87%EA%B2%8C%20%EC%9D%B8%EC%8B%9D%ED%95%98%EB%8A%94%EA%B0%80_GPT5.5_Extended_Thinking.html" class="home-card">
  <div class="home-card-title">시간은 흐르는가, 우리가 그렇게 인식하는가_GPT5.5_Extended_Thinking</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%9D%B8%EA%B0%84%20%EC%A4%91%EC%8B%AC%20%EC%9D%B4%ED%9B%84%EC%9D%98%20%ED%8F%AC%EC%8A%A4%ED%8A%B8%ED%9C%B4%EB%A8%B8%EB%8B%88%EC%A6%98.html" class="home-card">
  <div class="home-card-title">인간 중심 이후의 포스트휴머니즘</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%9D%98%EC%8B%9D%EC%9D%80%20%EC%96%B4%EB%96%BB%EA%B2%8C%20%EC%A1%B0%EC%A7%81%EB%90%98%EC%96%B4%20%EC%9E%88%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">의식은 어떻게 조직되어 있는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%A0%91%ED%9E%98%EC%9C%BC%EB%A1%9C%EC%84%9C%EC%9D%98%20%EC%A3%BC%EA%B4%80%EC%84%B1%20%E2%80%94%20%EC%9D%98%EC%8B%9D%EC%9D%80%20%EB%AC%B4%EC%97%87%EC%9D%B4%20%EC%95%84%EB%8B%88%EB%9D%BC%20%EC%96%B4%EB%96%BB%EA%B2%8C%EC%9D%98%20%EB%AC%B8%EC%A0%9C%EB%8B%A4.html" class="home-card">
  <div class="home-card-title">접힘으로서의 주관성 — 의식은 무엇이 아니라 어떻게의 문제다</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%84%B8%EA%B3%84%EB%8A%94%20%EC%83%81%ED%83%9C%EA%B0%80%20%EC%95%84%EB%8B%88%EB%9D%BC%20%EA%B8%B4%EC%9E%A5%EC%9D%B4%EB%8B%A4.html" class="home-card">
  <div class="home-card-title">세계는 상태가 아니라 긴장이다</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%A0%84%EC%A7%80%ED%95%9C%20%EC%8B%A0%EC%9D%B4%20%EC%9E%88%EB%8B%A4%EB%A9%B4%20%EC%9D%B8%EA%B0%84%EC%9D%98%20%EC%9E%90%EC%9C%A0%EB%8A%94%20%EA%B0%80%EB%8A%A5%ED%95%9C%EA%B0%80.html" class="home-card">
  <div class="home-card-title">전지한 신이 있다면 인간의 자유는 가능한가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%ED%95%B4%EA%B2%B0%EB%90%98%EC%A7%80%20%EC%95%8A%EC%9D%8C%EC%9D%98%20%EC%A1%B4%EC%9E%AC%EB%A1%A0.html" class="home-card">
  <div class="home-card-title">해결되지 않음의 존재론</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%86%8C%EB%A9%B8%EC%9D%98%20%EC%84%B1%EC%88%99.html" class="home-card">
  <div class="home-card-title">소멸의 성숙</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/03_Consciousness_Time_Ontology/%EC%A1%B4%EC%9E%AC%EC%9D%98%20%EC%9E%89%EC%97%AC%EC%97%90%20%EB%8C%80%ED%95%98%EC%97%AC.html" class="home-card">
  <div class="home-card-title">존재의 잉여에 대하여</div>
</a>

</div>
</details>

<details class="essay-section">
<summary>실존·의미·죽음·자기형성 (21)</summary>

<div class="home-card-grid">

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EC%9E%90%EA%B8%B0%EA%B8%B0%EB%A7%8C%EC%9D%80%20%EC%99%9C%20%EC%A7%84%ED%99%94%ED%96%88%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">자기기만은 왜 진화했는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood
/%EC%A7%80%EC%84%B1%2C%20%EC%86%8C%EC%99%B8%2C%20%EC%87%BC%ED%8E%9C%ED%95%98%EC%9A%B0%EC%96%B4%3A%20%EA%B9%8A%EC%9D%80%20%EC%82%AC%EA%B3%A0%EB%8A%94%20%EC%99%9C%20%EC%82%AC%ED%9A%8C%EC%A0%81%20%EB%A7%88%EC%B0%B0%EC%9D%84%20%EB%82%B3%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">지성, 소외, 쇼펜하우어: 깊은 사고는 왜 사회적 마찰을 낳는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EB%B6%88%ED%96%89%EC%9D%84%20%EB%B0%98%EB%B3%B5%ED%95%98%EB%8A%94%20%EC%9D%B8%EA%B0%84_GPT5.5_Extended_Thinking.html" class="home-card">
  <div class="home-card-title">불행을 반복하는 인간_GPT5.5_Extended_Thinking</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EC%A3%BD%EC%9D%8C%EC%9D%80%20%EC%82%B6%EC%9D%98%20%EC%9D%98%EB%AF%B8%EB%A5%BC%20%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A3%BC%EC%A7%80%20%EC%95%8A%EB%8A%94%EB%8B%A4.html" class="home-card">
  <div class="home-card-title">죽음은 삶의 의미를 만들어주지 않는다</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EC%A3%BD%EC%9D%8C%EC%9D%80%20%EC%9B%90%EC%9D%B8%EC%9D%B4%20%EC%95%84%EB%8B%88%EB%9D%BC%20%EC%A1%B0%EB%AA%85%EC%9D%B4%EB%8B%A4.html" class="home-card">
  <div class="home-card-title">죽음은 원인이 아니라 조명이다</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EC%84%B1%EC%9E%A5%EC%9D%80%20%EC%99%9C%20%ED%8F%90%ED%97%88%EB%A5%BC%20%ED%95%84%EC%9A%94%EB%A1%9C%20%ED%95%98%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">성장은 왜 폐허를 필요로 하는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%ED%9D%AC%EB%A7%9D%EC%9D%B4%EB%9D%BC%EB%8A%94%20%EB%AF%B8%EB%81%BC%2C%20%EC%A0%84%EB%A7%9D%EC%9D%B4%EB%9D%BC%EB%8A%94%20%EA%B8%B4%EC%9E%A5.html" class="home-card">
  <div class="home-card-title">희망이라는 미끼, 전망이라는 긴장</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EC%9E%90%EC%9C%A0%EB%8A%94%20%EC%99%9C%20%22%ED%95%98%EA%B3%A0%20%EC%8B%B6%EC%9D%80%20%EB%8C%80%EB%A1%9C%20%ED%95%98%EB%8A%94%20%EA%B2%83%22%EB%B3%B4%EB%8B%A4%20%EB%8D%94%20%EC%96%B4%EB%A0%A4%EC%9A%B4%EA%B0%80.html" class="home-card">
  <div class="home-card-title">자유는 왜 "하고 싶은 대로 하는 것"보다 더 어려운가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%ED%96%89%EB%8F%99%EA%B3%BC%20%EC%9D%98%EC%9A%95.html" class="home-card">
  <div class="home-card-title">행동과 의욕</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EA%B0%90%EB%8B%B9%EC%9D%98%20%EA%B5%AC%EC%A1%B0%3A%20%EA%B0%80%EB%8A%A5%EC%84%B1%EC%9D%B4%20%EC%9D%B8%EA%B0%84%EC%9D%84%20%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94%20%EB%B0%A9%EC%8B%9D.html" class="home-card">
  <div class="home-card-title">감당의 구조: 가능성이 인간을 통과하는 방식</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%ED%95%B4%EC%84%9D%EB%90%9C%20%EC%8A%B9%EB%A6%AC%20%E2%80%94%20%EC%9D%98%EC%A7%80%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%8B%A8%EC%83%81.html" class="home-card">
  <div class="home-card-title">해석된 승리 — 의지에 관한 단상</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EB%8C%80%EA%B0%80%EB%A5%BC%20%EC%B9%98%EB%A5%B4%EB%8A%94%20%EC%A1%B4%EC%9E%AC.html" class="home-card">
  <div class="home-card-title">대가를 치르는 존재</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EA%B0%80%EB%B2%BC%EC%9B%80%2C%20%EB%AC%B4%EA%B2%8C%2C%20%EA%B7%B8%EB%A6%AC%EA%B3%A0%20%ED%9D%A9%EC%96%B4%EC%A7%80%EC%A7%80%20%EC%95%8A%EA%B8%B0.html" class="home-card">
  <div class="home-card-title">가벼움, 무게, 그리고 흩어지지 않기</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EC%9D%B8%EA%B0%84%20%EC%9E%A0%EC%9E%AC%EB%A0%A5%EC%9D%98%20%EA%B0%80%EC%9E%A5%20%ED%81%B0%20%EB%82%AD%EB%B9%84%EB%8A%94%20%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80.html" class="home-card">
  <div class="home-card-title">인간 잠재력의 가장 큰 낭비는 무엇인가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EC%9D%B8%EA%B0%84%EC%9D%80%20%EB%AA%A8%EC%88%9C%EC%9D%84%20%ED%92%88%EC%9C%BC%EB%A9%B4%EC%84%9C%20%EC%9D%98%EB%AF%B8%EB%A5%BC%20%EC%B0%BE%EC%9D%84%20%EC%88%98%20%EC%9E%88%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">인간은 모순을 품으면서 의미를 찾을 수 있는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EB%B6%88%EC%88%9C%ED%95%9C%20%EC%A1%B4%EC%9E%AC%EC%9D%98%20%EC%A1%B0%EA%B1%B4.html" class="home-card">
  <div class="home-card-title">불순한 존재의 조건</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EA%B3%A0%EB%8F%85%EC%9D%84%20%EA%B2%AC%EB%94%94%EB%8A%94%20%EB%8A%A5%EB%A0%A5%EC%9D%80%20%EC%99%9C%20%EC%A7%80%EC%A0%81%20%EB%8A%A5%EB%A0%A5%EA%B3%BC%20%EC%97%B0%EA%B2%B0%EB%90%9C%EB%8B%A4%EA%B3%A0%20%EB%A7%90%ED%95%A0%EA%B9%8C.html" class="home-card">
  <div class="home-card-title">고독을 견디는 능력은 왜 지적 능력과 연결된다고 말할까</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%ED%96%89%EB%B3%B5%EC%9D%B4%EB%9D%BC%EB%8A%94%20%EB%A7%88%EC%A7%80%EB%A7%89%20%EC%9A%B0%EC%83%81.html" class="home-card">
  <div class="home-card-title">행복이라는 마지막 우상</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%ED%9B%84%ED%9A%8C%EC%97%90%20%EB%8C%80%ED%95%98%EC%97%AC.html" class="home-card">
  <div class="home-card-title">후회에 대하여</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EC%9C%A0%ED%86%A0%ED%94%BC%EC%95%84.html" class="home-card">
  <div class="home-card-title">유토피아</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/04_Existence_Meaning_Death_Selfhood/%EA%B3%A0%EB%8F%85%EC%9D%98%20%EA%B2%B0.html" class="home-card">
  <div class="home-card-title">고독의 결</div>
</a>

</div>
</details>

<details class="essay-section">
<summary>윤리·타자성·악·책임·사회 (13)</summary>

<div class="home-card-grid">

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%EC%83%9D%EC%A1%B4%20%EC%84%A4%EB%AA%85%EC%9D%98%20%EC%9C%A4%EB%A6%AC%EC%A0%81%20%ED%95%9C%EA%B3%84.html" class="home-card">
  <div class="home-card-title">생존 설명의 윤리적 한계</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%ED%83%80%EC%9D%B8%EC%9D%84%20%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94%20%EA%B2%83%EC%9D%80%20%EA%B0%80%EB%8A%A5%ED%95%9C%EA%B0%80.html" class="home-card">
  <div class="home-card-title">타인을 이해하는 것은 가능한가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%ED%95%9C%20%EC%9D%B8%EA%B0%84%EC%9D%B4%20%EB%8B%AC%EB%A0%B8%EC%A7%80%EB%A7%8C%2C%20%ED%98%BC%EC%9E%90%20%EB%8B%AC%EB%A6%B0%20%EA%B2%83%EC%9D%80%20%EC%95%84%EB%8B%88%EC%97%88%EB%8B%A4.html" class="home-card">
  <div class="home-card-title">한 인간이 달렸지만, 혼자 달린 것은 아니었다</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%ED%9D%94%EB%93%A4%EB%A6%BC%EC%9D%80%20%EB%88%84%EA%B5%AC%EC%9D%98%20%EC%9D%B4%EB%A6%84%EC%9C%BC%EB%A1%9C%20%EB%B9%84%EC%A0%95%EC%83%81%EC%9D%B4%20%EB%90%98%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">흔들림은 누구의 이름으로 비정상이 되는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%EB%90%98%EB%8F%8C%EC%95%84%20%EC%9E%91%EC%9A%A9%ED%95%98%EB%8A%94%20%EA%B2%B0%EA%B3%BC.html" class="home-card">
  <div class="home-card-title">되돌아 작용하는 결과</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%EC%B0%A8%EC%9D%B4%EB%A5%BC%20%EA%B2%AC%EB%94%94%EB%8A%94%20%EB%B3%B4%ED%8E%B8%EC%84%B1.html" class="home-card">
  <div class="home-card-title">차이를 견디는 보편성</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%EC%A4%91%EB%A6%BD%EC%9D%98%20%EC%96%BC%EA%B5%B4.html" class="home-card">
  <div class="home-card-title">중립의 얼굴</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%ED%94%BC%ED%95%B4%EC%9E%90%EC%A1%B0%EC%B0%A8%20%EA%B2%B0%EC%BD%94%20%EC%88%9C%EC%88%98%ED%95%98%EC%A7%80%20%EC%95%8A%EB%8B%A4%EB%8A%94%20%EC%9D%B8%EA%B0%84%EC%9D%98%20%EB%B3%B5%EC%9E%A1%EC%84%B1.html" class="home-card">
  <div class="home-card-title">피해자조차 결코 순수하지 않다는 인간의 복잡성</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%EC%82%AC%ED%9A%8C%EC%A0%81%20%EB%B9%84%EA%B5%90%20%E2%80%94%20%EC%9A%B0%EB%A6%AC%EB%A5%BC%20%ED%98%95%EC%84%B1%ED%95%98%EA%B3%A0%20%EB%98%90%20%ED%95%B4%EC%B2%B4%ED%95%98%EB%8A%94%20%EA%B1%B0%EC%9A%B8.html" class="home-card">
  <div class="home-card-title">사회적 비교 — 우리를 형성하고 또 해체하는 거울</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%EB%B2%94%EC%A3%84%EB%8A%94%20%EC%96%B4%EB%94%94%EC%97%90%EC%84%9C%20%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">범죄는 어디에서 발생하는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%EC%9D%B8%EA%B0%84%EC%9D%80%20%EC%96%BC%EB%A7%88%EB%82%98%20%EC%89%BD%EA%B2%8C%20%EC%9E%90%EA%B8%B0%EA%B8%B0%EB%A7%8C%EC%97%90%20%EB%B9%A0%EC%A7%80%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">인간은 얼마나 쉽게 자기기만에 빠지는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%EC%95%85%EC%9D%80%20%EC%99%9C%20%EC%97%AC%EC%A0%84%ED%9E%88%20%EB%B2%88%EC%84%B1%ED%95%98%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">악은 왜 여전히 번성하는가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/05_Ethics_Otherness_Responsibility/%EC%9D%B8%EA%B0%84%EC%9D%80%20%EC%99%9C%20%EC%9E%90%EA%B8%B0%20%EC%84%B8%EA%B3%84%EB%A5%BC%20%EB%8B%AB%EA%B3%A0%2C%20%EA%B7%B8%20%EC%95%88%EC%97%90%EC%84%9C%20%ED%83%80%EC%9D%B8%EC%9D%84%20%EC%86%8C%EB%AA%A8%ED%95%98%EB%8A%94%EA%B0%80.html" class="home-card">
  <div class="home-card-title">인간은 왜 자기 세계를 닫고, 그 안에서 타인을 소모하는가</div>
</a>

</div>
</details>

<details class="essay-section">
<summary>문학·사상가·역사·문화 (14)</summary>

<div class="home-card-grid">

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/09_Poem/%EB%91%90%20%EC%9E%A5%EC%9D%98%20%ED%91%9C.html" class="home-card">
  <div class="home-card-title">두 장의 표</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/06_Literary_Historical_Cultural_Readings/%EC%99%95%EC%9D%84%20%EC%82%B0%20%EC%83%81%EC%9D%B8%3A%20%EC%97%AC%EB%B6%88%EC%9C%84%EC%99%80%20%EC%A0%84%ED%99%98%EA%B8%B0%EC%9D%98%20%EA%B6%8C%EB%A0%A5.html" class="home-card">
  <div class="home-card-title">왕을 산 상인: 여불위와 전환기의 권력</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/06_Literary_Historical_Cultural_Readings/%ED%8E%B8%EC%9D%98%EC%A0%90%20%EB%B6%88%EB%B9%9B%20%EC%95%84%EB%9E%98%EC%97%90%EC%84%9C.html" class="home-card">
  <div class="home-card-title">편의점 불빛 아래에서</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/06_Literary_Historical_Cultural_Readings/%EB%93%9C%EB%9D%BC%ED%81%98%EB%9D%BC%EC%97%90%20%EB%8C%80%ED%95%9C%20%EB%AA%A8%EB%93%A0%20%EA%B2%83.html" class="home-card">
  <div class="home-card-title">드라큘라에 대한 모든 것</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/06_Literary_Historical_Cultural_Readings/%EB%B9%84%EC%B0%B8%EC%9D%98%20%EC%A7%84%EB%8B%A8%EC%97%90%EC%84%9C%20%EA%B3%84%EC%8B%9C%EC%9D%98%20%EB%8F%85%EC%A0%90%EC%9C%BC%EB%A1%9C.html" class="home-card">
  <div class="home-card-title">비참의 진단에서 계시의 독점으로</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/06_Literary_Historical_Cultural_Readings/%EB%8B%88%EC%B2%B4%EC%9D%98%20%EC%97%98%EB%A6%AC%ED%8A%B8%EC%A3%BC%EC%9D%98%EB%8A%94%20%EB%AF%BC%EC%A3%BC%EC%A3%BC%EC%9D%98%EC%99%80%20%EC%96%91%EB%A6%BD%20%EA%B0%80%EB%8A%A5%ED%95%9C%EA%B0%80.html" class="home-card">
  <div class="home-card-title">니체의 엘리트주의는 민주주의와 양립 가능한가</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/07_Essay/06_Literary_Historical_Cultural_Readings/%EC%B9%A8%EB%AC%B5%ED%95%98%EB%8A%94%20%EC%B0%BD%EC%A1%B0%EC%9E%90%EC%9D%98%20%ED%91%9C%28%E8%A1%A8%29%3A%20%EB%AA%A9%EA%B2%A9%EC%9E%90%20%EC%97%86%EB%8A%94%20%EC%82%B6%EC%9D%84%20%EC%9C%84%ED%95%98%EC%97%AC.html" class="home-card">
  <div class="home-card-title">침묵하는 창조자의 표(表): 목격자 없는 삶을 위하여</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/09_Poem/%ED%9D%B0%20%EA%B3%A0%EB%9E%98%20%EC%95%9E%EC%97%90%EC%84%9C.html" class="home-card">
  <div class="home-card-title">흰 고래 앞에서</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/10_Novel/%EC%99%84%EC%A0%84%ED%95%9C%20%EB%B3%B4%EA%B3%A0%EC%84%9C.html" class="home-card">
  <div class="home-card-title">완전한 보고서</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/09_Poem/%EA%B0%80%EB%9D%BC%EC%95%89%EC%A7%80%20%EC%95%8A%EB%8A%94%20%EA%B2%83%20(%EC%82%B0%ED%8B%B0%EC%95%84%EA%B3%A0).html" class="home-card">
  <div class="home-card-title">가라앉지 않는 것 (산티아고)</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/09_Poem/%EB%AC%B4%EB%AA%85%20(%E7%84%A1%E5%90%8D).html" class="home-card">
  <div class="home-card-title">무명 (無名)</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/64_%EC%A3%BC%EC%97%AD/36%20%EC%9E%AC%20%EC%95%84%EB%9E%98%EC%9D%98%20%EB%B6%88%20(%EC%A7%80%ED%99%94%EB%AA%85%EC%9D%B4(%E5%9C%B0%E7%81%AB%E6%98%8E%E5%A4%B7)%EC%9D%98%20%EC%9A%B0%ED%99%94%EC%A0%81%20%ED%95%B4%EC%84%9D).html" class="home-card">
  <div class="home-card-title">36 재 아래의 불 (지화명이(地火明夷)의 우화적 해석)</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/09_Poem/%EC%A0%88%EB%B2%BD.html" class="home-card">
  <div class="home-card-title">절벽</div>
</a>

<a href="https://4sighttt.github.io/ARCHIVE/000_Writings/09_Poem/%ED%83%9C%EC%96%91%EC%9D%98%20%EB%AC%B4%EA%B2%8C%20%20%28%EB%AB%BC%EB%A5%B4%EC%86%8C%29.html" class="home-card">
  <div class="home-card-title">태양의 무게 (뫼르소)</div>
</a>

</div>
</details>

<details class="essay-section">
<summary>미분류 글 (0)</summary>

<div class="home-card-grid">


</div>
</details>
