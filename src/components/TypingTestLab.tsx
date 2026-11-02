import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, RotateCcw, Award, CheckCircle, Zap } from 'lucide-react';
import { Language } from '../types';
import { TYPING_PARAGRAPHS } from '../data/instituteData';

interface TypingTestLabProps {
  lang: Language;
  onOpenAdmission: () => void;
}

export const TypingTestLab: React.FC<TypingTestLabProps> = ({ lang, onOpenAdmission }) => {
  const isHi = lang === 'hi';
  const [typingLang, setTypingLang] = useState<'en' | 'hi'>('en');
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const targetText = TYPING_PARAGRAPHS[typingLang][paragraphIndex];

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (startTime && !isFinished) {
      interval = setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [startTime, isFinished]);

  // Reset function
  const resetTest = () => {
    setUserInput('');
    setStartTime(null);
    setElapsedSeconds(0);
    setIsFinished(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (!startTime && val.length > 0) {
      setStartTime(Date.now());
    }
    setUserInput(val);

    if (val.length >= targetText.length) {
      setIsFinished(true);
    }
  };

  // Calculations
  const totalCharacters = userInput.length;
  let correctCharacters = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === targetText[i]) {
      correctCharacters++;
    }
  }

  const accuracy = totalCharacters > 0 ? Math.round((correctCharacters / totalCharacters) * 100) : 100;
  const minutes = Math.max(elapsedSeconds / 60, 0.05);
  // standard WPM formula = (characters / 5) / minutes
  const wpm = totalCharacters > 0 ? Math.round((correctCharacters / 5) / minutes) : 0;

  return (
    <section id="typing-lab" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            {isHi ? 'इंटरएक्टिव टाइपिंग लैब' : 'Interactive Typing Speed Lab'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi ? 'कंप्यूटर टाइपिंग स्पीड टेस्ट' : 'Test Your Typing Speed Online'}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {isHi
              ? 'यूपी पुलिस, कोर्ट क्लर्क, स्टेनो एवं सरकारी परीक्षाओं हेतु अपनी टाइपिंग गति (WPM) और शुद्धता की अभी जांच करें।'
              : 'Assess your typing speed and accuracy for government clerical and competitive examinations.'}
          </p>
        </div>

        {/* Typing Box Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          
          {/* Controls bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            {/* Language toggle for typing test */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => {
                  setTypingLang('en');
                  setParagraphIndex(0);
                  resetTest();
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  typingLang === 'en'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                English Typing
              </button>
              <button
                onClick={() => {
                  setTypingLang('hi');
                  setParagraphIndex(0);
                  resetTest();
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  typingLang === 'hi'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                हिन्दी टाइपिंग (Hindi)
              </button>
            </div>

            {/* Scoreboard metrics */}
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5 text-slate-600">
                <span>{isHi ? 'समय:' : 'Time:'}</span>
                <span className="font-mono tabular-nums text-slate-900 text-sm font-bold">
                  {elapsedSeconds}s
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-700">
                <Zap className="w-4 h-4" />
                <span>Speed:</span>
                <span className="font-mono tabular-nums text-base font-extrabold">{wpm} WPM</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle className="w-4 h-4" />
                <span>Accuracy:</span>
                <span className="font-mono tabular-nums text-base font-extrabold">{accuracy}%</span>
              </div>
            </div>
          </div>

          {/* Reference Paragraph to Type */}
          <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm sm:text-base leading-relaxed font-sans select-none">
            {targetText.split('').map((char, index) => {
              let colorClass = 'text-slate-700';
              if (index < userInput.length) {
                colorClass = userInput[index] === char ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-100 font-bold';
              } else if (index === userInput.length) {
                colorClass = 'text-blue-900 bg-blue-100 underline';
              }
              return (
                <span key={index} className={colorClass}>
                  {char}
                </span>
              );
            })}
          </div>

          {/* User Input Textarea */}
          <div className="mt-4">
            <textarea
              ref={inputRef}
              rows={4}
              value={userInput}
              onChange={handleInputChange}
              disabled={isFinished}
              placeholder={
                isHi
                  ? 'ऊपर दिए गए पैराग्राफ को यहाँ टाइप करना शुरू करें...'
                  : 'Start typing the paragraph above here to measure your speed...'
              }
              className="w-full p-4 text-sm sm:text-base bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 leading-relaxed disabled:bg-slate-50"
            />
          </div>

          {/* Action Row */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
            <div className="text-xs text-slate-500">
              {isHi
                ? 'टिप: संस्थान में प्रतिदिन 1 घंटा विशेष टाइपिंग लैब उपलब्ध है।'
                : 'Tip: 1 hour dedicated daily typing batch available at institute.'}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={resetTest}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isHi ? 'पुनः शुरू करें' : 'Reset'}</span>
              </button>

              <button
                onClick={onOpenAdmission}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
              >
                {isHi ? 'टाइपिंग बैच जॉइन करें' : 'Join Typing Batch'}
              </button>
            </div>
          </div>

          {/* Completion Score Card */}
          {isFinished && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">
                    {isHi ? 'परीक्षण संपन्न! बहुत बढ़िया।' : 'Typing Test Completed!'}
                  </h4>
                  <p className="text-xs text-emerald-800">
                    {isHi
                      ? `आपकी गति ${wpm} WPM और शुद्धता ${accuracy}% रही।`
                      : `Your achieved speed is ${wpm} WPM with ${accuracy}% accuracy.`}
                  </p>
                </div>
              </div>
              <button
                onClick={resetTest}
                className="px-4 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg"
              >
                {isHi ? 'अगला टेस्ट दें' : 'Try Again'}
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
