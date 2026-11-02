import React, { useState } from 'react';
import { Monitor, BookOpen, Clock, GraduationCap, Check, ArrowRight, X, FileText } from 'lucide-react';
import { Course, Language } from '../types';
import { COURSES_DATA } from '../data/instituteData';

interface CoursesSectionProps {
  lang: Language;
  onSelectCourseForAdmission: (courseTitle: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  lang,
  onSelectCourseForAdmission,
}) => {
  const isHi = lang === 'hi';
  const [filter, setFilter] = useState<'all' | 'computer' | 'board'>('all');
  const [activeModalCourse, setActiveModalCourse] = useState<Course | null>(null);

  const filteredCourses = COURSES_DATA.filter((course) => {
    if (filter === 'all') return true;
    return course.category === filter;
  });

  return (
    <section id="courses" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            {isHi ? 'हमारे प्रमुख पाठ्यक्रम' : 'Our Flagship Programs'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi
              ? 'कंप्यूटर डिप्लोमा एवं बोर्ड परीक्षा कोचिंग'
              : 'Computer Training Diplomas & Board Exam Batches'}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {isHi
              ? 'नौकरी और स्वरोजगार के लिए मान्यता प्राप्त कंप्यूटर कोर्स एवं 9वीं से 12वीं यूपी व सीबीएसई बोर्ड में टॉप करने के लिए विशेष कक्षाएं।'
              : 'Industry-recognized computer certifications for government & private jobs, plus high-yield coaching for UP & CBSE Board examinations.'}
          </p>

          {/* Interactive Filter Control (functional segmented control buttons) */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isHi ? 'सभी कोर्स (8)' : 'All Programs (8)'}
            </button>
            <button
              onClick={() => setFilter('computer')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'computer'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isHi ? 'कंप्यूटर कोर्सेस (CCC, ADCA, Tally)' : 'Computer Diplomas (5)'}
            </button>
            <button
              onClick={() => setFilter('board')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'board'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isHi ? 'बोर्ड परीक्षा कोचिंग (9वीं-12वीं)' : 'Board Coaching (3)'}
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => {
            const isComputer = course.category === 'computer';

            return (
              <div
                key={course.id}
                className="flex flex-col bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-200 hover:shadow-md p-6 group"
              >
                {/* Unboxed Header Metadata */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-3">
                  <span className="flex items-center gap-1.5 text-blue-700">
                    {isComputer ? (
                      <Monitor className="w-4 h-4 shrink-0 text-blue-600" />
                    ) : (
                      <BookOpen className="w-4 h-4 shrink-0 text-amber-600" />
                    )}
                    <span>{isComputer ? (isHi ? 'कंप्यूटर कोर्स' : 'Computer') : (isHi ? 'बोर्ड परीक्षा' : 'Board Prep')}</span>
                  </span>
                  {course.code && <span className="font-mono text-slate-400">{course.code}</span>}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2 leading-snug">
                  {isHi ? course.titleHi : course.title}
                </h3>

                {/* Meta details: Clean unboxed typography */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{isHi ? course.durationHi : course.duration}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                    <span>{isHi ? course.eligibilityHi : course.eligibility}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-5 leading-relaxed line-clamp-3">
                  {isHi ? course.descriptionHi : course.description}
                </p>

                {/* Key feature list */}
                <div className="space-y-2 mb-6 flex-grow">
                  {(isHi ? course.featuresHi : course.features).slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action footer */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2 mt-auto">
                  <button
                    onClick={() => setActiveModalCourse(course)}
                    className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-700 inline-flex items-center gap-1"
                  >
                    <span>{isHi ? 'सिलेबस देखें' : 'View Syllabus'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectCourseForAdmission(isHi ? course.titleHi : course.title)}
                    className="px-3.5 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors whitespace-nowrap"
                  >
                    {isHi ? 'प्रवेश लें' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Syllabus & Course Detail Modal */}
      {activeModalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                  {isHi ? 'विस्तृत पाठ्यक्रम व विवरण' : 'Detailed Curriculum & Overview'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {isHi ? activeModalCourse.titleHi : activeModalCourse.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <span>अवधि / Duration: {isHi ? activeModalCourse.durationHi : activeModalCourse.duration}</span>
                  <span>·</span>
                  <span>योग्यता / Eligibility: {isHi ? activeModalCourse.eligibilityHi : activeModalCourse.eligibility}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveModalCourse(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {isHi ? activeModalCourse.descriptionHi : activeModalCourse.description}
            </p>

            {/* Syllabus breakdown */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>{isHi ? 'मॉड्यूल एवं अध्याय (Syllabus Units)' : 'Syllabus Modules'}</span>
              </h4>
              <ul className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                {activeModalCourse.syllabus.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="font-mono text-blue-600 font-bold shrink-0">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you get */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                {isHi ? 'कोर्स की मुख्य विशेषताएं' : 'Key Highlights'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(isHi ? activeModalCourse.featuresHi : activeModalCourse.features).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fee note */}
            <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-medium text-slate-500 block">
                  {isHi ? 'अनुमानित शुल्क संरचना' : 'Approximate Fee Structure'}
                </span>
                <span className="text-sm font-bold text-blue-900">{activeModalCourse.feeApprox}</span>
              </div>
              <span className="text-xs text-slate-500">
                {isHi ? '*किस्तों की सुविधा उपलब्ध' : '*Easy Installments'}
              </span>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
              <button
                onClick={() => setActiveModalCourse(null)}
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                {isHi ? 'बंद करें' : 'Close'}
              </button>
              <button
                onClick={() => {
                  const courseTitle = isHi ? activeModalCourse.titleHi : activeModalCourse.title;
                  setActiveModalCourse(null);
                  onSelectCourseForAdmission(courseTitle);
                }}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm"
              >
                {isHi ? 'इस कोर्स में प्रवेश हेतु आवेदन करें' : 'Apply for this Course'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
