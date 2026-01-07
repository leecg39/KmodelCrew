
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Menu, X, Instagram, Phone, Mail, MapPin, 
  ChevronRight, CheckCircle, ArrowRight, Star
} from 'lucide-react';

// --- Types ---
interface Model {
  id: number;
  name: string;
  ageRange: string;
  intro: string;
  image: string;
  career: string[];
}

interface Program {
  id: number;
  title: string;
  desc: string;
  duration: string;
  target: string;
  image: string;
}

// --- Data ---
const MODELS: Model[] = [
  {
    id: 1,
    name: "김영희",
    ageRange: "60대",
    intro: "우아함과 품격을 지닌 시니어 모델의 정석",
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=800",
    career: ["2023 서울패션위크 런웨이", "LG전자 시니어 모델 광고", "월간 시니어 매거진 표지"]
  },
  {
    id: 2,
    name: "박철수",
    ageRange: "50대",
    intro: "강렬한 카리스마와 에너지를 가진 도전가",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    career: ["현대자동차 시니어 캠페인", "무신사 시니어 룩북", "K-모델 어워드 본상"]
  },
  {
    id: 3,
    name: "이정숙",
    ageRange: "60대",
    intro: "부드러운 미소로 소통하는 라이프스타일 모델",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    career: ["SK텔레콤 지면 광고", "KBS 교양 프로그램 고정 출연", "대구 패션쇼 메인 모델"]
  },
  {
    id: 4,
    name: "최미경",
    ageRange: "50대",
    intro: "세련된 도시적 감각을 지닌 패션 전문 모델",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    career: ["신세계백화점 VIP 패션쇼", "닥스(DAKS) 시니어 캠페인", "패션 인플루언서 활동"]
  }
];

