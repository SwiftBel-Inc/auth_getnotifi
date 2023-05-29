const initialState = {
    loginToken: '',
    userId:'',
    dispnum:'',
    buynum:'',
    payment:'',
    locationdetails:'',
    convo:'',
    globenum:'',
    outchats:'',
    inchats:'',
    globecolor:'pink',
    globename:''
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
       case 'LOCATION' :
             return ({...state, locationdetails: action.payload})
       case 'CONVO' :
             return ({...state, convo: action.payload})
       case 'OUTCHATS' :
             return ({...state, outchats: action.payload})
       case 'INCHATS' :
             return ({...state, inchats: action.payload})
       case 'GLOBENUM' :
             return ({...state, globenum: action.payload})
       case 'GLOBECOLOR' :
             return ({...state, globecolor: action.payload})
       case 'GLOBENAME' :
             return ({...state, globename: action.payload})
        default:
            return state;
    }

}

export default authReducers;

