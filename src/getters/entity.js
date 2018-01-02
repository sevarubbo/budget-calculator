/**
 *
 * @param {Object} state
 * @param {String} entityType
 * @param {Object} [subsetIdentifier]
 * @return {Array.<Object>}
 */
export function getEntities (state, entityType, subsetIdentifier) {
  subsetIdentifier = subsetIdentifier ? JSON.stringify(subsetIdentifier) : 'all';

  return state.entity[entityType][subsetIdentifier].map(entityId => {
    return getEntityById(state, entityType, entityId);
  });
}

/**
 *
 * @param {Object} state
 * @param {String} entityType
 * @param {String} entityId
 * @return {Object}
 */
export function getEntityById (state, entityType, entityId) {
  return state.entity[entityType].byId[entityId];
}
