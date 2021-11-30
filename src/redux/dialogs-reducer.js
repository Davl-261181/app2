const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
         return {
                ...state,
                newMessageBody: action.body
            }; 
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
                
            };
        default:
         return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type:'SEND_MESSAGE', newMessageBody}); 
export const updateNewMessageBodyCreator = (body) => ({ type:'UPDATE_NEW_MESSAGE_BODY', body: body });

export default dialogsReducer;