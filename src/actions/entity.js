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

/**
 * @param {String} entityType
 * @param {String} entityId
 * @returns {Function}
 */
export function deleteEntity (entityType, entityId) {
  return function (dispatch) {
    return dispatch({
      type: `DELETE_${_(entityType).snakeCase().toUpperCase()}`,
      id: entityId
    });
  };
}
