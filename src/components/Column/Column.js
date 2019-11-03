import React from "react";
import styles from "./Column.scss";
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from "../Creator/Creator";

class Column extends React.Component {
// start
  state = {
    cards: this.props.cards || [],
  };

  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
          }
        ]
      }
    ));
  }

// end

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <div>
          {this.props.cards.map(({key, title}) => (
            <Card key={key} title={title}/>
          ))}
        </div>
      </section>
    )
  }
}

export default Column;