import React from 'react'

const Text5 = () => {
    return (
        <>
            <h1>What are React Life cycles Explain each one with Example</h1>
            <h2>Ther are four Phase in React Lifecycles-
                1- Initialization
                2- Mounting
                3- Updating
                4- Unmounting
                </h2>
                <p>
                Initialization: 
                This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.

                Mounting: 
                Mounting is the phase of the component lifecycle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time on the webpage. Now React follows a default procedure in the Naming Conventions of these predefined functions where the functions containing “Will” represents before some specific phase and “Did” represents after the completion of that phase.

                componentWillMount() Function:
                 As the name clearly suggests, this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time.
                componentDidMount() Function: 
                Similarly as the previous one this function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time

                Updating:
                Updation is the phase where the states and props of a component are updated followed by some user events such as clicking, pressing a key on the keyboard, etc.

                Unmounting:
                 As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.</p>
             <h3>
                constructor
                static getDerivedStateFromProps
                render

                componentDidMount Updating :
                static getDerivedStateFromProps
                shouldComponentUpdate
                render
                getSnapshotBeforeUpdate

                componentDidUpdate Unmounting :
                componentWillUnmount</h3>
        </>
    )
}
export default Text5;