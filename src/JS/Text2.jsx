import React from 'react'

const Text2=()=>{
return(
    <>
    <h1>Difference between callback and useCallback Hook ?</h1>
    Ans-
<p>Ans-
The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action. Note: It is recommended to use lifecycle method rather than this callback function.

</p>
    </>
)
} 
export default Text2;