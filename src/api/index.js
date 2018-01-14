import {openDB} from './db';

export const API = {
  /**
   * @param {String} entityType
   * @param {Object} attributes
   * @return {Promise.<Object>}
   */
  createOne (entityType, attributes) {
    return openDB().then(db => {
      const transaction = db.transaction(entityType, 'readwrite');
      const objectStore = transaction.objectStore(entityType);
      const request = objectStore.add(attributes);

      return new Promise(resolve => {
        request.onsuccess = () => {
          this.getOne(entityType, request.result).then(resolve);
        };
      });
    });
  },

  /**
   * @param {String} entityType
   * @param {String} entityId
   * @return {Promise.<Object>}
   */
  getOne (entityType, entityId) {
    return openDB().then(db => {
      const transaction = db.transaction(entityType, 'readwrite');
      const objectStore = transaction.objectStore(entityType);
      const request = objectStore.get(entityId);

      return new Promise(resolve => {
        request.onsuccess = () => {
          resolve(request.result);
        };
      });
    });
  },

  /**
   * @param {String} entityType
   * @return {Promise.<Array.<Object>>}
   */
  getAll (entityType) {
    return openDB().then(db => {
      const transaction = db.transaction(entityType, 'readwrite');
      const objectStore = transaction.objectStore(entityType);
      const request = objectStore.getAll();

      return new Promise(resolve => {
        request.onsuccess = () => {
          resolve(request.result);
        };
      });
    });
  },

  /**
   * @param {String} entityType
   * @param {String} entityId
   * @param {Object} attributes
   * @return {Promise.<Object>}
   */
  updateOne (entityType, entityId, attributes) {
    return this.getOne(entityType, entityId).then(result => {
      return openDB().then(db => [result, db]);
    }).then(([result, db]) => {
      const transaction = db.transaction(entityType, 'readwrite');
      const objectStore = transaction.objectStore(entityType);

      Object.keys(attributes).forEach(attribute => {
        result[attribute] = attributes[attribute];
      });

      const request = objectStore.put(result);

      return new Promise(resolve => {
        request.onsuccess = () => {
          this.getOne(entityType, request.result).then(resolve);
        };
      });
    });
  },

  /**
   * @param {String} entityType
   * @param {String} entityId
   * @return {Promise.<Array.<Object>>}
   */
  deleteOne (entityType, entityId) {
    return openDB().then(db => {
      const transaction = db.transaction(entityType, 'readwrite');
      const objectStore = transaction.objectStore(entityType);
      const request = objectStore.delete(entityId);

      return new Promise(resolve => {
        request.onsuccess = () => {
          resolve(request.result);
        };
      });
    });
  }
};
