import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => {
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>{ReactHtmlParser(props.title)}</h2>
      <img className={styles.image} src={props.image}/>
    </header>
  )
};

Hero.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired
};

export default Hero;