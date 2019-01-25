/**
 * Created by ananda on 1/25/19.
 */

export const selectLibrary = (libraryId) => {
  return {
    type : 'select_library',
    payload : libraryId
  }
};