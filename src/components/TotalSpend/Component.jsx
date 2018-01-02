import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class TotalSpend extends React.Component {
  /**
   *
   */
  constructor () {
    super(...arguments);

    this.state = {
      isAddingCategory: false,
      newCategoryName: ''
    };
  }

  /**
   * Hooks
   */

  /**
   * @param {Object} e
   */
  onCategoryNameChangeHandler (e) {
    this.setState({newCategoryName: e.target.value});
  }

  /**
   * Methods
   */

  /**
   *
   */
  addCategory () {
    this.setState({
      isAddingCategory: false,
      newCategoryName: ''
    });

    this.props.createCategory({
      name: this.state.newCategoryName
    });
  }

  /**
   * @returns {String}
   */
  render () {
    return (
      <div className='total-spend'>
        { this.props.categories.map((category, index) =>
          <div key={index}>
            { category.name }
          </div>
        ) }
        { this.state.isAddingCategory &&
          <form onSubmit={(e) => {e.preventDefault(); this.addCategory();}}>
            <input type='text' name='new-category-name' onChange={e => this.onCategoryNameChangeHandler(e)}/>
            <button>Add</button>
          </form> ||
          <button onClick={() => this.setState({isAddingCategory: true})}>Add category</button>
        }
      </div>
    );
  }

  /**
   * @returns {Object}
   */
  static get propTypes () {
    return {
      categories: PropTypes.arrayOf(PropTypes.object),
      createCategory: PropTypes.func
    };
  }
}

