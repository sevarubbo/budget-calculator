import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Category from '../../../models/category';

export default class SpendCategory extends React.Component {
  /**
   *
   */
  constructor () {
    super(...arguments);

    this.state = {
      categoryAttributes: {
        ...this.props.category
      }
    };
  }

  /**
   * Properties
   */

  /**
   * @return {Boolean}
   */
  get hasUnsavedAttributes () {
    return this.state.categoryAttributes.totalSpend !== this.props.category.totalSpend;
  }

  /**
   * Hooks
   */

  /**
   */
  componentWillMount () {

  }

  /**
   * Methods
   */

  /**
   */
  deleteCategory () {
    if (window.confirm(`Are you sure you want to delete category ${this.props.category.name}`)) {
      this.props.deleteCategory(this.props.category.id);
    }
  }

  /**
   * @param {String} attribute
   * @param {*} value
   */
  updateCategory (attribute, value) {
    this.setState({
      categoryAttributes: {
        ...this.state.categoryAttributes,
        [attribute]: value
      }
    });
  }

  /**
   *
   */
  saveCategory () {
    this.props.updateCategory(this.props.category.id, this.state.categoryAttributes);
  }

  /**
   * @returns {String}
   */
  render () {
    const category = this.props.category;

    return (
      <tr className='spend-category' key={category.id}>
        <td>
          { category.name }
        </td>
        <td>
          <button type='button' onClick={() => this.deleteCategory(category)}>Delete</button>
        </td>
        <td>
          <form onSubmit={e => {e.preventDefault(); this.saveCategory();}}>
            <input
              type='number'
              required={true}
              min={0}
              step={0.01}
              value={this.state.categoryAttributes.totalSpend}
              onChange={e => this.updateCategory('totalSpend', e.target.value)}
            />
            <button type='submit' disabled={!this.hasUnsavedAttributes}>Save</button>
          </form>
        </td>
      </tr>
    );
  }
}

SpendCategory.propTypes = {
  category: PropTypes.instanceOf(Category),

  updateCategory: PropTypes.func,
  deleteCategory: PropTypes.func
};

