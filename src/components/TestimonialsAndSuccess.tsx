import React from 'react';
import { Star, Quote, Award, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { TESTIMONIALS } from '../data/instituteData';

interface TestimonialsAndSuccessProps {
  lang: Language;
}

export const TestimonialsAndSuccess: React.FC<TestimonialsAndSuccessProps> = ({ lang }) => {
  const isHi = lang === 'hi';

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            {isHi ? 'सफलता की कहानियां' : 'Student Success & Testimonials'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi ? 'हमारे सफल छात्र एवं अभिभावकों के विचार' : 'Real Outcomes from Siddharthnagar Students'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {isHi
              ? 'कंप्यूटर कोर्सेस से सरकारी व निजी नौकरियों में चयन और बोर्ड परीक्षा में उत्कृष्ट अंक पाने वाले हमारे विद्यार्थियों की जुबानी।'
              : 'Students who secured government and private employment, or scored 90%+ in high school and intermediate board exams.'}
          </p>
        </div>

        {/* 2-Part Grid: Image Banner + Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <img
              src="/src/assets/images/students_with_certificates_1793375103528.jpg"
              alt="Students with course completion certificates"
              className="w-full h-72 sm:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-5 bg-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-1">
                <CheckCircle className="w-4 h-4" />
                <span>{isHi ? '100% प्रमाण-पत्र वितरण व प्लेसमेंट सहायता' : 'Certified & Job Ready'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                {isHi
                  ? 'रितु कंप्यूटर ट्रेनिंग सेंटर से प्रशिक्षित छात्र बैंक, सीएससी सेंटर, कचहरी और निजी कंपनियों में सफलतापूर्वक कार्यरत हैं।'
                  : 'Graduates successfully employed across regional enterprises, legal offices, and government services.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-blue-700 font-semibold">{t.highlight}</p>
                  <p className="text-[11px] text-slate-500">{t.village} · {t.course}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
