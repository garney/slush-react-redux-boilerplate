export const CHANGED = 'CHANGED';
export function changeName(payload) {
  return {
    type: CHANGED,
    payload
  };
}
