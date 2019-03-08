/**
 * Created by ananda on 1/22/19.
 */

export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
}
