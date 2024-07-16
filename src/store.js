const { produce } = require('immer');

// Initial state of the dataStore
let dataStore = {
  concerts: [], 
  bazaars: []   
};

// EventReducer function to handle state updates immutably
const EventReducer = (state = dataStore, event) => {
  return produce(state, draft => {
    switch (event.type) {
      case 'CONCERT_ADDED':
        draft.concerts.push(event.payload); 
        break;
      case 'BAZAAR_ADDED':
        draft.bazaars.push(event.payload); 
        break;
      default:
        break;
    }
  });
};

module.exports = {
  dataStore,
  EventReducer
};
