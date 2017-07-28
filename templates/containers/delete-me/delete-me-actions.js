export const DELETED = 'DELETED';
export function deleteNow(payload) {
  return {
    type: DELETED,
      payload
  };
}
