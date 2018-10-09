import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';
let _contacts = [];
function setContacts(contacts){
    _contacts = contacts;
}

class AppStoreClass extends EventEmitter{
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    addChangeListener(cb){
        this.on(CHANGE_EVENT, cb);
    }
    removeChangeListener(cb){
        this.removeListener(CHANGE_EVENT, cb);
    }
    getContacts(){
        return _contacts;
    }
}

const AppStore = new AppStoreClass();
AppStore.dispatchToken = AppDispatcher.register(action =>{
    switch(action.actionType){
        case AppConstants.RECIEVE_CONTACTS:
            setContacts(action.contacts);
            AppStore.emitChange();
        break
        default:
    }
})

export default AppStore;