const PROGRAMS: Program[] = [
  {
    id: 1,
    title: "시니어 모델 입문 과정",
    desc: "바른 자세와 기초 워킹을 통해 모델로서의 첫걸음을 떼는 기초 과정입니다.",
    duration: "3개월 (주 1회)",
    target: "50세 이상 남녀 누구나",
    image: "https://images.unsplash.com/photo-1492691523567-6170c817314a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "전문 워킹 & 포징 클래스",
    desc: "런웨이에서의 당당한 워킹과 화보 촬영을 위한 전문 포징을 심화 학습합니다.",
    duration: "2개월 (주 2회)",
    target: "입문 과정 수료자 또는 경력자",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "시니어 연기 & 커뮤니케이션",
    desc: "광고 및 미디어 출연을 위해 감정을 표현하고 자연스럽게 말하는 법을 배웁니다.",
    duration: "3개월 (주 1회)",
    target: "방송 및 광고 활동 희망자",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800"
  }
];

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '회사소개', href: '#intro' },
    { label: '아카데미', href: '#academy' },
    { label: '소속모델', href: '#models' },
    { label: '오시는길', href: '#location' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold font-serif ${scrolled ? 'text-primary' : 'text-white'}`}>
            K-MODEL <span className="text-accent">CREW</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={`text-base font-medium transition-colors hover:text-accent ${scrolled ? 'text-primary' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="bg-accent hover:bg-accent-light text-primary font-bold py-2 px-6 rounded-sm transition-colors text-sm">
            상담신청
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-primary' : 'text-white'} /> : <Menu className={scrolled ? 'text-primary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
          <X className="w-8 h-8 text-primary" />
        </button>
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-primary hover:text-accent"
          >
            {item.label}
          </a>
        ))}
        <a 
          href="#contact" 
          onClick={() => setIsOpen(false)}
          className="bg-accent text-primary font-bold py-4 px-10 rounded-sm text-xl"
        >
          상담 신청하기
        </a>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover opacity-60"
        alt="Hero Background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10 text-center text-white">
      <h2 className="text-accent font-serif text-xl md:text-2xl mb-4 tracking-widest uppercase animate-fade-in">Experience the New Life</h2>
      <h1 className="text-display font-serif leading-tight mb-8 drop-shadow-lg">
        당신의 가능성이<br />
        <span className="italic text-accent">아름다움</span>이 되는 순간
      </h1>
      <p className="text-body-lg max-w-2xl mx-auto mb-10 text-gray-200">
        시니어 세대의 당당한 도전을 응원합니다.<br />
        전문적인 교육과 실제 활동 기회를 통해 제2의 인생을 열어보세요.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="#academy" className="w-full sm:w-auto bg-accent text-primary font-bold py-4 px-10 hover:bg-accent-light transition-all flex items-center justify-center">
          프로그램 보기 <ArrowRight className="ml-2 w-5 h-5" />
        </a>
        <a href="#models" className="w-full sm:w-auto border border-white text-white font-bold py-4 px-10 hover:bg-white hover:text-primary transition-all">
          소속 모델 포트폴리오
        </a>
      </div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-px h-12 bg-white/50"></div>
    </div>
  </section>
);

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-16 text-center">
    <h2 className={`text-h1 font-serif mb-4 ${light ? 'text-white' : 'text-primary'}`}>
      {title}
    </h2>
    {subtitle && (
      <div className="flex flex-col items-center">
        <p className={`text-body-lg ${light ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
          {subtitle}
        </p>
        <div className="w-12 h-1 bg-accent mt-6"></div>
      </div>
    )}
  </div>
);

const About = () => (
  <section id="intro" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
            alt="Academy Philosophy" 
            className="w-full h-[600px] object-cover shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 bg-accent p-8 hidden lg:block">
            <p className="text-primary font-serif text-3xl italic">"Passion has no age."</p>
          </div>
        </div>
        <div>
          <h3 className="text-accent font-serif text-xl mb-4 tracking-widest uppercase">Our Philosophy</h3>
          <h2 className="text-h2 font-serif mb-8 text-primary">나이를 잊은 열정,<br />K모델크루가 함께합니다.</h2>
          <div className="space-y-6 text-body text-gray-700">
            <p>
              K모델크루 아카데미는 단순히 워킹을 가르치는 곳이 아닙니다. 
              우리는 시니어 세대가 가진 삶의 깊이와 연륜을 '아름다운 표현'으로 승화시킬 수 있도록 돕는 파트너입니다.
            </p>
            <p>
              전문적인 커리큘럼은 물론, 현직 모델과 디렉터로 구성된 강사진이 
              개개인의 개성을 찾아내고 실제 무대에 설 수 있는 실질적인 기회를 제공합니다.
            </p>
            <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-h3 text-primary font-serif">150+</span>
                <span className="text-caption text-gray-500 uppercase tracking-wider">수료생 배출</span>
              </div>
              <div>
                <span className="block text-h3 text-primary font-serif">50+</span>
                <span className="text-caption text-gray-500 uppercase tracking-wider">제휴 브랜드</span>
              </div>
            </div>
            <a href="#academy" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors pt-4">
              자세히 알아보기 <ChevronRight className="ml-1 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Academy = () => (
  <section id="academy" className="py-24 bg-off-white">
    <div className="container mx-auto px-6">
      <SectionHeading 
        title="Academy Programs" 
        subtitle="기초부터 데뷔까지, 체계적인 교육 과정을 통해 꿈을 현실로 만드세요."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {PROGRAMS.map((p) => (
          <div key={p.id} className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div className="h-64 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <h3 className="text-h3 text-primary mb-4">{p.title}</h3>
              <p className="text-body-sm text-gray-600 mb-6 min-h-[80px]">{p.desc}</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-caption text-gray-500">
                  <Star className="w-4 h-4 text-accent mr-2" />
                  <span>대상: {p.target}</span>
                </div>
                <div className="flex items-center text-caption text-gray-500">
                  <Star className="w-4 h-4 text-accent mr-2" />
                  <span>기간: {p.duration}</span>
                </div>
              </div>
              <a href="#contact" className="block text-center border border-primary text-primary py-3 hover:bg-primary hover:text-white transition-all font-bold">
                상담 문의하기
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  return (
    <section id="models" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Our Models" 
          subtitle="K모델크루 아카데미를 통해 새로운 인생을 펼치고 있는 시니어 모델들을 소개합니다."
          light
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {MODELS.map((m) => (
            <div 
              key={m.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedModel(m)}
            >
              <div className="aspect-[3/4] overflow-hidden relative mb-4">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="border-b border-accent text-accent font-bold uppercase tracking-widest text-sm">View Profile</span>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-1">{m.name} <span className="text-sm text-gray-400 font-sans ml-2">{m.ageRange}</span></h3>
              <p className="text-caption text-gray-500 line-clamp-1">{m.intro}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Model Detail Modal */}
      {selectedModel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90">
          <div className="bg-white text-primary w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-fade-in">
            <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full" onClick={() => setSelectedModel(null)}>
              <X className="w-6 h-6" />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="h-[400px] md:h-auto">
                <img src={selectedModel.image} alt={selectedModel.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <span className="text-accent font-serif tracking-widest uppercase mb-2 block">{selectedModel.ageRange} Senior Model</span>
                <h2 className="text-h1 font-serif mb-6">{selectedModel.name}</h2>
                <p className="text-body-lg text-gray-700 italic mb-8 border-l-4 border-accent pl-4">
                  "{selectedModel.intro}"
                </p>
                
                <h4 className="text-h4 mb-4 font-bold">Activity History</h4>
                <ul className="space-y-3 mb-10">
                  {selectedModel.career.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-body-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" onClick={() => setSelectedModel(null)} className="inline-block bg-primary text-white py-4 px-8 font-bold hover:bg-gray-800 transition-colors">
                  이 모델처럼 되고 싶다면 상담하기
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-h1 font-serif mb-8 text-primary">도전하는 당신이<br />가장 아름답습니다.</h2>
            <p className="text-body-lg text-gray-600 mb-12">
              망설이지 마세요. 작은 관심이 당신의 제2의 인생을 바꾸는 큰 파도가 됩니다. 
              상담 신청을 남겨주시면 담당자가 친절히 안내해 드립니다.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-off-white flex items-center justify-center mr-6 rounded-sm">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Phone</h4>
                  <p className="text-xl font-bold text-primary">02-123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-off-white flex items-center justify-center mr-6 rounded-sm">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-xl font-bold text-primary">contact@kmodelcrew.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-off-white flex items-center justify-center mr-6 rounded-sm">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-xl font-bold text-primary">서울시 강남구 도산대로 123-4 5층</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="font-bold mb-4 flex items-center">
                <Instagram className="mr-2 w-5 h-5 text-accent" /> Follow us on Instagram
              </h4>
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-20 h-20 bg-gray-100 overflow-hidden cursor-pointer hover:opacity-80">
                    <img src={`https://images.unsplash.com/photo-${1550000000000 + i}?auto=format&fit=crop&q=80&w=200`} alt="Insta" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-off-white p-10 md:p-14 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">상담 신청 완료!</h3>
                <p className="text-gray-600">접수된 내용은 확인 후 순차적으로 연락드리겠습니다. 감사합니다.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-bold border-b-2 border-primary hover:text-accent hover:border-accent transition-colors"
                >
                  새로 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">이름 (Name) *</label>
                  <input required type="text" placeholder="홍길동" className="w-full h-14 px-4 border border-gray-300 focus:border-accent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">연락처 (Phone) *</label>
                  <input required type="tel" placeholder="010-0000-0000" className="w-full h-14 px-4 border border-gray-300 focus:border-accent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">관심 프로그램 (Program) *</label>
                  <select required className="w-full h-14 px-4 border border-gray-300 focus:border-accent outline-none transition-all appearance-none bg-white">
                    <option value="">과정을 선택해 주세요</option>
                    <option value="basic">시니어 모델 입문 과정</option>
                    <option value="pro">전문 워킹 & 포징 클래스</option>
                    <option value="act">시니어 연기 & 커뮤니케이션</option>
                    <option value="etc">기타 상담</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">문의 내용 (Message)</label>
                  <textarea rows={4} placeholder="궁금하신 내용을 남겨주세요." className="w-full p-4 border border-gray-300 focus:border-accent outline-none transition-all resize-none"></textarea>
                </div>
                <div className="flex items-center space-x-2">
                  <input required type="checkbox" id="privacy" className="w-5 h-5 accent-accent" />
                  <label htmlFor="privacy" className="text-sm text-gray-600">개인정보 수집 및 이용에 동의합니다.</label>
                </div>
                <button type="submit" className="w-full bg-accent text-primary font-bold h-16 text-lg hover:bg-accent-light transition-all flex items-center justify-center">
                  상담 신청하기 <ChevronRight className="ml-2 w-6 h-6" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-primary text-gray-400 py-16 border-t border-gray-800">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <span className="text-2xl font-bold font-serif text-white mb-6 block">
            K-MODEL <span className="text-accent">CREW</span>
          </span>
          <p className="max-w-md mb-8">
            K모델크루 아카데미는 시니어 세대의 새로운 가치를 발견하고, 
            모델로서의 꿈을 실현할 수 있도록 최상의 교육 환경을 제공합니다.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-accent transition-colors"><Mail /></a>
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h5>
          <ul className="space-y-4">
            <li><a href="#intro" className="hover:text-white transition-colors">회사소개</a></li>
            <li><a href="#academy" className="hover:text-white transition-colors">아카데미</a></li>
            <li><a href="#models" className="hover:text-white transition-colors">소속모델</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">상담신청</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Business Info</h5>
          <p className="text-sm leading-relaxed">
            사업자등록번호: 123-45-67890<br />
            대표이사: 홍길동<br />
            서울특별시 강남구 도산대로 123-4 5층<br />
            Tel: 02-123-4567
          </p>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2026 K-MODEL CREW ACADEMY. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">이용약관</a>
          <a href="#" className="hover:text-white font-bold">개인정보처리방침</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Academy />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
