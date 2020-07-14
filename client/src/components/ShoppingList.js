import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'; // get state from redux
import { getItems, addItem, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick= (id) => {
    this.props.deleteItem(id);
  };

  // state will be handled by redux
  render() {
    // whenever we put something inside curly braces
    // it means we are destructuring something means we are pulling something out from it
    // we defined a state and we are pulling the data from the state
    // using items
    const { items } = this.props.item;
    return (
      <Container>
        {/* <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Item');
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { id: uuid(), name }],
              }));
            }
          }}
        >
          Add Item
        </Button> */}
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

// takes our item state and maps it as a component property
// so that we can show the items on our component
const mapStateToProps = (state) => ({
  item: state.item,
});

// export default ShoppingList;
// as we are getting data from redux so we will get it by connect
export default connect(
  mapStateToProps, 
  { getItems, deleteItem, addItem }
)(ShoppingList);
