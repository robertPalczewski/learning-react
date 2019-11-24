import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData, FAQContent, pageContents} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import styles from './Faq.scss';

const Faq = () => (
  <Container>
    <main className={styles.component}>
      <h1 className={styles.title}>{pageContents.title}</h1>
      <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
      <Hero titleText={listData.title} image={listData.image}/>
      <h2>{FAQContent.title}</h2>
      <img className={styles.titleImage} src={FAQContent.image} />
      {ReactHtmlParser(FAQContent.faq)}
    </main>
  </Container>
);

export default Faq;