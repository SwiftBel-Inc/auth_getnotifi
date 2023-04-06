const initialState = {
    loginToken: '',
    userId:'',
    dispnum:'',
    buynum:'',
    payment:''
}

const authReducers = (state = initialState, action) => {
   switch (action.type) {
       case 'LOGIN_TOKEN':
            return ({ ...state, loginToken: action.payload })
       case 'USERID' :
             return ({...state, userId: action.payload})
       case 'DISPNUMBER' :
             return ({...state, dispnum: action.payload})
       case 'BUYNUMBER' :
             return ({...state, buynum: action.payload})
       case 'PAYMENT' :
             return ({...state, payment: action.payload})
        default:
            return state;
    }

}

export default authReducers;

