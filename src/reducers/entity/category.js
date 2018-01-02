import _ from 'lodash';

let lastTemporaryId = 0;

const initialState = {
  byId: {},
  all: []
};

/**
 * @param {Object} state
 * @param {Object} action
 * @param {String} action.id
 * @param {Object} action.attributes
 * @return {Object}
 */
function pushEntity (state = initialState, action) {
  const entityId = action.id || `_${lastTemporaryId = lastTemporaryId + 1}`;

  return {
    ...state,
    byId: {
      ...state.byId,
      [entityId]: {
        ...state.byId[entityId] || {},
        ...action.attributes
      }
    },
    ...(() => {
      if (!state.all) {
        return null;
      }

      return {
        all: _.uniq([...state.all, entityId])
      };
    })()
  };
}

/**
 * @param {Object} state
 * @param {Object} action
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case 'PUSH_CATEGORY':
      return pushEntity(state, action);
    default:
      return state;
  }
}
