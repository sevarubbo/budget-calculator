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
      totalSpend: this.props.category.totalSpend,
      categoryAttributes: {
        ...this.props.category
      }
    };
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
          <input value={this.state.categoryAttributes.totalSpend} onChange={e => this.updateCategory('totalSpend', e.target.value)}/>
        </td>
        <td>
          <button onClick={() => this.saveCategory()}>Save</button>
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

