const { EventReducer, dataStore } = require('./store');

let stateHistory = [];         // Array to maintain the history of state changes
let currentStateIndex = -1;    // Index to track the current state in history
let currentDataStore = { ...dataStore }; // Current state of the dataStore

// Function to dispatch an event and update the state
const dispatchEvent = (event) => {
  stateHistory = stateHistory.slice(0, currentStateIndex + 1);
  
  stateHistory.push(currentDataStore);
  currentStateIndex++;
  
  currentDataStore = EventReducer(currentDataStore, event);
  console.log('Event dispatched:', event);
};

// Function to log an event before dispatching it
const logActions = (dispatch) => (event) => {
  if (event !== undefined) {
    console.log('Logging event:', event);
    return dispatch(event);
  }
};

// Function to undo the last state change
const undoAction = (dispatch) => () => {
  if (currentStateIndex > 0) {
    currentStateIndex--;
    currentDataStore = stateHistory[currentStateIndex];
    console.log('Undo last action');
  }
};

// Function to redo the last undone state change
const redoAction = (dispatch) => () => {
  if (currentStateIndex < stateHistory.length - 1) {
    currentStateIndex++;
    currentDataStore = stateHistory[currentStateIndex];
    console.log('Redo last action');
  }
};

module.exports = {
  dispatchEvent,
  logActions,
  undoAction,
  redoAction
};
