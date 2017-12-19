import {connect} from 'react-redux';
import Component from './Component';
import {createOne} from '../../actions/entity';

function mapStateToProps () {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    createCategory (attributes) {
      dispatch(createOne('category', attributes));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
