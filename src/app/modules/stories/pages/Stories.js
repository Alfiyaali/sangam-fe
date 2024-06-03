import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Stories.css';
import Image1 from '../../../../assets/images/story-1.png'; 
import Image2 from '../../../../assets/images/story-2.png'; 
import Image3 from '../../../../assets/images/story-3.png'; 
import Image4 from '../../../../assets/images/story-4.png'; 
import Image5 from '../../../../assets/images/story-5.png'; 
import Image6 from '../../../../assets/images/story-image.png'; 
import Footer from '../../../../shared/components/Footer/Footer';

const Stories = () => {
  const navigate = useNavigate();

  const cardsData = [
    { id: 1, title: "Anjali <span>&</span> Rajesh", description: "Anjali and Rajesh's story began when their profiles matched on Sangam Sahithi. Both software engineers in different....Read more", image: Image1 },
    { id: 2, title: "Priya <span>&</span> Sameer", description: "Priya, a teacher from Chennai, and Sameer, an architect from Delhi, found each other through Sangam Sahithi’....Read more", image: Image2 },
    { id: 3, title: "Suman <span>&</span> Neeraj", description: "Both in their early forties and previously married, were hesitant to try online matrimony services....Read more", image: Image3 },
    { id: 4, title: "Kavita <span>&</span> Amit", description: "Kavita, a successful entrepreneur, and Amit, a wildlife photographer, seemed like an unlikely pair when they first....Read more", image: Image4 },
    { id: 5, title: "Meera <span>&</span> Vikram", description: "Kavita, a successful entrepreneur, and Amit, a wildlife photographer, seemed like an unlikely pair when they first....Read more", image: Image5 },
    { id: 6, title: "Ruhi <span>&</span> Ryan", description: "I found my match on one month. Not yet married but going steady with him. There cheers to here. Fairy tales.", image: Image6 },
  ];

  const handleCardClick = (id) => {
    navigate(`/story/${id}`);
  };

  return (
    <>   
     <section className="st-section">
      <div className="container">
        <div className="heading">
          <p>If like thousands of couples, you too met your one-and-only on Sangam.com, we'd love to hear all about it. It's our favorite part of what we do!</p> 
        </div>
        <div className="cards-container">
          {cardsData.map((card) => (
            <div className="card" key={card.id} onClick={() => handleCardClick(card.id)}>
              <div className="card-image-container">
                <img src={card.image} alt={card.title} className="card-image" />
              </div>
              <div className="card-description">
                <h3 className="card-title" dangerouslySetInnerHTML={{ __html: card.title }}></h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Stories;
