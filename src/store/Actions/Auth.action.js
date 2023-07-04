
import NetworkOps from "../../services/NetworkOps";
import { ServiceEnum } from "../../services/Urls";


export const registerUser=(data)=>async (dispatch)=>{
    const res=await NetworkOps.post(ServiceEnum.register,data)
        if(res.status===true)
        {
        localStorage.setItem('token', res?.token)
        dispatch({
            type: 'USERID',
            payload:res?.data
          })
        }
    return res
}
export const displaynumber=(data)=>async (dispatch)=>{
    const res=await NetworkOps.post(ServiceEnum.displayNumber,data)
    console.log(res,'ress')
        if(res.status===true)
        {
        dispatch({
            type: 'DISPNUMBER',
            payload:res?.data
          })
        }
    return res
}
export const buynumber=(data)=>async (dispatch)=>{
    const res=await NetworkOps.post(ServiceEnum.buyNumber,data)
    console.log(res,'ress')
        if(res.status===true)
        {
        dispatch({
            type: 'BUYNUMBER',
            payload:res?.data
          })
        }
    return res
}

export const loginUsers=(data)=>async (dispatch,getstate)=>{
    const res=await NetworkOps.post(ServiceEnum.loginUser,data)
    if(res.status===true)
        {
          localStorage.setItem('token', res?.token)
            dispatch({
                type: 'LOGIN_TOKEN',
                payload: res?.token
            })
        }
return res
}

export const getpaymentIntent=(value) => async (dispatch) => {
    const res = await NetworkOps.post(`${ServiceEnum.paymentLink}`,value)
    if (res.status === true) {
        dispatch({
            type: 'PAYMENT',
            payload: res?.token
        })
    }
    return res
  }

  export const getLocationDetails = (value) => async (dispatch) => {
    const res = await NetworkOps.get(`${ServiceEnum.locationDetails}?referenceNo=${value}`)
    if (res.status === true) {
      dispatch({
        type: 'LOCATION',
        payload: res.data
      })
    }
    return res;
  }

  export const getTrackingDetails = () => async (dispatch) => {
    const res = await NetworkOps.get(`${ServiceEnum.livetracker}`)
    if (res.status === true) {
      dispatch({
        type: 'TRACKING',
        payload: res.data
      })
    }
    return res;
  }
  export const getQuotedata=(value)=>async (dispatch)=>{
    const res=await NetworkOps.get(`${ServiceEnum.quotedata}?referenceNo=${value}`)
        if(res.status===true){
        dispatch({
            type: 'QUOTE',
            payload: res.data
          })
        }
    return res
}

  export const getAllconversations=(value)=>async (dispatch)=>{
    const res=await NetworkOps.post(`${ServiceEnum.conversations}?from=${value}`)
        if(res.status===true){
        dispatch({
            type: 'CONVO',
            payload: res.data
          })
        }
    return res
}

export const getAlloutchats=(number,value)=>async (dispatch)=>{
    const res=await NetworkOps.post(`${ServiceEnum.chats}?to=${number}&from=${value}`)
        if(res.status===true){
        dispatch({
            type: 'OUTCHATS',
            payload: res.data
          })
        }
    return res
}

export const getAllinchats=(number,value)=>async (dispatch)=>{
    const res=await NetworkOps.post(`${ServiceEnum.chats}?to=${number}&from=${value}`)
        if(res.status===true){
        dispatch({
            type: 'INCHATS',
            payload: res.data
          })
        }
    return res
}

export const getnumber=(number)=>async (dispatch)=>{
        dispatch({
            type: 'GLOBENUM',
            payload: number
          })
    return number
}

export const getcolor=(color)=>async (dispatch)=>{
    dispatch({
        type: 'GLOBECOLOR',
        payload: color
      })
return color
}

export const getname=(name)=>async (dispatch)=>{
    dispatch({
        type: 'GLOBENAME',
        payload: name
      })
return name
}
export const activemenu=(name)=>async (dispatch)=>{
  dispatch({
      type: 'ACTIVEMENU',
      payload: name
    })
return name
}
export const sendMessage=(data)=>async (dispatch)=>{
    const res=await NetworkOps.post(ServiceEnum.sendMessage,data)
        if(res.status===true)
        {
        dispatch({
            type: 'SENDMESSAGE',
            payload:res?.data
          })
        }
    return res
}