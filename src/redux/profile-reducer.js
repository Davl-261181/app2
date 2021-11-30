import { userAPI } from "../api/api";
import { profileAPI } from "../api/api";


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
            
    posts: [
        {id: 1, message:'Privet Davl', likesCount:12},
        {id: 2, message:'salut eto Gulya', likesCount:10} 
    ],

    newPostText: 'guliko.com',
    profile: null,
    status: "", 

};        
    

export const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: {
        let newPost = { 
            id: 2,
            message: state.newPostText,
            likesCount: 10,
        };

         return {
              ...state,
              posts:[...state.posts, newPost],
              newPostText: ''
            };  
    }
        case  UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case  SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case  SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        default:{
         return state;
        }
    }
}

export const addPostActionCreator = () => ({type:'ADD_POST'}); 
export const setUserProfile = (profile) => ({ type:'SET_USER_PROFILE', profile});
export const setStatus = (status) => ({ type:'SET_STATUS', status});
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId)

       
    .then(response => {
      dispatch(setUserProfile(response.data));

  });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)

       
    .then(response => {
      dispatch(setStatus(response.data));

  });
} 

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)

       
    .then(response => {
        if(response.data.resultCode === 0){
      dispatch(setStatus(status));
        }
  });
} 

export const updateNewPostTextActionCreator = (text) => ({ type:'UPDATE_NEW_POST_TEXT', newText: text });

export default  profileReducer;