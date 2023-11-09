import backgroundSprLarge from 'assets/spr-background-largeb.png';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.png';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-backgroundb.png';
import imageSprComponentsDarkLarge from 'assets/spr-components-dark-largez.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/spr-components-darkz.png';
import imageSprComponentsLightLarge from 'assets/spr-components-light-largez.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/spr-components-lightz.png';
import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-largez.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from 'assets/spr-design-system-darkz.png';
import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-largez.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from 'assets/spr-design-system-lightz.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-largez.png';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-darkz.png';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-largez.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-lightz.png';
import videoSprMotionLarge from 'assets/spr-motion-large.png';

import videoSprMotion from 'assets/spr-motion.png';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-largez.png';
import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from 'assets/spr-schema-1-darkz.png';
import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-largez.png';
import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from 'assets/spr-schema-1-lightz.png';
import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-largez.png';
import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from 'assets/spr-schema-2-darkz.png';
import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-largez.png';
import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from 'assets/spr-schema-2-lightz.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-largez.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-darkz.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-largez.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-lightz.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';

import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
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

import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';



const title = 'This are the projectes i designed or contributed on';
const description =
  'Welcome to a showcase of my diverse portfolio, where innovation meets functionality. With a passion for crafting seamless user experiences, I have contributed expertise across a spectrum of projects. From immersive UI/UX designs using tools like Figma to robust developments in Various tech stacks encompassing languages such as WordPress, Flutter, Node.js, and React, along with an array of development methods and tools, I have strived to bridge design and technology. These projects, ranging from financial services to travel recommendations, exemplify my commitment to user-centric solutions, ensuring intuitive interactions and engagement. Explore how each project harmonizes innovation and functionality, offering tailored experiences that simplify tasks and elevate user journeys';
  const roles = [
    { role: 'Mobile App Developer', icon: 'flutter' },
    { role: 'Web Developer', icon: 'reactr' },
    { role: 'UX/UI Designer', icon: 'figma' },
    { role: 'Flutter Developer', icon: 'flutter' },
    { role: 'Tailwind CSS Developer', icon: 'tailwind' },
    { role: 'Next.js Developer', icon: 'next' },
    { role: 'Vue.js Developer', icon: 'vue' },
    { role: 'React Developer', icon: 'reactr' },
   
    { role: 'CSS3 Developer', icon: 'cSS3' },
    { role: 'Angular Developer', icon: 'angular' },
    { role: 'Webpack Developer', icon: 'webpack' }
  ];
  
export const Otherprojects = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url=""
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt=""
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading> <a href="https://www.figma.com/file/3brPImB1dlXgRfvbxA0PN8/Instasave?type=design&t=eSAQC0uNJIiXU4IA-6" target="_blank" rel="noopener noreferrer">InstaSave</a></ProjectSectionHeading>
            <ProjectSectionText>
            The project I contributed to is  <a href="https://www.figma.com/file/3brPImB1dlXgRfvbxA0PN8/Instasave?type=design&t=eSAQC0uNJIiXU4IA-6" target="_blank" rel="noopener noreferrer">InstaSave</a>  an application designed to serve as a wallet and savings app. I was responsible for the complete UI/UX design using Figma and developed the entire user interface using the Flutter framework. InstaSave is a distinct platform from Laki Pay, but it shares the same overarching project. The primary aim of InstaSave is to provide users with a dedicated platform to manage their finances  facilitating both transactions and a robust savings mechanism.

</ProjectSectionText> <ProjectSectionText> The app s goal is to offer users a convenient efficient and user-friendly financial management tool allowing them to handle their transactions and savings effectively. The project s success lies in its ability to provide a secure intuitive and aesthetically pleasing platform for users to manage their finances.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprComponentsDark, imageSprComponentsDarkLarge]
                  : [imageSprComponentsLight, imageSprComponentsLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for the Lakipay design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading> <a href="https://www.Zayride.com/" target="_blank" rel="noopener noreferrer">Zayride</a> Website Development</ProjectSectionHeading>
              <ProjectSectionText>
              At Zayride I led the end-to-end development and design of the website playing a key role in creating a seamless and user-centric experience. My responsibilities encompassed the complete UI/UX design phase using Figma, followed by the full-stack development of the website utilizing Node.js and React.
               </ProjectSectionText>
              <ProjectSectionText> 
                In charge of the UI/UX design using Figma, my primary focus was to ensure an intuitive and visually appealing interface that encapsulated Zayride s brand identity. Through thorough user behavior research, I crafted a user-friendly design aimed at enhancing user engagement, ease of use, and streamlined interaction between Zayride and its users.

Full-Stack Development:
Leveraging Node.js and React, I brought the design vision to life, implementing robust and responsive functionalities across the entire website. The objective was to create a dynamic and engaging user experience by harnessing React s front-end capabilities and Node.js for a scalable and efficient back end. This approach ensured the platform provided seamless browsing and booking experiences that met Zayride s high standards.

The  <a href="https://www.figma.com/file/BjiY4579eW5mLRaOoJo151/Zayride?type=design&t=eSAQC0uNJIiXU4IA-6" target="_blank" rel="noopener noreferrer">Zayride</a> website is a testament to the successful fusion of design and development, offering users a fluid, intuitive experience. For a deeper understanding, please visit Zayride s website at zayride.com.






              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprDesignSystemDark, imageSprDesignSystemDarkLarge]
                  : [imageSprDesignSystemLight, imageSprDesignSystemLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt=""
              sizes="100vw"
            />
            <ProjectTextRow>
              
              <ProjectSectionText>
              Visitors can explore the full spectrum of  <a href="https://www.figma.com/file/BjiY4579eW5mLRaOoJo151/Zayride?type=design&t=eSAQC0uNJIiXU4IA-6" target="_blank" rel="noopener noreferrer">Zayride s</a> offerings and services by visiting Zayride s website, where they can witness firsthand the culmination of the UI/UX design and the development work that was put into creating an engaging and user-centric platform.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageSprBackgroundVolcanism, imageSprBackgroundVolcanismLarge]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt=""
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading> <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Bunna</a> App Development</ProjectSectionHeading>
                  <ProjectSectionText>
                  Within the Bunna app project, I assumed a dual role in both the UI/UX design and the complete development of the platform. Utilizing Figma, I meticulously crafted the entire UI/UX design, aiming for an intuitive and visually engaging interface that resonated with Bunna s ethos. I focused on user-centric design elements, ensuring a seamless and pleasant navigation experience for customers, thereby encapsulating the essence of the app s mission.
                  </ProjectSectionText>
                  <ProjectSectionText>
