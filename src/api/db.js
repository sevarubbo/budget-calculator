const dbName = 'budget-calculator';

/**
 * @return {Promise.<IDBDatabase>}
 */
export function openDB () {
  return new Promise(resolve => {
    const DBRequest = indexedDB.open(dbName, 2);

    DBRequest.onsuccess = function () {
      resolve(DBRequest.result);
    };

    DBRequest.onerror = function () {
      throw new Error('Database error');
    };

    DBRequest.onupgradeneeded = function (event) {
      /** @type {IDBDatabase} */
      const db = DBRequest.result;

      if (event.oldVersion < 1) {
        db.createObjectStore('category', {
          keyPath: 'id',
          autoIncrement: true
        });
      }

      if (event.oldVersion < 2) {
        db.createObjectStore('income_category', {
          keyPath: 'id',
          autoIncrement: true
        });
      }
    };
  });
}

