
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-60"
                poster="/images/hero-bg.jpg"
            >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
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
                <a href="#academy" className="w-full sm:w-auto">
                    <Button
                        variant="primary"
                        size="large"
                        rightIcon={<ArrowRight className="w-5 h-5" />}
                        fullWidth
                        className="font-bold sm:w-auto"
                    >
                        프로그램 보기
                    </Button>
                </a>
                <a href="#models" className="w-full sm:w-auto">
                    <Button
                        variant="outline"
                        size="large"
                        fullWidth
                        className="font-bold text-white border-white hover:bg-white hover:text-primary sm:w-auto"
                    >
                        소속 모델 포트폴리오
                    </Button>
                </a>
            </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-px h-12 bg-white/50"></div>
        </div>
    </section>
);

export default Hero;
