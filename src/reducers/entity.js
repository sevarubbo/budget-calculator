import {upperFirst, uniq} from 'lodash';
import Model from '../core/model';
import Category from '../models/Category';
import IncomeCategory from '../models/IncomeCategory';

Model.register(Category);
Model.register(IncomeCategory);

let lastTemporaryId = 0;

const initialState = {};

/**
 * @param {Object} state
 * @param {Object} action
 * @param {String} action.entityType
 * @param {Object} action.attributes
 * @return {Object}
 */
function pushEntity (state = initialState, action) {
  const entityId = action.attributes.id || `_${lastTemporaryId = lastTemporaryId + 1}`;
  const entityState = state[action.entityType] || {
    byId: {},
    all: []
  };
  const existingEntity = entityState.byId[entityId] || {
    id: entityId,
    attributes: {},
    changedAttributes: {}
  };
  const EntityModel = Model.getModel(upperFirst(action.entityType));

  return {
    ...state,
    [action.entityType]: {
      ...entityState,
      byId: {
        ...entityState.byId,
        [entityId]: new EntityModel({
          ...existingEntity,
          attributes: {
            ...existingEntity.attributes,
            ...action.attributes
          },
          changedAttributes: {}
        })
      },
      ...(() => {
        if (!entityState.all) {
          return null;
        }

        return {
          all: uniq([...entityState.all, entityId])
        };
      })()
    },
  };
}

/**
 * @param {Object} state
 * @param {Object} action
 * @param {String} action.entityType
 * @param {String} action.id
 * @return {Object}
 */
function deleteEntity (state = initialState, action) {
  const entityState = state[action.entityType] || {
    byId: {},
    all: []
  };

  // noinspection JSUnusedLocalSymbols
  return {
    ...state,
    [action.entityType]: {
      ...entityState,
      byId: (({[action.id]: x, ...res}) => res)(entityState.byId), // eslint-disable-line
      ...(() => {
        if (!entityState.all) {
          return null;
        }

        return {
          all: entityState.all.filter(id => id !== action.id)
        };
      })()
    }
  };
}

/**
 * @param {Object} state
 * @param {Object} action
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case 'PUSH_ENTITY':
      return pushEntity(state, action);
    case 'DELETE_ENTITY':
      return deleteEntity(state, action);
    default:
      return state;
  }
}
