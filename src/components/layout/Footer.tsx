
import React from 'react';
import { Instagram, Mail } from 'lucide-react';

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

export default Footer;
