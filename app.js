const { dispatchEvent, logActions, undoAction, redoAction } = require('./src/eventHandler');

//  Dispatching events to add concerts and bazaars
dispatchEvent({ type: 'CONCERT_ADDED', payload: { name: 'Rock Fest', date: '2024-08-15', location: 'City Park' } });
dispatchEvent({ type: 'BAZAAR_ADDED', payload: { name: 'Summer Bazaar', date: '2024-07-20', location: 'Downtown Plaza' } });

const dispatchLogged = logActions(dispatchEvent);

dispatchLogged({ type: 'CONCERT_ADDED', payload: { name: 'Jazz Night', date: '2024-09-10', location: 'Jazz Club' } });

const undoLogged = logActions(undoAction(dispatchLogged));
undoLogged(); 

const redoLogged = logActions(redoAction(dispatchLogged));
redoLogged(); 