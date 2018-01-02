import {API} from '../../api';
import {pushEntity} from '../entity';

/**
 * @param {String} entityType
 * @returns {Function}
 */
export function fetchAllEntities (entityType) {
  return function (dispatch) {
    API.getAll(entityType).then(entities => {
      entities.forEach(attributes => {
        dispatch(pushEntity(entityType, attributes));
      });
    });
  };
}

/**
 * @param {String} entityType
 * @param {Object} attributes
 * @return {Function}
 */
export function createOneEntity (entityType, attributes) {
  return function (dispatch) {
    API.createOne(entityType, attributes).then(attributes => {
      dispatch(pushEntity(entityType, attributes));
    });
  };
}
