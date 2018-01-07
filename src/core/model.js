/**
 * @class Model
 * @property {String} id
 */
export default class Model {
  constructor (attributes) {
    Object.keys(attributes).map(attributeName => {
      this[attributeName] = attributes[attributeName];
    });
  }
}
