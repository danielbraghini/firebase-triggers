import { getClassMethod, getClassName, addFirebaseFunction } from '../internal-methods';
import { FirebaseFunction, FirebaseTriggerType } from '../types';

/**
 * Decorator that adds the method to the list of Cloud Functions triggered when a publication is made via PubSub on the specified topic
 * @param topic PubSub topic to subscribe
 */
export function onPubSubPublish(topic: string) {
  return (target: any, key: string) => {
    const firebaseFunction: FirebaseFunction = {
      className: getClassName(target),
      methodName: key,
      method: getClassMethod(target, key),
      trigger: FirebaseTriggerType.PUBSUB_PUBLISH,
      key: topic
    };
    addFirebaseFunction(firebaseFunction);
  }
}
