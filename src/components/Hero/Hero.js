import React from 'react';
import styles from "./Hero.scss";

const Hero = () => (
  <header className={styles.component}>
    <h3 className={styles.title}>Things to do</h3>
    <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"/>
  </header>
);

export default Hero;