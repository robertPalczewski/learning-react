import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';
// import ReactHtmlParser from 'react-html-parser'; // przypomnieć sobie kiedy używać

const Container = props => {
  return(
    <div className={styles.component}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

/*
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
  );
};

Hero.propTypes = {
  title: PropTypes.node,
  image: PropTypes.string.isRequired,
};

export default Hero;*/
