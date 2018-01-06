import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import CategoryContainer from './Category/Container';
import Category from '../../models/category';

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
    /** @type {Array.<Object>} */
    const categories = this.props.categories;
    return (
      <div className='total-spend'>
        <table>
          <tbody>
            { categories.map(category =>
              <CategoryContainer
                key={category.id}
                category={category}
              />
            ) }
          </tbody>
        </table>
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
  categories: PropTypes.arrayOf(PropTypes.instanceOf(Category)),

  fetchCategories: PropTypes.func,
  createCategory: PropTypes.func,
  deleteCategory: PropTypes.func
};

