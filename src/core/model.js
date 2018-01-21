/**
 * @class Model
 */
export default class Model {
  /**
   * @param {Object} entityData
   * @param {String} entityData.id
   * @param {Object} entityData.attributes
   * @param {Object} entityData.changedAttributes
   */
  constructor (entityData) {
    this.id = entityData.id;
    this.attributes = entityData.attributes;
    this.changedAttributes = entityData.changedAttributes;
  }

  /**
   * @param attributeName
   * @return {*}
   */
  getAttribute (attributeName) {
    return this.changedAttributes[attributeName]
      ? this.changedAttributes[attributeName]
      : this.attributes[attributeName];
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
    if (!Model.models[name]) {
      throw `Model "${name}" is not registered`;
    }

    return Model.models[name];
  }
}

Model.models = {};
