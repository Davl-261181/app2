import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profilePage: {
            
            posts: [
                {id: 1, message:'Privet Davl', likesCount:12},
                {id: 2, message:'salut eto Gulya', likesCount:10} 
            ],
    
            newPostText: 'guliko.com'
    
        },
        
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Guliko' },
                { id: 2, name: 'Hodj' },
                { id: 3, name: 'Redman' },
                { id: 4, name: 'Islam' }
            ],
            messages: [
                { id: 1, message: 'Salut' },
                { id: 2, message: 'Zdorov' },
                { id: 3, message: 'Yo' },
                { id: 4, message: '' }
            ],
            newMessageBody: ""
        },
    },

    _callSubscriber()  {
        console.log ('guliko');
    },

    getState() {
        return this._state;
    },
    
    subscribe(observer)  { 
        this._callSubscriber = observer;  //наблюдатель-observer(patron)
    },

    dispatch(action) {                                               //{type:"ADD-POST"}-действие 

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }

}


export default store; 
window.store = store;