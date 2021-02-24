// Initial State
const initialState = {
    user: {
        name: '',
        profileImg: 'https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg'
    }
}

// variables for action types
const  UPDATE_USER  = "UPDATE_USER"

// action objects have type and payload
export function updateUser(userObject) {
    console.log('userObject', userObject)
    return {
        type: UPDATE_USER,
        payload: userObject
    }
}

// reducer function
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {...state, user: {
                name: action.payload.name,
                profileImg: action.payload.profileImg || state.user.profileImg
            }}
        default:
            return state;
    }
}