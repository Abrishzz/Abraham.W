
import sliceAppLarge from 'assets/slice-app-largec.png';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/slice-appc.png';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-largec.png';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/slice-background-barc.png';
import sliceBackgroundLarge from 'assets/slice-background.png';
import sliceBackgroundPlaceholder from 'assets/slice-background.png';
import sliceBackground from 'assets/slice-background.png';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from 'assets/slice-sidebar-layers-largec.png';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';

import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from 'assets/slice-sidebar-layersc.png';
import sliceSlidesLarge from 'assets/slice-slides-largec.png';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceSlides from 'assets/slice-slidesc.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
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
import styles from './Slice.module.css';

const title = 'Government Information Directories';
const description =
   'As a dedicated Flutter, Full Stack, and InDesign Script Developer at ANYPOL Publishing PLC, I contributed to revolutionizing the way business and government directories were presented. My key responsibilities encompassed promoting and publishing directories using Yellow Pages, websites, and mobile apps.';
  
const roles = [{role:'Front-end web development', icon:'reactr'},{role:'Front-end App development', icon:'flutter'}, {role:'Back-end development', icon: 'node'},{ role:'System Design'}];

export const Gid = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.govinfodir.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>User-Centric Design</ProjectSectionHeading>
              <ProjectSectionText>
              To ensure a seamless and intuitive user experience, we conducted extensive user research and incorporated user-centric design principles. Our interface is thoughtfully crafted to make it effortless for users to navigate and find the desired information efficiently. </ProjectSectionText>
              <ProjectSectionText>
              Comprehensive Government Directories
We have compiled comprehensive government directories that cover various regions across the country. Whether you are interested in information related to Addis Ababa, Afar, Amhara, Benishangul, Dire Dawa, Gambella, Harari, Oromia, Sidama, Somali, SNNP, or Tigray, our directories provide a wealth of valuable information.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
           
            <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotationsLarge,sliceSidebarAnnotationsLarge  ]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayers]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Empowering Citizens</ProjectSectionHeading>
              <ProjectSectionText>
              I took a pivotal role in developing a government directory listing website and application using NodeJs, ReactJs, and Flutter technologies. This platform was designed to empower citizens by providing easy access to vital government information.
           
             </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
              
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Empowering Citizens</ProjectSectionHeading>
              <ProjectSectionText>
              I took a pivotal role in developing a government directory listing website and application using NodeJs, ReactJs, and Flutter technologies. This platform was designed to empower citizens by providing easy access to vital government information.
           
              </ProjectSectionText>
              <ProjectSectionText>
                Our primary objective was to offer comprehensive government directories covering multiple regions across the country. We aimed to provide a wealth of valuable information for areas such as Addis Ababa, Afar, Amhara, Benishangul, and many more.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Personalized Service</ProjectSectionHeading>
              <ProjectSectionText>
              At Govinfodir, we are committed to providing a user-friendly platform that enhances your experience of accessing government information. Our goal is to empower citizens with the information they need to engage with their government effectively.
              </ProjectSectionText>
              <ProjectSectionText>
              Join the Govinfodir community today and unlock a wealth of government information at your fingertips. Explore comprehensive directories, stay informed with the app, and discover the relevant organizations that matter to you.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
