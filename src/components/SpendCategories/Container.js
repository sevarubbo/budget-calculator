import {connect} from 'react-redux';
import Component from './Component';
import {getEntities} from '../../getters/entity';
import {createOneEntity, fetchAllEntities} from '../../actions/async/entity';
import Category from '../../models/category';

/**
 * @param {Object} state
 * @return {Object}
 */
function mapStateToProps (state) {
  const categories = getEntities(state, 'category').map(entity => new Category(entity));

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
