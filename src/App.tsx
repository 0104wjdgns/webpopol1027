import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Copy, 
  Check, 
  Mail, 
  ExternalLink, 
  Calendar, 
  Users, 
  Award, 
  BookOpen, 
  Sparkles,
  Info,
  Clock,
  Compass,
  FileText,
  Sliders,
  Send
} from 'lucide-react';

// High-fidelity image assets generated for Song Jeong-hoon's portfolio
const IMAGES = {
  heroInterior: '/src/assets/images/hero_workshop_interior_1793101143612.jpg',
  portrait: '/src/assets/images/portrait_philosophy_facilitator_1793101144398.jpg',
  dialogueTable: '/src/assets/images/arch_dialogue_table_1793101145288.jpg',
  reflectionCards: '/src/assets/images/craft_reflection_cards_1793101145863.jpg',
};

export default function App() {
  const [selectedCurriculum, setSelectedCurriculum] = useState<'single' | 'basic' | 'deep'>('basic');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showDesignSpecModal, setShowDesignSpecModal] = useState(false);

  // Workshop calculator states
  const [calcCourse, setCalcCourse] = useState<'single' | 'basic' | 'deep'>('basic');
  const [calcPeople, setCalcPeople] = useState<number>(6);
  const [orgType, setOrgType] = useState<string>('청년센터 · 지자체');
  const [inquiryCopied, setInquiryCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('0104wjdgns@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Price calculations based on portfolio content
  const calculateEstimate = () => {
    if (calcCourse === 'single') {
      const fee = 770000;
      const materials = calcPeople * 7777;
      return {
        title: '단회차 · 특강형 (1회 2시간)',
        sessions: 1,
        instructorFee: fee,
        materialFee: materials,
        total: fee + materials,
        details: '기록 카드 3~4장 + 인쇄 발제문 포함'
      };
    } else if (calcCourse === 'basic') {
      const feePerSession = 770000;
      const totalFee = 3080000; // 4회차
      const materials = calcPeople * 7777;
      return {
        title: '4회차 · 기본형 (주 1회 × 4주, 회당 2.5~3시간)',
        sessions: 4,
        instructorFee: totalFee,
        materialFee: materials,
        total: totalFee + materials,
        details: '발제문 4부 + 기록 카드 12~16장 + 보관용 카드 지갑 포함'
      };
    } else {
      const totalFee = 7700000; // 10회차
      const materials = calcPeople * 77777;
      return {
        title: '10회차 · 심화형 (주 1회 × 10주, 회당 2.5~3시간)',
        sessions: 10,
        instructorFee: totalFee,
        materialFee: materials,
        total: totalFee + materials,
        details: '개인 질문집 소책자 인쇄 + 참가자 맞춤 굿즈(책갈피·카드) 제작 일체 포함'
      };
    }
  };

  const estimate = calculateEstimate();

  const handleCopyInquiryTemplate = () => {
    const text = `[인문철학·자기탐구 워크숍 문의]
- 기관명/단체: ${orgType}
- 희망 과정: ${estimate.title}
- 예상 참가 인원: ${calcPeople}명
- 예상 견적: 약 ${estimate.total.toLocaleString()}원 (강사료 ${estimate.instructorFee.toLocaleString()}원 + 재료비 ${estimate.materialFee.toLocaleString()}원)
- 문의자 연락처: 
- 희망 일정: `;
    navigator.clipboard.writeText(text);
    setInquiryCopied(true);
    setTimeout(() => setInquiryCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#221F1D] flex flex-col font-sans selection:bg-[#221F1D] selection:text-[#F8F6F1]">
      
      {/* ─────────────────────────────────────────────────────────────
          TOP NAVIGATION BAR (Strict 3-Zone Contract)
          Zone 1: Wordmark | Zone 2: 4-5 text links | Zone 3: 1 CTA
      ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#F8F6F1]/90 backdrop-blur-md border-b border-[#221F1D]/10">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand Wordmark */}
          <a href="#" className="font-editorial text-2xl tracking-tight text-[#221F1D] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity">
            송정훈 <span className="text-xs uppercase tracking-widest font-sans text-[#7D766E] ml-1">PHILOMUMU</span>
          </a>

          {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-medium text-[#5E5851]">
            <a href="#about" className="hover:text-[#221F1D] transition-colors whitespace-nowrap shrink-0">소개</a>
            <a href="#why" className="hover:text-[#221F1D] transition-colors whitespace-nowrap shrink-0">왜 자기탐구인가</a>
            <a href="#program" className="hover:text-[#221F1D] transition-colors whitespace-nowrap shrink-0">진행 방식</a>
            <a href="#strengths" className="hover:text-[#221F1D] transition-colors whitespace-nowrap shrink-0">운영 강점 & 실적</a>
            <a href="#difference" className="hover:text-[#221F1D] transition-colors whitespace-nowrap shrink-0">발제문 라이브러리</a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowDesignSpecModal(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#7D766E] hover:text-[#221F1D] border border-[#221F1D]/15 rounded hover:border-[#221F1D]/40 transition-colors whitespace-nowrap"
              title="설계 시스템 및 참고 사이트 분석 보기"
            >
              <Info className="w-3.5 h-3.5" />
              <span>설계 시스템 요약표</span>
            </button>

            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-widest font-semibold bg-[#221F1D] text-[#F8F6F1] rounded hover:bg-[#38332F] transition-colors whitespace-nowrap shrink-0"
            >
              워크숍 의뢰하기
            </a>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION
          Matching Loeven Morcel's monumental serif headline, central framed photo with monogram,
          and delicate architectural provenance badge between hairline rules.
      ───────────────────────────────────────────────────────────── */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 max-w-7xl mx-auto px-6 w-full">
        {/* Monumental Headline */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#7D766E] mb-4 font-medium">
            HUMANITIES & SELF-INQUIRY WORKSHOP
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-5xl mx-auto text-balance">
            스스로 길어 올린 질문 하나를,<br />
            손에 쥐고 돌아가는 자리.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#615A52] max-w-2xl mx-auto font-light leading-relaxed">
            답을 받아 적는 강의가 아닙니다. 내 안의 가장 큰 의문을 알아채고 말로 꺼내 보는 철학 토론 · 자기탐구 워크숍입니다.
          </p>
        </div>

        {/* Central Architectural Visual Container with Emblem Overlaid */}
        <div className="relative mx-auto max-w-5xl rounded-sm overflow-hidden border border-[#221F1D]/15 shadow-sm bg-[#EDE8E0]">
          <div className="aspect-[16/9] w-full relative">
            <img 
              src={IMAGES.heroInterior} 
              alt="인문철학 워크숍 공간 전경" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Overlaid Monogram Box - reproducing the reference site's LM logo frame */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-36 h-36 sm:w-44 sm:h-44 border-2 border-white/80 p-3 flex flex-col justify-between backdrop-blur-[2px] bg-black/10">
                <div className="flex justify-between items-start text-white text-[10px] tracking-widest font-mono">
                  <span>SJ</span>
                  <span>EST. 2024</span>
                </div>
                <div className="text-center">
                  <div className="font-editorial text-3xl sm:text-4xl text-white font-light tracking-widest">
                    PHILOMUMU
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-white/90 mt-1">
                    필로무무 · 송정훈
                  </div>
                </div>
                <div className="flex justify-between items-end text-white text-[10px] tracking-widest font-mono">
                  <span>SEOUL</span>
                  <span>WORKSHOP</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-6 text-white/90 text-xs tracking-wider font-light">
              살롱 & 토론 테이블 · 6인 소수정예 대화
            </div>
          </div>
        </div>

        {/* Delicate Provenance Label Between Hairlines (Ref: "À Montréal depuis 1991") */}
        <div className="mt-14 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-[#221F1D]/30">
            <div className="h-[1px] w-20 sm:w-32 bg-[#221F1D]/20"></div>
            <span className="font-editorial italic text-sm text-[#7D766E]">Philosophical Dialogue & Self-Inquiry</span>
            <div className="h-[1px] w-20 sm:w-32 bg-[#221F1D]/20"></div>
          </div>
          <p className="mt-3 font-editorial text-lg sm:text-xl text-[#221F1D] font-normal tracking-wide">
            서울 관악 · 도봉 · 인문철학 & 자기탐구 워크숍
          </p>
          <p className="text-xs sm:text-sm text-[#6E675E] mt-1 font-light max-w-lg mx-auto">
            "질문을 품고 있으면, 답은 반짝하고 스스로 올라옵니다."
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            CORE METRICS STRIP (Strict 5-column architectural grid)
        ───────────────────────────────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 border-y border-[#221F1D]/15 divide-y md:divide-y-0 md:divide-x divide-[#221F1D]/15 text-center">
          <div className="py-6 px-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#857E75] mb-1">01 / 운영</div>
            <div className="font-editorial text-3xl sm:text-4xl text-[#221F1D] tabular-nums font-normal">3년 차</div>
            <div className="text-xs text-[#736C64] mt-1">철학의 별 2024~현재</div>
          </div>
          <div className="py-6 px-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#857E75] mb-1">02 / 누적 진행</div>
            <div className="font-editorial text-3xl sm:text-4xl text-[#221F1D] tabular-nums font-normal">77회</div>
            <div className="text-xs text-[#736C64] mt-1">토론 및 워크숍 기획·진행</div>
          </div>
          <div className="py-6 px-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#857E75] mb-1">03 / 누적 참가자</div>
            <div className="font-editorial text-3xl sm:text-4xl text-[#221F1D] tabular-nums font-normal">777명</div>
            <div className="text-xs text-[#736C64] mt-1">청년 및 성인 탐구자</div>
          </div>
          <div className="py-6 px-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#857E75] mb-1">04 / 참가자 만족도</div>
            <div className="font-editorial text-3xl sm:text-4xl text-[#8E4C36] tabular-nums font-normal">5.0 <span className="text-xl text-[#736C64]">/ 5.0</span></div>
            <div className="text-xs text-[#736C64] mt-1">리더스클럽 5기 전원 응답</div>
          </div>
          <div className="py-6 px-4 col-span-2 md:col-span-1">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#857E75] mb-1">05 / 재참여율</div>
            <div className="font-editorial text-3xl sm:text-4xl text-[#221F1D] tabular-nums font-normal">77.7%</div>
            <div className="text-xs text-[#736C64] mt-1">5기 수료 후 6기 연계 잔류</div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 01 · ABOUT THE FACILITATOR
          Matching Loeven Morcel's "RÉALISATIONS" framed two-column card with notch
      ───────────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 border-t border-[#221F1D]/10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#221F1D]/15">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#7D766E]">SECTION 01</span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#221F1D] mt-1">
              당신은 누구인가요?
            </h2>
          </div>
          <p className="text-sm font-editorial italic text-[#736C64] mt-2 md:mt-0">
            About Song Jeong-hoon · Philomumu
          </p>
        </div>

        {/* Architectural Showcase Container (Ref: RÉALISATIONS boxed frame) */}
        <div className="border border-[#221F1D]/15 rounded-sm p-4 sm:p-8 bg-[#F4F1EA]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Facilitator Portrait */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="aspect-[3/4] rounded-sm overflow-hidden border border-[#221F1D]/15 bg-[#EAE5DC] relative">
                <img 
                  src={IMAGES.portrait} 
                  alt="인문철학 워크숍 강사 송정훈 프로필 사진" 
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#221F1D]/80 text-[#F8F6F1] text-[10px] uppercase font-mono px-2 py-0.5 tracking-wider backdrop-blur-xs">
                  FACILITATOR
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 text-xs text-[#7D766E]">
                <div className="flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 bg-[#221F1D]"></span>
                  <span className="w-2 h-2 bg-[#221F1D]/30"></span>
                  <span className="w-2 h-2 bg-[#221F1D]/30"></span>
                </div>
                <span>서울 관악·도봉 활동 · 필명 송호들</span>
              </div>
            </div>

            {/* Right: Architectural Column with Curated Bio */}
            <div className="lg:col-span-7 flex flex-col justify-between lg:pl-6 lg:border-l border-[#221F1D]/10">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#8E4C36] font-medium mb-3">
                  FACILITATOR & ESSAYIST
                </p>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#221F1D] leading-snug">
                  안녕하세요, <span className="underline decoration-[#8E4C36]/40 underline-offset-4">송정훈</span>입니다.<br />
                  일상에서 질문을 포착하고, 그 질문을 함께 나눌 자리를 짓습니다.
                </h3>
                
                <p className="mt-5 text-[#544E47] text-sm sm:text-base leading-relaxed">
                  철학을 학문이나 이론이 아니라 <strong>내 삶의 문제</strong>로 다룹니다.
                  철학자가 뭐라고 했는지 외우는 것보다, 지금 내가 삶의 어느 지점에 걸려 있는지를 직시하는 것에서 출발합니다.
                </p>

                {/* History & Key Affiliations */}
                <div className="mt-8 space-y-4 border-t border-[#221F1D]/10 pt-6">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#8E4C36] mt-0.5">01</span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#221F1D]">
                        철학 토론 커뮤니티 [철학의 별] 모임장
                      </h4>
                      <p className="text-xs text-[#6B645B] mt-0.5">
                        2024 운영진 → 2025 승계, 현재 대표 운영 · 서울 관악구 기반 정규 토론 정립
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#8E4C36] mt-0.5">02</span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#221F1D]">
                        인문철학 재단 타우마제인 리더스클럽 발제·진행자
                      </h4>
                      <p className="text-xs text-[#6B645B] mt-0.5">
                        공모 선발 (경쟁률 7:1) · 5기 완주 후 참가자 만장일치 재참여로 6기 연속 진행 중
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#8E4C36] mt-0.5">03</span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#221F1D]">
                        자기탐구 모임 [에고너츠 (Egonauts)] 창립 & 브랜드 [필로무무]
                      </h4>
                      <p className="text-xs text-[#6B645B] mt-0.5">
                        도봉구 기반 자기탐구 워크숍 신설 · 모바일 웹 발제문 시스템 구축
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#8E4C36] mt-0.5">04</span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#221F1D]">
                        브런치스토리 & 네이버 블로그 작가 (필명: 송호들)
                      </h4>
                      <p className="text-xs text-[#6B645B] mt-0.5">
                        「설익은 자서전」, 「지금의 나」 등 자기탐구 연재 · 독자층 및 커뮤니티 보유
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Unboxed Links (No-Pill Rule) */}
              <div className="mt-8 pt-6 border-t border-[#221F1D]/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#635C53]">
                <span className="font-mono uppercase text-[#857E75]">바로 보기</span>
                <span aria-hidden="true">/</span>
                <a 
                  href="https://www.somoim.co.kr/89173784-a4cd-11ee-92bf-0a10275b7c431" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#221F1D] underline underline-offset-4 inline-flex items-center gap-1"
                >
                  철학의 별 소모임 <ExternalLink className="w-3 h-3" />
                </a>
                <span aria-hidden="true">·</span>
                <a 
                  href="https://brunch.co.kr/@eb029d2b036446a" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#221F1D] underline underline-offset-4 inline-flex items-center gap-1"
                >
                  브런치스토리 <ExternalLink className="w-3 h-3" />
                </a>
                <span aria-hidden="true">·</span>
                <a 
                  href="https://blog.naver.com/philomumu" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#221F1D] underline underline-offset-4 inline-flex items-center gap-1"
                >
                  네이버 블로그 <ExternalLink className="w-3 h-3" />
                </a>
                <span aria-hidden="true">·</span>
                <a 
                  href="https://thaumazein.kr/readers-club/%ec%9d%b4%ea%b8%b0%ec%8b%ac-%ed%98%b9%ec%9d%80-%ec%9e%90%ea%b8%b0%ec%95%a0%eb%8a%94-%ec%82%ac%eb%9e%91%ec%9d%84-%ec%a0%80%ed%95%b4%ed%95%98%eb%8a%94%ea%b0%80-%ea%b0%80%eb%8a%a5%ec%bc%80-%ed%95%98/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#221F1D] underline underline-offset-4 inline-flex items-center gap-1"
                >
                  리더스클럽 발제문 <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02 · WHY SELF-INQUIRY?
          Matching Loeven Morcel's "NOTRE COLLECTION" Arch Motif & 3-card evidence grid
      ───────────────────────────────────────────────────────────── */}
      <section id="why" className="py-24 border-t border-[#221F1D]/10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7D766E]">SECTION 02</span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#221F1D] mt-2">
            왜 자기탐구인가요?
          </h2>
          <p className="mt-4 text-[#615A52] text-sm sm:text-base leading-relaxed">
            빠르게 변하는 환경과 불안한 시대. 고유한 개성과 차별화를 요구하지만 자신의 취향보다 주변의 눈치를 살피는 공허함은 모두 같은 질문을 필요로 합니다.
          </p>
        </div>

        {/* Central Architectural Arch Frame (Ref: NOTRE COLLECTION) */}
        <div className="relative mx-auto max-w-3xl mb-16">
          <div className="w-full aspect-[4/3] rounded-t-[180px] sm:rounded-t-[240px] overflow-hidden border border-[#221F1D]/20 shadow-md bg-[#EFEBE4] relative">
            <img 
              src={IMAGES.dialogueTable} 
              alt="자기탐구 원탁 대화 현장" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Overlaid Square Badge (Ref: OH MEUBLES black badge) */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#221F1D] text-[#F8F6F1] flex flex-col items-center justify-center p-2 text-center shadow-lg border border-[#F8F6F1]/20">
                <span className="font-editorial text-xl tracking-widest">PHILOMUMU</span>
                <span className="text-[9px] uppercase tracking-widest text-[#D1C9BE] mt-1">필로무무</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Thesis Blockquote */}
        <div className="max-w-3xl mx-auto text-center mt-12 mb-16 px-4">
          <p className="font-editorial text-xl sm:text-2xl lg:text-3xl text-[#221F1D] leading-relaxed italic">
            “ 저는 방황하는 청년을 '회복시키는' 프로그램을 준비한 것이 아닙니다.<br />
            청년이 잠시 멈추길 택한 그 근본적인 방황과 불안과 갈증을,<br className="hidden sm:inline" />
            <span className="font-semibold not-italic">스스로 찾아갈 수 있게 하는 프로그램</span>을 준비했습니다. ”
          </p>
          <p className="text-xs font-mono uppercase tracking-widest text-[#8E4C36] mt-4">
            저 역시 또래와 같은 불안과 갈증을 경험했기 때문입니다
          </p>
        </div>

        {/* 3-Column Evidence Grid (Ref: Halo 01, Halo 02, Halo 04 setup) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#221F1D]/10">
            <span className="text-xs font-mono uppercase text-[#736C64]">증거 자료 3종 · 지금, 청년들은 같은 질문 앞에 서 있습니다</span>
            <span className="text-xs text-[#8E4C36]">사회적 갈증의 지표</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="border border-[#221F1D]/15 p-6 bg-[#F5F2EC] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#857E75] mb-3">
                  <span>EVIDENCE 01</span>
                  <span>BOOK RANKINGS</span>
                </div>
                <h4 className="font-editorial text-xl text-[#221F1D] mb-2">온라인 서점 2030 순위</h4>
                <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                  20·30대 종합 순위 상위 도서 중 상당수가 불안, 자기 찾기, 멘탈 관리 주제입니다. 같은 질문이 반복되고 있다는 명백한 방증입니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#221F1D]/10 text-[11px] text-[#7D766E] font-mono">
                출처: 주요 서점 베스트셀러 분석
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-[#221F1D]/15 p-6 bg-[#F5F2EC] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#857E75] mb-3">
                  <span>EVIDENCE 02</span>
                  <span>BOOKSTORE DISPLAY</span>
                </div>
                <h4 className="font-editorial text-xl text-[#221F1D] mb-2">서점 베스트셀러 매대</h4>
                <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                  불안·자기 찾기·마음공부·AI 시대의 대처를 다룬 책들이 한 매대에 가득 쌓여 있습니다. '어떻게 살아야 하는가'에 대한 갈증의 풍경입니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#221F1D]/10 text-[11px] text-[#7D766E] font-mono">
                현장 관찰: 대형 서점 인문·자기계발 코너
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-[#221F1D]/15 p-6 bg-[#F5F2EC] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#857E75] mb-3">
                  <span>EVIDENCE 03</span>
                  <span>COMMUNITY VOICE</span>
                </div>
                <h4 className="font-editorial text-xl text-[#221F1D] mb-2">영상 댓글 & 커뮤니티</h4>
                <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                  '나만 이런가, 나만 공허한가' 같은 속앓이 고백에 수천 개의 공감이 이어집니다. 자신의 고유성을 지키며 살아가기 위한 대화가 절실합니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#221F1D]/10 text-[11px] text-[#7D766E] font-mono">
                데이터: 청년 채널 댓글 공감 추이
              </div>
            </div>

          </div>
        </div>

        {/* "And I was there too" Narrative Accordion/Box */}
        <div className="border border-[#221F1D]/15 p-8 bg-[#EFECE5] max-w-4xl mx-auto rounded-sm">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8E4C36] mb-2">PERSONAL EXPERIENCE</div>
          <h3 className="font-editorial text-2xl text-[#221F1D] mb-4">
            그리고, 저도 그랬습니다
          </h3>
          <div className="space-y-4 text-sm text-[#524B43] leading-relaxed font-light">
            <p>
              고등학생 때 고른 전공이 제 적성과 맞지 않는다는 걸 학부에 들어가고 나서야 알았습니다. 흥미를 붙여 보려 했지만 잘 되지 않았습니다.
              그때부터 스스로에게 되물었습니다. <em>'나는 무엇을 잘하는 사람인가? 나는 어떤 것을 좋아하는 사람인가? 무한히 갈라진 진로 중 내 길은 어느 것인가?'</em>
            </p>
            <p>
              막막함과 초조함, 불안 앞에서 의욕을 내기보다는 내일로 미루는 게 자연스러웠습니다. 나를 알아가려면 새로운 시도가 필요했습니다. 그래서 평소 관심도 없던 인문학을 본격적으로 공부하기 시작했습니다. 그러다 철학을 만났습니다. 제가 늘 궁금했지만 당장 오늘 내일의 일에 등 떠밀려 미뤄 두었던 질문들을 바로 그 분야가 다루고 있었습니다.
            </p>
            <p className="border-l-2 border-[#221F1D] pl-4 italic text-[#221F1D] font-normal">
              "중요한 건 답을 빨리 찾는 게 아니었습니다. 지금 내 안의 가장 큰 의문을 알아채고 그것을 질문으로 꺼내는 것이었습니다. 질문을 품고 있으면 어느 순간 스스로 답을 내놓게 됩니다. 그리고 그 답은 다시 다음 질문이 됩니다."
            </p>
            <p>
              다만 질문을 품는 건 혼자서도 되지만, <strong>꺼내는 건 혼자서는 잘 되지 않았습니다.</strong> 말로 꺼내 놓고 누군가 그것을 정성스레 받아 줄 때, 비로소 제 질문이 또렷해졌습니다. 그래서 저는 혼자 견디는 대신, <strong>함께 탐구하는 판</strong>을 엽니다.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          EDITORIAL TESTIMONIAL BREAK
          Matching Loeven Morcel's large centered quote & clean attribution
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F2EFE8] border-y border-[#221F1D]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7D766E] mb-6 block">
            VOICES OF PARTICIPANTS · 100% SATISFACTION
          </span>
          <p className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#221F1D] leading-snug italic font-normal">
            “ 같은 멤버로 유대감 있게 추억도 쌓고, 다른 분들 의견을 들으면서 생각이 확장되어 이게 철학의 장의 묘미구나 재밌었다. 서로 존중받는 믿음으로 얘기를 나눌 수 있는 분위기도 너무 좋았던 것 같다. ”
          </p>
          <div className="mt-6 text-xs sm:text-sm font-sans text-[#736C64]">
            — 타우마제인 리더스클럽 5기 참가자 전원 설문 (활동 만족도 5.0 / 5.0 · 추천 의향 5.0 / 5.0)
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03 · PROGRAM & METHOD
          Matching Loeven Morcel's "NOS SERVICES" numbered service rows (No. 1 ~ No. 6)
      ───────────────────────────────────────────────────────────── */}
      <section id="program" className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#221F1D]/15">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#7D766E]">SECTION 03</span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#221F1D] mt-1">
              프로그램은 어떻게 진행하나요?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#736C64] max-w-md mt-2 md:mt-0 font-light">
            외부 지식을 주입하는 강의가 아닌, 나만의 질문을 벼리는 워크숍의 구체적인 시간 흐름입니다.
          </p>
        </div>

        {/* Numbered Row Accordion / List (Ref: NOS SERVICES No.1 ~ No.5) */}
        <div className="divide-y divide-[#221F1D]/15 border-y border-[#221F1D]/15">
          
          <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#F3EFE7] transition-colors px-4">
            <div className="md:col-span-2 text-xs font-mono text-[#8E4C36]">No. 1</div>
            <div className="md:col-span-4 font-editorial text-2xl text-[#221F1D]">주제 공표</div>
            <div className="md:col-span-6 text-sm text-[#5C554E] leading-relaxed">
              오늘 다룰 질문의 영역을 엽니다. 경이, 외로움과 고독, 분노, 우정 등 삶에서 누구나 마주치는 보편적 감정과 화두를 제시합니다.
            </div>
          </div>

          <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#F3EFE7] transition-colors px-4">
            <div className="md:col-span-2 text-xs font-mono text-[#8E4C36]">No. 2</div>
            <div className="md:col-span-4 font-editorial text-2xl text-[#221F1D]">질문 제시</div>
            <div className="md:col-span-6 text-sm text-[#5C554E] leading-relaxed">
              스크린에 정답이 없는 열린 질문을 하나씩 띄웁니다. '맞고 틀림'의 시험이 아니라, 나의 솔직한 시선과 태도를 묻는 질문입니다.
            </div>
          </div>

          <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#F3EFE7] transition-colors px-4">
            <div className="md:col-span-2 text-xs font-mono text-[#8E4C36]">No. 3</div>
            <div className="md:col-span-4 font-editorial text-2xl text-[#221F1D]">각자 작성 (기록 카드)</div>
            <div className="md:col-span-6 text-sm text-[#5C554E] leading-relaxed">
              지금 내 생각과 그 근거가 된 실제 삶의 경험을 카드에 직접 적습니다. 말로 흩어지기 전에 텍스트로 나의 생각을 단단하게 세웁니다.
            </div>
          </div>

          <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#F3EFE7] transition-colors px-4">
            <div className="md:col-span-2 text-xs font-mono text-[#8E4C36]">No. 4</div>
            <div className="md:col-span-4 font-editorial text-2xl text-[#221F1D]">순회 발표 (고른 발화)</div>
            <div className="md:col-span-6 text-sm text-[#5C554E] leading-relaxed">
              테이블을 돌며 누구도 소외되지 않고 모두가 한 번씩 말합니다. 능숙한 사람만 마이크를 독점하지 않도록 순회적 발화 구조를 적용합니다.
            </div>
          </div>

          <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#F3EFE7] transition-colors px-4">
            <div className="md:col-span-2 text-xs font-mono text-[#8E4C36]">No. 5</div>
            <div className="md:col-span-4 font-editorial text-2xl text-[#221F1D]">다음 질문 반복</div>
            <div className="md:col-span-6 text-sm text-[#5C554E] leading-relaxed">
              최대 6문항까지 점진적으로 심화되는 기승전결 구조로 질문을 반복하며, 표면적 감정에서 내면의 핵심 가치로 파고듭니다.
            </div>
          </div>

          <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#F3EFE7] transition-colors px-4">
            <div className="md:col-span-2 text-xs font-mono text-[#8E4C36]">No. 6</div>
            <div className="md:col-span-4 font-editorial text-2xl text-[#221F1D]">카드 회수 (자기 자산화)</div>
            <div className="md:col-span-6 text-sm text-[#5C554E] leading-relaxed">
              적은 카드는 참가자가 직접 챙겨 갑니다. 강의 노트가 아닌, 나 자신에 대해 스스로 작성한 고유한 1차 자료 한 묶음이 손에 남습니다.
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-[#221F1D]/15 pb-12">
          <div className="p-4 border border-[#221F1D]/15 bg-[#F6F3EB]">
            <div className="text-xl font-editorial text-[#8E4C36] mb-1">⏱️ 3시간</div>
            <div className="text-xs font-semibold text-[#221F1D]">집중이 버티는 한계</div>
            <p className="text-[11px] text-[#6E675E] mt-1">시간을 넘기지 않는 원칙으로 토론의 밀도를 끝까지 유지합니다.</p>
          </div>
          <div className="p-4 border border-[#221F1D]/15 bg-[#F6F3EB]">
            <div className="text-xl font-editorial text-[#8E4C36] mb-1">👥 6명</div>
            <div className="text-xs font-semibold text-[#221F1D]">소속감의 최대 인원</div>
            <p className="text-[11px] text-[#6E675E] mt-1">인원이 많아도 테이블당 6명 단위로 나누어 친밀감을 보장합니다.</p>
          </div>
          <div className="p-4 border border-[#221F1D]/15 bg-[#F6F3EB]">
            <div className="text-xl font-editorial text-[#8E4C36] mb-1">🔄 순회 문답</div>
            <div className="text-xs font-semibold text-[#221F1D]">고르게 말하고 듣기</div>
            <p className="text-[11px] text-[#6E675E] mt-1">듣기만 하다 돌아가는 사람 없이 모두가 주체가 되는 자리입니다.</p>
          </div>
          <div className="p-4 border border-[#221F1D]/15 bg-[#F6F3EB]">
            <div className="text-xl font-editorial text-[#8E4C36] mb-1">🗂️ 기록 카드</div>
            <div className="text-xs font-semibold text-[#221F1D]">쌓이는 탐구 재료</div>
            <p className="text-[11px] text-[#6E675E] mt-1">회차가 끝났을 때 나만의 질문집과 굿즈로 치환되는 실체적 결과물입니다.</p>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            CURRICULUM 3 TYPES (Interactive Tabs)
        ───────────────────────────────────────────────────────────── */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7D766E]">CURRICULUM SELECTION</span>
            <h3 className="font-editorial text-2xl sm:text-4xl text-[#221F1D] mt-1">
              기관의 목표와 호흡에 맞춘 3종 커리큘럼
            </h3>
            <p className="text-xs sm:text-sm text-[#736C64] mt-2">
              공통 목표는 하나입니다. "밖에서 받은 질문이 아니라, 자기 안에서 길어 올린 질문을 붙잡는 것."
            </p>
          </div>

          {/* Clean Segmented Tab Controller (Allowed per SKILL.md for functional filters) */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-[#EAE5DC] rounded border border-[#221F1D]/10">
              <button
                onClick={() => setSelectedCurriculum('single')}
                className={`px-4 py-2 text-xs font-medium rounded transition-colors ${
                  selectedCurriculum === 'single'
                    ? 'bg-[#221F1D] text-[#F8F6F1] shadow-xs'
                    : 'text-[#5C554E] hover:text-[#221F1D]'
                }`}
              >
                단회차 · 특강형 (2시간)
              </button>
              <button
                onClick={() => setSelectedCurriculum('basic')}
                className={`px-4 py-2 text-xs font-medium rounded transition-colors ${
                  selectedCurriculum === 'basic'
                    ? 'bg-[#221F1D] text-[#F8F6F1] shadow-xs'
                    : 'text-[#5C554E] hover:text-[#221F1D]'
                }`}
              >
                4회차 · 기본형 (단기 정규)
              </button>
              <button
                onClick={() => setSelectedCurriculum('deep')}
                className={`px-4 py-2 text-xs font-medium rounded transition-colors ${
                  selectedCurriculum === 'deep'
                    ? 'bg-[#221F1D] text-[#F8F6F1] shadow-xs'
                    : 'text-[#5C554E] hover:text-[#221F1D]'
                }`}
              >
                10회차 · 심화형 (소책자/굿즈 제작)
              </button>
            </div>
          </div>

          {/* Curriculum Content Panel */}
          <div className="border border-[#221F1D]/15 p-6 sm:p-10 bg-[#F4F1E9] rounded-sm max-w-5xl mx-auto">
            {selectedCurriculum === 'single' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#221F1D]/15 gap-2">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#8E4C36]">TYPE 01 · 1회 완성 특강형</span>
                    <h4 className="font-editorial text-2xl sm:text-3xl text-[#221F1D]">단회차 · 내 질문 하나 손에 쥐기</h4>
                  </div>
                  <div className="text-xs font-mono text-[#736C64]">소요 시간: 2시간 · 권장 6인~18인</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h5 className="text-xs font-mono uppercase text-[#736C64] mb-2">한 줄 목표</h5>
                    <p className="text-base text-[#221F1D] font-medium leading-relaxed">
                      "내 생각을 처음으로 말로 꺼내 보고, 오늘 가져갈 질문 하나를 손에 쥐다."
                    </p>

                    <h5 className="text-xs font-mono uppercase text-[#736C64] mt-6 mb-2">선정 주제 (협의)</h5>
                    <p className="text-sm text-[#544D44] leading-relaxed">
                      경이 · 외로움과 고독 · 분노 · 우정 중 기관의 취지에 맞춰 1개 핵심 주제 선정
                    </p>

                    <h5 className="text-xs font-mono uppercase text-[#736C64] mt-6 mb-2">적합 대상</h5>
                    <p className="text-sm text-[#544D44] leading-relaxed">
                      자기탐구가 처음인 청년, 지자체·청년센터 체험형 맛보기 프로그램, 대학 동아리 및 학과 특강
                    </p>
                  </div>

                  <div className="border-t md:border-t-0 md:border-l border-[#221F1D]/10 md:pl-8">
                    <h5 className="text-xs font-mono uppercase text-[#736C64] mb-3">활동 구성</h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#544D44]">
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-[#8E4C36]">01</span> 도입 및 규칙 안내 (비판 없는 안전한 대화)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-[#8E4C36]">02</span> 스크린 질문 제시 및 각자 기록 카드 작성
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-[#8E4C36]">03</span> 테이블 순회 발표 (경청과 존중의 교류)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-[#8E4C36]">04</span> 마무리 질문: '오늘 내가 일상으로 가져갈 질문 한 줄'
                      </li>
                    </ul>

                    <div className="mt-8 pt-4 border-t border-[#221F1D]/10 flex items-center justify-between text-xs text-[#6B645B]">
                      <span className="font-semibold text-[#221F1D]">가져가는 것:</span>
                      <span>기록 카드 3~4장 + 나만의 질문 한 줄</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedCurriculum === 'basic' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#221F1D]/15 gap-2">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#8E4C36]">TYPE 02 · 4주 완성 단기 정규</span>
                    <h4 className="font-editorial text-2xl sm:text-3xl text-[#221F1D]">4회차 기본형 · 질문 하나를 세우다</h4>
                  </div>
                  <div className="text-xs font-mono text-[#736C64]">주 1회 × 4주 (회당 2.5~3시간) · 6인 고정 그룹</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h5 className="text-xs font-mono uppercase text-[#736C64] mb-2">한 줄 목표</h5>
                    <p className="text-base text-[#221F1D] font-medium leading-relaxed">
                      "흩어진 인상에서 출발해, 검증을 거쳐, 앞으로 붙잡을 내 질문 하나를 세운다."
                    </p>

                    <h5 className="text-xs font-mono uppercase text-[#736C64] mt-6 mb-3">4회차 단계별 구조</h5>
                    <div className="space-y-2 text-xs sm:text-sm text-[#544D44]">
                      <div className="p-2.5 bg-[#EDE8E0] rounded border border-[#221F1D]/10">
                        <strong className="text-[#221F1D]">1회차 · 인상:</strong> 나는 무엇에 반응하는가
                      </div>
                      <div className="p-2.5 bg-[#EDE8E0] rounded border border-[#221F1D]/10">
                        <strong className="text-[#221F1D]">2회차 · 경험:</strong> 그 반응은 어느 삶의 장면에서 왔는가
                      </div>
                      <div className="p-2.5 bg-[#EDE8E0] rounded border border-[#221F1D]/10">
                        <strong className="text-[#221F1D]">3회차 · 검증:</strong> 그 생각은 정말 내 것인가 (색안경 점검)
                      </div>
                      <div className="p-2.5 bg-[#EDE8E0] rounded border border-[#221F1D]/10">
                        <strong className="text-[#221F1D]">4회차 · 질문:</strong> 내가 앞으로 평생 붙잡을 질문 확정
                      </div>
                    </div>
                  </div>

                  <div className="border-t md:border-t-0 md:border-l border-[#221F1D]/10 md:pl-8">
                    <h5 className="text-xs font-mono uppercase text-[#736C64] mb-2">활동 구성 및 특징</h5>
                    <p className="text-xs sm:text-sm text-[#544D44] leading-relaxed mb-4">
                      회차마다 정밀 발제문(표지 + 기승전결 4부, 파트당 질문 2개와 여백) 제공. 같은 멤버가 4회를 완주하여 깊은 유대감과 안전지대를 형성합니다.
                    </p>

                    <h5 className="text-xs font-mono uppercase text-[#736C64] mb-2">적합 대상</h5>
                    <p className="text-xs sm:text-sm text-[#544D44] leading-relaxed mb-4">
                      진로와 삶의 방향을 모색하는 2030, 청년센터 및 공공도서관의 1달 단기 정규 과정
                    </p>

                    <div className="pt-4 border-t border-[#221F1D]/10 flex items-center justify-between text-xs text-[#6B645B]">
                      <span className="font-semibold text-[#221F1D]">가져가는 것:</span>
                      <span>기록 카드 12~16장 + 보관용 카드 지갑 + 나만의 질문과 근거</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedCurriculum === 'deep' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#221F1D]/15 gap-2">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#8E4C36]">TYPE 03 · 10주 심화 제작형</span>
                    <h4 className="font-editorial text-2xl sm:text-3xl text-[#221F1D]">10회차 심화형 · 개인 질문집 & 굿즈 제작</h4>
                  </div>
                  <div className="text-xs font-mono text-[#736C64]">주 1회 × 10주 · 6인 고정 그룹 · 중도 합류 없음</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h5 className="text-xs font-mono uppercase text-[#736C64] mb-2">한 줄 목표</h5>
                    <p className="text-base text-[#221F1D] font-medium leading-relaxed">
                      "내 안의 재료를 모으고, 읽고, 검증해, 오래 붙잡을 질문을 벼려 낸다."
                    </p>

                    <h5 className="text-xs font-mono uppercase text-[#736C64] mt-6 mb-3">블록별 진입 감정 구조</h5>
                    <div className="space-y-2 text-xs text-[#544D44]">
                      <div className="p-2.5 bg-[#EDE8E0] rounded border border-[#221F1D]/10">
                        <strong className="text-[#221F1D]">A · 재료 모으기 (1~3회):</strong><br />
                        ① 인상 〈경이〉 ② 경험의 장면 〈그리움〉 ③ 자주 쓰는 말 〈취향〉
                      </div>
                      <div className="p-2.5 bg-[#EDE8E0] rounded border border-[#221F1D]/10">
                        <strong className="text-[#221F1D]">B · 나를 읽기 (4~6회):</strong><br />
                        ④ 가치 〈분노〉 ⑤ 두려움 〈불안〉 ⑥ 관계 속의 나 〈외로움과 고독〉
                      </div>
                      <div className="p-2.5 bg-[#EDE8E0] rounded border border-[#221F1D]/10">
                        <strong className="text-[#221F1D]">C · 벼리기 & 선언 (7~10회):</strong><br />
                        ⑦ 색안경 점검 ⑧ 말·행동 모순 ⑨ 남의 답으로 다시 보기 ⑩ 개인 질문집 제작
                      </div>
                    </div>
                  </div>

                  <div className="border-t md:border-t-0 md:border-l border-[#221F1D]/10 md:pl-8">
                    <div className="p-3 bg-[#E5DFD4] rounded mb-4 text-xs text-[#3E3831] leading-relaxed">
                      💡 <strong>진입 감정이란?</strong> 문턱이 낮은 감정으로 입을 열고, 논의는 깊은 주제로 들어갑니다. 예를 들어 '분노'는 지키고 싶은 가치가 침해될 때 발생하므로, 분노를 파고들면 그 사람의 핵심 가치가 드러납니다.
                    </div>

                    <h5 className="text-xs font-mono uppercase text-[#736C64] mb-2">10회차 결과물 (아웃풋)</h5>
                    <p className="text-xs sm:text-sm text-[#544D44] leading-relaxed mb-4">
                      10회차는 제작 워크숍으로 전환되어, 10주간 쌓인 카드를 엮어 <strong>개인 질문집(소책자)</strong>을 인쇄하고 질문을 담은 <strong>맞춤 굿즈(책갈피·카드)</strong>를 손에 쥡니다.
                    </p>

                    <div className="pt-4 border-t border-[#221F1D]/10 flex items-center justify-between text-xs text-[#6B645B]">
                      <span className="font-semibold text-[#221F1D]">가져가는 것:</span>
                      <span>기록 카드 30~40장 + 개인 질문집(소책자) + 맞춤 굿즈</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Philosophy Difference Matrix */}
        <div className="mt-20 border border-[#221F1D]/15 overflow-hidden rounded-sm">
          <div className="grid grid-cols-2 divide-x divide-[#221F1D]/15 text-center font-editorial text-lg py-3 bg-[#EDE8DF] border-b border-[#221F1D]/15">
            <span className="text-[#736C64]">이런 자리가 아니라</span>
            <span className="text-[#221F1D] font-semibold">이런 자리입니다</span>
          </div>
          <div className="divide-y divide-[#221F1D]/10 text-xs sm:text-sm bg-[#F8F6F1]">
            <div className="grid grid-cols-2 divide-x divide-[#221F1D]/10 py-3.5 px-4 text-center">
              <span className="text-[#7D766E]">외부 지식을 주입하는 강의</span>
              <span className="text-[#221F1D] font-medium">능동적 사고를 연습하는 워크숍</span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-[#221F1D]/10 py-3.5 px-4 text-center">
              <span className="text-[#7D766E]">정해진 정답에 도달하는 토론</span>
              <span className="text-[#221F1D] font-medium">나만의 사고 과정을 여는 토론</span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-[#221F1D]/10 py-3.5 px-4 text-center">
              <span className="text-[#7D766E]">격식 있는 발표의 자리</span>
              <span className="text-[#221F1D] font-medium">커피 한 잔의 편안함 속 자발적 교류</span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-[#221F1D]/10 py-3.5 px-4 text-center">
              <span className="text-[#7D766E]">하나의 합의로 닫히는 결론</span>
              <span className="text-[#221F1D] font-medium">각자의 다음 질문으로 열리는 결론</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04 · STRENGTHS & OPERATIONAL TRACK RECORD
      ───────────────────────────────────────────────────────────── */}
      <section id="strengths" className="py-24 bg-[#F3EFE7] border-t border-[#221F1D]/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#221F1D]/15">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7D766E]">SECTION 04</span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#221F1D] mt-1">
                당신의 강점은 무엇인가요?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#736C64] mt-2 md:mt-0 font-light">
              검증된 운영 경험 · 프로그램 설계력 · 청년의 눈높이
            </p>
          </div>

          {/* 3 Core Strengths Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            <div className="border border-[#221F1D]/15 p-6 bg-[#FAF8F4] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#8E4C36]">STRENGTH 01</span>
                <h3 className="font-editorial text-2xl text-[#221F1D] mt-2 mb-3">
                  검증된 운영 안정성
                </h3>
                <p className="text-xs sm:text-sm text-[#575048] leading-relaxed">
                  철학의 별 3년 차 운영, 타우마제인 재단 리더스클럽 2개 기수 연속 진행, 흔들리던 독서모임을 구조 개선을 통해 10배 성장 회생시킨 실질적인 커뮤니티 경영 안정성을 증명했습니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#221F1D]/10 text-xs text-[#7D766E]">
                리더스클럽 5기 설문 만족도 <strong>5.0 / 5.0 전원 만점</strong>
              </div>
            </div>

            <div className="border border-[#221F1D]/15 p-6 bg-[#FAF8F4] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#8E4C36]">STRENGTH 02</span>
                <h3 className="font-editorial text-2xl text-[#221F1D] mt-2 mb-3">
                  프로그램 설계력
                </h3>
                <p className="text-xs sm:text-sm text-[#575048] leading-relaxed">
                  정답으로 등을 떠밀지 않는 '열린 질문'을 직접 기획합니다. 표지부터 기승전결 4부로 흐르는 발제문 구조를 설계하며, 기획과 진행을 같은 손으로 수행합니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#221F1D]/10 text-xs text-[#7D766E]">
                참가자들과 함께 질문을 엮어내는 공동 발제 설계
              </div>
            </div>

            <div className="border border-[#221F1D]/15 p-6 bg-[#FAF8F4] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#8E4C36]">STRENGTH 03</span>
                <h3 className="font-editorial text-2xl text-[#221F1D] mt-2 mb-3">
                  옆자리의 청년 강사
                </h3>
                <p className="text-xs sm:text-sm text-[#575048] leading-relaxed">
                  단상 위에서 가르치는 멘토가 아니라 옆자리에 나란히 앉는 동료입니다. 내가 통과해 온 불안과 방황의 경험을 먼저 꺼내 보임으로써 참가자가 안심하고 마음을 열도록 돕습니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#221F1D]/10 text-xs text-[#7D766E]">
                "나란히 올라가는 걸음을 제안합니다"
              </div>
            </div>

          </div>

          {/* Detailed Operating History Table */}
          <div className="mb-14">
            <h3 className="font-editorial text-2xl text-[#221F1D] mb-4">운영 실적 및 활동 내역</h3>
            <div className="border border-[#221F1D]/15 rounded-sm overflow-x-auto bg-[#FAF8F4]">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#221F1D]/15 bg-[#EDE8DE] text-[#221F1D] font-mono text-xs uppercase">
                    <th className="py-3 px-4">활동명</th>
                    <th className="py-3 px-4">역할 및 기간</th>
                    <th className="py-3 px-4">규모</th>
                    <th className="py-3 px-4">주요 내용</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#221F1D]/10 text-[#544D44]">
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-[#221F1D]">
                      <a href="https://www.somoim.co.kr/89173784-a4cd-11ee-92bf-0a10275b7c431" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-[#8E4C36] inline-flex items-center gap-1">
                        철학의 별 <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="py-3.5 px-4">모임장 · 2024 운영진 → 2025 승계, 현재 운영</td>
                    <td className="py-3.5 px-4 font-mono tabular-nums">회원 777명 · 진행 77회</td>
                    <td className="py-3.5 px-4">비전 재수립, 3시간·6명 원칙 정립, 영화·전시·피크닉으로 토론 확장</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-[#221F1D]">
                      <a href="https://thaumazein.kr/readers-club/%ec%9d%b4%ea%b8%b0%ec%8b%ac-%ed%98%b9%ec%9d%80-%ec%9e%90%ea%b8%b0%ec%95%a0%eb%8a%94-%ec%82%ac%eb%9e%91%ec%9d%84-%ec%a0%80%ed%95%b4%ed%95%98%eb%8a%94%ea%b0%80-%ea%b0%80%eb%8a%a5%ec%bc%80-%ed%95%98/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-[#8E4C36] inline-flex items-center gap-1">
                        타우마제인 리더스클럽 5기 <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="py-3.5 px-4">발제·진행자 · 2026.03~09</td>
                    <td className="py-3.5 px-4 font-mono tabular-nums">월 1회 × 6회 · 출석률 77.7%</td>
                    <td className="py-3.5 px-4">재단 매거진 텍스트 발제 및 토론 진행, 공모 선발 (경쟁률 7:1)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-[#221F1D]">타우마제인 리더스클럽 6기</td>
                    <td className="py-3.5 px-4">발제·진행자 · 현재 진행 중</td>
                    <td className="py-3.5 px-4 font-mono tabular-nums">6명 · 7회 예정 · 5기 잔류율 77.7%</td>
                    <td className="py-3.5 px-4">참가자 6명이 키워드·질문을 함께 발제문으로 엮는 진화된 방식 도입</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-[#221F1D]">에고너츠 (Egonauts)</td>
                    <td className="py-3.5 px-4">창립 및 운영 · 서울 도봉구</td>
                    <td className="py-3.5 px-4 font-mono tabular-nums">멤버 77명 · 진행 7회</td>
                    <td className="py-3.5 px-4">자기탐구를 정면에 건 신설 모임, 모바일 웹 발제문 시스템 도입</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-[#221F1D]">독서모임 파인더북 회생</td>
                    <td className="py-3.5 px-4">운영진 · 도봉 및 노원</td>
                    <td className="py-3.5 px-4 font-mono tabular-nums">월 참석 7명 → 77명 (10배)</td>
                    <td className="py-3.5 px-4">노원 이전 및 월별 지정도서제로 운영 구조 개편하여 모임 회생</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Survey Scorecard Breakdown */}
          <div className="border border-[#221F1D]/15 p-6 sm:p-8 bg-[#EAE5DC] rounded-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#221F1D]/15 gap-2">
              <div>
                <span className="text-xs font-mono uppercase text-[#8E4C36]">SURVEY RESULTS</span>
                <h4 className="font-editorial text-2xl text-[#221F1D]">타우마제인 리더스클럽 5기 공식 만족도 조사</h4>
              </div>
              <a 
                href="https://naver.me/GHLHfSKa" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-[#221F1D] underline underline-offset-4 inline-flex items-center gap-1 font-medium hover:text-[#8E4C36]"
              >
                네이버폼 설문 결과 원문 확인 <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-4 bg-[#F8F6F1] rounded text-center border border-[#221F1D]/10">
                <div className="text-xs text-[#736C64]">활동 만족도</div>
                <div className="font-editorial text-4xl text-[#8E4C36] tabular-nums font-semibold mt-1">5.0 <span className="text-sm text-[#736C64]">/ 5.0</span></div>
                <div className="text-[11px] text-[#7D766E] mt-1">응답자 4명 전원 만점</div>
              </div>
              <div className="p-4 bg-[#F8F6F1] rounded text-center border border-[#221F1D]/10">
                <div className="text-xs text-[#736C64]">주변 추천 의향</div>
                <div className="font-editorial text-4xl text-[#8E4C36] tabular-nums font-semibold mt-1">5.0 <span className="text-sm text-[#736C64]">/ 5.0</span></div>
                <div className="text-[11px] text-[#7D766E] mt-1">응답자 4명 전원 만점</div>
              </div>
              <div className="p-4 bg-[#F8F6F1] rounded text-center border border-[#221F1D]/10">
                <div className="text-xs text-[#736C64]">참여 전후 일상·생각 변화</div>
                <div className="font-editorial text-4xl text-[#221F1D] tabular-nums font-semibold mt-1">4.5 <span className="text-sm text-[#736C64]">/ 5.0</span></div>
                <div className="text-[11px] text-[#7D766E] mt-1">실질적 태도 변화 증명</div>
              </div>
            </div>

            {/* Monthly 5.0 Breakdown */}
            <div className="mt-6 pt-4 border-t border-[#221F1D]/10">
              <div className="text-xs font-mono uppercase text-[#736C64] mb-2">2026년 3월~8월 회차별 만족도</div>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
                <div className="p-2 bg-[#F8F6F1] border border-[#221F1D]/10 rounded">
                  <div className="text-[#736C64]">3월 경이로움</div>
                  <div className="font-mono font-semibold text-[#8E4C36] mt-0.5">5.0</div>
                </div>
                <div className="p-2 bg-[#F8F6F1] border border-[#221F1D]/10 rounded">
                  <div className="text-[#736C64]">4월 외로움·고독</div>
                  <div className="font-mono font-semibold text-[#8E4C36] mt-0.5">5.0</div>
                </div>
                <div className="p-2 bg-[#F8F6F1] border border-[#221F1D]/10 rounded">
                  <div className="text-[#736C64]">5월 공동선</div>
                  <div className="font-mono font-semibold text-[#8E4C36] mt-0.5">5.0</div>
                </div>
                <div className="p-2 bg-[#F8F6F1] border border-[#221F1D]/10 rounded">
                  <div className="text-[#736C64]">6월 분노</div>
                  <div className="font-mono font-semibold text-[#8E4C36] mt-0.5">5.0</div>
                </div>
                <div className="p-2 bg-[#F8F6F1] border border-[#221F1D]/10 rounded">
                  <div className="text-[#736C64]">7월 리더십</div>
                  <div className="font-mono font-semibold text-[#8E4C36] mt-0.5">5.0</div>
                </div>
                <div className="p-2 bg-[#F8F6F1] border border-[#221F1D]/10 rounded">
                  <div className="text-[#736C64]">8월 우정</div>
                  <div className="font-mono font-semibold text-[#8E4C36] mt-0.5">5.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05 · DIFFERENCE & WEB QUESTION LIBRARY
      ───────────────────────────────────────────────────────────── */}
      <section id="difference" className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#221F1D]/15">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#7D766E]">SECTION 05</span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#221F1D] mt-1">
              당신의 차별점은 무엇인가요?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#736C64] mt-2 md:mt-0 font-light">
            단단한 사유의 궤적 · 커뮤니티 모객력 · 손에 잡히는 아웃풋 아카이브
          </p>
        </div>

        {/* Thought Trajectory Line */}
        <div className="mb-16 border border-[#221F1D]/15 p-6 sm:p-8 bg-[#F4F1EA] rounded-sm">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8E4C36] mb-3">TRAJECTORY OF INQUIRY</div>
          <h3 className="font-editorial text-2xl text-[#221F1D] mb-4">
            우연히 이 일에 닿은 것이 아닙니다
          </h3>
          <p className="text-sm text-[#544E47] mb-6 leading-relaxed">
            스무 살의 질문 하나에서 출발한 탐구가 10여 년을 지나 지금의 워크숍으로 단단하게 연결되었습니다.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
            <div className="p-3 bg-[#FAF8F4] border border-[#221F1D]/10 rounded flex flex-col justify-between">
              <span className="text-[#857E75] font-mono">01</span>
              <span className="font-semibold text-[#221F1D] my-1">죽음의 두려움</span>
              <span className="text-[10px] text-[#736C64]">최초의 실존적 물음</span>
            </div>
            <div className="p-3 bg-[#FAF8F4] border border-[#221F1D]/10 rounded flex flex-col justify-between">
              <span className="text-[#857E75] font-mono">02</span>
              <span className="font-semibold text-[#221F1D] my-1">나는 누구인가</span>
              <span className="text-[10px] text-[#736C64]">자아 정체성의 모색</span>
            </div>
            <div className="p-3 bg-[#FAF8F4] border border-[#221F1D]/10 rounded flex flex-col justify-between">
              <span className="text-[#857E75] font-mono">03</span>
              <span className="font-semibold text-[#221F1D] my-1">질문이 중요하다</span>
              <span className="text-[10px] text-[#736C64]">답보다 질문의 발견</span>
            </div>
            <div className="p-3 bg-[#FAF8F4] border border-[#221F1D]/10 rounded flex flex-col justify-between">
              <span className="text-[#857E75] font-mono">04</span>
              <span className="font-semibold text-[#221F1D] my-1">경이와 긍정</span>
              <span className="text-[10px] text-[#736C64]">존재 자체에 대한 경탄</span>
            </div>
            <div className="p-3 bg-[#FAF8F4] border border-[#221F1D]/10 rounded flex flex-col justify-between">
              <span className="text-[#857E75] font-mono">05</span>
              <span className="font-semibold text-[#221F1D] my-1">자기탐구</span>
              <span className="text-[10px] text-[#736C64]">에고너츠의 시발점</span>
            </div>
            <div className="p-3 bg-[#FAF8F4] border border-[#221F1D]/10 rounded flex flex-col justify-between">
              <span className="text-[#857E75] font-mono">06</span>
              <span className="font-semibold text-[#221F1D] my-1">감각에 집중</span>
              <span className="text-[10px] text-[#736C64]">일상 속 사고의 실천</span>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            EGONAUTS WEB QUESTION LIBRARY
            Featuring the actual published web apps
        ───────────────────────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-3 border-b border-[#221F1D]/10">
            <div>
              <span className="text-xs font-mono uppercase text-[#8E4C36]">LIVE DIGITAL ARCHIVE</span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#221F1D] mt-0.5">
                에고너츠 웹 발제문 라이브러리
              </h3>
            </div>
            <p className="text-xs text-[#736C64] mt-2 sm:mt-0 font-light">
              참가자가 스마트폰으로 접속해 질문을 따라 답을 작성하고 카드 이미지로 저장하는 웹 발제문
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="border border-[#221F1D]/15 bg-[#FAF8F4] rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#7D766E] mb-2">2026.10.09 배포</div>
                <h4 className="font-editorial text-2xl text-[#221F1D] mb-3">사랑과 이기심</h4>
                <p className="text-xs text-[#524B43] leading-relaxed mb-4">
                  "이기심 혹은 자기애는 사랑을 저해하는가, 오히려 사랑을 가능케 하는가?"
                </p>
                <div className="text-xs text-[#736C64] space-y-1 border-t border-[#221F1D]/10 pt-3">
                  <div><strong>참고:</strong> 에리히 프롬 『사랑의 기술』, 『존재의 기술』</div>
                  <div><strong>구성:</strong> 6개 심화 문답 + 반응 카드 생성</div>
                </div>
              </div>
              <div className="p-4 bg-[#EDE8DE] border-t border-[#221F1D]/10">
                <a 
                  href="https://egonuts-selflove.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#221F1D] hover:text-[#8E4C36]"
                >
                  <span>웹 발제문 열기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-[#221F1D]/15 bg-[#FAF8F4] rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#7D766E] mb-2">2026.10.18 배포</div>
                <h4 className="font-editorial text-2xl text-[#221F1D] mb-3">고독과 상실</h4>
                <p className="text-xs text-[#524B43] leading-relaxed mb-4">
                  "나만의 언어로 정의하는 고독부터, 상실과 고독을 마주하는 방식까지"
                </p>
                <div className="text-xs text-[#736C64] space-y-1 border-t border-[#221F1D]/10 pt-3">
                  <div><strong>참고:</strong> 무라카미 하루키 「토니 타키타니」 (이치카와 준 감독)</div>
                  <div><strong>구성:</strong> 영화와 문학 텍스트 결합 문답</div>
                </div>
              </div>
              <div className="p-4 bg-[#EDE8DE] border-t border-[#221F1D]/10">
                <a 
                  href="https://egonuts-stack-app.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#221F1D] hover:text-[#8E4C36]"
                >
                  <span>웹 발제문 열기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-[#221F1D]/15 bg-[#FAF8F4] rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#7D766E] mb-2">2026.10.24 배포</div>
                <h4 className="font-editorial text-2xl text-[#221F1D] mb-3">죽음에 관하여</h4>
                <p className="text-xs text-[#524B43] leading-relaxed mb-4">
                  "죽음이 내 삶에 던지는 의미와, 죽음을 마주하며 오늘을 사는 방식"
                </p>
                <div className="text-xs text-[#736C64] space-y-1 border-t border-[#221F1D]/10 pt-3">
                  <div><strong>참고:</strong> 미하엘 하우스켈러 『왜 살아야 하는가』</div>
                  <div><strong>구성:</strong> 삶의 유한성과 현재성에 관한 탐구</div>
                </div>
              </div>
              <div className="p-4 bg-[#EDE8DE] border-t border-[#221F1D]/10">
                <a 
                  href="https://egonuts-stack-app.vercel.app/on-death/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#221F1D] hover:text-[#8E4C36]"
                >
                  <span>웹 발제문 열기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Community Syndicate & Results Archive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Community Syndication */}
          <div className="lg:col-span-5 border border-[#221F1D]/15 p-6 bg-[#EFECE5] rounded-sm">
            <span className="text-xs font-mono uppercase text-[#8E4C36]">DIRECT AUDIENCE ACCESS</span>
            <h4 className="font-editorial text-2xl text-[#221F1D] mt-1 mb-3">
              강사 한 명이 아니라,<br />
              돌아가는 판이 함께 옵니다
            </h4>
            <p className="text-xs sm:text-sm text-[#544D44] leading-relaxed mb-6 font-light">
              기관이 프로그램을 개설했을 때 공고에만 의존하지 않고, 자체 보유한 채널을 통해 대상 청년을 직접 모집·연계할 수 있습니다.
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#FAF8F4] border border-[#221F1D]/10 rounded flex items-center justify-between">
                <div>
                  <strong>🪐 소모임 커뮤니티</strong>
                  <div className="text-[11px] text-[#736C64]">철학의 별 · 에고너츠 · 독서모임</div>
                </div>
                <span className="font-mono font-semibold text-[#221F1D]">합계 777명</span>
              </div>
              <div className="p-3 bg-[#FAF8F4] border border-[#221F1D]/10 rounded flex items-center justify-between">
                <div>
                  <strong>✍️ 브런치스토리 연재</strong>
                  <div className="text-[11px] text-[#736C64]">구독자 및 정기 독자층</div>
                </div>
                <span className="font-mono font-semibold text-[#221F1D]">발행 77편</span>
              </div>
              <div className="p-3 bg-[#FAF8F4] border border-[#221F1D]/10 rounded flex items-center justify-between">
                <div>
                  <strong>📣 네이버 블로그 송호들</strong>
                  <div className="text-[11px] text-[#736C64]">누적 방문 및 이웃 네트워크</div>
                </div>
                <span className="font-mono font-semibold text-[#221F1D]">누적 77,777회</span>
              </div>
            </div>

            <p className="text-[11px] text-[#7D766E] italic mt-4">
              "공지 후 7일 이내 정원 77.7% 마감 실적 보유"
            </p>
          </div>

          {/* Right: Concrete Artifacts Archive */}
          <div className="lg:col-span-7 border border-[#221F1D]/15 p-6 bg-[#FAF8F4] rounded-sm">
            <span className="text-xs font-mono uppercase text-[#8E4C36]">PORTFOLIO ARTIFACTS</span>
            <h4 className="font-editorial text-2xl text-[#221F1D] mt-1 mb-3">
              결과물 아카이브: 손에 잡히는 것으로
            </h4>
            <p className="text-xs sm:text-sm text-[#544D44] leading-relaxed mb-6 font-light">
              토론은 말로 증발하지 않습니다. 기관의 성과보고서에 넣을 수 있는 구체적인 산출물과 굿즈로 치환됩니다.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 border border-[#221F1D]/10 rounded bg-[#F8F6F1]">
                <div className="font-semibold text-[#221F1D]">종이 발제문</div>
                <div className="text-[11px] text-[#736C64] mt-1">기승전결 4부 구조 · 인용 3개</div>
              </div>
              <div className="p-3 border border-[#221F1D]/10 rounded bg-[#F8F6F1]">
                <div className="font-semibold text-[#221F1D]">4컷 이미지 발제문</div>
                <div className="text-[11px] text-[#736C64] mt-1">한눈에 들어오는 모바일 카드</div>
              </div>
              <div className="p-3 border border-[#221F1D]/10 rounded bg-[#F8F6F1]">
                <div className="font-semibold text-[#221F1D]">온라인 발제 웹앱</div>
                <div className="text-[11px] text-[#736C64] mt-1">직접 개발한 반응형 문답 시스템</div>
              </div>
              <div className="p-3 border border-[#221F1D]/10 rounded bg-[#F8F6F1]">
                <div className="font-semibold text-[#221F1D]">영화 투표 웹앱</div>
                <div className="text-[11px] text-[#736C64] mt-1">공동선을 주제로 함께 볼 영화 선정</div>
              </div>
              <div className="p-3 border border-[#221F1D]/10 rounded bg-[#F8F6F1]">
                <div className="font-semibold text-[#221F1D]">리더스클럽 책갈피</div>
                <div className="text-[11px] text-[#736C64] mt-1">참가자 슬로건 각인 굿즈 선물</div>
              </div>
              <div className="p-3 border border-[#221F1D]/10 rounded bg-[#F8F6F1]">
                <div className="font-semibold text-[#221F1D]">브런치스토리 연재</div>
                <div className="text-[11px] text-[#736C64] mt-1">『설익은 자서전』 10부작 등</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ATMOSPHERIC MARQUEE TICKER & CRAFTSMANSHIP PHOTO GRID
          Matching Loeven Morcel's "@loevenmorcel" Ticker & 4-photo craftsmanship row
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#EDE8DE] border-y border-[#221F1D]/15 overflow-hidden">
        {/* Repeating Editorial Ticker */}
        <div className="whitespace-nowrap overflow-hidden mb-10">
          <div className="inline-block animate-marquee font-editorial text-3xl sm:text-4xl text-[#221F1D]/60 tracking-wider">
            @PHILOMUMU &nbsp;·&nbsp; 필로무무 &nbsp;·&nbsp; 철학의 별 &nbsp;·&nbsp; EGONAUTS &nbsp;·&nbsp; 에고너츠 &nbsp;·&nbsp; TAUMAZEIN &nbsp;·&nbsp; 리더스클럽 &nbsp;·&nbsp; 송정훈 &nbsp;·&nbsp; 송호들 &nbsp;·&nbsp; @PHILOMUMU &nbsp;·&nbsp; 필로무무 &nbsp;·&nbsp; 철학의 별 &nbsp;·&nbsp; EGONAUTS &nbsp;·&nbsp; 에고너츠 &nbsp;·&nbsp; TAUMAZEIN &nbsp;·&nbsp;
          </div>
        </div>

        {/* 4-Column Atmospheric Photography Grid (Ref: 4 bathroom/closet detail shots) */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#221F1D]/15 bg-[#E2DBD0]">
            <img 
              src={IMAGES.reflectionCards} 
              alt="참가자 기록 카드와 만년필" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#221F1D]/15 bg-[#E2DBD0]">
            <img 
              src={IMAGES.dialogueTable} 
              alt="6인 토론 테이블 현장" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#221F1D]/15 bg-[#E2DBD0]">
            <img 
              src={IMAGES.portrait} 
              alt="진행자 송정훈 서재 초상" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#221F1D]/15 bg-[#E2DBD0]">
            <img 
              src={IMAGES.heroInterior} 
              alt="인문학 살롱 공간 전경" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 06 · VISION & PROMISE
          Matching Loeven Morcel's bottom arch motif with grand serif heading
      ───────────────────────────────────────────────────────────── */}
      <section id="vision" className="py-24 max-w-5xl mx-auto px-6 text-center">
        {/* Soft Arch Silhouette in Background (Ref: bottom RÉALISATIONS arch) */}
        <div className="relative mb-12">
          <div className="w-56 h-40 sm:w-80 sm:h-56 mx-auto rounded-t-full bg-[#E8E2D7]/60 -mb-20 sm:-mb-28 pointer-events-none" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#7D766E] relative z-10">
            SECTION 06 · PHILOSOPHY & VISION
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#221F1D] relative z-10 mt-2">
            추구하는 방향, 그리고 약속
          </h2>
        </div>

        <p className="font-editorial text-xl sm:text-2xl text-[#221F1D] max-w-3xl mx-auto leading-relaxed italic">
          “ 경험과 감각에서 출발해, 자기만의 관점을 길러 주는 자기탐구 워크숍 ”
        </p>
        <p className="mt-4 text-xs sm:text-sm text-[#615A52] max-w-2xl mx-auto leading-relaxed">
          돌아보면, 지금까지 '철학 토론'이라는 이름으로 해 온 일의 본질은 언제나 자기탐구였습니다.
          이제 그 이름을 정면에 걸고 청년들을 맞이합니다.
        </p>

        {/* 3 Promises as Facilitator */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 border border-[#221F1D]/15 bg-[#F4F1EA] rounded-sm">
            <span className="font-mono text-xs text-[#8E4C36]">PROMISE 01</span>
            <h4 className="font-editorial text-xl text-[#221F1D] mt-2 mb-2">직접 통과한 경험으로</h4>
            <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
              제가 겪고 탐구한 사례를 먼저 꺼내 보이고, 그것을 실마리로 참가자가 자기 이야기를 꺼내도록 돕습니다.
            </p>
          </div>
          <div className="p-6 border border-[#221F1D]/15 bg-[#F4F1EA] rounded-sm">
            <span className="font-mono text-xs text-[#8E4C36]">PROMISE 02</span>
            <h4 className="font-editorial text-xl text-[#221F1D] mt-2 mb-2">단상이 아니라 옆자리에서</h4>
            <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
              가르치는 권위자보다, 함께 배우고 탐구하는 사람으로 앉습니다. 나란히 오르는 걸음을 제안합니다.
            </p>
          </div>
          <div className="p-6 border border-[#221F1D]/15 bg-[#F4F1EA] rounded-sm">
            <span className="font-mono text-xs text-[#8E4C36]">PROMISE 03</span>
            <h4 className="font-editorial text-xl text-[#221F1D] mt-2 mb-2">전달이 아니라 끌어냄으로</h4>
            <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
              정답을 주입하는 강의보다, 각자의 가슴속에 잠자던 고유한 답을 끌어내는 판을 엽니다.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 07 · CONTACT & WORKSHOP INQUIRY (Interactive Cost Calculator)
      ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-[#EFECE4] border-t border-[#221F1D]/15">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7D766E]">CONTACT & BOOKING</span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#221F1D] mt-2">
              함께 열어 갈 자리가 있다면
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#615A52] leading-relaxed">
              지역 청년센터, 공공도서관, 평생학습관, 대학 및 기업 단체의 대상과 인원, 시간과 예산에 맞춰 최적의 커리큘럼을 조율해 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Transparent Fee Standard Table */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-[#221F1D]/15 p-6 bg-[#FAF8F4] rounded-sm">
                <h3 className="font-editorial text-xl text-[#221F1D] mb-4">진행 비용 기준표</h3>
                <div className="divide-y divide-[#221F1D]/10 text-xs">
                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <strong className="text-[#221F1D]">단회차 · 특강형</strong>
                      <div className="text-[11px] text-[#736C64]">기록 카드 + 인쇄 발제문</div>
                    </div>
                    <div className="text-right font-mono">
                      <div>강사료 77만 원</div>
                      <div className="text-[11px] text-[#8E4C36]">재료비 1인 7,777원</div>
                    </div>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <strong className="text-[#221F1D]">4회차 · 기본형</strong>
                      <div className="text-[11px] text-[#736C64]">보관용 카드 지갑 포함</div>
                    </div>
                    <div className="text-right font-mono">
                      <div>총 308만 원 (회당 77만)</div>
                      <div className="text-[11px] text-[#8E4C36]">재료비 1인 7,777원</div>
                    </div>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <strong className="text-[#221F1D]">10회차 · 심화형</strong>
                      <div className="text-[11px] text-[#736C64]">개인 질문집 인쇄 + 굿즈 제작</div>
                    </div>
                    <div className="text-right font-mono">
                      <div>총 770만 원 (회당 77만)</div>
                      <div className="text-[11px] text-[#8E4C36]">재료비 1인 77,777원</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#221F1D]/10 text-[11px] text-[#7D766E] space-y-1">
                  <div>· 교통비 및 부가세 포함 여부, 기관 규정에 따른 강사료 조정 협의 가능</div>
                  <div>· 문의 접수 후 <strong>7일 이내</strong> 정식 기획안 회신</div>
                  <div>· 시작 <strong>7주 전</strong>까지 일정이 확정되면 가장 안전합니다</div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="border border-[#221F1D]/15 p-6 bg-[#FAF8F4] rounded-sm space-y-3">
                <h4 className="text-xs font-mono uppercase text-[#736C64]">DIRECT CHANNELS</h4>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-[#5C554E]">✉️ 이메일</span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="font-medium text-[#221F1D]">0104wjdgns@gmail.com</span>
                    <button 
                      onClick={handleCopyEmail}
                      className="p-1 hover:bg-[#EAE5DC] rounded text-[#221F1D]"
                      title="이메일 주소 복사"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-[#5C554E]">✍️ 브런치스토리</span>
                  <a href="https://brunch.co.kr/@eb029d2b036446a" target="_blank" rel="noreferrer" className="underline hover:text-[#8E4C36]">
                    brunch.co.kr/@eb029d2b036446a
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-[#5C554E]">🪐 철학의 별</span>
                  <a href="https://www.somoim.co.kr/89173784-a4cd-11ee-92bf-0a10275b7c431" target="_blank" rel="noreferrer" className="underline hover:text-[#8E4C36]">
                    소모임 커뮤니티 페이지
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-[#5C554E]">📣 네이버 블로그</span>
                  <a href="https://blog.naver.com/philomumu" target="_blank" rel="noreferrer" className="underline hover:text-[#8E4C36]">
                    blog.naver.com/philomumu
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Workshop Calculator & Inquiry Builder */}
            <div className="lg:col-span-7 border border-[#221F1D]/15 p-6 sm:p-8 bg-[#FAF8F4] rounded-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#221F1D]/15 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[#8E4C36]">INTERACTIVE ESTIMATOR</span>
                  <h3 className="font-editorial text-2xl text-[#221F1D]">워크숍 견적 시뮬레이터</h3>
                </div>
                <span className="text-xs text-[#736C64]">즉시 산출 및 문의서 생성</span>
              </div>

              <div className="space-y-6">
                {/* Select Course */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#736C64] mb-2">01 / 희망 과정 선택</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setCalcCourse('single')}
                      className={`p-3 text-xs text-left rounded border transition-colors ${
                        calcCourse === 'single'
                          ? 'border-[#221F1D] bg-[#221F1D] text-[#F8F6F1]'
                          : 'border-[#221F1D]/20 bg-[#F8F6F1] text-[#221F1D] hover:bg-[#EDE8DE]'
                      }`}
                    >
                      <div className="font-semibold">단회차 특강</div>
                      <div className="text-[10px] opacity-80 mt-0.5">2시간 1회</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcCourse('basic')}
                      className={`p-3 text-xs text-left rounded border transition-colors ${
                        calcCourse === 'basic'
                          ? 'border-[#221F1D] bg-[#221F1D] text-[#F8F6F1]'
                          : 'border-[#221F1D]/20 bg-[#F8F6F1] text-[#221F1D] hover:bg-[#EDE8DE]'
                      }`}
                    >
                      <div className="font-semibold">4회차 기본형</div>
                      <div className="text-[10px] opacity-80 mt-0.5">4주 정규</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcCourse('deep')}
                      className={`p-3 text-xs text-left rounded border transition-colors ${
                        calcCourse === 'deep'
                          ? 'border-[#221F1D] bg-[#221F1D] text-[#F8F6F1]'
                          : 'border-[#221F1D]/20 bg-[#F8F6F1] text-[#221F1D] hover:bg-[#EDE8DE]'
                      }`}
                    >
                      <div className="font-semibold">10회차 심화형</div>
                      <div className="text-[10px] opacity-80 mt-0.5">10주 + 책/굿즈</div>
                    </button>
                  </div>
                </div>

                {/* Number of People */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono uppercase text-[#736C64]">02 / 예상 참가 인원 (단위 테이블: 6명)</label>
                    <span className="font-mono text-xs font-semibold text-[#8E4C36]">{calcPeople}명</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="30"
                    step="1"
                    value={calcPeople}
                    onChange={(e) => setCalcPeople(parseInt(e.target.value))}
                    className="w-full accent-[#221F1D] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#7D766E] font-mono mt-1">
                    <span>4명 (소수정예)</span>
                    <span>12명 (2개 테이블)</span>
                    <span>18명 (3개 테이블)</span>
                    <span>30명 (대형)</span>
                  </div>
                </div>

                {/* Organization Type */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#736C64] mb-2">03 / 기관 및 단체 형태</label>
                  <select
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
                    className="w-full p-2.5 bg-[#F8F6F1] border border-[#221F1D]/20 rounded text-xs text-[#221F1D] focus:outline-none focus:border-[#221F1D]"
                  >
                    <option value="청년센터 · 지자체 청년 공간">청년센터 · 지자체 청년 공간</option>
                    <option value="공공도서관 · 평생학습관">공공도서관 · 평생학습관</option>
                    <option value="대학교 · 청년 동아리 · 학과 특강">대학교 · 청년 동아리 · 학과 특강</option>
                    <option value="문화재단 · 인문학 공공기관">문화재단 · 인문학 공공기관</option>
                    <option value="기업 조직문화 · 사내 인문 살롱">기업 조직문화 · 사내 인문 살롱</option>
                  </select>
                </div>

                {/* Calculated Result Display */}
                <div className="p-4 bg-[#EDE8DE] rounded border border-[#221F1D]/15 space-y-2">
                  <div className="flex justify-between text-xs text-[#5C554E]">
                    <span>선택 과정:</span>
                    <strong className="text-[#221F1D]">{estimate.title}</strong>
                  </div>
                  <div className="flex justify-between text-xs text-[#5C554E]">
                    <span>강사료 합계:</span>
                    <span className="font-mono">{estimate.instructorFee.toLocaleString()}원</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#5C554E]">
                    <span>재료비 ({calcPeople}인):</span>
                    <span className="font-mono">{estimate.materialFee.toLocaleString()}원</span>
                  </div>
                  <div className="pt-2 border-t border-[#221F1D]/15 flex justify-between items-baseline">
                    <span className="text-xs font-semibold text-[#221F1D]">예상 총액:</span>
                    <span className="font-editorial text-2xl font-bold text-[#8E4C36] tabular-nums">
                      {estimate.total.toLocaleString()} <span className="text-xs font-sans font-normal text-[#221F1D]">원</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-[#736C64]">{estimate.details}</p>
                </div>

                {/* Actions: Copy or Mailto */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleCopyInquiryTemplate}
                    className="flex-1 py-2.5 px-4 bg-[#221F1D] text-[#F8F6F1] text-xs font-medium rounded hover:bg-[#38332F] transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    {inquiryCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>문의 양식 복사 완료!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>문의 내용 복사하기</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:0104wjdgns@gmail.com?subject=${encodeURIComponent(`[워크숍 문의] ${orgType} - ${estimate.title}`)}&body=${encodeURIComponent(`안녕하세요, 송정훈 강사님.\n\n${orgType}에서 [${estimate.title}] 워크숍 관련 문의드립니다.\n\n- 희망 일정:\n- 예상 인원: ${calcPeople}명\n- 공간 및 특이사항:\n\n감사합니다.`)}`}
                    className="py-2.5 px-4 border border-[#221F1D] text-[#221F1D] hover:bg-[#EDE8DE] text-xs font-medium rounded transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>이메일 바로 보내기</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FOOTER
          Matching Loeven Morcel's framed architectural box footer
      ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#FAF8F4] border-t border-[#221F1D]/15 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-[#221F1D]/15 p-8 sm:p-12 bg-[#F4F1EA] rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Brand Mark (Ref: LM Box Logo) */}
              <div className="md:col-span-3">
                <div className="w-16 h-16 bg-[#221F1D] text-[#F8F6F1] flex flex-col items-center justify-center p-2">
                  <span className="font-editorial text-2xl font-light">SJ</span>
                  <span className="text-[7px] tracking-widest text-[#D8D2C6]">PHILOMUMU</span>
                </div>
                <div className="font-editorial text-lg text-[#221F1D] mt-3">
                  송정훈 <span className="text-xs font-sans text-[#7D766E] font-light">· 필로무무</span>
                </div>
                <p className="text-xs text-[#6B645B] mt-1 font-light">
                  인문철학 · 자기탐구 워크숍 기획자
                </p>
                <div className="text-[11px] font-mono text-[#857E75] mt-3">
                  서울 관악구 & 도봉구 활동
                </div>
              </div>

              {/* Column 1: Site Map */}
              <div className="md:col-span-3 space-y-2 text-xs">
                <div className="font-mono uppercase text-[#736C64] mb-3">SECTIONS</div>
                <div><a href="#about" className="text-[#524B43] hover:text-[#221F1D]">01 · 강사 소개 (About)</a></div>
                <div><a href="#why" className="text-[#524B43] hover:text-[#221F1D]">02 · 왜 자기탐구인가 (Why)</a></div>
                <div><a href="#program" className="text-[#524B43] hover:text-[#221F1D]">03 · 진행 방식 & 커리큘럼</a></div>
                <div><a href="#strengths" className="text-[#524B43] hover:text-[#221F1D]">04 · 운영 강점 & 만족도</a></div>
                <div><a href="#difference" className="text-[#524B43] hover:text-[#221F1D]">05 · 발제문 라이브러리</a></div>
                <div><a href="#contact" className="text-[#524B43] hover:text-[#221F1D]">06 · 비용 및 워크숍 문의</a></div>
              </div>

              {/* Column 2: External Communities */}
              <div className="md:col-span-3 space-y-2 text-xs">
                <div className="font-mono uppercase text-[#736C64] mb-3">COMMUNITY LINKS</div>
                <div>
                  <a href="https://www.somoim.co.kr/89173784-a4cd-11ee-92bf-0a10275b7c431" target="_blank" rel="noreferrer" className="text-[#524B43] hover:text-[#221F1D] inline-flex items-center gap-1">
                    소모임 철학의 별 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div>
                  <a href="https://brunch.co.kr/@eb029d2b036446a" target="_blank" rel="noreferrer" className="text-[#524B43] hover:text-[#221F1D] inline-flex items-center gap-1">
                    브런치스토리 연재 작가 송호들 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div>
                  <a href="https://blog.naver.com/philomumu" target="_blank" rel="noreferrer" className="text-[#524B43] hover:text-[#221F1D] inline-flex items-center gap-1">
                    네이버 블로그 필로무무 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div>
                  <a href="https://thaumazein.kr/readers-club/%ec%9d%b4%ea%b8%b0%ec%8b%ac-%ed%98%b9%ec%9d%80-%ec%9e%90%ea%b8%b0%ec%95%a0%eb%8a%94-%ec%82%ac%eb%9e%91%ec%9d%84-%ec%a0%80%ed%95%b4%ed%95%98%eb%8a%94%ea%b0%80-%ea%b0%80%eb%8a%a5%ec%bc%80-%ed%95%98/" target="_blank" rel="noreferrer" className="text-[#524B43] hover:text-[#221F1D] inline-flex items-center gap-1">
                    타우마제인 리더스클럽 발제문 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Column 3: Contact & Direct Message (Ref: INFOLETTRE) */}
              <div className="md:col-span-3">
                <div className="font-mono uppercase text-[#736C64] mb-3 text-xs">DIRECT CONTACT</div>
                <div className="text-xs text-[#524B43] leading-relaxed mb-4">
                  일정과 프로그램 기획 관련 문의는 이메일로 보내주시면 7일 이내에 회신드립니다.
                </div>
                <div className="flex items-center border-b border-[#221F1D]/40 pb-2">
                  <input 
                    type="text" 
                    readOnly
                    value="0104wjdgns@gmail.com"
                    className="w-full bg-transparent text-xs font-mono text-[#221F1D] focus:outline-none"
                  />
                  <button 
                    onClick={handleCopyEmail}
                    className="text-xs text-[#221F1D] hover:text-[#8E4C36] font-mono shrink-0 pl-2"
                  >
                    {copiedEmail ? '복사됨' : '복사 →'}
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 pt-6 border-t border-[#221F1D]/10 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#7D766E] gap-2">
              <div>© 2026 송정훈 (필로무무). 모든 권리 보유. All rights reserved.</div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setShowDesignSpecModal(true)}
                  className="hover:text-[#221F1D] underline"
                >
                  설계 시스템 및 분석 요약 보기
                </button>
                <a href="#top" className="hover:text-[#221F1D]">맨 위로 ↑</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────────
          DESIGN SYSTEM & SPECIFICATION MODAL
          Fulfilling Requirement 2 (Reference Design System Summary Table)
          and Requirement 3 (One-line Summary of Changes)
      ───────────────────────────────────────────────────────────── */}
      {showDesignSpecModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF8F4] border border-[#221F1D]/20 rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl">
            <div className="flex items-start justify-between pb-4 border-b border-[#221F1D]/15 mb-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#8E4C36]">DESIGN SYSTEM AUDIT</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#221F1D]">참고 설계 시스템 요약표 & 변경점</h3>
              </div>
              <button 
                onClick={() => setShowDesignSpecModal(false)}
                className="p-1.5 hover:bg-[#EDE8DE] rounded text-[#221F1D]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-[#4E473F] leading-relaxed">
              
              {/* Requirement 3: One Line Summary */}
              <div className="p-4 bg-[#EDE8DE] rounded border border-[#221F1D]/15">
                <div className="text-xs font-mono uppercase text-[#8E4C36] font-semibold mb-1">
                  📌 원본 대비 변경점 (색상·폰트·콘텐츠 매핑) 한 줄 요약
                </div>
                <p className="text-xs sm:text-sm text-[#221F1D] font-medium leading-relaxed">
                  Loeven Morcel의 건축적 하이엔드 가구 제작 언어(기념비적 세리프 타이포, 모노그램 프레임, 둥근 아치 모티프, 번호형 서비스 아코디언, 티커 리본)를 유지하되, 따뜻한 종이·먹물 서재 톤과 인문철학·자기탐구 워크숍의 6인 대화 및 발제문 아카이브 구조로 독자적 재설계 완료.
                </p>
              </div>

              {/* Requirement 2: Design System Table */}
              <div>
                <h4 className="font-semibold text-sm text-[#221F1D] mb-3">설계 시스템 요약표</h4>
                <div className="border border-[#221F1D]/15 rounded overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-[#EAE5DC] border-b border-[#221F1D]/15 text-[#221F1D] font-mono">
                        <th className="py-2.5 px-3">항목</th>
                        <th className="py-2.5 px-3">참고 사이트 패턴 (Loeven Morcel)</th>
                        <th className="py-2.5 px-3">본 포트폴리오 적용 스펙 (송정훈 필로무무)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#221F1D]/10">
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#221F1D]">간격 스케일 (Spacing)</td>
                        <td className="py-2.5 px-3">섹션 간 96~120px 여백, 1px 헤어라인 디바이더, 내부 패딩 24~48px</td>
                        <td className="py-2.5 px-3">섹션 패딩 80~96px, 1px 보더 (`#221F1D/15`), 컨테이너 최대폭 1280px (1440px baseline)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#221F1D]">타이포 스케일 (Typography)</td>
                        <td className="py-2.5 px-3">High-contrast Display Serif 헤드라인 (clamp 2.5~4.5rem) + 세련된 Sans</td>
                        <td className="py-2.5 px-3">Cormorant Garamond & Noto Serif KR (디스플레이·인용) + Plus Jakarta Sans (본문·메타)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#221F1D]">색상 팔레트 (Color Palette)</td>
                        <td className="py-2.5 px-3">트래버틴 스톤, 웜 베이지, 딥 브라운/블랙 인테리어 톤</td>
                        <td className="py-2.5 px-3">웜 페이퍼 (`#F8F6F1`), 먹물 잉크 (`#221F1D`), 앤틱 테라코타 악센트 (`#8E4C36`), 모래 석재 (`#EFECE5`)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#221F1D]">인터랙션 스펙 (Interactions)</td>
                        <td className="py-2.5 px-3">호버 투명도 감쇄, 무한 텍스트 티커 롤링, 번호형 리스트 인터랙션</td>
                        <td className="py-2.5 px-3">커리큘럼 탭 전환, 실시간 워크숍 견적 계산기, 메일/양식 클립보드 원클릭 복사, 티커 리본</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#221F1D]">반응형 (Breakpoints)</td>
                        <td className="py-2.5 px-3">모바일 1컬럼 분화, 데스크톱 12컬럼 비대칭 그리드 (768px, 1024px, 1280px)</td>
                        <td className="py-2.5 px-3">모바일 단일 컬럼 → 태블릿 2컬럼 분화 → 데스크톱 5열 KPI 및 12열 비대칭 스플릿 그리드</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Layout Mapping */}
              <div>
                <h4 className="font-semibold text-sm text-[#221F1D] mb-2">섹션별 구조적 매핑</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li><strong>Hero:</strong> Loeven Morcel의 전면 영문 세리프 & 사각 모노그램 박스 프레임 → 송정훈 대표 카피("스스로 길어 올린 질문 하나를...") & 'PHILOMUMU' 모노그램 및 아카데믹 연혁 배지 매핑.</li>
                  <li><strong>Featured Section:</strong> 곡선 절개선과 프로젝트 상세 사진 → 01 강사 소개(프로필 사진, 활동 약력, 4개 활동 채널 언박스드 링크) 매핑.</li>
                  <li><strong>Arch Collection:</strong> 가구 사진이 담긴 클래식 아치 프레임 & 3열 가구 카드 → 원탁 6인 대화 아치 프레임 & 청년 방황의 3가지 사회적 증거(서점 순위, 매대, 댓글) 매핑.</li>
                  <li><strong>Testimonial:</strong> Micheline et Jean의 중앙 이탤릭 인용문 → 리더스클럽 5기 참가자 설문 만족도 5.0 만점 증언 매핑.</li>
                  <li><strong>Numbered Services:</strong> No. 1~5 치수 측정/제작/설치 공정 → 워크숍의 No. 1~6 진행 흐름(주제공표~카드회수) & 3종 커리큘럼 탭 매핑.</li>
                  <li><strong>Ticker & Gallery:</strong> @loevenmorcel 롤링 텍스트 & 4분할 디테일 컷 → @PHILOMUMU 티커 & 만년필·기록카드·원탁대화 현장 기록 매핑.</li>
                  <li><strong>Footer:</strong> 사각 아웃라인의 박스형 푸터 & 뉴스레터 → 송정훈 워크숍 기준표, 인터랙티브 견적 시뮬레이터, 다이렉트 이메일 복사기 매핑.</li>
                </ul>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-[#221F1D]/15 text-right">
              <button 
                onClick={() => setShowDesignSpecModal(false)}
                className="px-4 py-2 bg-[#221F1D] text-[#F8F6F1] text-xs font-semibold rounded hover:bg-[#38332F]"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
