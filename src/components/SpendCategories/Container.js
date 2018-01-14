import {connect} from 'react-redux';
import Component from './Component';
import {getEntities} from '../../getters/entity';
import {createOneEntity, fetchAllEntities} from '../../actions/async/entity';

/**
 * @param {Object} state
 * @return {Object}
 */
function mapStateToProps (state) {
  /** @type {Array.<Category>} */
  const categories = getEntities(state, 'category');

  return {
    categories
  };
}

/**
 * @param {Function} dispatch
 * @return {Object.<Function>}
 */
function mapDispatchToProps (dispatch) {
  return {
    createCategory (attributes) {
      dispatch(createOneEntity('category', attributes));
    },
    fetchCategories () {
      dispatch(fetchAllEntities('category'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
