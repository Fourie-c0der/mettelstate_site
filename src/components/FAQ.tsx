import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: 'How do I register for the tournament?',
      answer: 'Fill out the registration form above with your details. Registration closes 24 hours before the tournament begins. Make sure to check your email for confirmation and further instructions.'
    },
    {
      question: 'What are the tournament rules?',
      answer: 'The tournament follows a Round Robin format followed by Double Elimination. All matches are best of 3. Players must use their registered gamer tag. Any form of cheating or unsportsmanlike conduct will result in immediate disqualification.'
    },
    {
      question: 'How will prizes be distributed?',
      answer: 'The R50,000 prize pool will be distributed as follows: 1st place - R25,000, 2nd place - R15,000, 3rd place - R7,500, 4th place - R2,500. All prizes will be transferred within 7 business days after the tournament concludes.'
    },
    {
      question: 'What happens if I have technical issues during the match?',
      answer: 'Technical issues should be reported immediately to tournament administrators via the official Discord channel. Matches may be paused for up to 10 minutes to resolve technical issues. If issues persist, the match may be rescheduled.'
    }
  ];

  return (
    <section className="py-200 bg-black">
      <div className=" mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16">
          FREQUENTLY ASKED <span className="text-lime-400">QUESTIONS</span>
        </h2>
        
<div className="flex flex-col space-y-6">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="border border-gray-700 bg-gray-900 rounded-lg overflow-hidden"
    >
      <button
        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors duration-200"
        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
      >
        <span className="text-white font-bold text-lg">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-lime-400 transition-transform duration-200 ${
            activeIndex === index ? "rotate-180" : ""
          }`}
        />
      </button>

      {activeIndex === index && (
        <div className="px-6 pb-6">
          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default FAQ;
