export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const isCompleteDataType = (obj: any) => (
  (typeof obj === 'object') && obj !== null
)

export const deepClone = (target, hash = new WeakMap()) => {
  if (target.constructor === Date) {
    return new Date(target);
  }
  if (target.constructor === RegExp) {
    return new RegExp(target);
  }
  if (hash.has(target)) {
    return hash.get(target);
  }
  let allDesc = Object.getOwnPropertyDescriptors(target);
  let cloneTarget = Object.create(Object.getPrototypeOf(target), allDesc);
  hash.set(target, cloneTarget);
  for (const key of Reflect.ownKeys(target)) {
    cloneTarget[key] = isCompleteDataType(target[key]) && typeof target[key] !== 'function'
    ? deepClone(target[key], hash)
    : target[key]
  }
  return cloneTarget;
}