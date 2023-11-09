import volkiharBackgroundLarge from 'assets/volkihar-background-large.png';
import volkiharBackgroundPlaceholder from 'assets/volkihar-background-placeholder.jpg';
import volkiharBackground from 'assets/volkihar-background.png';
import volkiharBannerLarge from 'assets/volkihar-banner-large.png';
import volkiharBannerPlaceholder from 'assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from 'assets/volkihar-banner.png';
import volkiharBookLarge from 'assets/volkihar-book-large.png';
import volkiharBookPlaceholder from 'assets/volkihar-book-placeholder.png';
import volkiharBook from 'assets/volkihar-book.png';
import volkiharEnderalLarge from 'assets/volkihar-enderal-large.png';
import volkiharEnderalLogoLarge from 'assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogoPlaceholder from 'assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from 'assets/volkihar-enderal-logo.png';
import volkiharEnderalPlaceholder from 'assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from 'assets/volkihar-enderal.png';
import VolkiharKnightLogo from 'assets/abi.svg';
import volkiharSlide1Large from 'assets/volkihar-slide-1-large.png';
import volkiharSlide1 from 'assets/volkihar-slide-1.png';
import volkiharSlide2Large from 'assets/volkihar-slide-2-large.png';
import volkiharSlide2 from 'assets/volkihar-slide-2.png';
import volkiharSlide3Large from 'assets/volkihar-slide-3-large.png';
import volkiharSlide3 from 'assets/volkihar-slide-3.png';
import volkiharSlidePlaceholder from 'assets/volkihar-slide-placeholder.jpg';

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Icon } from 'components/Icon';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './VolkiharKnight.module.css';


const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));


const title = 'Abraham Wondwosen';
const header= 'Front-End App and Web Developer';
const description =
  ' As a passionate Front-End App and Web Developer, I thrive on crafting captivating user experiences that seamlessly blend aesthetics and functionality. With a keen eye for detail and a deep understanding of modern web technologies, I specialize in bringing ideas to life through elegant and responsive interfaces. From pixel-perfect designs to intuitive interactions, I am dedicated to creating user-centric applications that leave a lasting impression. Let s collaborate and turn your vision into a reality!';
  const roles = [
    { role: 'Flutter', icon: 'flutter' },
    { role: 'Tailwind CSS', icon: 'tailwind' },
    { role: 'Next.js', icon: 'next' },
    { role: 'Vue.js', icon: 'vue' },
    { role: 'React', icon: 'reactr' },
  
    { role: 'CSS3', icon: 'cSS3' },
    { role: 'Angular', icon: 'angular' },
    { role: 'Webpack', icon: 'webpack' }
  ];
 
  
export function  AboutMe() {
  return (
    <Fragment>
      <Meta title={title} prefix="About Me" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={[volkiharBackground, volkiharBackgroundLarge]}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
       
        <ProjectHeader
          title={title}
          header={header}
          description={description}
          linkLabel="Download CV"
          url=""
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[volkiharBanner, volkiharBannerLarge]}
              placeholder={volkiharBannerPlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
       
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.Image}>
            <Image
              srcSet={[volkiharBook, volkiharBookLarge]}
              placeholder={volkiharBookPlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`}
            />
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>Collaboration and Turning Visions into Reality</ProjectSectionHeading>
              <ProjectSectionText>
              Collaboration is at the heart of my development process. I enjoy working closely with clients and stakeholders to understand their vision and goals. By combining their ideas with my expertise, I strive to turn their vision into a reality that exceeds their expectations. Together, we can create remarkable digital experiences that make a lasting impact.
              </ProjectSectionText>
              <ProjectSectionText>
              As a front-end developer, I am driven by my passion for creating exceptional user experiences. I strive to craft visually stunning and highly functional websites and applications that meet the unique needs of each project.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.logoContainer}>
              <VolkiharKnightLogo
                role="img"
                aria-label="The Volkihar Knight logo, a monogram using the letters 'V' and 'K"
              />
            </div>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Attention to Detail and User-Centric Approach</ProjectSectionHeading>
              <ProjectSectionText>
              I believe that the key to creating outstanding user experiences lies in attention to detail. I pay close attention to every aspect of the design and development process, from the layout and typography to the interactions and animations. My user-centric approach ensures that the end result is not only visually appealing but also intuitive and easy to use.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Carousel 
              placeholder={volkiharSlidePlaceholder}
              images={[
                {
                  srcSet: [volkiharSlide1, volkiharSlide1Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wearing the black coloured armor set.',
                },
                {
                  srcSet: [volkiharSlide2, volkiharSlide2Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A close up of the custom gauntlets design.',
                },
                {
                  srcSet: [volkiharSlide3, volkiharSlide3Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wielding a sword and wearing the red coloured armor.',
                },
              ]}
              width={1920}
              height={1080}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={[volkiharEnderal, volkiharEnderalLarge]}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          
            {/* <ProjectSectionContent>
            <Testimonials /> 
            </ProjectSectionContent> */}
      
            

       
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                srcSet={[volkiharEnderalLogo, volkiharEnderalLogoLarge]}
                placeholder={volkiharEnderalLogoPlaceholder}
                alt="The Enderal game logo"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <ProjectSectionHeading>Get in Touch</ProjectSectionHeading>
              <ProjectSectionText>
              If you have an exciting project in mind or if you simply want to discuss front-end development, I would love to hear from you. Feel free to reach out to me through the contact form or any of the provided channels. Let s work together to bring your ideas to life and create something extraordinary.
              </ProjectSectionText>
              <div className={styles.tools}  style={{ marginTop: '25px' }}>
  <div className={styles.row}>
    <ul className={styles.iconList} style={{ display: 'flex', listStyleType: 'none' }}>
      <li>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <a href="https://www.linkedin.com/in/abraham-wondwosen-1b0820208" target="_blank" rel="noopener noreferrer">
            <Icon icon="linkedIn" />
          </a>
        </div>
      </li>
      <li>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <a href="https://instagram.com/abraham_wondasan?igshid=MTd4NWV6c3dlcHJjaA==" target="_blank" rel="noopener noreferrer">
            <Icon icon="instagram" />
          </a>
        </div>
      </li>
      <li>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <a href="https://t.me/abrishzz" target="_blank" rel="noopener noreferrer">
            <Icon icon="telegram" />
          </a>
        </div>
      </li>
      <li>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <a href="mailto:abrahamwondwosen@gmail.com" target="_blank" rel="noopener noreferrer">
            <Icon icon="email" />
          </a>
        </div>
      </li>
      <li>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <a href="tel:+251939540127" target="_blank" rel="noopener noreferrer">
            <Icon icon="mobile" />
          </a>
        </div>
      </li>
      {/* Your other contact icons */}
    </ul>
  </div>
</div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
