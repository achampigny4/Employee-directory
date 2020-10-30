//Search component
import React from 'react';

function Search () {
    return (
        <div>
            <form className="search-form">
                <input className="search-bar" type="text"/>
                <button className="search-button" type="submit">Search</button>
            </form>
            <br />
        </div>
    );
}
export default Search;