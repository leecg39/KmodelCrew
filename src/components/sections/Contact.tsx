
"use client";

import React, { useState } from 'react';
import { Phone, MapPin, Instagram, CheckCircle, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';

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

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-off-white flex items-center justify-center mr-6 rounded-sm">
                                    <MapPin className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Location</h4>
                                    <p className="text-xl font-bold text-primary">서울 강남구 논현로72길 11 지하1층</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-off-white flex items-center justify-center mr-6 rounded-sm">
                                    <Phone className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">김상휘 대표</h4>
                                    <p className="text-xl font-bold text-primary">010-5306-6119</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-off-white flex items-center justify-center mr-6 rounded-sm">
                                    <Phone className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">최정은 교수</h4>
                                    <p className="text-xl font-bold text-primary">010-4746-7130</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-off-white flex items-center justify-center mr-6 rounded-sm">
                                    <Phone className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Office</h4>
                                    <p className="text-xl font-bold text-primary">02-6369-2580</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <a
                                href="https://www.instagram.com/kmodel_crew"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded hover:opacity-90 transition-opacity"
                            >
                                <Instagram className="w-5 h-5" /> Instagram
                            </a>
                            <a
                                href="https://blog.naver.com/kookminkma2019"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-[#03C75A] text-white font-bold rounded hover:opacity-90 transition-opacity"
                            >
                                Blog
                            </a>
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
                                <Input
                                    label="이름 (Name)"
                                    required
                                    placeholder="홍길동"
                                />
                                <Input
                                    label="연락처 (Phone)"
                                    required
                                    type="tel"
                                    placeholder="010-0000-0000"
                                />
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">관심 프로그램 (Program) *</label>
                                    <select required className="w-full h-14 px-4 border border-gray-300 focus:border-accent outline-none transition-all appearance-none bg-white rounded-sm">
                                        <option value="">과정을 선택해 주세요</option>
                                        <option value="basic">입문반</option>
                                        <option value="technique">테크닉반</option>
                                        <option value="pro">프로반</option>
                                        <option value="instructor">지도자과정</option>
                                        <option value="live">라이브커머스반</option>
                                        <option value="act">연기반</option>
                                        <option value="etc">기타 상담</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">문의 내용 (Message)</label>
                                    <textarea rows={4} placeholder="궁금하신 내용을 남겨주세요." className="w-full p-4 border border-gray-300 focus:border-accent outline-none transition-all resize-none rounded-sm"></textarea>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input required type="checkbox" id="privacy" className="w-5 h-5 accent-accent" />
                                    <label htmlFor="privacy" className="text-sm text-gray-600">개인정보 수집 및 이용에 동의합니다.</label>
                                </div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    size="large"
                                    rightIcon={<ChevronRight className="w-6 h-6" />}
                                    className="text-lg"
                                >
                                    상담 신청하기
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
