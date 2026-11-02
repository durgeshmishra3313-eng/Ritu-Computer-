import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Phone, Send } from 'lucide-react';
import { Language, InquiryRecord } from '../types';
import { COURSES_DATA, INSTITUTE_INFO } from '../data/instituteData';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedCourse?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedCourse
}) => {
  const isHi = lang === 'hi';

  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(preselectedCourse || COURSES_DATA[0].title);
  const [batchPreference, setBatchPreference] = useState('Morning Batch (07:00 AM - 11:30 AM)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (preselectedCourse) {
      setSelectedCourse(preselectedCourse);
    }
  }, [preselectedCourse]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!studentName.trim()) {
      errs.studentName = isHi ? 'कृपया छात्र/छात्रा का नाम लिखें' : 'Please enter student name';
    }
    if (!fatherName.trim()) {
      errs.fatherName = isHi ? 'कृपया पिता/अभिभावक का नाम लिखें' : "Please enter father's name";
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      errs.phone = isHi ? 'कृपया मान्य 10 अंकों का मोबाइल नंबर दर्ज करें' : 'Please enter a valid 10-digit mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecord: InquiryRecord = {
      id: 'INQ-' + Date.now().toString().slice(-6),
      studentName,
      fatherName,
      phone,
      village,
      selectedCourse,
      batchPreference,
      message,
      submittedAt: new Date().toLocaleString()
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('ritu_center_inquiries') || '[]');
      existing.unshift(newRecord);
      localStorage.setItem('ritu_center_inquiries', JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    setIsSubmitted(true);
  };

  const openWhatsAppInquiry = () => {
    const text = isHi
      ? `नमस्ते प्रभाकर सर,\nमैं रितु कंप्यूटर ट्रेनिंग सेंटर (लोहरौली चौराहा, साड़ी कला) में प्रवेश हेतु आवेदन कर रहा हूँ:\n\n👤 छात्र का नाम: ${studentName}\n👨‍💼 पिता का नाम: ${fatherName}\n📱 मोबाइल: ${phone}\n📍 पता/ग्राम: ${village || 'लोहरौली / साड़ी कला'}\n📚 इच्छित कोर्स: ${selectedCourse}\n⏰ बैच समय: ${batchPreference}\n${message ? `💬 अतिरिक्त विवरण: ${message}\n` : ''}\nकृपया प्रवेश प्रक्रिया एवं फीस के बारे में मार्गदर्शन करें।`
      : `Hello Prabhakar Sir,\nI would like to apply for admission at Ritu Computer Training Center, Lohrouli Chouraha:\n\n👤 Student: ${studentName}\n👨‍💼 Father: ${fatherName}\n📱 Phone: ${phone}\n📍 Address/Village: ${village}\n📚 Course: ${selectedCourse}\n⏰ Batch: ${batchPreference}\n${message ? `💬 Note: ${message}\n` : ''}\nPlease guide me on admission procedure and batch details.`;

    const url = `https://wa.me/91${INSTITUTE_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const resetForm = () => {
    setStudentName('');
    setFatherName('');
    setPhone('');
    setVillage('');
    setMessage('');
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 mb-5">
          <div>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
              {isHi ? 'प्रवेश एवं काउंसलिंग फॉर्म' : 'Online Admission & Counseling Form'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              {isHi ? 'रितु कंप्यूटर ट्रेनिंग सेंटर' : 'Ritu Computer Training Center'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {isHi
                ? 'लोहरौली चौराहा, साड़ी कला, बस्ती-बांसी रोड, सिद्धार्थनगर | फोन: 9451028331'
                : 'Lohrouli Chouraha, Sadi Kala, Basti-Bansi Road, Siddharthnagar | Call: 9451028331'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              {isHi ? 'आवेदन सफलतापूर्वक दर्ज कर लिया गया है!' : 'Application Successfully Submitted!'}
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {isHi
                ? `प्रिय ${studentName}, आपका प्रवेश विवरण प्राप्त हो गया है। निदेशक प्रभाकर मिश्रा जी अथवा हमारी शिक्षक टीम शीघ्र ही आपसे संपर्क करेगी। त्वरित पुष्टि के लिए आप सीधे व्हाट्सएप पर भी चैट कर सकते हैं।`
                : `Dear ${studentName}, your application has been received. Director Prabhakar Mishra or our faculty will get back to you shortly. You may also connect directly via WhatsApp.`}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={openWhatsAppInquiry}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isHi ? 'व्हाट्सएप पर भेजें (Direct WhatsApp)' : 'Confirm on WhatsApp'}</span>
              </button>
              <button
                onClick={resetForm}
                className="px-5 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                {isHi ? 'समाप्त करें / ठीक है' : 'Done'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Student Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                {isHi ? 'छात्र / छात्रा का नाम (Student Full Name) *' : 'Student Full Name *'}
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder={isHi ? 'उदा. राहुल कुमार' : 'e.g. Rahul Kumar'}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
              {errors.studentName && <p className="text-xs text-red-600 mt-1">{errors.studentName}</p>}
            </div>

            {/* Father Name & Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  {isHi ? 'पिता / अभिभावक का नाम *' : "Father / Guardian's Name *"}
                </label>
                <input
                  type="text"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  placeholder={isHi ? 'उदा. श्री रामकेश मिश्रा' : 'e.g. Mr. Ramkesh Mishra'}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
                {errors.fatherName && <p className="text-xs text-red-600 mt-1">{errors.fatherName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  {isHi ? 'मोबाइल नंबर (10 Digit) *' : 'Mobile Number (10 Digit) *'}
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9451028331"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg font-mono tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Village / Address */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                {isHi ? 'ग्राम / पता / कस्बा (Village / Town)' : 'Village / Locality / Address'}
              </label>
              <input
                type="text"
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                placeholder={isHi ? 'उदा. लोहरौली / साड़ी कला / बांसी रोड' : 'e.g. Lohrouli / Sadi Kala / Bansi'}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>

            {/* Course Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                {isHi ? 'इच्छित कोर्स अथवा बोर्ड कोचिंग चुनें *' : 'Select Program / Board Class *'}
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              >
                <optgroup label={isHi ? 'कंप्यूटर कोर्सेस' : 'Computer Certifications'}>
                  <option value="ADCA (Advanced Diploma in Computer Applications) - 1 Year">
                    ADCA (12 Months - Advanced Diploma in Computer Applications)
                  </option>
                  <option value="CCC (Course on Computer Concepts - NIELIT) - 3 Months">
                    CCC (Course on Computer Concepts - NIELIT)
                  </option>
                  <option value="DCA (Diploma in Computer Applications) - 6 Months">
                    DCA (6 Months Diploma)
                  </option>
                  <option value="Tally Prime with GST & Accounting - 3 Months">
                    Tally Prime with GST & Accounting
                  </option>
                  <option value="Typing Master Lab (Hindi & English Typing)">
                    Hindi & English Typing Speed Lab
                  </option>
                </optgroup>
                <optgroup label={isHi ? 'बोर्ड परीक्षा कोचिंग' : 'Board Exam Preparation'}>
                  <option value="Class 10th High School Board Preparation (Maths, Science, English)">
                    Class 10th High School Board Exam Coaching
                  </option>
                  <option value="Class 12th Intermediate Board Preparation (Physics, Chemistry, Maths, Bio)">
                    Class 12th Intermediate Board Exam Coaching
                  </option>
                  <option value="Class 9th / 11th Foundation Batch">
                    Class 9th & 11th Foundation Batch
                  </option>
                </optgroup>
              </select>
            </div>

            {/* Preferred Batch Timing */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                {isHi ? 'बैच का पसंदीदा समय (Batch Timing)' : 'Preferred Batch Timing'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setBatchPreference('Morning Batch (07:00 AM - 11:30 AM)')}
                  className={`p-2.5 rounded-lg border text-left font-medium transition-colors ${
                    batchPreference.startsWith('Morning')
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {isHi ? '🌅 सुबह बैच (07:00 AM - 11:30 AM)' : '🌅 Morning (07:00 AM - 11:30 AM)'}
                </button>
                <button
                  type="button"
                  onClick={() => setBatchPreference('Evening Batch (03:00 PM - 07:30 PM)')}
                  className={`p-2.5 rounded-lg border text-left font-medium transition-colors ${
                    batchPreference.startsWith('Evening')
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {isHi ? '🌆 शाम बैच (03:00 PM - 07:30 PM)' : '🌆 Evening (03:00 PM - 07:30 PM)'}
                </button>
              </div>
            </div>

            {/* Any Note / Questions */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                {isHi ? 'कोई विशेष प्रश्न या टिप्पणी (वैकल्पिक)' : 'Any Note or Specific Query (Optional)'}
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={isHi ? 'उदा. मुझे शाम 4 बजे का समय चाहिए या फीस में छूट की जानकारी चाहिए।' : 'e.g. Need info on fees or batch availability.'}
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>

            {/* Direct Call Reminder */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{isHi ? 'सीधे कॉल भी कर सकते हैं:' : 'Direct Call Director:'}</span>
              </span>
              <a href="tel:9451028331" className="font-mono font-bold text-blue-700 hover:underline">
                9451028331 / 6390442206
              </a>
            </div>

            {/* Actions */}
            <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                {isHi ? 'रद्द करें' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>{isHi ? 'प्रवेश फॉर्म जमा करें' : 'Submit Application'}</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
