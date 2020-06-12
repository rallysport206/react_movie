import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovie from './searchMovie';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">React Movie Search</h1>
                <SearchMovie/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));