import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './searchMovies';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">React Movie Search</h1>
                <SearchMovies/>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));