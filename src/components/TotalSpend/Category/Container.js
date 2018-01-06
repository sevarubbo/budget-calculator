import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Component from './Component';
import {deleteOneEntity, updateOneEntity} from '../../../actions/async/entity';
import Category from '../../../models/category';

/**
 * @return {Object}
 */
function mapStateToProps () {
  return {};
}

/**
 * @param {Function} dispatch
 * @return {Object.<Function>}
 */
function mapDispatchToProps (dispatch) {
  return {
    /**
     * @param {String} categoryId
     * @param attributes
     */
    updateCategory (categoryId, attributes) {
      dispatch(updateOneEntity('category', categoryId, attributes));
    },

    /**
     * @param {String} categoryId
     */
    deleteCategory (categoryId) {
      dispatch(deleteOneEntity('category', categoryId));
    }
  };
}

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

CategoryContainer.propTypes = {
  category: PropTypes.instanceOf(Category)
};

export default CategoryContainer;
