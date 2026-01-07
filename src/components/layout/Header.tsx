
"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLocationClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowMap(true);
        setIsOpen(false);
    };

    const navItems = [
        { label: '회사소개', href: '#intro' },
        { label: '아카데미', href: '#academy' },
        { label: '소속모델', href: '#models' },
        { label: '오시는길', href: '#location', onClick: handleLocationClick },
    ];

    return (
        <>
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
                                onClick={item.onClick}
                                className={`text-base font-medium transition-colors hover:text-accent ${scrolled ? 'text-primary' : 'text-white'}`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a href="#contact">
                            <Button variant="primary" size="small" className="font-bold rounded-sm text-sm">
                                상담신청
                            </Button>
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
                            onClick={item.onClick || (() => setIsOpen(false))}
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

            {/* Map Modal */}
            {showMap && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
                    onClick={() => setShowMap(false)}
                >
                    <div
                        className="bg-white w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-accent" />
                                <h3 className="text-lg font-bold text-primary">K모델크루 오시는길</h3>
                            </div>
                            <button
                                onClick={() => setShowMap(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>

                        <div className="w-full h-[400px]">
                            <iframe
                                src="https://map.naver.com/p/embed/place/1100410062?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="K모델크루 위치"
                            />
                        </div>

                        <div className="p-4 bg-gray-50">
                            <p className="text-gray-700 font-medium mb-2">서울 강남구 논현로72길 11 지하1층</p>
                            <div className="flex gap-3">
                                <a
                                    href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%A1%9C72%EA%B8%B8%2011"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#03C75A] text-white font-bold py-2 px-4 rounded hover:opacity-90 transition-opacity text-sm"
                                >
                                    네이버 지도에서 보기
                                </a>
                                <a
                                    href="https://map.kakao.com/?q=서울 강남구 논현로72길 11"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#FEE500] text-black font-bold py-2 px-4 rounded hover:opacity-90 transition-opacity text-sm"
                                >
                                    카카오맵에서 보기
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
