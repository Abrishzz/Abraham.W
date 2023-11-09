import React, { useState } from 'react';
import style from './Testimonials.module.css';
import data from './data';
import IconNext from 'assets/icon-next.svg';
import IconPrev from 'assets/icon-prev.svg';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleClickPrev = () => {
    if (index === 0) return setIndex(data.length - 1);
    setIndex(index - 1);
  };

  const handleClickNext = () => {
    if (index === data.length - 1) return setIndex(0);
    setIndex(index + 1);
  };

  return (
    <div className={style.container}>
      <div className={style.testimonial_container}>
        <div className={style.testimonial}>
          <div className={style.testimonial_content}>
            “{data[index].testimonial}”
          </div>
          <div className={style.testimonial_author}>
            <p className={style.testimonial_author_name}>{data[index].name}</p>
            <p className={style.testimonial_author_job}>{data[index].job}</p>
          </div>
          <div className={style.slider}>
            <div className={style.slider_buttons}>
              <button onClick={() => handleClickPrev()}>
                <IconPrev />
              </button>
              <button onClick={() => handleClickNext()}>
                <IconNext />
              </button>
            </div>
          </div>
        </div>
        <div className={style.profileImage}>
          <img src={`/assets/${data[index].profileImage}`} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
