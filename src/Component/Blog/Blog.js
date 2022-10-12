import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <div className='blog'>
                <h3>What is Purpose of React Router?</h3>
                <p>ANS: Router is dynamic standard library for routing in React. It enables the navigation among views
                    of various components in a React Application, allows changing the browser URL, and keeps the UI in sync
                    with the URL. React. React Router allows us to
                    build single page applications with navigation. As the user navigates to different pages , it doesn't
                    require refreshing while react router is used. Using react router provides more seamless user experience by not
                    refreshing pages while naviagting.</p>
            </div>
            <div className='blog'>
                <h3>How Does Context API work?</h3>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed
                    around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                    To use context API , we need React.createContext() which returns a consumer and a provider. Provider is a component
                    that as it's
                    names suggests provides the state to its children. It will hold the "store" and be the parent of all the components
                    that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='blog'>
                <h3>Write about useRef hook.</h3>
                <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not 
                    cause a re-render when updated. It can be used to access a DOM element directly. useRef has many uses like
                    accessing the DOM nodes or React elements, Keeping a mutable variable.
                </p>
            </div>
        </div>
    );
};

export default Blog;