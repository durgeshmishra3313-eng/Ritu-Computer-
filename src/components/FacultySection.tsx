import React from 'react';
import { UserCheck, Award, GraduationCap, Laptop, BookOpen, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { FACULTY_DATA } from '../data/instituteData';

interface FacultySectionProps {
  lang: Language;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ lang }) => {
  const isHi = lang === 'hi';

  const director = FACULTY_DATA[0];
  const teachers = FACULTY_DATA.slice(1);

  return (
    <section id="faculty" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            {isHi ? 'मार्गदर्शक एवं शिक्षक परिवार' : 'Meet Our Teaching Faculty'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi
              ? 'प्रभाकर मिश्रा एवं समर्पित शिक्षक टीम'
              : 'Directed by Prabhakar Mishra & Expert Faculty'}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {isHi
              ? 'संस्थान के निदेशक प्रभाकर मिश्रा जी के संरक्षण में अनुभवी शिक्षकों—रितु मिश्रा, श्रेया मिश्रा, दुर्गेश मिश्रा एवं अभिषेक मिश्रा—की समर्पित टीम प्रत्येक विद्यार्थी को व्यक्तिगत रूप से पढ़ाती है।'
              : 'Under the guidance of Director Prabhakar Mishra, our dedicated faculty mentors—Ritu Mishra, Shreya Mishra, Durgesh Mishra, and Abhishek Mishra—provide personalized teaching in computer technologies and board academics.'}
          </p>
        </div>

        {/* Marquee Director Feature Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative">
                <img
                  src={director.image || '/assets/aistudio/IMG-20250406-WA0056_bbc0d6d3.jpg'}
                  alt={director.name}
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover object-top border-2 border-blue-600 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-2 bg-blue-700 text-white text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow">
                  {isHi ? 'संस्थापक एवं निदेशक' : 'Founder & Director'}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="text-blue-700 font-bold">{director.experience}</span>
                <span aria-hidden="true">·</span>
                <span>{isHi ? 'लोहरौली चौराहा, साड़ी कला, सिद्धार्थनगर' : 'Lohrouli Chouraha, Sadi Kala, Siddharthnagar'}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700 font-semibold">{isHi ? 'मुख्य मार्गदर्शक' : 'Academic Mentor'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {isHi ? director.nameHi : director.name}
              </h3>
              <p className="text-sm font-semibold text-blue-700">
                {isHi ? director.roleHi : director.role}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {isHi ? director.bioHi : director.bio}
              </p>

              {/* Specialization Tags */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-2">
                  {isHi ? 'मार्गदर्शन क्षेत्र' : 'Areas of Mentorship'}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(isHi ? director.specializationHi : director.specialization).map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Faculty Children Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span>
              {isHi
                ? 'कंप्यूटर एवं शैक्षणिक संकाय (रितु, श्रेया, दुर्गेश, अभिषेक)'
                : 'Faculty Mentors (Ritu, Shreya, Durgesh, Abhishek)'}
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((member, index) => {
              const icons = [
                <Laptop key="0" className="w-5 h-5 text-purple-600" />,
                <BookOpen key="1" className="w-5 h-5 text-emerald-600" />,
                <Laptop key="2" className="w-5 h-5 text-blue-600" />,
                <Award key="3" className="w-5 h-5 text-amber-600" />
              ];

              return (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div>
                    {/* Header with photo or icon and experience */}
                    <div className="flex items-center justify-between mb-4">
                      {member.image ? (
                        <div className="relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-blue-600 shadow-sm"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center">
                          {icons[index % icons.length]}
                        </div>
                      )}
                      <span className="text-xs font-semibold text-slate-500 tabular-nums">
                        {member.experience}
                      </span>
                    </div>

                    {/* Relation & Name */}
                    <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide block mb-1">
                      {isHi ? member.relationHi : member.relation}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {isHi ? member.nameHi : member.name}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 mt-1 mb-3">
                      {isHi ? member.roleHi : member.role}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {isHi ? member.bioHi : member.bio}
                    </p>
                  </div>

                  {/* Specializations */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      {isHi ? 'मुख्य विषय / एक्सपर्टीज' : 'Key Expertise'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(isHi ? member.specializationHi : member.specialization).map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-slate-700 bg-slate-50 px-2 py-1 rounded border border-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Classroom Atmosphere Callout */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200 bg-white grid grid-cols-1 lg:grid-cols-12 shadow-sm">
          <div className="lg:col-span-5 relative min-h-60">
            <img
              src="/src/assets/images/board_coaching_classroom_1793375103506.jpg"
              alt="Coaching Classroom at Ritu Center"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-4">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
              {isHi ? 'अनुशासित एवं परिणामोन्मुखी वातावरण' : 'Disciplined & Results-Oriented Environment'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {isHi
                ? 'प्रत्येक छात्र पर व्यक्तिगत ध्यान और नियमित मूल्यांकन'
                : 'Individual Focus on Every Student with Continuous Evaluation'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isHi
                ? 'हमारे यहाँ रटने के बजाय कॉन्सेप्ट समझने पर जोर दिया जाता है। बोर्ड परीक्षा के विद्यार्थियों के लिए वीकली ओएमआर और डिस्क्रिप्टिव टेस्ट आयोजित होते हैं, जबकि कंप्यूटर छात्रों को रोज़ाना हैंड्स-ऑन कोडिंग और सॉफ्टवेयर अभ्यास कराया जाता है।'
                : 'Rather than rote memorization, our faculty focuses on foundational conceptual clarity. Weekly mock exams prepare board candidates, while computer students receive daily 1:1 machine time.'}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {isHi ? 'सुरक्षित एवं अनुशासित कैंपस' : 'Safe & Disciplined Campus'}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {isHi ? 'बालिकाओं हेतु अनुकूल माहौल' : 'Empowering Female Learners'}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {isHi ? 'प्रतिमाह पैरेंट्स-टीचर मीटिंग' : 'Monthly Parent-Teacher Sync'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
