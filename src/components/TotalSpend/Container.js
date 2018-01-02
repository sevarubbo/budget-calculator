import {connect} from 'react-redux';
import Component from './Component';
import {getEntities} from '../../getters/entity';
import {createOneEntity, fetchAllEntities} from '../../actions/async/entity';

/**
 * @param {Object} state
 * @return {Object}
 */
function mapStateToProps (state) {
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
    fetchCategories () {
      dispatch(fetchAllEntities('category'));
    },
    createCategory (attributes) {
      dispatch(createOneEntity('category', attributes));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
