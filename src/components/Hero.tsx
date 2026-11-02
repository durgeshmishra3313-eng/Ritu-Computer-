import React from 'react';
import { Phone, MessageCircle, MapPin, CheckCircle2, Award, Users, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';

interface HeroProps {
  lang: Language;
  onOpenAdmission: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenAdmission }) => {
  const isHi = lang === 'hi';

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Location & Trust Kicker (Unboxed metadata, no static pills) */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 mb-4">
          <span className="inline-flex items-center gap-1.5 text-blue-700 font-semibold">
            <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
            {isHi ? 'लोहरौली चौराहा, साड़ी कला' : 'Lohrouli Chouraha, Sadi Kala'}
          </span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span>{isHi ? 'बस्ती - बांसी रोड, सिद्धार्थनगर' : 'Basti - Bansi Road, Siddharthnagar'}</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="text-emerald-700 font-medium">{isHi ? 'नवीनतम सत्र 2025-26 प्रवेश प्रारंभ' : 'New Admissions Open 2025-26'}</span>
        </div>

        {/* 2-Column Split: Headline & Story (Left) + Visual Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              {isHi ? (
                <>
                  कंप्यूटर शिक्षा एवं बोर्ड परीक्षा में{' '}
                  <span className="text-blue-700">सफलता की गारंटी</span>
                </>
              ) : (
                <>
                  Premier Computer Training &{' '}
                  <span className="text-blue-700">Board Exam Coaching</span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {isHi ? (
                <>
                  निदेशक <strong className="text-slate-900 font-semibold">प्रभाकर मिश्रा</strong> के कुशल नेतृत्व और अनुभवी शिक्षकों (रितु मिश्रा, श्रेया मिश्रा, दुर्गेश मिश्रा, अभिषेक मिश्रा) की समर्पित टीम द्वारा संचालित। यहाँ आधुनिक कंप्यूटर कोर्सेस (<span className="text-slate-800 font-medium">ADCA, DCA, CCC, Tally Prime + GST</span>) के साथ-साथ <span className="text-slate-800 font-medium">9वीं से 12वीं बोर्ड परीक्षा</span> की उच्चस्तरीय तैयारी कराई जाती है।
                </>
              ) : (
                <>
                  Under the experienced leadership of Director <strong className="text-slate-900 font-semibold">Prabhakar Mishra</strong> and faculty mentors (Ritu Mishra, Shreya Mishra, Durgesh Mishra, Abhishek Mishra). We provide hands-on computer diplomas (<span className="text-slate-800 font-medium">ADCA, DCA, CCC, Tally Prime + GST</span>) along with dedicated <span className="text-slate-800 font-medium">9th to 12th Board Exam preparation</span>.
                </>
              )}
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isHi ? 'प्रत्येक छात्र को अलग कंप्यूटर पर प्रैक्टिकल' : '1:1 Computer Lab Practical Training'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isHi ? 'बोर्ड परीक्षा में 90%+ अंक का विशेष लक्ष्य' : 'Target 90%+ in 10th & 12th Boards'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isHi ? 'सरकारी नौकरियों हेतु मान्य NIELIT सीसीसी' : 'Govt. Job Recognized Certifications'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isHi ? 'रविवार को स्पेशल डाउट व टेस्ट सीरीज' : 'Weekly Tests & Doubt Clearing Sessions'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenAdmission}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-all whitespace-nowrap"
              >
                {isHi ? 'ऑनलाइन प्रवेश फॉर्म भरें' : 'Book Free Counseling / Admission'}
              </button>

              <a
                href={`https://wa.me/91${INSTITUTE_INFO.whatsapp}?text=${encodeURIComponent(
                  'नमस्ते प्रभाकर सर, मुझे रितु कंप्यूटर ट्रेनिंग सेंटर के कोर्स और बोर्ड कोचिंग के बारे में जानकारी चाहिए।'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{isHi ? 'व्हाट्सएप पर बात करें' : 'WhatsApp Inquiry'}</span>
              </a>

              <a
                href="tel:9451028331"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span className="font-mono tabular-nums">9451028331</span>
              </a>
            </div>

            {/* Director's Personal Note Snippet */}
            <div className="pt-4 border-t border-slate-200 flex items-center gap-4">
              <img
                src="/assets/aistudio/IMG-20250406-WA0056_bbc0d6d3.jpg"
                alt="Director Prabhakar Mishra"
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-blue-600 shadow-sm shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-slate-900">{isHi ? 'प्रभाकर मिश्रा' : 'Prabhakar Mishra'}</p>
                <p className="text-slate-500 text-xs">
                  {isHi ? 'संस्थापक एवं निदेशक - रितु कंप्यूटर ट्रेनिंग सेंटर' : 'Founder & Director - Ritu Computer Training Center'}
                </p>
                <p className="text-slate-600 italic mt-0.5 text-xs sm:text-xs">
                  {isHi
                    ? '"हमारा संकल्प है कि सिद्धार्थनगर और बस्ती क्षेत्र का प्रत्येक युवा डिजिटल रूप से सक्षम बने और बोर्ड परीक्षा में परचम लहराए।"'
                    : '"Our pledge is that every rural youth gains modern tech fluency and tops their board examinations."'}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Hero Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group">
              <img
                src="/assets/aistudio/campus_side_upright.jpg"
                alt="Ritu Computer Training Center Real Campus Building"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 text-xs text-blue-300 font-semibold mb-1">
                  <span>{isHi ? 'वास्तविक संस्थान भवन' : 'Real Institute Campus'}</span>
                  <span>·</span>
                  <span>{isHi ? 'लोहरौली चौराहा, साड़ी कला' : 'Lohrouli Chouraha, Sadi Kala'}</span>
                </div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  {isHi
                    ? 'बस्ती-बांसी रोड पर स्थित आधुनिक कंप्यूटर एवं बोर्ड परीक्षा तैयारी केंद्र'
                    : 'Premier computer training & board exam coaching center on Basti-Bansi Road.'}
                </p>
              </div>
            </div>

            {/* Quick Stats Grid Below Card */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-blue-700 tabular-nums">1500+</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {isHi ? 'सफल छात्र' : 'Trained Students'}
                </div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-emerald-700 tabular-nums">98.4%</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {isHi ? 'परीक्षा सफलता दर' : 'Board Pass Rate'}
                </div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-slate-800 tabular-nums">100%</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {isHi ? 'प्रैक्टिकल लैब' : 'Lab Practical'}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
