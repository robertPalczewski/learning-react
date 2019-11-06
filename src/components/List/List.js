import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string.isRequired,
    addColumn: PropTypes.func,
  };
  static defaultProps = {
    description: settings.defaultListDescription,
  };
  /*  state = {
    columns: this.props.columns || [],
  };*/

  /*  addColumn(title) {
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }*/

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        {/*<Hero title={this.props.title} image={this.props.image}/>
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>*/}
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn}/>
        </div>
      </section>
    );
  }
}

export default List;

/*
import React from 'react';
import styles from './List.scss';
import Hero from "../Hero/Hero";
import PropTypes from 'prop-types';
import Column from "../Column/Column";

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string.isRequired
  };

  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  };

  render() {
    return (
      <section className={styles.component}>
        <Hero title={this.props.title} image={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title="Column 1" />
          <Column title="Column 2" />
          <Column title="Column 3" />
        </div>
      </section>
    )
  };
}

export default List;*/
