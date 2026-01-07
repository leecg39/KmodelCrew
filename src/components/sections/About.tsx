
import React from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => (
    <section id="intro" className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <img
                        src="/images/about.jpg"
                        alt="Academy Philosophy"
                        className="w-full h-[750px] object-cover object-top shadow-2xl"
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

export default About;
