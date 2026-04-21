import React, { useState, useEffect } from 'react';
import { 
  HeartPulse, Stethoscope, Scan, ShieldAlert, Activity, Dna, 
  Syringe, Cat, ArrowRight, CheckCircle2, Clock, Phone, 
  Menu, X, ChevronRight, Info, Award, Heart, Plus, Minus, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface SubSection {
  title: string;
  body: string | string[];
}

interface CenterData {
  id: string;
  name: string;
  icon: React.ReactNode;
  summary: string;
  description: string;
  sections: SubSection[];
  keyFeatures?: string[];
}

// --- PART 1 CENTERS ---
const PART1_CENTERS: CenterData[] = [
  {
    id: 'intervention',
    name: '인터벤션센터',
    icon: <HeartPulse />,
    summary: '첨단 영상장비를 이용한 미세침습 무수술 치료 (국내 최초)',
    description: '영상의학을 기반으로 한 인터벤션 시술은 높은 전문성이 요구되며, 고가의 장비가 필요한 분야입니다. 해마루에서는 최신 최고 사양의 혈관투시장비를 이용하여 해외 전문의의 training을 직접 받은 인터벤션 특화 전공의가 시술합니다.',
    keyFeatures: [
      '국내 최초 ROADMAP 기능을 탑재한 하이엔드급 C-arm(GE, OEC elite CFD) 도입',
      '저선량, 고퀄리티 영상 획득으로 시술 안정성 극대화',
      '마취과 전공의 상주로 심장 시술 시 안정적인 마취 가능',
      '해외 전문의 트레이닝 수료 영상의학 특화 의료진 전담'
    ],
    sections: [
      {
        title: '인터벤션 시술이란?',
        body: '다양한 첨단 영상장비를 이용하여 미세침습으로 수술 없이 치료하는 것을 말합니다. 몸 속의 혈관을 볼 수 있는 고가의 혈관 투시 장비를 이용하면 반려동물의 아주 미세한 모세혈관까지 볼 수 있으며, 의료용 카테터나 바늘을 치료가 필요한 부위로 이동시켜 치료합니다.'
      },
      {
        title: '동맥색전술 (TAE/TACE) - 종양 치료',
        body: '종양으로 공급되는 혈관을 막아 종양의 크기를 줄여주는 시술입니다. 단순히 혈관만 막는 TAE와 항암제 주입 미세구를 이용하는 TACE로 구분됩니다. 종양을 굶기는 효과(tumor starvation)를 유발하여 파열 위험을 낮추고 통증을 효과적으로 조절합니다. 간, 전립선, 비강, 두부 종양 등에 적용됩니다.'
      },
      {
        title: '심장 혈관 중재술 (Cardiac Intervention)',
        body: [
          'PDA(동맥관 개존증) 교정 시술: ACDO, coil 등을 이용하여 비침습적으로 교정',
          '폐동맥 협착 및 대동맥 협착 풍선판막성형술 시행',
          'V-clamp 판막 성형술 도입 (국내 최다 케이스 보유)',
          '실시간 투시 영상과 경식도 심장 초음파(TEE) 병행으로 정교함 확보'
        ]
      },
      {
        title: '스텐트 시술 (기관/요도/비인두)',
        body: [
          '기관 허탈(tracheal collapse): 미국 Infiniti社 VET STENT 전 사이즈 상시 보유',
          '요도 폐색: 비침습적 요도 스텐트 시술로 2차 감염 최소화 및 즉각 배뇨',
          '비인두 협착: 협착 부위 스텐트 삽입으로 호흡 통로 확보'
        ]
      }
    ]
  },
  {
    id: 'surgery',
    name: '전문수술센터',
    icon: <Stethoscope />,
    summary: '20년 데이터 기반, 분과별 전문 수술팀 및 독립 멸균 수술실',
    description: '2021년 수술실을 별관으로 확장 이전하여 일반외과, 정형신경외과, 안과, 치과 분야를 전문적으로 시행합니다. 4곳의 독립된 멸균 수술실(4 sterile surgical rooms)과 추가 응급 수술실을 갖추고 있습니다.',
    sections: [
      {
        title: '일반외과 (01 ~ 07 세부 분과)',
        body: [
          '01 흉부 외과: 심장, 대동맥, 폐, 기관, 식도 수술 (심장사상충 제거, 폐엽 절제 등)',
          '02 위장관 외과: 위장관 이물, 종양, 장 중첩증, 염증성 질환 등',
          '03 비뇨기 외과: 신장, 요관(SUB 장착), 방광, 요도 결석 수술 및 고양이 회음요도루조성술',
          '04 외상 외과: 다발성 장기 손상 및 출혈 수복 응급 수술',
          '05 종양 외과: 장기 및 피부 종양 절제와 성형/재건술',
          '06 소아 외과: PDA, PSS, PPDH 등 선천성 기형 교정',
          '07 최소침습수술: 복강경 중성화 및 간 생검 (상처 최소화)'
        ]
      },
      {
        title: '정형/신경외과 및 특수 수술',
        body: [
          '골절 수술: 단순/분쇄/성장판 골절 및 불유합 환자 골이식재 적용',
          '관절 수술: 슬개골 탈구, 전십자인대 단열(TPLO, TWO), 고관절 이형성(DPO, DVO, 고관절 전치환술-THR)',
          '신경외과: 척추 디스크(Ventral slot, Hemilaminectomy), 뇌수두증(VP shunt), AAI 고정술',
          '안과: 백내장 초음파 유화술(인공수정체 삽입), 녹내장 수술, 각막 질환 전문 수술',
          '치과: 신경치료 및 크라운, 하악/상악 절제술을 포함한 구강 종양 수술'
        ]
      }
    ]
  },
  {
    id: 'imaging',
    name: '영상진단센터',
    icon: <Scan />,
    summary: '1.5T MRI 및 16CH CT를 이용한 정밀 진단 시스템',
    description: '대학병원급 영상 장비를 도입하여 정확한 진단을 내립니다. 영상의학 전공의들이 실시간으로 판독하여 외과 수술 및 내과 치료의 방향을 명확히 제시합니다.',
    sections: [
      {
        title: '보유 고사양 장비',
        body: [
          'MRI (GE 1.5T Creator): 뇌수막염, 뇌종양, 신경계 질환, 디스크 정밀 평가',
          'CT (16채널 MDCT): 폐 미세 결절, 비강 병변, 복강 종괴 및 혈관 침습 평가',
          '초음파: Vivid E95, Logic E9, Aplio i800 등 최상위 기종 보유',
          'C-arm: OEC elite CFD 도입으로 시술 중 실시간 투시 영상 제공'
        ]
      },
      {
        title: '특수 영상 기술',
        body: '심근의 움직임을 평가하는 TDI 및 Strain imaging, 조영 초음파(CEUS) 및 탄성 초음파를 통한 종양의 양/악성 감별 진단 서비스를 제공합니다.'
      }
    ]
  },
  {
    id: 'infection',
    name: '감염관리센터',
    icon: <ShieldAlert />,
    summary: '2차 감염 0% 지향, 철저한 무균 수술 환경 운영',
    description: '해마루는 환자의 안전을 위해 수술실 환경을 대학병원급으로 관리합니다. 철저한 구역 분리와 장비 멸균을 통해 수술 후 합병증을 방지합니다.',
    keyFeatures: [
      '양압 시스템 및 HEPA 필터를 통한 수술실 공기 무균 상태 유지',
      '고압 증기 멸균기 및 플라즈마 저온 멸균 이중 가동',
      '모든 수술용 소모품 1회 사용 후 즉시 폐기 원칙 엄수',
      '진료/수술 구역의 완벽한 동선 분리로 교차 오염 원천 차단'
    ],
    sections: []
  }
];

// --- PART 2 CENTERS ---
const PART2_CENTERS: CenterData[] = [
  {
    id: 'er',
    name: '응급중환자의료센터',
    icon: <Activity />,
    summary: '24시간 365일 전문 수의사 3명 + 테크니션 4명 전담 팀 상주',
    description: '2008년부터 국내 최초로 전담 전문 인력이 상주하는 응급 및 중환자 진료를 시작했습니다. 4조 2교대 시스템을 통해 야간에도 주간과 동일한 수준의 고퀄리티 진료를 보장합니다.',
    keyFeatures: [
      '국내 최초 4조 2교대 시스템 도입 (팀별 수의사 3인, 간호사 4인 구성)',
      '24시간 상시 표준화된 응급 의료 서비스 제공',
      '최신 생체 신호 모니터링 및 실시간 집중 케어 시스템',
      '고양이 전용 중환자실 및 전염병 격리실 별도 운영'
    ],
    sections: [
      {
        title: '응급 내원이 필요한 상황 (Emergency Check-list)',
        body: [
          '신경/심혈관: 발작, 갑작스러운 마비, 호흡곤란, 청색증, 실신',
          '외상/중독: 교통사고, 추락, 교상, 화상, 독성 유발 물질 섭취',
          '대사/급성질환: 간부전, 신부전 만성 질환의 갑작스러운 악화',
          '외과적 응급: 장폐색, 자궁축농증, 방광파열, 비틀림(GDV)'
        ]
      }
    ]
  },
  {
    id: 'oncology',
    name: '종양·항암센터',
    icon: <Dna />,
    summary: '정밀 병기 평가와 개인 맞춤형 멀티 모달 항암 치료',
    description: '반려동물의 고령화로 인해 증가하는 종양 질환을 전문적으로 다룹니다. 영상진단센터와의 긴밀한 협진을 통해 정확한 상태를 파악하고, 항암/표적/면역 치료를 통합적으로 시행합니다.',
    keyFeatures: [
      '국내 최고 수준의 항암 조제 시스템 및 안전 가이드 준수',
      'Tumor Board 운영: 외과/영상의학/내과 전문의 공동 협진 시스템',
      '표적 항암제 및 최신 면역 항암 요법 적용',
      '펫로스 증후군 예방을 위한 호스피스 및 완화 케어 병행'
    ],
    sections: [
      {
        title: '종양 정밀 진단 및 치료 프로세스',
        body: [
          '정밀 병기 평가: MRI, CT, 초음파를 통한 원발 종양 크기 및 전이 여부 확진',
          '세포 분석(FNA) 및 조직 검사: 종양의 등급(Grade)과 성격 정밀 분석',
          '개인 맞춤형 항암 플랜: 환자의 나이, 전신 상태, 종양 종류에 따른 최적화된 처방',
          '혈액학적 모니터링: 항암 치료 중 발생할 수 있는 골수 독성 등 부작용 집중 관리'
        ]
      },
      {
        title: '항암 치료의 종류',
        body: [
          '전신적 항암 요법: 전통적인 세포 독성 항암제를 이용한 치료',
          '표적 치료(Targeted Therapy): 특정 유전자나 암세포를 타격하는 최신 정밀 약물 요법',
          '면역 항암 요법: 체내 면역 체계를 활성화하여 암세포 성장을 억제하는 고난도 치료',
          '완화 치료(Palliative Care): 말기 환자의 통증 조절 및 삶의 질 유지를 위한 집중 케어'
        ]
      }
    ]
  },
  {
    id: 'internal',
    name: '내과진료센터',
    icon: <Syringe />,
    summary: '10개 세부 분과 전문 시스템을 갖춘 난치성 진료 허브',
    description: '순환기, 종양, 소화기 등 총 10가지의 전문 분과를 운영하여 복합 질환에 강점을 가집니다. 검사부터 처방까지 환자 맞춤형 정밀 의료를 실천합니다.',
    sections: [
      {
        title: '내과 10대 세부 분과 (Full List)',
        body: [
          '01 순환기 내과: 선천성 및 후천성 심장 질환 진단 및 시술 관리',
          '02 종양 내과: 정밀 병기 평가 및 환자 맞춤형 항암/표적 약물 요법',
          '03 소화기 내과: 만성 위장관 질환(IBD) 전문 관리 및 내시경 시술',
          '04 고양이 내과: 고양이 습성을 고려한 전문 진료 및 노령 묘 케어',
          '05 내분비 내과: 당뇨병, 부신피질 질환, 갑상선 질환 등 호르몬 치료',
          '06 피부과: 만성 알러지 및 호르몬성 피부 질환 정밀 진단',
          '07 신경 내과: 특화 MRI 판독 기반 신경계 원인 규명 및 조절',
          '08 혈액·면역 내과: 빈혈 및 면역 매개성 질환 전문 관리',
          '09 중재적 시술: 내과적 접근을 통한 무수술 보조 시술',
          '10 임상병리실: 당일 검사 결과 확인 및 최고 수준 데이터 분석'
        ]
      }
    ]
  },
  {
    id: 'cat',
    name: '고양이의료센터',
    icon: <Cat />,
    summary: 'ISFM 골드 등급 인증, 고양이만을 위한 전용 독립 공간',
    description: '고양이는 작은 강아지가 아닙니다. 고양이 특유 예민함을 이해하고 스트레스를 최소화하는 Fear Free 진료 시설을 완비하였습니다.',
    keyFeatures: [
      '강아리 소리와 냄새가 차단된 독립 대기실 및 진료실',
      '고양이 전용 입원실 (조도 조절 기능 및 소음 차단 시스템)',
      'Feliway 페로몬 상시 가동으로 심리적 안정 유도',
      '고양이 특화 질환(신부전, 구내염, 비뇨기) 집중 관리팀 운영'
    ],
    sections: []
  },
  {
    id: 'rehab',
    name: '재활치료센터',
    icon: <CheckCircle2 />,
    summary: '전문 재활 장비와 운동 프로그램을 연계한 빠른 회복 지원',
    description: '수술 직후 통증 완화부터 만성 질환 환자의 근육 강화까지 책임집니다. 개별 환자의 상태에 맞춘 맞춤형 재활 플랜을 제공합니다.',
    sections: [
      {
        title: '첨단 재활 물리 치료 프로그램',
        body: [
          '수중 런닝머신: 부력을 이용한 관절 부담 최소화 근육 강화',
          '4파장 레이저 치료: 레이저를 이용한 염증 완화 및 세포 재생 촉진',
          '체외충격파(ESWT): 에너지 전달을 통한 조기 회복 및 통증 차단',
          '고압산소치료: 고농도 산소 공급으로 상처 회복 및 세포 활성화 지원',
          'Cryo 냉각치료: 급성 부종 완화 및 염증 억제'
        ]
      }
    ]
  },
  {
    id: 'mind',
    name: '반려마음센터',
    icon: <Heart />,
    summary: '국내 유일 고퀄리티 펫로스 증후군 및 이별 준비 상담',
    description: '가족을 떠나보내는 과정과 그 이후의 상실감을 보듬습니다. 전문 심리 상담사가 상주하여 보호자의 정서적 안정을 돕습니다.',
    sections: [
      {
        title: '센터 주요 상담 서비스',
        body: [
          '사전 이별 상담: 만성 환자 가족의 정서적 사후 지원 예약',
          '펫로스 증후군 1:1 상담: 상실의 고통을 전문가와 함께 나누는 치유 과정',
          '메모리얼 가이드: 아이와의 소중한 추억을 간직하는 방법 제안'
        ]
      }
    ]
  }
];

export default function App() {
  const [activePart, setActivePart] = useState<1 | 2>(1);
  const [selectedId, setSelectedId] = useState<string>('intervention');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const currentData = activePart === 1 ? PART1_CENTERS : PART2_CENTERS;
  const activeCenter = currentData.find(c => c.id === selectedId) || currentData[0];

  useEffect(() => {
    setExpandedSection(0);
  }, [selectedId]);

  const toggleSection = (idx: number) => {
    setExpandedSection(expandedSection === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- Sticky Navbar --- */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-[100] border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setActivePart(1); setSelectedId('intervention'); window.scrollTo(0, 0); }}>
            <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center text-white font-black text-xl transform rotate-3">H</div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight text-brand-secondary">해마루 <span className="text-brand-primary">이차진료 동물병원</span></h1>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {/* Category 1 */}
            <div className="relative group px-1 py-4">
              <button 
                onClick={() => setActivePart(1)}
                className={`text-[14px] font-bold h-11 px-5 rounded-xl transition-all flex items-center gap-1.5 ${activePart === 1 ? 'text-brand-primary bg-orange-50' : 'text-gray-500 hover:text-brand-primary'}`}
              >
                첨단 시술·수술 센터
                <ChevronRight size={14} className={`transform transition-transform ${activePart === 1 ? 'rotate-90' : 'group-hover:rotate-90'}`} />
              </button>
              
              <div className="absolute top-[calc(100%-8px)] left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-3 w-60 ring-1 ring-black/5">
                  <div className="text-[10px] text-gray-400 font-bold mb-2 px-3 uppercase tracking-widest">Specialized Centers</div>
                  {PART1_CENTERS.map(center => (
                    <button
                      key={center.id}
                      onClick={() => { setActivePart(1); setSelectedId(center.id); }}
                      className={`w-full flex items-center gap-3.5 p-3.5 rounded-xl text-left text-[14px] font-bold transition-all ${selectedId === center.id && activePart === 1 ? 'bg-orange-50 text-brand-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-brand-primary'}`}
                    >
                      <div className="shrink-0">{React.cloneElement(center.icon as React.ReactElement, { size: 16 })}</div>
                      {center.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Category 2 */}
            <div className="relative group px-1 py-4">
              <button 
                onClick={() => setActivePart(2)}
                className={`text-[14px] font-bold h-11 px-5 rounded-xl transition-all flex items-center gap-1.5 ${activePart === 2 ? 'text-brand-primary bg-orange-50' : 'text-gray-500 hover:text-brand-primary'}`}
              >
                질환관리·케어 센터
                <ChevronRight size={14} className={`transform transition-transform ${activePart === 2 ? 'rotate-90' : 'group-hover:rotate-90'}`} />
              </button>
              
              <div className="absolute top-[calc(100%-8px)] left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-3 w-60 ring-1 ring-black/5">
                  <div className="text-[10px] text-gray-400 font-bold mb-2 px-3 uppercase tracking-widest">Care Centers</div>
                  {PART2_CENTERS.map(center => (
                    <button
                      key={center.id}
                      onClick={() => { setActivePart(2); setSelectedId(center.id); }}
                      className={`w-full flex items-center gap-3.5 p-3.5 rounded-xl text-left text-[14px] font-bold transition-all ${selectedId === center.id && activePart === 2 ? 'bg-orange-50 text-brand-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-brand-primary'}`}
                    >
                      <div className="shrink-0">{React.cloneElement(center.icon as React.ReactElement, { size: 16 })}</div>
                      {center.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:031-781-2992" className="flex items-center gap-2 bg-brand-secondary text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-black transition-all shadow-md active:scale-95">
              <Phone size={14} /> 031.781.2992
            </a>
          </div>

          <button className="md:hidden p-2 text-gray-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <main className="pt-20 min-h-screen bg-white">
        <section className="max-w-6xl mx-auto p-6 md:p-12 lg:p-20 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div key={selectedId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="max-w-4xl mx-auto">
              <header className="mb-14">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/5 text-brand-primary text-[10px] font-bold rounded-lg mb-6 uppercase tracking-[0.2em] border border-brand-primary/10">
                  <Activity size={12} /> Specialized Medical Service
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6 leading-tight tracking-tight">{activeCenter.name}</h2>
                <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">{activeCenter.summary}</p>
              </header>

              <div className="p-8 md:p-10 bg-brand-secondary text-white rounded-[40px] mb-16 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand-primary"><Info size={20} /> Center Overview</h3>
                <p className="text-gray-300 leading-relaxed font-light text-base md:text-lg">{activeCenter.description}</p>
              </div>

              {activeCenter.keyFeatures && (
                <div className="mb-16">
                   <h3 className="text-xl font-bold text-brand-secondary mb-8 pl-4 border-l-4 border-brand-primary">핵심 역량 및 시설</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {activeCenter.keyFeatures.map((feat, i) => (
                       <div key={i} className="flex gap-4 p-5 bg-[#FCFBF9] border border-orange-100/50 rounded-2xl group hover:bg-white hover:shadow-xl hover:shadow-orange-900/5 hover:border-brand-primary/20 transition-all">
                         <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-brand-primary shrink-0 transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110">
                           <CheckCircle2 size={16} />
                         </div>
                         <p className="text-[14px] text-gray-600 font-semibold leading-snug">{feat}</p>
                       </div>
                     ))}
                   </div>
                </div>
              )}

              <div className="space-y-4 mb-24">
                <h3 className="text-xl font-bold text-brand-secondary mb-8 pl-4 border-l-4 border-brand-primary">상세 전문 진료 정보</h3>
                {activeCenter.sections.length > 0 ? (
                  activeCenter.sections.map((section, idx) => (
                    <div key={idx} className={`rounded-3xl border transition-all overflow-hidden ${expandedSection === idx ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-100'}`}>
                      <button onClick={() => toggleSection(idx)} className="w-full flex items-center justify-between p-6 md:p-8 text-left group">
                        <span className={`text-base md:text-lg font-bold tracking-tight transition-colors ${expandedSection === idx ? 'text-brand-primary' : 'text-brand-secondary group-hover:text-brand-primary'}`}>{section.title}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${expandedSection === idx ? 'bg-brand-primary text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-orange-50 group-hover:text-brand-primary'}`}>
                          {expandedSection === idx ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {expandedSection === idx && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="bg-white border-t border-gray-100">
                            <div className="p-8 md:p-10">
                               {Array.isArray(section.body) ? (
                                  <ul className="space-y-3">
                                    {section.body.map((item, i) => (
                                      <li key={i} className="flex gap-4 items-start p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-primary/20 transition-all">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                                        <p className="text-[14px] text-gray-600 leading-relaxed font-medium">{item}</p>
                                      </li>
                                    ))}
                                  </ul>
                               ) : (
                                 <p className="text-gray-600 leading-loose text-base font-light whitespace-pre-line">{section.body}</p>
                               )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))
                ) : (
                  <div className="p-10 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                    <p className="text-gray-400 text-[14px]">상세 정보가 개요 섹션에 포함되어 있습니다.</p>
                  </div>
                )}
              </div>

              {selectedId === 'er' && (
                <div className="mt-20 p-8 md:p-14 bg-brand-primary rounded-[50px] shadow-2xl shadow-orange-900/10 text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"><Activity className="w-96 h-96 absolute -bottom-20 -right-20" /></div>
                  <div className="flex-1 text-center md:text-left z-10">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">Urgent Medical Path</span>
                    <h4 className="text-3xl md:text-4xl font-black mb-4">24시간 응급 진료센터</h4>
                    <p className="text-orange-50 font-medium leading-relaxed max-w-sm">야간 내원 시 건물 1층 현관 옆 전용 응급 벨을 눌러주세요. 미리 전화 주시면 더욱 신속하게 준비하겠습니다.</p>
                  </div>
                  <div className="shrink-0 z-10 w-full md:w-auto">
                    <a href="tel:031-781-2992" className="block w-full text-center px-10 py-6 bg-brand-secondary text-white font-black rounded-3xl hover:bg-black transition-all shadow-xl flex items-center justify-center gap-4 text-xl">
                      <Phone size={24} /> 031-781-2992
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed right-0 top-0 h-full w-[85%] bg-white z-[201] p-10 flex flex-col shadow-2xl">
              <button onClick={() => setIsMenuOpen(false)} className="self-end p-4 -mr-4 -mt-4 text-gray-500 hover:text-brand-primary transition-colors"><X size={32} /></button>
              <nav className="flex flex-col gap-8 mt-12 overflow-y-auto">
                <h3 className="text-2xl font-black text-brand-secondary border-b-4 border-brand-primary pb-2 w-fit">Navigation</h3>
                <div className="space-y-6">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Medical Centers</p>
                  
                  {/* Part 1 Group */}
                  <div className="space-y-2">
                    <p className="text-[11px] font-black text-brand-primary/60 border-b border-orange-50 pb-1 mb-3">첨단 시술·수술 센터</p>
                    {PART1_CENTERS.map(center => (
                      <button 
                        key={center.id}
                        onClick={() => { setActivePart(1); setSelectedId(center.id); setIsMenuOpen(false); }}
                        className={`w-full text-left py-2 text-[15px] font-bold flex items-center gap-3 ${selectedId === center.id && activePart === 1 ? 'text-brand-primary' : 'text-gray-500'}`}
                      >
                        {React.cloneElement(center.icon as React.ReactElement, { size: 14 })}
                        {center.name}
                      </button>
                    ))}
                  </div>

                  {/* Part 2 Group */}
                  <div className="space-y-2 pt-4">
                    <p className="text-[11px] font-black text-brand-primary/60 border-b border-orange-50 pb-1 mb-3">질환관리·케어 센터</p>
                    {PART2_CENTERS.map(center => (
                      <button 
                        key={center.id}
                        onClick={() => { setActivePart(2); setSelectedId(center.id); setIsMenuOpen(false); }}
                        className={`w-full text-left py-2 text-[15px] font-bold flex items-center gap-3 ${selectedId === center.id && activePart === 2 ? 'text-brand-primary' : 'text-gray-500'}`}
                      >
                        {React.cloneElement(center.icon as React.ReactElement, { size: 14 })}
                        {center.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-10">
                  <div className="p-8 bg-brand-secondary rounded-[32px] text-white">
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Emergency Contact</p>
                     <p className="text-3xl font-black text-brand-primary mb-2">031-781-2992</p>
                     <p className="text-xs text-gray-400 font-medium">분당 수의사 상주 응급실</p>
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
