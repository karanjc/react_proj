import React, { Component } from 'react'; class ErrorBoundary extends Component { constructor(props) { super(props);
    this.state = { hasError: false };
    }
    static getDerivedStateFromError(error)
    {
    return { hasError: true };
    }
    render()
    {
    if (this.state.hasError) { return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
    }
    }
    class MyComponent extends Component
    {
    render()
    {
    if (this.props.data === 'error') {
    throw new Error('Data is invalid');
    }
    return
    <div>
    {
    this.props.data}
    </div>;
    }
    }
    function App()
    {
    return
    ( <ErrorBoundary> <MyComponent data="Hello, World!" />
    <MyComponent data="error" />
    </ErrorBoundary> );
    }
    
    export default App;