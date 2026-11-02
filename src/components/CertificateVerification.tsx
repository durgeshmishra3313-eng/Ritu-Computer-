import React, { useState } from 'react';
import { ShieldCheck, Search, Award, Printer, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language, StudentCertificate } from '../types';
import { SAMPLE_VERIFIED_CERTIFICATES, INSTITUTE_INFO } from '../data/instituteData';

interface CertificateVerificationProps {
  lang: Language;
}

export const CertificateVerification: React.FC<CertificateVerificationProps> = ({ lang }) => {
  const isHi = lang === 'hi';
  const [rollInput, setRollInput] = useState('RCTC-2025-0101');
  const [searchedCertificate, setSearchedCertificate] = useState<StudentCertificate | null>(
    SAMPLE_VERIFIED_CERTIFICATES['RCTC-2025-0101']
  );
  const [hasSearched, setHasSearched] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanRoll = rollInput.trim().toUpperCase();
    if (!cleanRoll) return;

    setHasSearched(true);
    if (SAMPLE_VERIFIED_CERTIFICATES[cleanRoll]) {
      setSearchedCertificate(SAMPLE_VERIFIED_CERTIFICATES[cleanRoll]);
      setIsNotFound(false);
    } else {
      setSearchedCertificate(null);
      setIsNotFound(true);
    }
  };

  const handleQuickSelect = (roll: string) => {
    setRollInput(roll);
    setSearchedCertificate(SAMPLE_VERIFIED_CERTIFICATES[roll]);
    setIsNotFound(false);
    setHasSearched(true);
  };

  return (
    <section id="verification" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            {isHi ? 'डिजिटल सत्यापन प्रणाली' : 'Digital Verification Portal'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi ? 'छात्र प्रमाणपत्र सत्यापन (Online Verification)' : 'Online Certificate & Diploma Verification'}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {isHi
              ? 'रितु कंप्यूटर ट्रेनिंग सेंटर से जारी प्रमाण पत्रों की प्रामाणिकता जांचने के लिए छात्र का रोल नंबर दर्ज करें।'
              : 'Enter the student roll number to verify diploma authenticity issued by Ritu Computer Training Center.'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs mb-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={rollInput}
                onChange={(e) => setRollInput(e.target.value)}
                placeholder={isHi ? 'रोल नंबर दर्ज करें (उदा. RCTC-2025-0101)' : 'Enter Roll Number (e.g. RCTC-2025-0101)'}
                className="w-full pl-11 pr-4 py-3 text-sm bg-white border border-slate-300 rounded-xl font-mono focus:outline-none focus:ring-2 focus:ring-blue-600 uppercase"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-sm transition-all whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isHi ? 'सत्यापित करें' : 'Verify Certificate'}</span>
            </button>
          </form>

          {/* Quick sample chips */}
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-200/80 text-xs text-slate-500">
            <span className="font-medium">{isHi ? 'नमूना रोल नंबर:' : 'Sample Roll Numbers:'}</span>
            {Object.keys(SAMPLE_VERIFIED_CERTIFICATES).map((roll) => (
              <button
                key={roll}
                type="button"
                onClick={() => handleQuickSelect(roll)}
                className={`font-mono px-2 py-1 rounded text-[11px] transition-colors ${
                  rollInput.toUpperCase() === roll
                    ? 'bg-blue-100 text-blue-800 font-bold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {roll}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Display Card */}
        {searchedCertificate && (
          <div className="relative bg-gradient-to-b from-amber-50/20 via-white to-amber-50/10 rounded-2xl border-4 border-double border-amber-300 p-6 sm:p-10 shadow-lg">
            
            {/* Watermark/Seal background styling */}
            <div className="border border-amber-200 rounded-xl p-6 sm:p-8 bg-white/90">
              
              {/* Certificate Top Header */}
              <div className="text-center pb-6 border-b border-amber-200">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full mb-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>{isHi ? 'सत्यापित डिजिटल डिप्लोमा' : 'Verified Digital Diploma Certificate'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {INSTITUTE_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  {INSTITUTE_INFO.address.spot}, {INSTITUTE_INFO.address.road}, {INSTITUTE_INFO.address.district}
                </p>
                <div className="text-xs text-slate-500 mt-0.5">
                  Regd. Center for Computer Literacy & Academic Mentorship · Phone: 9451028331
                </div>
              </div>

              {/* Verified Ribbon */}
              <div className="flex items-center justify-between py-4 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{isHi ? 'डिजिटल रूप से सत्यापित एवं वैध' : 'Officially Verified & Validated'}</span>
                </div>
                <div className="font-mono text-slate-500">
                  Roll No: <span className="font-bold text-slate-900">{searchedCertificate.rollNo}</span>
                </div>
              </div>

              {/* Certificate Body Text */}
              <div className="py-8 space-y-4 text-center">
                <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider">
                  {isHi ? 'यह प्रमाणित किया जाता है कि' : 'This is to certify that'}
                </p>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight">
                  {searchedCertificate.studentName}
                </h4>
                <p className="text-sm text-slate-600">
                  {isHi ? 'सुपुत्र / सुपुत्री श्री' : 'Son/Daughter of'}{' '}
                  <strong className="text-slate-800 font-bold">{searchedCertificate.fatherName}</strong>
                </p>
                <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed pt-2">
                  {isHi
                    ? `ने संस्थान से सफलता पूर्वक अपना पाठ्यक्रम पूरा किया है और संतोषजनक ग्रेड प्राप्त किया है:`
                    : `has successfully completed the prescribed course and theoretical & practical examinations with distinction:`}
                </p>
                <div className="py-2">
                  <span className="inline-block px-5 py-2.5 bg-blue-50 text-blue-900 font-bold text-base sm:text-lg rounded-xl border border-blue-200">
                    {searchedCertificate.courseName}
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 pt-4 text-xs sm:text-sm text-slate-600">
                  <div>
                    <span className="text-slate-400 block text-xs">{isHi ? 'प्राप्त ग्रेड' : 'Grade Secured'}:</span>
                    <strong className="text-emerald-700 font-bold text-base">{searchedCertificate.grade}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">{isHi ? 'प्रशिक्षण अवधि' : 'Training Duration'}:</span>
                    <strong className="text-slate-800 font-semibold">{searchedCertificate.duration}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">{isHi ? 'जारी तिथि' : 'Issue Date'}:</span>
                    <strong className="text-slate-800 font-semibold">{searchedCertificate.issueDate}</strong>
                  </div>
                </div>
              </div>

              {/* Signatures & Seal Footer */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-4 items-end">
                <div className="text-left">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-amber-400 flex items-center justify-center text-[10px] text-amber-700 font-bold uppercase text-center p-1 bg-amber-50">
                    RCTC SEAL
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Lohrouli Center Verified</p>
                </div>

                <div className="text-right">
                  <p className="font-serif italic text-base text-slate-800 font-bold">Prabhakar Mishra</p>
                  <div className="w-32 h-0.5 bg-slate-300 ml-auto my-1" />
                  <p className="text-xs font-bold text-slate-900">{isHi ? 'प्रभाकर मिश्रा' : 'Prabhakar Mishra'}</p>
                  <p className="text-[11px] text-slate-500">{isHi ? 'निदेशक (Director)' : 'Founder & Director'}</p>
                </div>
              </div>

            </div>

            {/* Print Affordance */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{isHi ? 'प्रमाणपत्र प्रिंट करें' : 'Print Verification Copy'}</span>
              </button>
            </div>

          </div>
        )}

        {/* Not found state */}
        {hasSearched && isNotFound && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-red-600 mx-auto" />
            <h4 className="text-base font-bold text-red-900">
              {isHi ? 'रोल नंबर नहीं मिला' : 'Roll Number Not Found'}
            </h4>
            <p className="text-xs sm:text-sm text-red-700 max-w-md mx-auto">
              {isHi
                ? `रोल नंबर "${rollInput}" के लिए कोई रिकॉर्ड उपलब्ध नहीं है। कृपया स्पेलिंग जांचें या कार्यालय में 9451028331 पर संपर्क करें।`
                : `No certificate record found for "${rollInput}". Please check your roll number or contact the center at 9451028331.`}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
