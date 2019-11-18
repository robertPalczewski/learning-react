import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn} from '../../redux/cardsRedux';
import {createAction_addCard} from '../../redux/cardsRedux';

/*export const getCardsForList = ({cards}, columnId) => cards.filter(card => card.columnId === columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});

export default connect(mapStateToProps)(Column);*/

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);