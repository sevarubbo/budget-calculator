const initialState = {
  byId: {}
};

/**
 * @param {Object} state
 * @param {Object} action
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case 'PUSH_CATEGORY':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id] || {},
            ...action.attributes
          }
        }
      };
    default:
      return state;
  }
}
