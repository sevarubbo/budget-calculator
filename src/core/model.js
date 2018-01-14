/**
 * @class Model
 */
export default class Model {
  constructor (attributes) {
    Object.keys(attributes).map(attributeName => {
      this[attributeName] = attributes[attributeName];
    });
  }

  /**
   * @param {Model} model
   */
  static register (model) {
    Model.models[model.name] = model;
  }

  /**
   * @param {String} name
   * @return {Model}
   */
  static getModel (name) {
    return Model.models[name];
  }
}

Model.models = {};

/**
 * @name id
 * @memberOf Model#
 */
