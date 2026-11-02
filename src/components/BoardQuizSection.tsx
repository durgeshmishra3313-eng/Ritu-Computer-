import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { Language } from '../types';
import { QUIZ_QUESTIONS } from '../data/instituteData';

interface BoardQuizSectionProps {
  lang: Language;
  onOpenAdmission: () => void;
}

export const BoardQuizSection: React.FC<BoardQuizSectionProps> = ({ lang, onOpenAdmission }) => {
  const isHi = lang === 'hi';
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return; // already selected
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            {isHi ? 'अभ्यास प्रश्नोत्तरी' : 'Interactive Practice Challenge'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi ? 'कंप्यूटर एवं बोर्ड परीक्षा ज्ञान परख' : 'CCC & Board Exam Quick Quiz'}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {isHi
              ? 'देखें आपकी बोर्ड परीक्षा और कंप्यूटर की तैयारी कितनी मजबूत है।'
              : 'Test your understanding of fundamental computer concepts and board exam questions.'}
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
          
          {!quizFinished ? (
            <div>
              {/* Question Meta */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pb-3 border-b border-slate-200 mb-4">
                <span className="text-blue-700 uppercase">
                  {currentQ.category === 'computer'
                    ? (isHi ? 'कंप्यूटर / सीसीसी प्रश्न' : 'Computer / CCC Question')
                    : (isHi ? 'बोर्ड परीक्षा प्रश्न' : 'Board Exam Question')}
                </span>
                <span className="font-mono tabular-nums">
                  {isHi ? `प्रश्न ${currentIdx + 1} / ${QUIZ_QUESTIONS.length}` : `Question ${currentIdx + 1} of ${QUIZ_QUESTIONS.length}`}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 leading-snug">
                {isHi ? currentQ.questionHi : currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt, i) => {
                  let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-blue-50/40';

                  if (selectedOption !== null) {
                    if (i === currentQ.correctIndex) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
                    } else if (i === selectedOption) {
                      btnStyle = 'bg-red-50 border-red-500 text-red-900';
                    } else {
                      btnStyle = 'bg-white/60 border-slate-200 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={i}
                      disabled={selectedOption !== null}
                      onClick={() => handleSelectOption(i)}
                      className={`w-full p-3.5 rounded-xl border text-left text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {selectedOption !== null && i === currentQ.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {selectedOption !== null && i === selectedOption && i !== currentQ.correctIndex && (
                        <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div className="p-4 bg-blue-50/80 rounded-xl border border-blue-200 text-xs sm:text-sm text-blue-900 mb-6">
                  <p className="font-bold mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-blue-700" />
                    <span>{isHi ? 'सही उत्तर एवं स्पष्टीकरण:' : 'Correct Answer Explanation:'}</span>
                  </p>
                  <p>{currentQ.explanation}</p>
                </div>
              )}

              {/* Action */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                <span className="text-xs text-slate-500">
                  {isHi ? `वर्तमान स्कोर: ${score}` : `Current Score: ${score}`}
                </span>
                {selectedOption !== null && (
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm"
                  >
                    <span>
                      {currentIdx + 1 < QUIZ_QUESTIONS.length
                        ? (isHi ? 'अगला प्रश्न' : 'Next Question')
                        : (isHi ? 'परिणाम देखें' : 'View Results')}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                {score}/{QUIZ_QUESTIONS.length}
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {score >= 3
                  ? (isHi ? 'शानदार प्रदर्शन! आपकी तैयारी उत्कृष्ट है।' : 'Great Performance! Well Done.')
                  : (isHi ? 'अच्छा प्रयास! थोड़ी और तैयारी से आप शीर्ष पर पहुँच सकते हैं।' : 'Good Effort! Keep practicing to excel.')}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {isHi
                  ? 'रितु कंप्यूटर ट्रेनिंग सेंटर में नियमित टेस्ट सीरीज और व्यक्तिगत मार्गदर्शन उपलब्ध है।'
                  : 'Join Ritu Computer Training Center for systematic test series and personal mentorship.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{isHi ? 'क्विज फिर से दें' : 'Try Again'}</span>
                </button>
                <button
                  onClick={onOpenAdmission}
                  className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm"
                >
                  {isHi ? 'नियमित बैच में प्रवेश लें' : 'Join Regular Batch'}
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
