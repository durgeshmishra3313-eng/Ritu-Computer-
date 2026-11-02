import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Check, Copy } from 'lucide-react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import { InteractiveMap } from './InteractiveMap';

interface LocationAndContactProps {
  lang: Language;
  onOpenAdmission: () => void;
}

export const LocationAndContact: React.FC<LocationAndContactProps> = ({ lang, onOpenAdmission }) => {
  const isHi = lang === 'hi';
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            {isHi ? 'स्थान एवं संपर्क विवरण' : 'Location & Direct Contact'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi
              ? 'संस्थान पर पधारें या सीधे कॉल करें'
              : 'Visit Our Center or Call Us Directly'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {isHi
              ? 'लोहरौली चौराहा, साड़ी कला, बस्ती-बांसी रोड, सिद्धार्थनगर। हम हर समय आपकी सहायता के लिए उपलब्ध हैं।'
              : 'Located at Lohrouli Chouraha, Sadi Kala, Basti-Bansi Road, Siddharthnagar.'}
          </p>
        </div>

        {/* 2-Column Split: Direct Contact Cards (Left) + Interactive Visual Guide (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Helpline & Location Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address Banner */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {isHi ? 'संस्थान का पूरा पता' : 'Full Institute Address'}
                  </h3>
                  <p className="text-sm font-semibold text-blue-900 mt-1">
                    {isHi ? INSTITUTE_INFO.nameHi : INSTITUTE_INFO.name}
                  </p>
                  <p className="text-sm text-slate-700 mt-0.5">
                    <strong>{isHi ? 'स्थान:' : 'Spot:'}</strong> {isHi ? INSTITUTE_INFO.address.spotHi : INSTITUTE_INFO.address.spot}
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>{isHi ? 'मार्ग:' : 'Road:'}</strong> {isHi ? INSTITUTE_INFO.address.roadHi : INSTITUTE_INFO.address.road}
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>{isHi ? 'जिला:' : 'District:'}</strong> {isHi ? INSTITUTE_INFO.address.districtHi : INSTITUTE_INFO.address.district}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    {isHi ? `लैंडमार्क: ${INSTITUTE_INFO.address.landmarkHi}` : `Landmark: ${INSTITUTE_INFO.address.landmark}`}
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Dedicated Mobile Helplines with 1-click Dial & Copy */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block">
                {isHi ? 'सीधे संपर्क हेतु मोबाइल नंबर (Click to Call)' : 'Contact Helplines (Click to Call)'}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {INSTITUTE_INFO.phones.map((phone, i) => {
                  const titles = [
                    isHi ? 'प्रभाकर मिश्रा (निदेशक)' : 'Director Prabhakar Mishra',
                    isHi ? 'प्रवेश एवं सहायता' : 'Admissions & Help',
                    isHi ? 'लैब व इंक्वायरी' : 'Lab & Inquiry Desk'
                  ];

                  return (
                    <div
                      key={phone}
                      className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[11px] font-semibold text-blue-700 block mb-1">
                          {titles[i]}
                        </span>
                        <a
                          href={`tel:${phone}`}
                          className="font-mono text-base font-bold text-slate-900 hover:text-blue-700 tabular-nums block"
                        >
                          {phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-100">
                        <a
                          href={`tel:${phone}`}
                          className="flex-1 py-1.5 text-center text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors"
                        >
                          {isHi ? 'कॉल करें' : 'Call'}
                        </a>
                        <button
                          onClick={() => copyToClipboard(phone)}
                          className="p-1.5 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md text-xs"
                          title="Copy number"
                        >
                          {copiedPhone === phone ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timings card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                <h4 className="font-bold text-slate-900">
                  {isHi ? 'संस्थान खुलने का समय एवं बैच' : 'Operating Hours & Batch Shifts'}
                </h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                  <div>
                    <span className="text-slate-500 font-medium">{isHi ? 'प्रातः बैच:' : 'Morning Shift:'}</span>{' '}
                    <strong className="font-mono text-slate-900">{INSTITUTE_INFO.timings.morning}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">{isHi ? 'सायं बैच:' : 'Evening Shift:'}</span>{' '}
                    <strong className="font-mono text-slate-900">{INSTITUTE_INFO.timings.evening}</strong>
                  </div>
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  {isHi ? INSTITUTE_INFO.timings.daysHi : INSTITUTE_INFO.timings.days}
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Big CTA */}
            <div className="pt-2">
              <a
                href={`https://wa.me/91${INSTITUTE_INFO.whatsapp}?text=${encodeURIComponent(
                  'नमस्ते, मैं रितु कंप्यूटर ट्रेनिंग सेंटर के लोहरौली चौराहा शाखा में प्रवेश हेतु जानकारी चाहता हूँ।'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>
                  {isHi
                    ? 'सीधे निदेशक प्रभाकर मिश्रा जी से व्हाट्सएप पर बात करें'
                    : 'Chat Directly with Director Prabhakar Mishra on WhatsApp'}
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: Directions & Route Guide (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <Navigation className="w-4 h-4" />
                <span>{isHi ? 'मार्ग दर्शन (How to Reach)' : 'Travel Route Guidance'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                {isHi ? 'लोहरौली चौराहा, साड़ी कला कैसे पहुंचे?' : 'Reaching Lohrouli Chouraha, Sadi Kala'}
              </h3>

              {/* Real Building Exterior Photo */}
              <div className="rounded-xl overflow-hidden border border-slate-700 mb-4 bg-slate-950">
                <img
                  src="/assets/aistudio/IMG-20251125-WA0024_94292507.jpg"
                  alt="Ritu Computer Training Center Building Lohrouli"
                  className="w-full h-36 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-2 bg-slate-800/90 text-[11px] text-slate-300 flex items-center justify-between">
                  <span>{isHi ? 'मुख्य सड़क से भवन की पहचान' : 'Street Front Landmark'}</span>
                  <span className="text-blue-400 font-semibold">{isHi ? 'लोहरौली चौराहा' : 'Lohrouli Chouraha'}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <h4 className="font-bold text-white mb-1">
                    {isHi ? 'बांसी (Bansi) की तरफ से:' : 'From Bansi Direction:'}
                  </h4>
                  <p>
                    {isHi
                      ? 'बांसी मुख्य बस स्टैंड या चौराहे से बस्ती रोड की ओर चलने पर लोहरौली चौराहा (साड़ी कला) पर स्थित है। सभी ऑटो व बसें यहाँ रुकती हैं।'
                      : 'Take the Basti road from Bansi town. Located directly at Lohrouli intersection (Sadi Kala), easily accessible by auto and buses.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <h4 className="font-bold text-white mb-1">
                    {isHi ? 'बस्ती (Basti) की तरफ से:' : 'From Basti Direction:'}
                  </h4>
                  <p>
                    {isHi
                      ? 'बस्ती से बांसी जाने वाले मार्ग पर साड़ी कला, लोहरौली चौराहे पर संस्थान मुख्य मार्ग के निकट ही स्थित है।'
                      : 'Heading towards Bansi from Basti highway, stop at Lohrouli crossing in Sadi Kala.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <h4 className="font-bold text-white mb-1">
                    {isHi ? 'ग्रामीण क्षेत्रों के विद्यार्थियों हेतु सुविधा:' : 'For Surrounding Rural Students:'}
                  </h4>
                  <p>
                    {isHi
                      ? 'आस-पास के गांवों (साड़ी कला, लोहरौली, रुधौली सीमा व नजदीकी क्षेत्र) के छात्र साइकिल अथवा लोकल ऑटो से आसानी से सुबह व शाम बैच में आ सकते हैं।'
                      : 'Safe bicycle parking and flexible batch timings for students traveling from nearby villages.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 flex flex-col gap-3">
              <button
                onClick={onOpenAdmission}
                className="w-full py-3 text-center text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors"
              >
                {isHi ? 'ऑनलाइन सीट सुरक्षित करें' : 'Reserve Admission Seat'}
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Google Map Section */}
        <div className="mt-12">
          <InteractiveMap lang={lang} />
        </div>

      </div>
    </section>
  );
};
