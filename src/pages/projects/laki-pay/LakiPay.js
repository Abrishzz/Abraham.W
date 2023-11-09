import backgroundSprLarge from 'assets/spr-background-large.png';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.png';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background.png';
import imageSprComponentsDarkLarge from 'assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/spr-components-dark.png';
import imageSprComponentsLightLarge from 'assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from 'assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from 'assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.png';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.png';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.png';

import videoSprMotion from 'assets/spr-motionxx.png';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from 'assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from 'assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from 'assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
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
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'LakiPay Mobile App Development';
const description =
  'As an integral member of the LakiPay development team, I significantly contributed to essential functionalities of the application. My role encompassed diverse technical areas, demonstrating expertise in both frontend and backend systems, and design contributions using Figma';
const roles = [
 { role: 'Frontend Development', icon: 'flutter'},
 { role:'UX and UI Design', icon: 'figma'},
 { role:'Backend Development', icon: 'node'},
  {role:'Desigen lead'},
 { role:'Motion Design'}
];

export const LakiPay = () => {
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
          url="https://www.lakipay.app/"
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
            <ProjectSectionHeading>Chat Functionality & ERP System Development:</ProjectSectionHeading>
            <ProjectSectionText>
            In collaboration with the team, I spearheaded the complete development of the chat functionality within the LakiPay app. Using Flutter for the frontend and Node.js for the backend, I engineered a robust, fully functional chat system that became one of LakiPay s pivotal features. Additionally, I designed and implemented an enterprise resource planning (ERP) system within the app using Flutter. This comprehensive system was instrumental in streamlining various processes, adding significant value to LakiPay s core functionalities.</ProjectSectionText>
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
              <ProjectSectionHeading>Frontend Flutter Development:</ProjectSectionHeading>
              <ProjectSectionText>
              As the lead frontend Flutter developer, I meticulously designed and developed the app s user interface, ensuring an intuitive and engaging user experience. The implementation of the ERP system further enriched the app s functionalities, creating a seamless, integrated user journey. </ProjectSectionText> 
              {/* <ProjectSectionText> This design system would inform both the aesthetics and user experience across the LakiPay app itself as well as the website and marketing material. The goals were to create a consistent, user-friendly experience across all touchpoints.
              </ProjectSectionText> */}
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
              <ProjectSectionHeading>Backend Integration with Node.js:</ProjectSectionHeading>
              <ProjectSectionText>
              Utilizing Node.js, I engineered the backend logic for the chat system, ensuring a smooth and efficient communication platform that was reliable and scalable. 
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
                  <ProjectSectionHeading>Design Collaboration with  <a href="https://www.figma.com/file/C2VAcI17xAOz5gWJe2pXw7/Lakipay-App?type=design&t=eSAQC0uNJIiXU4IA-6" target="_blank" rel="noopener noreferrer">Figma</a>:</ProjectSectionHeading>
                  <ProjectSectionText>
                  In close collaboration with the design team, I contributed to the creation and maintenance of a comprehensive design system using Figma. This system acted as the cornerstone for the app s aesthetics, ensuring consistency across all interfaces.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
            
              <Image
                srcSet={[videoSprMotion,]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt=""
                sizes="100vw"
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Challenges and Contributions:</ProjectSectionHeading>
              <ProjectSectionText>
              Developing the chat functionality and the ERP system were complex but fulfilling tasks. Overcoming technical challenges and integrating robust, real-time chat features with Flutter and Node.js was a pivotal achievement. My dual expertise in frontend and backend development and involvement in the ERP system design contributed to enhancing the app s functionalities, fostering an advanced user experience and facilitating efficient business processes within LakiPay.


              </ProjectSectionText>
              <ProjectSectionText> 
              The success of LakiPay, attributed to our dedicated team s efforts, reflects the culmination of our innovative solutions and my personal contributions in shaping a cutting-edge and efficient payment platform for Ethiopia.
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
                Project Progress and Successful Deliverables
                </ProjectSectionHeading>
                <ProjectSectionText>
                As a dedicated contributor to the LakiPay app s development team, I have completed my tasks successfully, meeting the outlined objectives and delivering exceptional results. However, the project remains under active development, with the collective efforts of the team continuing to shape this innovative payment platform 
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageSprSchema2Dark, imageSprSchema2DarkLarge]
                    : [imageSprSchema2Light, imageSprSchema2LightLarge]
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
                    ? [imageSprSchema1Dark, imageSprSchema1DarkLarge]
                    : [imageSprSchema1Light, imageSprSchema1LightLarge]
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
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
              {
              position: [0.54, 0.19, 0.18],
              
              text: 'Addis Ababa',
              hidden: true,
              },
              {
              position: [0.47, -0.38, 0.04],
              text: 'Nairobi',
              hidden: true,
              },
              {
              position: [0.22, 0.44, -0.35],
              text: 'Kampala',
              hidden: true,
              },
              {
              position: [0.16, -0.06, 0.58],
              
              text: 'Kigali',
              hidden: true,
              },
              {
              position: [0.11, 0.2, -0.56],
              text: 'Dodoma',
              hidden: true,
              },
              {
              position: [0.52, 0.2, -0.23],
              
              text: 'Juba',
              hidden: true,
              },
              {
              position: [-0.24, 0.75, 0.24],
              text: 'Asmara',
              delay: 800,
              hidden: true,
              },
              {
              position: [-0.24, 0.55, 0.24],
              text: 'Djibouti City',
              delay: 800,
              hidden: true,
              },
              {
              position: [-0.24, 0.35, 0.24],
              text: 'Hargeisa',
              delay: 800,
              hidden: true,
              },
              ],
              []
              )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                    Accomplishments and Successful Results:
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    My contributions, including the development of the chat functionality, the ERP system, and frontend design enhancements, have reached successful milestones. These achievements have added considerable value to the app s functionalities, ensuring a seamless user experience.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                    Key Deliverables:
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    The chat functionality, developed using Flutter and Node.js, stands as a robust and fully functional component within the app. Additionally, the ERP system, implemented with Flutter, optimizes diverse processes and functionalities. Collaborating closely with the design team using Figma, I helped craft an extensive design system that enhances the app s visual and functional appeal..
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Addis Ababa',
                'Kampala',
'Kigali',
'Dodoma',
'Juba',
'Asmara',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                    On-Time Task Completion:
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    Completing my tasks within the stipulated timeline, I have contributed to elevating LakiPay s capabilities. The success of the tasks accomplished is a testament to the quality and efficiency of the deliverables. 
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Addis Ababa',
                'Kampala',
'Kigali',
'Dodoma',
'Juba',
'Asmara',
              ]}
            />
            <EarthSection
             
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                    finally
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    Upon successful completion of my assigned tasks for the LakiPay app, I have achieved notable outcomes:
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
              As the development journey for the LakiPay app progresses, my successful completion of the assigned tasks stands as a notable achievement, demonstrating my technical expertise and dedication to ensuring the app s success.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
