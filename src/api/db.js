const dbName = 'budget-calculator';

const DBRequest = indexedDB.open(dbName, 1);

/**
 * @return {Promise.<IDBDatabase>}
 */
export function openDB () {
  return new Promise(resolve => {
    if (DBRequest.readyState === 'pending') {
      DBRequest.onsuccess = function () {
        resolve(DBRequest.result);
      };
    } else {
      resolve(DBRequest.result);
    }
  });
}

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
};

