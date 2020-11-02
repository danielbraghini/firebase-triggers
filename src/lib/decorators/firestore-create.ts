import { getClassMethod, getClassName, addFirebaseFunction } from '../internal-methods';
import { FirebaseFunction, FirebaseTriggerType } from '../types';

/**
 * Decorator that adds the method to the list of Cloud Functions triggeredwhen creating new document in Firestore
 * @param documentOrCollection Firestore document or collection path
 * To use wildcard keys, enter the parameters between keys. e.g. 'user/{uid}/account/{accountId}'
 */
export function onFirestoreCreate(documentOrCollection: string) {
  return (target: any, key: string) => {
    const firebaseFunction: FirebaseFunction = {
      className: getClassName(target),
      methodName: key,
      method: getClassMethod(target, key),
      trigger: FirebaseTriggerType.FIRESTORE_CREATE,
      key: documentOrCollection
    };
    addFirebaseFunction(firebaseFunction);
  }
}
