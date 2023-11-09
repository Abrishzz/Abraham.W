import { classes } from 'utils/style';
import styles from './Icon.module.css';
import ArrowLeft from './svg/arrow-left.svg';
import ArrowRight from './svg/arrow-right.svg';
import Check from './svg/check.svg';
import ChevronRight from './svg/chevron-right.svg';
import Close from './svg/close.svg';
import Copy from './svg/copy.svg';
import Error from './svg/error.svg';
import Figma from './svg/figma.svg';
import Github from './svg/github.svg';
import Link from './svg/link.svg';
import Menu from './svg/menu.svg';
import Pause from './svg/pause.svg';
import Play from './svg/play.svg';
import Send from './svg/send.svg';
import Twitter from './svg/twitter.svg';
import Person from './svg/person.svg';
import Flutter from './svg/Flutter.svg';
import Tailwind from './svg/Tailwind.svg';
import Next from './svg/Next.svg';
import CSS3 from './svg/CSS3.svg';

import Reactr from './svg/Reactr.svg';
import Vue from './svg/Vue.svg';
import Angular from './svg/Angular.svg';
import Webpack from './svg/Webpack.svg';
import Email from './svg/Gmail.svg';
import Telegram from './svg/Telegram.svg';
import Instagram from './svg/Instagram.svg';
import LinkedIn from './svg/Linkedin.svg';
import Mobile from './svg/Mobile.svg';
import Node from './svg/node.svg';


export const icons = {

  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  check: Check,
  chevronRight: ChevronRight,
  close: Close,
  copy: Copy,
  error: Error,
  figma: Figma,
  github: Github,
  link: Link,
  menu: Menu,
  pause: Pause,
  play: Play,
  send: Send,
  twitter: Twitter,
  person: Person,
  webpack: Webpack,
  angular: Angular,
  vue: Vue,
  reactr: Reactr,

  cSS3: CSS3,
  next: Next,
  tailwind: Tailwind,
  flutter: Flutter,
  email: Email,
  telegram: Telegram,
  instagram: Instagram,
  linkedIn: LinkedIn,
  mobile: Mobile,
  node: Node,



};

export const Icon = ({ icon, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classes(styles.icon, className)} {...rest} />
  );
};
