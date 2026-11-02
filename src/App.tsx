/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { Language } from './types';
import { INSTITUTE_INFO } from './data/instituteData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { FacultySection } from './components/FacultySection';
import { CertificateVerification } from './components/CertificateVerification';
import { CampusGallery } from './components/CampusGallery';
import { TypingTestLab } from './components/TypingTestLab';
import { BoardQuizSection } from './components/BoardQuizSection';
import { TestimonialsAndSuccess } from './components/TestimonialsAndSuccess';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';

export default function App() {
  const [lang, setLang] = useState<Language>('hi');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedCourseForAdmission, setSelectedCourseForAdmission] = useState<string | undefined>(undefined);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  const handleOpenAdmissionWithCourse = (courseTitle: string) => {
    setSelectedCourseForAdmission(courseTitle);
    setIsAdmissionModalOpen(true);
  };

  const handleOpenGeneralAdmission = () => {
    setSelectedCourseForAdmission(undefined);
    setIsAdmissionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 3-Zone Compliant Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenAdmission={handleOpenGeneralAdmission}
      />

      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenAdmission={handleOpenGeneralAdmission}
        />

        {/* Flagship Courses & Board Exam Prep */}
        <CoursesSection
          lang={lang}
          onSelectCourseForAdmission={handleOpenAdmissionWithCourse}
        />

        {/* Faculty & Teaching Mentors (Prabhakar Mishra + 4 children) */}
        <FacultySection
          lang={lang}
        />

        {/* Real Institute Campus & Activities Gallery */}
        <CampusGallery
          lang={lang}
        />

        {/* Interactive Typing Speed Lab */}
        <TypingTestLab
          lang={lang}
          onOpenAdmission={handleOpenGeneralAdmission}
        />

        {/* Student Certificate Verification Portal */}
        <CertificateVerification
          lang={lang}
        />

        {/* Interactive Practice Quiz */}
        <BoardQuizSection
          lang={lang}
          onOpenAdmission={handleOpenGeneralAdmission}
        />

        {/* Testimonials & Outcomes */}
        <TestimonialsAndSuccess
          lang={lang}
        />

        {/* Full Location, 3 Phone Numbers & Directions */}
        <LocationAndContact
          lang={lang}
          onOpenAdmission={handleOpenGeneralAdmission}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenAdmission={handleOpenGeneralAdmission}
      />

      {/* Online Admission & Inquiry Modal */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
        lang={lang}
        preselectedCourse={selectedCourseForAdmission}
      />

      {/* Floating Quick Action Strip for Mobile Viewports (Height <= 48px, strictly under 15% mobile sticky cap) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-lg">
        <a
          href="tel:9451028331"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-slate-800 bg-slate-100 rounded-lg"
        >
          <Phone className="w-3.5 h-3.5 text-blue-700" />
          <span>कॉल करें</span>
        </a>
        <a
          href={`https://wa.me/91${INSTITUTE_INFO.whatsapp}?text=${encodeURIComponent(
            'नमस्ते सर, मुझे रितु कंप्यूटर ट्रेनिंग सेंटर के कोर्स और बोर्ड कोचिंग के बारे में जानकारी चाहिए।'
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-white bg-emerald-600 rounded-lg"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>व्हाट्सएप</span>
        </a>
        <button
          onClick={handleOpenGeneralAdmission}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-white bg-blue-700 rounded-lg"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>प्रवेश लें</span>
        </button>
      </div>

    </div>
  );
}
