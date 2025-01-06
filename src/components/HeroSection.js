import React from 'react';
import styled, { keyframes } from 'styled-components';
import modelImage from '../img/n.JPG';     
import backgroundImage from '../img/bg.png';
import modelVideo from '../img/0105.mp4'; 
import modelVideo1 from '../img/PLACID.mp4'; 
import modelVideo2 from '../img/NOODY.mp4'; 
import modelVideo3 from '../img/ZED.mp4'; 
import galleryImage1 from '../img/pic1.jpg'; 
import galleryImage2 from '../img/pic2.jpg'; 
import galleryImage3 from '../img/pic3.jpg'; 
import galleryImage4 from '../img/pic4.jpg'; 
import galleryImage5 from '../img/pic5.jpg'; 
import galleryImage6 from '../img/pic6.jpg';
import galleryImage7 from '../img/pic7.jpg';
import galleryImage8 from '../img/pic8.jpg';
import galleryImage9 from '../img/pic9.jpg';

import { FaInstagram, FaTiktok, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';



const HeroSection = () => {
  return (
    <div>
      <HeroContainer>
        <ImageContainer>
          <StyledImage src={modelImage} alt="Model" />
        </ImageContainer>
        <TextContainer>
          <YearLabel>2025</YearLabel>
          <Name>Nesha Rodrigo</Name>
          <Tagline>The new face of your campaign</Tagline>
          <Description>
            I am an experienced professional Model and I typically accept photography & videography projects and promotions...
          </Description>
          <ArrowButton>→</ArrowButton>
        </TextContainer>
      </HeroContainer>

      {/* Additional Content Section */}
      <ContentSection>
        <SectionTitle>About Nesha</SectionTitle>
        <SectionDescription>
          Nesha Rodrigo is a professional model with a passion for creating stunning visuals and captivating audiences. With years of experience, she has worked with top brands, photographers, and videographers.
        </SectionDescription>
        
        <VideoWrapper>
          <StyledVideo src={modelVideo} autoPlay loop muted />
        </VideoWrapper>
      </ContentSection>

      {/* Gallery Section */}
      <ContentSection>
        <SectionTitle>Gallery</SectionTitle>
        <SectionDescription>
          Explore some of the best moments from Nesha's photography and videography projects. Each project tells a unique story, captured through her stunning visuals.
        </SectionDescription>

        <ImageGallery>
          <GalleryImage src={galleryImage1} alt="Gallery 1" />
          <GalleryImage src={galleryImage2} alt="Gallery 2" />
          <GalleryImage src={galleryImage3} alt="Gallery 3" />
          <GalleryImage src={galleryImage4} alt="Gallery 4" />
          <GalleryImage src={galleryImage5} alt="Gallery 5" />
          <GalleryImage src={galleryImage6} alt="Gallery 6" />
          <GalleryImage src={galleryImage7} alt="Gallery 7" />
          <GalleryImage src={galleryImage8} alt="Gallery 8" />
          <GalleryImage src={galleryImage9} alt="Gallery 9" />
        </ImageGallery>
      </ContentSection>

      {/* After the Image Gallery */}
      <ContentSection>
  <SectionTitle>Projects</SectionTitle>
  <SectionDescription>
  
  Nesha’s modeling projects with NOODYTRIBES, PLACID, DORI, and KLEINDER blend boldness, elegance, and creativity.
   From the edgy vibe of NOODYTRIBES to the timeless sophistication of PLACID, each campaign showcases her versatility,
    capturing the essence of modern luxury and style.
  </SectionDescription>

  <ProjectGallery>
    {/* Project 1 */}
    <ProjectCard>
      <ProjectVideoWrapper>
        <StyledVideo1 src={modelVideo1} autoPlay loop muted />
      </ProjectVideoWrapper>
      <ProjectDetails>
        <ProjectName>PLACID</ProjectName>
        <ProjectDescription>
        An exploration of grace and refinement, PLACID is a campaign that embodies the essence of understated luxury. Nesha’s collaboration brought forth a vision of elegance, weaving timeless sophistication into every frame, where style and poise stand at the forefront.
        </ProjectDescription>
      </ProjectDetails>
    </ProjectCard>

    {/* Project 2 */}
    <ProjectCard>
      <ProjectVideoWrapper>
        <StyledVideo1 src={modelVideo2} autoPlay loop muted />
      </ProjectVideoWrapper>
      <ProjectDetails>
        <ProjectName>NOODYTRIBES</ProjectName>
        <ProjectDescription>
        A daring expedition into the realm of modern style, NOODYTRIBES merges audacious creativity with ZENITH’s dynamic vision, forging a campaign that pulsates with energy and redefines the boundaries of contemporary fashion.
        </ProjectDescription>
      </ProjectDetails>
    </ProjectCard>

    {/* Project 3 */}
    <ProjectCard>
      <ProjectVideoWrapper>
        <StyledVideo1 src={modelVideo3} autoPlay loop muted />
      </ProjectVideoWrapper>
      <ProjectDetails>
        <ProjectName>ZED</ProjectName>
        <ProjectDescription>
        A mesmerizing journey into elegance, ZED is a masterpiece born from the exquisite union of LUXORA’s sophistication and the timeless allure of luxury. This project redefines opulence, blending artistry and grandeur into a celebration of eternal beauty.
        </ProjectDescription>
      </ProjectDetails>
    </ProjectCard>
  </ProjectGallery>
</ContentSection>



<ContentSection>
  <SectionTitle>Contact</SectionTitle>
  <SectionDescription>
    Want to book Nesha for a project or collaboration? Get in touch today!
  </SectionDescription>
  <div className="social-icons">
    <a href="https://www.instagram.com/nesharodrigo_?igsh=MTQwcDlyMXpnYjBjcQ==" target="_blank" rel="noopener noreferrer">
      <FaInstagram style={{ color: '#E4405F', fontSize: '30px', marginRight: '20px' }} />
    </a>
    <a href="https://www.tiktok.com/@neshaa__r?_t=ZS-8sosQN7EoJ6&_r=1" target="_blank" rel="noopener noreferrer">
      <FaTiktok style={{ color: '#69C9D0', fontSize: '30px', marginRight: '20px' }} />
    </a>
    <a href="https://www.facebook.com/share/156cWeVe9u/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
      <FaFacebook style={{ color: '#1877F2', fontSize: '30px', marginRight: '20px' }} />
    </a>
    <a href="https://wa.me/+94725519110" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp style={{ color: '#25D366', fontSize: '30px', marginRight: '20px' }} />
    </a>
    <a href="mailto:nesharodigo06@gmail.com">
      <FaEnvelope style={{ color: '#D44638', fontSize: '30px' }} />
    </a>
  </div>
</ContentSection>


{/* Footer Section */}
<footer className="footer1">
  <div className="footer1-content">
    <p>© {new Date().getFullYear()} All rights reserved.</p>
    <p>
      Made  <a href="https://chamikamunithunga.github.io/Chamika.M/" target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>by CHAMIKA.M</a>
    </p>
  </div>
</footer>




    </div>
  );
};

export default HeroSection;

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center/cover;
  color: #fff;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-right: 5rem;
  animation: ${slideInLeft} 1s ease-out, ${fadeIn} 2s ease-in;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const StyledImage = styled.img`
  border-radius: 25px;
  width: 80%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 2s ease-in;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const YearLabel = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 1.2rem;
  color: #ccc;
  animation: ${fadeIn} 2s ease-in 0.5s;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  animation: ${fadeIn} 2s ease-in 1s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Tagline = styled.h2`
  color: #ff0000;
  margin-top: 1rem;
  animation: ${fadeIn} 2s ease-in 1.5s;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #ccc;
  animation: ${fadeIn} 2s ease-in 2s;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ArrowButton = styled.button`
  margin-top: 2rem;
  font-size: 2rem;
  background: none;
  border: none;
  color: #ff0000;
  cursor: pointer;
  transition: transform 0.2s;
  animation: ${fadeIn} 2s ease-in 2.5s;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

// New Sections
const ContentSection = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(to right, #000000,#fe0000); /* Lighter red */
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #fe0000,#ffd000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fe0000; 
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color:#ffffff;
`;

const VideoWrapper = styled.div`
  margin-top: 2rem;
`;

const StyledVideo = styled.video`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  background-color: #000000;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5.5rem 8rem; 
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.3rem 0.6rem; /* Adjust gap for smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.2rem 0.4rem; /* Adjust gap for very small screens */
  }
`;

const GalleryImage = styled.img`
  width: 100%; 
  height: auto; 
  max-width: 350px; 
  max-height: 550px; 
  object-fit: cover; 
  border-radius: 8px; 
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); 
  }
`;







const ProjectGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const ProjectCard = styled.div`
  background: #000000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px #ffe600;
  transition: transform 0.3s ease;
  margin-bottom: 2rem; /* Adds space below each card */
  
  &:hover {
    transform: scale(1.05);
  }
`;


const ProjectVideoWrapper = styled.div`
  position: relative;
  width: 100%; /* Ensures the video container takes full width of the card */
  max-width: 300px; /* Limits the maximum width for smaller videos */
  margin: 0 auto; /* Centers the video horizontally */
  overflow: hidden;
  border-radius: 8px; /* Adds rounded corners */
  margin-bottom: 1rem; /* Adds space below the video */
`;

const StyledVideo1 = styled.video`
  width: 100%; /* Fits the video to the container's width */
  height: auto; /* Maintains the aspect ratio */
  border-radius: 8px; /* Matches the container's rounded corners */
`;

const ProjectDetails = styled.div`
  padding: 1rem;
  color: #fff;
  text-align: center; /* Centers text for a balanced layout */
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #fe0000;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #ccc;
`;





