import {connect} from 'react-redux';
import Component from './Component';
import {createOne} from '../../actions/entity';
import {getEntities} from '../../getters/entity';

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
    createCategory (attributes) {
      dispatch(createOne('category', attributes));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
