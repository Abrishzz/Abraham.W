
import sliceAppLarge from 'assets/slice-app-large.png';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/slice-app.png';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/slice-background-bar.png';
import sliceBackgroundLarge from 'assets/slice-background.gif';
import sliceBackgroundPlaceholder from 'assets/slice-background.gif';
import sliceBackground from 'assets/slice-background.gif';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from 'assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';

import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from 'assets/slice-sidebar-layers.png';
import sliceSlidesLarge from 'assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceSlides from 'assets/slice-slides.jpg';
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

const title = 'ShebaLuxury';
const description =
  'Redefining the Luxury Shopping Experience. The ShebaLuxury website showcasing a curated selection of luxury products.';
const roles = [{role:'Frontend development', icon: 'reactr'},
{role:'Backend development', icon: 'node'},
{role:'UI/UX Design', icon: 'flutter'}, {role:'Interface Design'}];

export const ShebaLuxury = () => {
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
          url="https://shebaluxury.vercel.app/"
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
              <ProjectSectionHeading>Revolutionizing Luxury Shopping at ShebaLuxury</ProjectSectionHeading>
              <ProjectSectionText>
              Within the ShebaLuxury project, I led a groundbreaking initiative to redefine luxury shopping. Our central objective was to develop a platform that not only presented an array of high-end products but also highlighted exclusivity and personalized customer service.
              </ProjectSectionText>
              <ProjectSectionText>
              This endeavor involved meticulously curating luxury items, handpicking the finest watches, exquisite jewelry pieces, and designer bags. Each product was carefully selected to embody elegance, sophistication, and impeccable craftsmanship.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
           
            <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayers ]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotationsLarge, sliceSidebarAnnotationsLarge]}
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
              <ProjectSectionHeading>My Role: Crafting the User-Centric E-Commerce Experience</ProjectSectionHeading>
              <ProjectSectionText>
              My role encompassed overseeing the complete development of the e-commerce platform. I meticulously designed and implemented the relational database, meticulously handling product data and user information. I crafted critical API endpoints using Node.js, ensuring seamless and secure communication between the user interface and the backend. The web application was skillfully created using React.js, with a primary focus on a user-centric, seamless, and visually captivating shopping journey.
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
              <ProjectSectionHeading>User-Centric Design</ProjectSectionHeading>
              <ProjectSectionText>
              We prioritize user research and design to ensure a seamless and intuitive shopping journey. Our user interface is thoughtfully crafted to provide a visually appealing and user-friendly experience. With a few clicks, you can effortlessly explore our extensive range of luxury products.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Emphasizing Personalized Service and Support</ProjectSectionHeading>
              <ProjectSectionText>
              Our core focus lay in delivering tailored services that catered to each customer s unique preferences. The team, under my guidance, was committed to not only ensuring a visually stunning and user-friendly interface but also providing a highly personalized shopping experience. From guiding clients through selecting the perfect product to providing comprehensive after-sales support, we aimed to exceed expectations at every touchpoint.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt=""
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
