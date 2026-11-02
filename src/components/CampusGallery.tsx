import React, { useState } from 'react';
import { Camera, MapPin, Users, Building, ShieldCheck, X, ZoomIn } from 'lucide-react';
import { Language } from '../types';

interface CampusGalleryProps {
  lang: Language;
}

export const CampusGallery: React.FC<CampusGalleryProps> = ({ lang }) => {
  const isHi = lang === 'hi';
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    desc: string;
  } | null>(null);

  const galleryItems = [
    {
      id: 'building-front',
      src: '/assets/aistudio/IMG-20251125-WA0024_94292507.jpg',
      title: isHi ? 'संस्थान का मुख्य भवन (Front View)' : 'Main Institute Campus Building',
      badge: isHi ? 'लोहरौली चौराहा, साड़ी कला' : 'Lohrouli Chouraha, Sadi Kala',
      desc: isHi
        ? 'बस्ती-बांसी रोड पर स्थित रितु कंप्यूटर ट्रेनिंग सेंटर का मुख्य भवन व अधिकृत बोर्ड।'
        : 'Main campus building located on Basti-Bansi highway with official center board.'
    },
    {
      id: 'students-lumbini-tour',
      src: '/assets/aistudio/lumbini_tour_upright.jpg',
      title: isHi ? 'छात्र-छात्राओं का वार्षिक शैक्षणिक भ्रमण (लुम्बिनी)' : 'Annual Educational Tour to Lumbini',
      badge: isHi ? 'शैक्षणिक यात्रा' : 'Educational Tour',
      desc: isHi
        ? 'संस्थान द्वारा विद्यार्थियों के सर्वांगीण विकास हेतु आयोजित लुम्बिनी भ्रमण।'
        : 'Annual educational excursion to Lumbini organized for students and faculty mentors.'
    },
    {
      id: 'campus-side-parking',
      src: '/assets/aistudio/campus_side_upright.jpg',
      title: isHi ? 'परिसर एवं सुरक्षित छात्र साइकिल पार्किंग' : 'Campus Front & Safe Bicycle Parking',
      badge: isHi ? 'सुरक्षित कैंपस' : 'Safe Parking Facility',
      desc: isHi
        ? 'आस-पास के ग्रामीण क्षेत्रों से आने वाले छात्र-छात्राओं के लिए पर्याप्त एवं सुरक्षित पार्किंग व्यवस्था।'
        : 'Safe vehicle and bicycle parking area for students commuting from nearby villages.'
    },
    {
      id: 'office-entrance',
      src: '/assets/aistudio/IMG-20250713-WA0009_bf60a449.jpg',
      title: isHi ? 'प्रवेश एवं काउंसलिंग रिसेप्शन' : 'Admissions & Counseling Reception',
      badge: isHi ? 'हेल्पडेस्क एवं क्लासरूम' : 'Helpdesk & Classroom',
      desc: isHi
        ? 'नवीन प्रवेश, पाठ्यक्रम परामर्श और कक्षाओं हेतु संस्थान का स्वागत एवं रिसेप्शन कक्ष।'
        : 'Reception and counseling room for new admissions, course details, and queries.'
    },
    {
      id: 'director-study-office',
      src: '/assets/aistudio/director_office_library.jpg',
      title: isHi ? 'निदेशक कक्ष, परामर्श डेस्क एवं अध्ययन पुस्तकालय' : 'Director Office, Counseling Desk & Reference Library',
      badge: isHi ? 'निदेशक कक्ष व पुस्तकालय' : 'Director Office & Library',
      desc: isHi
        ? 'निदेशक प्रभाकर मिश्रा जी का कक्ष, छात्र परामर्श डेस्क एवं प्रतियोगी व शैक्षणिक पुस्तकों का विशाल संग्रह।'
        : 'Director Prabhakar Mishra office, student counseling desk, and extensive academic reference book collection.'
    },
    {
      id: 'saraswati-puja-event',
      src: '/assets/aistudio/saraswati_puja_event.jpg',
      title: isHi ? 'वार्षिक सरस्वती पूजा एवं सांस्कृतिक महोत्सव' : 'Annual Saraswati Puja & Cultural Celebrations',
      badge: isHi ? 'सांस्कृतिक गतिविधि' : 'Cultural Activity',
      desc: isHi
        ? 'संस्थान में विद्यार्थियों एवं शिक्षकों द्वारा आयोजित वसंत पंचमी व सरस्वती वंदना सांस्कृतिक कार्यक्रम।'
        : 'Annual Saraswati Puja, cultural ceremonies, and student talent showcases at the center.'
    }
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <Camera className="w-4 h-4" />
            <span>{isHi ? 'वास्तविक कैंपस एवं गतिविधियां' : 'Real Campus & Student Life'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi ? 'रितु कंप्यूटर ट्रेनिंग सेंटर की वास्तविक झलक' : 'Visual Glimpse of Our Institute'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {isHi
              ? 'लोहरौली चौराहा, साड़ी कला (बस्ती-बांसी रोड, सिद्धार्थनगर) स्थित हमारा वास्तविक परिसर, शिक्षण माहौल, पुस्तकालय एवं सांस्कृतिक कार्यक्रम।'
              : 'Our real institute campus at Lohrouli Chouraha, Sadi Kala (Basti-Bansi Road, Siddharthnagar) with modern classrooms, library, and lab.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage({ src: item.src, title: item.title, desc: item.desc })}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex items-end p-3.5">
                  <span className="text-[11px] font-semibold text-white/90 bg-slate-900/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>
                <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-blue-700 font-semibold">
                  <span>{isHi ? 'बड़ा देखें' : 'View Full Image'}</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights beneath Gallery */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{isHi ? 'मुख्य मार्ग पर सुगम स्थान' : 'Prime Highway Location'}</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                {isHi
                  ? 'लोहरौली चौराहा, साड़ी कला बस स्टैंड के ठीक पास, सीधी बस व ऑटो सुविधा।'
                  : 'Right by Lohrouli Chouraha Bus Stand with direct public transport.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{isHi ? 'सुरक्षित साइकिल पार्किंग' : 'Safe Student Parking'}</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                {isHi
                  ? 'गांवों से आने वाले छात्र-छात्राओं के लिए पर्याप्त एवं सुरक्षित साइकिल/बाइक शेड।'
                  : 'Spacious area with shade and safety for cycles and bikes.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{isHi ? 'शैक्षणिक टूर एवं गतिविधियां' : 'Study Tours & Activities'}</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                {isHi
                  ? 'ज्ञानवर्धन एवं मनोबल वृद्धि हेतु प्रतिवर्ष ऐतिहासिक व ज्ञानवर्धक स्थलों का भ्रमण।'
                  : 'Annual motivational and educational excursions organized for learners.'}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <h3 className="text-base font-bold text-slate-900">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 bg-slate-950 flex items-center justify-center overflow-hidden max-h-[65vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-white border-t border-slate-200">
              <p className="text-xs sm:text-sm text-slate-700">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
