import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function NetflixAccordion() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const accordionData = [
    { id: "wit", question: "What is Netflix?", answer: "Netflix is a streaming service that offers award-winning TV shows, movies, anime, and more..." },
    { id: "hmdtc", question: "How much does Netflix cost?", answer: "Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." },
    { id: "wciw", question: "Where can I watch?", answer: "Watch anywhere, anytime on smart TVs, smartphones, tablets, and more." },
    { id: "hdic", question: "How do I cancel?", answer: "No commitments. Cancel anytime online in two clicks. No cancellation fees." },
    { id: "wciwon", question: "What can I watch on Netflix?", answer: "Netflix has a vast library of movies, TV shows, anime, and award-winning originals." },
    { id: "ingfk", question: "Is Netflix good for kids?", answer: "Yes! Netflix Kids provides parental controls and family-friendly content." }
  ];

  return (
    <div className="accordion-container">
      <h2 className="text-white text-start mb-4">Frequently Asked Questions</h2>
      <div className="accordion">
        {accordionData.map(({ id, question, answer }) => (
          <div key={id} className="accordion-item">
            <div className="accordion-header">
              <h5 className="accordion-question">{question}</h5>
              <button className="toggle-btn" onClick={() => toggleItem(id)}>
                {openItem === id ? <Minus size={24} color="white" /> : <Plus size={24} color="white" />}
              </button>
            </div>
            {openItem === id && <div className="accordion-body">{answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
