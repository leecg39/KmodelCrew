
"use client";

import React, { useState } from 'react';
import { X, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const GALLERY_IMAGES = [
    { id: 1, src: "/images/models/01.jpg", alt: "K모델크루 활동 사진" },
    { id: 2, src: "/images/models/02.jpg", alt: "K모델크루 활동 사진" },
    { id: 3, src: "/images/models/03.jpg", alt: "K모델크루 활동 사진" },
    { id: 4, src: "/images/models/04.jpg", alt: "K모델크루 활동 사진" },
    { id: 5, src: "/images/models/05.jpg", alt: "K모델크루 활동 사진" },
    { id: 6, src: "/images/models/06.jpg", alt: "K모델크루 활동 사진" },
    { id: 7, src: "/images/models/07.jpg", alt: "K모델크루 활동 사진" },
    { id: 8, src: "/images/models/08.jpg", alt: "K모델크루 활동 사진" },
    { id: 9, src: "/images/models/09.jpg", alt: "K모델크루 활동 사진" },
    { id: 10, src: "/images/models/10.jpg", alt: "K모델크루 활동 사진" },
    { id: 11, src: "/images/models/11.jpg", alt: "K모델크루 활동 사진" },
    { id: 12, src: "/images/models/12.jpg", alt: "K모델크루 활동 사진" },
];

const Portfolio = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openImage = (index: number) => {
        setSelectedIndex(index);
    };

    const closeImage = () => {
        setSelectedIndex(null);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === 0 ? GALLERY_IMAGES.length - 1 : selectedIndex - 1);
        }
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === GALLERY_IMAGES.length - 1 ? 0 : selectedIndex + 1);
        }
    };

    return (
        <section id="models" className="py-24 bg-[#F5F0E8]">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Gallery"
                    subtitle="K모델크루의 다양한 활동과 모델들의 모습을 확인해보세요."
                />

                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                    {GALLERY_IMAGES.map((img, index) => (
                        <div
                            key={img.id}
                            className="group cursor-pointer aspect-[3/4] overflow-hidden relative rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                            onClick={() => openImage(index)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                <span className="text-white font-medium text-sm">클릭하여 확대</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://www.instagram.com/kmodel_crew"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 border-2 border-primary text-primary py-4 px-8 font-bold hover:bg-primary hover:text-white transition-colors rounded-lg"
                    >
                        <Instagram className="w-5 h-5" />
                        인스타그램에서 더 보기
                    </a>
                </div>
            </div>

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
                    onClick={closeImage}
                >
                    <button
                        className="absolute top-4 right-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        onClick={closeImage}
                    >
                        <X className="w-8 h-8 text-white" />
                    </button>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="w-8 h-8 text-white" />
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        onClick={nextImage}
                    >
                        <ChevronRight className="w-8 h-8 text-white" />
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[90vh] mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={GALLERY_IMAGES[selectedIndex].src}
                            alt={GALLERY_IMAGES[selectedIndex].alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fade-in"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                            <p className="text-white text-center">
                                {selectedIndex + 1} / {GALLERY_IMAGES.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
