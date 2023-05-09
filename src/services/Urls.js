
export const LOCAL_HOST="https://prod.swiftbel.com";

export const ServiceEnum={
    register:"user/notify/signup",
    loginUser:'user/notify/login',
    displayNumber:'user/displayNumber',
    buyNumber:'user/buyNumber',
    paymentLink:'user/notify/subscription',
    locationDetails:'user/notify/getLocation'
}

export const urlFor =(services)=>{
        return `${LOCAL_HOST}/${services}`
}