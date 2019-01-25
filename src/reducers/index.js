import { combineReducers } from 'redux';
import libraryReducer from './LibraryReducer';
import selectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: libraryReducer,
  selectedLibraryId: selectionReducer,
});