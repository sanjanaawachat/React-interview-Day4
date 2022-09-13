import React from 'react'

const Text3 = () => {
    return (
        <>
            <h1>What is Props Drilling Concept ?What is State Uplifting ?</h1>
            <p>Prop Drilling-
                It is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.

                State Uplifting-
                When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.</p>
        </>
    )
}
export default Text3;