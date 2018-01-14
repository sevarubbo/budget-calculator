import {connect} from 'react-redux';
import Component from './Component';
import {getEntities} from '../../getters/entity';
import {createOneEntity, fetchAllEntities} from '../../actions/async/entity';

/**
 * @param {Object} state
 * @return {Object}
 */
function mapStateToProps (state) {
  return {
    incomeCategories: getEntities(state, 'incomeCategory')
  };
}

/**
 * @param {Function} dispatch
 * @return {Object.<Function>}
 */
function mapDispatchToProps (dispatch) {
  return {
    createIncomeCategory (attributes) {
      dispatch(createOneEntity('incomeCategory', attributes));
    },
    fetchIncomeCategories () {
      dispatch(fetchAllEntities('incomeCategory'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
