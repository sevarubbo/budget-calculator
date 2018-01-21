import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import IncomeCategory from '../../models/IncomeCategory';

export default class IncomeCategories extends React.Component {
  /**
   *
   */
  constructor () {
    super(...arguments);

    this.state = {
      isAddingIncomeCategory: false,
      newIncomeCategoryName: ''
    };
  }

  /**
   * Hooks
   */

  /**
   */
  componentWillMount () {
    this.props.fetchIncomeCategories();
  }

  /**
   * @param {Object} e
   */
  onIncomeCategoryNameChangeHandler (e) {
    this.setState({newIncomeCategoryName: e.target.value});
  }

  /**
   * Methods
   */

  /**
   *
   */
  addIncomeCategory () {
    this.setState({
      isAddingIncomeCategory: false,
      newIncomeCategoryName: ''
    });

    this.props.createIncomeCategory({
      name: this.state.newIncomeCategoryName
    });
  }

  /**
   * @returns {String}
   */
  render () {
    /** @type {Array.<IncomeCategory>} */
    const incomeCategories = this.props.incomeCategories;
    return (
      <div className='income-categories'>
        { incomeCategories.map(incomeCategory =>
          <div key={incomeCategory.id}>
            { incomeCategory.name }
          </div>
        ) }
        { this.state.isAddingIncomeCategory &&
          <form onSubmit={e => {e.preventDefault(); this.addIncomeCategory();}}>
            <input
              type='text'
              required={true}
              name='new-income-category-name'
              onChange={e => this.onIncomeCategoryNameChangeHandler(e)}
            />
            <button>Add</button>
          </form> ||
          <button onClick={() => this.setState({isAddingIncomeCategory: true})}>Add income category</button>
        }
      </div>
    );
  }
}

IncomeCategories.propTypes = {
  incomeCategories: PropTypes.arrayOf(PropTypes.instanceOf(IncomeCategory)),

  fetchIncomeCategories: PropTypes.func,
  createIncomeCategory: PropTypes.func
};

