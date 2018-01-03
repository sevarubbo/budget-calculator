import _ from 'lodash';

let lastTemporaryId = 0;

const initialState = {
  byId: {},
  all: []
};

/**
 * @param {Object} state
 * @param {Object} action
 * @param {Object} action.attributes
 * @return {Object}
 */
function pushEntity (state = initialState, action) {
  const entityId = action.attributes.id || `_${lastTemporaryId = lastTemporaryId + 1}`;

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
 * @param {String} action.id
 * @return {Object}
 */
function deleteEntity (state = initialState, action) {
  // noinspection JSUnusedLocalSymbols
  return {
    ...state,
    byId: (({[action.id]: x, ...res}) => res)(state.byId), // eslint-disable-line
    ...(() => {
      if (!state.all) {
        return null;
      }

      return {
        all: state.all.filter(id => id !== action.id)
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
    case 'DELETE_CATEGORY':
      return deleteEntity(state, action);
    default:
      return state;
  }
}
