//import {Promise} from 'core-js';

export interface CancelablePromise<T> {
  promise: Promise<T>;
  cancel(): any;
}

declare global {
  interface Promise<T> {
    finally<TResult>(callback: () => void): Promise<TResult>;
  }
}

Promise.prototype.finally = function (callback: () => void) {
  let p: PromiseConstructor = this.constructor;
  // We don’t invoke the callback in here,
  // because we want then() to handle its exceptions
  return this.then(
    // Callback fulfills: pass on predecessor settlement
    // Callback rejects: pass on rejection (=omit 2nd arg.)
    (value: any) => p.resolve(callback()).then(() => value),
    (reason: any) => p.resolve(callback()).then(() => {
      throw reason
    })
  );
};

export function erroneousPromise(error: Error) {
  return new Promise((resolve, reject) => {
    reject(error);
  });
}


export function makeCancelable<T>(promise: Promise<T>): CancelablePromise<T> {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then((val) => {
      hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
    });
    promise.catch((error) => {
      hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    });
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
}
