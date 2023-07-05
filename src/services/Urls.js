
export const LOCAL_HOST="https://prod.swiftbel.com";
export const fromnumber='+15878064483'
export const renderTop =()=>{
    window.scroll({
    top:0,
    left:0,
    behavior:'smooth',
    });
    };

export const ServiceEnum={
    register:"user/notify/signup",
    loginUser:'user/notify/login',
    displayNumber:'user/displayNumber',
    buyNumber:'user/buyNumber',
    paymentLink:'user/notify/subscription',
    locationDetails:'user/notify/getLocation',
    livetracker:'tracker',
    conversations:'twilio/fetchAllConversation',
    chats:'twilio/fetchConversation',
    sendMessage:'twilio/createConverstaion',
    quotedata:'booking/notify/getQuote',
    userdata:'user/notify/getUserData'
}

export const urlFor =(services)=>{
        return `${LOCAL_HOST}/${services}`
}