import React, { useState } from 'react';
import './MainSection.css'; // Import the CSS file

const cardsData = [
  {
    imageUrl: 'https://t3.ftcdn.net/jpg/02/35/82/44/360_F_235824480_A3ieTGgfIMtQF6Iz3Frpy2i9vIj2Z2Oa.jpg',
    content: 'Bengaluru',
  },
  {
    imageUrl: 'https://t3.ftcdn.net/jpg/02/35/82/44/360_F_235824480_A3ieTGgfIMtQF6Iz3Frpy2i9vIj2Z2Oa.jpg',
    content: 'Bengaluru',
  },
  {
    imageUrl: 'https://t3.ftcdn.net/jpg/02/35/82/44/360_F_235824480_A3ieTGgfIMtQF6Iz3Frpy2i9vIj2Z2Oa.jpg',
    content: 'Bengaluru',
  },
  {
    imageUrl: 'https://t3.ftcdn.net/jpg/02/35/82/44/360_F_235824480_A3ieTGgfIMtQF6Iz3Frpy2i9vIj2Z2Oa.jpg',
    content: 'Bengaluru',
  },
  {
    imageUrl: 'https://t3.ftcdn.net/jpg/02/35/82/44/360_F_235824480_A3ieTGgfIMtQF6Iz3Frpy2i9vIj2Z2Oa.jpg',
    content: 'Bengaluru',
  },
  {
    imageUrl: 'https://t3.ftcdn.net/jpg/02/35/82/44/360_F_235824480_A3ieTGgfIMtQF6Iz3Frpy2i9vIj2Z2Oa.jpg',
    content: 'Bengaluru',
  },
  {
    imageUrl: 'https://t3.ftcdn.net/jpg/02/35/82/44/360_F_235824480_A3ieTGgfIMtQF6Iz3Frpy2i9vIj2Z2Oa.jpg',
    content: 'Bengaluru',
  },
  {
    imageUrl: 'https://t3.ftcdn.net/jpg/02/35/82/44/360_F_235824480_A3ieTGgfIMtQF6Iz3Frpy2i9vIj2Z2Oa.jpg',
    content: 'Bengaluru',
  },
  {
    imageUrl: 'https://t3.ftcdn.net/jpg/02/35/82/44/360_F_235824480_A3ieTGgfIMtQF6Iz3Frpy2i9vIj2Z2Oa.jpg',
    content: 'Bengaluru',
  },
  {
    imageUrl: 'https://t3.ftcdn.net/jpg/02/35/82/44/360_F_235824480_A3ieTGgfIMtQF6Iz3Frpy2i9vIj2Z2Oa.jpg',
    content: 'Bengaluru',
  },

];

function MainSection() {
    const faqs = [
        {
          question: 'Question 1',
          answer: 'Answer 1',
        },
        {
          question: 'Question 2',
          answer: 'Answer 2',
        },
        {
          question: 'Question 3',
          answer: 'Answer 3',
        },
        {
          question: 'Question 4',
          answer: 'Answer 4',
        },
        {
          question: 'Question 5',
          answer: 'Answer 5',
        },
        {
          question: 'Question 6',
          answer: 'Answer 6',
        },
        {
          question: 'Question 7',
          answer: 'Answer 7',
        },
        {
          question: 'Question 8',
          answer: 'Answer 8',
        },
        {
          question: 'Question 9',
          answer: 'Answer 9',
        },
        {
          question: 'Question 10',
          answer: 'Answer 10',
        },
      ];
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = cardsData.slice(currentIndex, currentIndex + 5);

  const nextCards = () => {
    const newIndex = currentIndex + 5;
    setCurrentIndex(newIndex >= cardsData.length ? 0 : newIndex);
  };
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
    <div className="container">
      <h2>Cities</h2>
      <div className="card-slider">
        <div className="cards">
          {cardsToShow.map((card, index) => (
            <div key={index} className="card">
              <img src={card.imageUrl} alt={`Card ${index}`} />
              <div className="card-content">
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={nextCards}>
          Next
        </button>
      </div>
    </div>
    <br></br>
    <div className="faq-section">
    <h2>Frequently Asked Questions</h2>
    {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
        <div className="faq-question">
          {faq.question}
          <button
            className="toggle-button"
            onClick={() => toggleAnswer(index)}
          >
            {openIndex === index ? '-' : '+'}
          </button>
        </div>
        {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
      </div>
    ))}
  </div>
  </>
  );
}

export default MainSection;

