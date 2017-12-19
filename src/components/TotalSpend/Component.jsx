import React from 'react';
import './styles.scss';

export default class TotalSpend extends React.Component {
  /**
   *
   */
  constructor () {
    super(...arguments);

    this.state = {
      categories: [],
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
      categories: [...this.state.categories, {name: this.state.newCategoryName}],
      isAddingCategory: false,
      newCategoryName: ''
    });
  }

  /**
   * @returns {String}
   */
  render () {
    return (
      <div className='total-spend'>
        { this.state.categories.map((category, index) => (
          <div key={index}>
            { category.name }
          </div>
        )) }
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
