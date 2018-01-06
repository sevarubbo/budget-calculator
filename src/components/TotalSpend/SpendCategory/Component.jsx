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

    this.state = {};
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
          <button type='button' onClick={() => this.props.deleteCategory(category.id)}>Delete</button>
        </td>
        <td>
          <input value={category.totalSpend}/>
        </td>
      </tr>
    );
  }
}

SpendCategory.propTypes = {
  category: PropTypes.instanceOf(Category),

  deleteCategory: PropTypes.func
};

