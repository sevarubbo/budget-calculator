import _ from 'lodash';

/**
 * @param {String} entityType
 * @param {Object} attributes
 * @returns {Function}
 */
export function pushEntity (entityType, attributes) {
  return function (dispatch) {
    return dispatch({
      type: `PUSH_${_(entityType).snakeCase().toUpperCase()}`,
      attributes
    });
  };
}
