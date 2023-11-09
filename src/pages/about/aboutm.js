
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment } from 'react';
import styles from './404.module.css';
import { Icon } from 'components/Icon';
import {
  
  ProjectHeader,

} from 'layouts/Project';
export function aboutm() {
 
  const title = 'This are the projectes i am designed or contributed to';
const description =
  'I worked as the design lead on a major iteration of LakiPay’s product. We took the platform in a bold new direction by focusing on becoming the best tool for peer-to-peer payments.';
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
  

  return (
    <section className={styles.page}>
      <Meta
        title="About me"
        description="About me"
      />
      <Transition in>
        {visible => (
          <Fragment>
            <div className={styles.details}>
              <div className={styles.text}>
                <Heading
                  className={styles.title}
                  data-visible={visible}
                  level={3}
                  weight="bold"
                >
                  Abraham Wondwosen
                </Heading>
                <Heading
                  aria-hidden
                  className={styles.subheading}
                  data-visible={visible}
                  as="h2"
                  level={5}
                >
                  Front-End App and Web Developer
                  <DecoderText text="Error: Redacted" start={visible} delay={300} />
                </Heading>
                <Text className={styles.description} data-visible={visible} as="p">
                As a passionate Front-End App and Web Developer, I thrive on crafting captivating user experiences that seamlessly blend aesthetics and functionality. With a keen eye for detail and a deep understanding of modern web technologies, I specialize in bringing ideas to life through elegant and responsive interfaces. From pixel-perfect designs to intuitive interactions, I am dedicated to creating user-centric applications that leave a lasting impression. Let s collaborate and turn your vision into a reality!
                </Text>
       
    <ProjectHeader
  title={title}
  description={description}
  url=""
  roles={roles}
/>


<hr 
style={ {marginTop: '150px',
color: 'blue',
}}
/> {/* This adds a horizontal line */}

<h2>Contact Information</h2> {/* This is your heading */}

<hr
style={ {marginBottom: '20px',
color: 'blue',
}}
/>
<div className={styles.tools} >
  <div className={styles.row}>
  <ul className={styles.iconList} style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none' }}>
      <li style={{ flex: '50%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon style={{ marginRight: '20px' }} icon="linkedIn" />
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </li>
      <li style={{ flex: '50%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon style={{ marginRight: '20px' }} icon="instagram" />
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </li>
      <li style={{ flex: '50%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon style={{ marginRight: '20px' }} icon="telegram" />
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </li>
      <li style={{ flex: '50%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon style={{ marginRight: '20px' }} icon="email" />
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </li>
      <li style={{ flex: '50%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon style={{ marginRight: '20px' }} icon="mobile" />
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">+1234567890</a>
        </div>
      </li>
 

      {/* Your other contact information list items */}
    </ul>
  </div>
</div>

               
              </div>
            </div>

            <div className={styles.videoContainer} data-visible={visible}>
            
              <a
                className={styles.credit}
                data-visible={visible}
                href="https://Runway.ml"
                target="_blank"
                rel="noopener noreferrer"
              >
                Animation generated from Runway.ml
              </a>
            </div>
          </Fragment>
        )}
      </Transition>
    </section>
  );
}