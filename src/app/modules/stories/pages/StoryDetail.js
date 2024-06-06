import React from 'react';
import { useParams } from 'react-router-dom';
import './StoryDetail.css';
import story1 from '../../../../assets/images/story-1.png';
import story2 from '../../../../assets/images/story-2.png';
import story3 from '../../../../assets/images/story-3.png';
import story4 from '../../../../assets/images/story-4.png';
import story5 from '../../../../assets/images/story-5.png';
import rectangleImage1 from '../../../../assets/images/rectangle-story.png'; // Import your rectangle images
// import rectangleImage2 from '../../../../assets/images/rectangle2.png'; // Import your rectangle images
import Footer from '../../../../shared/components/Footer/Footer';
import HeaderContent from '../../../../shared/components/Header/HeaderContent';

const StoryDetail = () => {
  const { id } = useParams();

  const storyData = {
    1: {
      title: "1. A Match Made in Heaven: Anjali <span class='ampersand'>&</span> Rajesh",
      description: `Anjali and Rajesh's story began when their profiles matched on Sangam Sahithi. Both software engineers in different cities, they were initially hesitant about a long-distance relationship. Sangam Sahithi’s detailed matching algorithm paired them based on their shared interests and values, which quickly brought them closer. They spent hours on video calls, discussing everything from work challenges to their love for classical music. Rajesh would send Anjali surprise gifts, and she would respond with handwritten letters. After six months of virtual dates and weekend visits, Rajesh planned a surprise trip to the hills where he proposed to Anjali under a canopy of stars. Their wedding was a beautiful blend of traditional and modern elements, reflecting their unique journey. Today, they are happily married and credit Sangam Sahithi for the platform that brought them together, believing it was fate that united them through technology.`,
      image: story1,
    },
    2: {
      title: "2. Love Across Borders: Priya <span class='ampersand'>&</span> Sameer",
      description: "Priya, a teacher from Chennai, and Sameer, an architect from Delhi, found each other through Sangam Sahithi’s matrimony services. Initially, their diverse cultural backgrounds seemed like a hurdle, but Sangam Sahithi’s extensive profile details allowed them to understand each other’s backgrounds better. They began by exchanging emails and gradually moved to phone calls, discussing their passions and family values. Their first face-to-face meeting in Mumbai was filled with nervous excitement, but it ended with a promise to meet again. Over the next year, they visited each other’s cities, attended family functions, and celebrated festivals together. Each visit deepened their bond, making them realize they were perfect for each other. They tied the knot in a grand ceremony that celebrated both Tamil and Punjabi traditions, symbolizing their unity in diversity. Their story is a testament to how Sangam Sahithi bridges cultural gaps to create lasting relationships.",
      image: story2,
    },
    3: {
      title: "3. Rekindling Joy: Suman <span class='ampersand'>&</span> Neeraj",
      description: "Suman and Neeraj, both in their early forties and previously married, were hesitant to try online matrimony services. However, Sangam Sahithi’s personalized approach made them feel comfortable. Our platform’s detailed questionnaires and matching process ensured they were paired with someone who understood their past experiences. They started with casual conversations, sharing their life experiences and the lessons they learned from past relationships. Slowly, they found solace and companionship in each other. Neeraj’s sense of humor brought a smile to Suman’s face, and her compassionate nature made him feel cherished. Their mutual support helped them overcome their past and look forward to a hopeful future. After a year of getting to know each other, they decided to take the plunge. Their wedding was a simple yet heartwarming affair, attended by close family and friends. Today, they enjoy a peaceful life together, often reminiscing about how Sangam Sahithi helped them find love again.",
      image: story3,
    },
    4: {
      title: "4. The Unexpected Match: Kavita <span class='ampersand'>&</span> Amit",
      description: "Kavita, a successful entrepreneur, and Amit, a wildlife photographer, seemed like an unlikely pair when they first connected on Sangam Sahithi. Our platform’s unique interest-based matching algorithm highlighted their shared love for travel and nature. Kavita was drawn to Amit’s adventurous lifestyle, while he admired her determination and business acumen. Despite their different worlds, they found common ground in their love for travel and nature. Their first date was a trek in the Western Ghats, where they bonded over stories of their adventures. Kavita’s organized nature complemented Amit’s spontaneous spirit, creating a perfect balance. Over time, their love blossomed, and Amit proposed to Kavita during a trip to the Andaman Islands. Their wedding was an intimate beach ceremony, reflecting their shared love for nature. They continue to support each other’s passions, grateful to Sangam Sahithi for bringing them together.",
      image: story4,
    },
    5: {
      title: "5. A Second Chance at Love: Meera <span class='ampersand'>&</span> Vikram",
      description: "Meera and Vikram’s paths crossed on Sangam Sahithi after both had experienced the loss of their spouses. They were looking for companionship and understanding, which Sangam Sahithi facilitated through our compassionate and thorough matching process. Their initial conversations were filled with empathy and shared experiences of coping with grief. Slowly, they began to open up about their dreams and aspirations. Meera’s love for gardening and Vikram’s passion for cooking brought them closer as they spent weekends creating new recipes and planting flowers. Their bond grew stronger with each passing day, and after a year of nurturing their relationship, they decided to get married. Their wedding was a beautiful celebration of love and resilience, attended by their children and close friends. Today, Meera and Vikram enjoy a fulfilling life together, often thanking Sangam Sahithi for giving them a second chance at love.",
      image: story5,
    },
  };

  const story = storyData[id];

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <> 
     <HeaderContent/> 
       <div className="story-detail-container">
      <div className="story-detail-content">
        <div className="story-detail-image-container">
          <div 
            className="rectangle rectangle-top-left" 
            style={{ backgroundImage: `url(${rectangleImage1})` }}
          ></div>
          <div 
            className="rectangle rectangle-bottom-right" 
            style={{ backgroundImage: `url(${rectangleImage1})` }}
          ></div>
          <img src={story.image} alt={story.title} className="story-detail-image" />
        </div>
        <div className="story-detail-text">
          <h1 className="story-title" dangerouslySetInnerHTML={{ __html: story.title }}></h1>
          <p>{story.description}</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default StoryDetail;
