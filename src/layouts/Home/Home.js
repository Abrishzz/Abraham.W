import gamestackTexture2Large from 'assets/gamestack-list-large.png';
import gamestackTexture2Large3 from 'assets/gamestack-list-large3.png';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.png';
import gamestackTexture2 from 'assets/gamestack-list.png';
import gamestackTexture23 from 'assets/gamestack-list3.png';
import gamestackTextureLarge from 'assets/gamestack-login-large.png';
import gamestackTextureLargeb from 'assets/gamestack-login-large3.png';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.png';
import gamestackTexture from 'assets/gamestack-login.png';
import gamestackTexture3 from 'assets/gamestack-login3.png';
import sprTextureLargeb from 'assets/spr-lesson-builder-darkb.png';
import sprTextureLargec from 'assets/spr-lesson-builder-darkc.png';
import sprTexturePlaceholderb from 'assets/spr-lesson-builder-dark-placeholderb.png';
import sprTexturePlaceholderc from 'assets/spr-lesson-builder-dark-placeholderb.png';
import sprTextureb from 'assets/spr-lesson-builder-dark-largeb.png';
import sprTexturec from 'assets/spr-lesson-builder-dark-largec.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Designer', 'Prototyper', 'Animator', 'Illustrator', 'Modder'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Developer + Designer +"
        description="Design portfolio of Abraham Wondwosens — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
         <ProjectSummary
        id="project-1"
        alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Laki Pay"
        description="Design and development for Laki Pay Ethiopian first all in one finincial payment app built in Flutter and Go"
        buttonText="View Project"
        buttonLink="/projects/laki-pay"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="ShebaLuxury"
        description="Elevate Your Style with Online Luxury Shopping in Ethiopia"
        buttonText="View project"
        buttonLink="/projects/sheba-luxury"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTextureb, sprTextureLargeb],
              placeholder: sprTexturePlaceholderb,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Government Information Directories"
        description="Empowering Access to Government Information"
        buttonText="View project"
        buttonLink="/projects/g-i-d"
        model={{
          type: 'laptop',
          alt: '',
          textures: [
            {
              srcSet: [sprTexturec, sprTextureLargec],
              placeholder: sprTexturePlaceholderc,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={4}
        title="Other projectes i contributed on"
        description="Design and development for a other projectes that have been complited and on development"
        buttonText="View Projects"
        buttonLink= 
         "/projects/other-projects"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture3, gamestackTextureLargeb],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture23, gamestackTexture2Large3],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
     
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