Regarding development, I brought the design to life using Flutter. This allowed for the creation of a robust and comprehensive application that facilitated coffee delivery from various coffee shops to customers. The app s functionality was crafted to offer a smooth, efficient, and user-friendly experience, ensuring seamless interaction between customers and coffee shops, thus meeting the demands of  <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Bunna s</a> delivery services.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
               raised
                srcSet={[videoSprMotion, videoSprMotionLarge]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt=""
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
             
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading> <a href="https://www.figma.com/file/LoXV9u0teA2ByQEZdwL27h/lemoment?type=design&t=eSAQC0uNJIiXU4IA-6" target="_blank" rel="noopener noreferrer">Lemoment</a> App Development</ProjectSectionHeading>
              <ProjectSectionText>
              In my role contributing to the Lemoment app, I took charge of the comprehensive UI/UX design using Figma, aimed at creating an immersive and user-centric experience. The design was meticulously crafted to offer an intuitive and visually captivating interface, focusing on enhancing user engagement and streamlining navigation for a seamless travel recommendation and booking experience.
              </ProjectSectionText>
              <ProjectSectionText>
The  <a href="https://www.figma.com/file/LoXV9u0teA2ByQEZdwL27h/lemoment?type=design&node-id=1-1688&mode=design&t=J6F0ghmluRIDJVdj-0" target="_blank" rel="noopener noreferrer">Lemoment</a> app serves as a travel recommendation and booking platform designed to provide users with a streamlined and user-friendly journey through travel insights and booking services. The UI/UX design aimed to ensure a smooth and intuitive experience for travelers seeking recommendations and convenient travel bookings. This app acts as a one-stop destination, offering users comprehensive travel advice and hassle-free booking options, making trip planning an effortless and efficient process.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprStoryboarderDark, imageSprStoryboarderDarkLarge]
                  : [imageSprStoryboarderLight, imageSprStoryboarderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprStoryboarderDarkPlaceholder
                  : imageSprStoryboarderLightPlaceholder
              }
              alt=""
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                <a href="https://www.figma.com/file/1cPPUgPnOAstDnSiXPN3oD/Lakipay-website?type=design&t=eSAQC0uNJIiXU4IA-6" target="_blank" rel="noopener noreferrer">LakiPay</a> Website 
                </ProjectSectionHeading>
                <ProjectSectionText>
                In my role contributing to the  <a href="https://www.Lakipay.app/" target="_blank" rel="noopener noreferrer">LakiPay</a> website, I took charge of the full UI/UX design utilizing Figma, crafting an immersive and user-centric experience. The design aimed to create an intuitive and visually engaging interface, focusing on user interaction and navigation to offer a seamless experience for users engaging with LakiPay s services.
                </ProjectSectionText>
                <ProjectSectionText>
The LakiPay website, developed on WordPress, serves as a platform dedicated to providing convenient and secure financial services. The UI/UX design ensured a smooth and intuitive experience for users seeking financial solutions, seamlessly navigating through the website. The combination of Figma for design and WordPress for development allowed for the creation of an environment that caters to users looking for secure and user-friendly financial services.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ?  [imageSprSchema2Light, imageSprSchema2LightLarge]
                    : [imageSprSchema2Dark, imageSprSchema2DarkLarge]
                    
                }
                placeholder={
                  isDark
                    ? imageSprSchema2DarkPlaceholder
                    : imageSprSchema2LightPlaceholder
                }
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageSprSchema1Light, imageSprSchema1LightLarge] 
                    : [imageSprSchema1Dark, imageSprSchema1DarkLarge]
                    
                }
                placeholder={
                  isDark
                    ? imageSprSchema1DarkPlaceholder
                    : imageSprSchema1LightPlaceholder
                }
                alt="Configuration options for text."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
        
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
              In a diverse portfolio of projects, I ve contributed my expertise to various endeavors, aiming to blend innovative design with robust functionality across multiple platforms.
              </ProjectSectionText>
              <ProjectSectionText>
              This summary underscores my proficiency in delivering innovative solutions, emphasizing user experience, and adapting to diverse technological requirements across multiple project domains.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
