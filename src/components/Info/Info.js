import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData, infoContent, pageContents} from '../../data/dataStore';
import styles from './Info.scss';

const Info = () => (
  <Container>
    <main className={styles.component}>
      <h1 className={styles.title}>{pageContents.title}</h1>
      <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
      <Hero titleText={listData.title} image={listData.image}/>
      <h2>{infoContent.title}</h2>
      <img className={styles.titleImage} src={infoContent.image} />
      <p>{infoContent.info}</p>
    </main>
  </Container>
);

export default Info;