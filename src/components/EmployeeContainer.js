import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Employee from "../components/Employee";
import TableList from "../components/TableList";


class EmployeeContainer extends Component {
    state = {
        result: [],
        filter: "",
        filterBy: "lastName",
        currentSort: "default",
        sortField: ""
    };

    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
        API.search()
            .then(res => {
                console.log(res)
                this.setState({
                    result: res.data.results
                })
            })
            .catch(err => console.log(err));
    }

    filterEmployees = (searchkey) => {
        console.log(searchkey);
        console.log(this.state.result);
        var filterResult = this.state.result.filter(person => person.firstName === searchkey)

        this.setState({
            result: filterResult

        });

    }

    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event);

        const value = event.target.value;
        const name = event.target.name;
        console.log(value);
        console.log(name);

        //filter function here
        this.filterEmployees(value);
        this.setState({

            [name]: value

        });
        this.filterEmployees(value);
        this.filterEmployees(this.state.search);
    };

    handleInputChange = event => {
        event.preventDefault();
        console.log(event);

        const value = event.target.value;
        const name = event.target.name;
        console.log(value);
        console.log(name);

        this.setState({
            [name]: value
        });
    }

    render() {
        console.log(this.state.result.name);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Employee Directory</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <SearchForm
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            // handleFormSubmit={this.handleFormSubmit}
                        />
                    </div>
                </div>

                <div className="row">
                    <TableList
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />

                    {[...this.state.result].map((item) =>

                        <Employee
                            picture={item.picture}
                            firstName={item.name.first}
                            lastName={item.name.last}
                            email={item.email}
                        />
                    )}
                </div>
            </div >
        );
    }
}

export default EmployeeContainer;