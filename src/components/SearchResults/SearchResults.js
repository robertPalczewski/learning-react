import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
  };

  render() {
    const {title, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;

/*
// Columns.js

import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';



class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon}/></span> {this.props.title}</h3>
        {/!*<div>
          {this.state.cards.map(({key, title}) => (
            <Card key={key} title={title}/>
          ))}
        </div>*!/}
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}

export default Column;*/
