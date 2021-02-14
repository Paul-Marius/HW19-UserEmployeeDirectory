import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search: </label>
                <input
                    className="form-control"
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    placeholder="Search for an Enployee"
                    id="search"
                />
                <button onClick={props.handleFormSubmit}
                    className="btn btn-primary mt-3">
                    Search
                </button>

            </div>
        </form>
    );
}

export default SearchForm;