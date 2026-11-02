import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';

interface FooterProps {
  lang: Language;
  onOpenAdmission: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenAdmission }) => {
  const isHi = lang === 'hi';

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand & Director */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {isHi ? INSTITUTE_INFO.nameHi : INSTITUTE_INFO.name}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              {isHi
                ? 'निदेशक प्रभाकर मिश्रा के मार्गदर्शन में कंप्यूटर शिक्षा (ADCA, DCA, CCC, टैली) एवं 9वीं से 12वीं यूपी व सीबीएसई बोर्ड परीक्षा कोचिंग का प्रतिष्ठित संस्थान।'
                : 'Premier computer training & academic board coaching center directed by Prabhakar Mishra and dedicated teaching mentors in Siddharthnagar.'}
            </p>
            <div className="text-xs text-slate-400 pt-1 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{isHi ? `${INSTITUTE_INFO.address.spotHi}, ${INSTITUTE_INFO.address.roadHi}, ${INSTITUTE_INFO.address.districtHi}` : `${INSTITUTE_INFO.address.spot}, ${INSTITUTE_INFO.address.road}, ${INSTITUTE_INFO.address.district}`}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-mono tabular-nums">9451028331 / 6390442206 / 9721377205</span>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              {isHi ? 'महत्वपूर्ण लिंक' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  {isHi ? 'कोर्स एवं फीस' : 'Courses & Syllabus'}
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-white transition-colors">
                  {isHi ? 'फैकल्टी (शिक्षक टीम)' : 'Our Faculty Team'}
                </a>
              </li>
              <li>
                <a href="#verification" className="hover:text-white transition-colors">
                  {isHi ? 'प्रमाणपत्र सत्यापन' : 'Verify Certificate'}
                </a>
              </li>
              <li>
                <a href="#typing-lab" className="hover:text-white transition-colors">
                  {isHi ? 'टाइपिंग स्पीड टेस्ट' : 'Typing Speed Test'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {isHi ? 'संपर्क व पता' : 'Contact & Directions'}
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              {isHi ? 'प्रमुख कोर्सेज' : 'Key Programs'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>{isHi ? 'ADCA (1 वर्ष कंप्यूटर डिप्लोमा)' : 'ADCA (1 Year Advanced Diploma)'}</li>
              <li>{isHi ? 'CCC (NIELIT सरकारी नौकरी)' : 'CCC (Course on Computer Concepts)'}</li>
              <li>{isHi ? 'Tally Prime with GST' : 'Tally Prime with GST & Accounts'}</li>
              <li>{isHi ? '10वीं हाईस्कूल बोर्ड तैयारी' : '10th Board Exam Preparation'}</li>
              <li>{isHi ? '12वीं इंटरमीडिएट बोर्ड कोचिंग' : '12th Intermediate Board Prep'}</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & respect */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {INSTITUTE_INFO.name}. {isHi ? 'सर्वाधिकार सुरक्षित।' : 'All Rights Reserved.'}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              {isHi ? 'लोहरौली चौराहा, साड़ी कला (सिद्धार्थनगर)' : 'Lohrouli Chouraha, Sadi Kala (Siddharthnagar)'}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
