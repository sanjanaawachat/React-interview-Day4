import React from 'react'

const Text4 = () => {
    return (
        <>
            <h1> Difference between useEffect and useContext ?</h1>
            <p>useEffect-
                It allows us to implement all of the lifecycle hooks from within a single function API.The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.

                useContext-
                This hook allows us to work with React's Context API, which itself a mechanism to allow us to share data within it's component tree without passing through props.</p>
        </>
    )
}
export default Text4;
