
"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface Program {
    id: number;
    title: string;
    desc: string;
    duration: string;
    target: string;
    image: string;
}

const PROGRAMS: Program[] = [
    {
        id: 1,
        title: "입문반",
        desc: "바른 자세와 기초 워킹을 통해 모델로서의 첫걸음을 떼는 기초 과정입니다.",
        duration: "3개월 (주 1회)",
        target: "50세 이상 남녀 누구나",
        image: "/images/academy/01.png"
    },
    {
        id: 2,
        title: "테크닉반",
        desc: "런웨이에서의 당당한 워킹과 화보 촬영을 위한 전문 포징을 심화 학습합니다.",
        duration: "2개월 (주 2회)",
        target: "입문반 수료자 또는 경력자",
        image: "/images/academy/02.png"
    },
    {
        id: 3,
        title: "프로반",
        desc: "실전 무대 경험과 프로페셔널 모델로서의 역량을 완성하는 고급 과정입니다.",
        duration: "3개월 (주 2회)",
        target: "테크닉반 수료자",
        image: "/images/academy/03.png"
    },
    {
        id: 4,
        title: "지도자과정",
        desc: "시니어 모델 교육 전문가로 성장하기 위한 강사 양성 과정입니다.",
        duration: "6개월 (주 1회)",
        target: "프로반 수료자 및 현직 모델",
        image: "/images/academy/04.png"
    },
    {
        id: 5,
        title: "라이브커머스반",
        desc: "라이브 방송을 통한 상품 소개와 판매 스킬을 배우는 실전 과정입니다.",
        duration: "2개월 (주 1회)",
        target: "라이브 커머스 진출 희망자",
        image: "/images/academy/05.png"
    },
    {
        id: 6,
        title: "연기반",
        desc: "광고 및 미디어 출연을 위해 감정을 표현하고 자연스럽게 연기하는 법을 배웁니다.",
        duration: "3개월 (주 1회)",
        target: "방송 및 광고 활동 희망자",
        image: "/images/academy/06.png"
    }
];

const Academy = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(PROGRAMS.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const visiblePrograms = PROGRAMS.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    return (
        <section id="academy" className="py-24 bg-off-white">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Academy Programs"
                    subtitle="기초부터 데뷔까지, 체계적인 교육 과정을 통해 꿈을 현실로 만드세요."
                />

                <div className="relative">
                    <div className="grid md:grid-cols-3 gap-8">
                        {visiblePrograms.map((p) => (
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
                                    <a href="#contact">
                                        <Button
                                            variant="outline"
                                            fullWidth
                                            className="font-bold border-primary text-primary hover:bg-primary hover:text-white"
                                        >
                                            상담 문의하기
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white shadow-lg rounded-full p-3 hover:bg-accent hover:text-white transition-colors z-10"
                        aria-label="이전"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white shadow-lg rounded-full p-3 hover:bg-accent hover:text-white transition-colors z-10"
                        aria-label="다음"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex justify-center mt-8 gap-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-accent' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`페이지 ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Academy;
