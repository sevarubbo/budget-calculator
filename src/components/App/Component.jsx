import React from 'react';
import './styles.scss';
import IncomeCategoriesContainer from '../IncomeCategories/Container';
import SpendCategoriesContainer from '../SpendCategories/Container';

export default class App extends React.Component {
  /**
   * @returns {String}
   */
  render () {
    return (
      <div className='app'>
        <IncomeCategoriesContainer />
        <SpendCategoriesContainer />
      </div>
    );
  }
}

