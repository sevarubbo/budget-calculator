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

  componentWillMount () {
    this.props.fetchCategories();
  }

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
          <article key={index}>
            { category.name }
            <button type='button' onClick={() => this.props.deleteCategory(category.id)}>Delete</button>
          </article>
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
}

TotalSpend.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),

  fetchCategories: PropTypes.func,
  createCategory: PropTypes.func,
  deleteCategory: PropTypes.func
};

