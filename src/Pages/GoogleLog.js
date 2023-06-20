import React from 'react'

function GoogleLog(){
const handlecall=()=>{
window.open('https://prod.swiftbel.com/user/google/login')
}
return(
<>
<button onClick={()=>handlecall()}>login</button>
</>
)
}

export default GoogleLog