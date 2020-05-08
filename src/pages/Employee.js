import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table/Table.js"
import { Col, Row, Container } from "../components/Grid/Grid.js";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";



class Employee extends Component {
    state = {
        results: []
        , search: ""
    };

    componentDidMount() {
        API.getEmployeeList()
            .then(res => this.setState({ results: res }))
            .catch(err => console.log(err))
    }

    // handleInputChange = event => {
    //     // Getting the value and name of the input which triggered the change
    //     const { name, value } = event.target;

    //     // Updating the input's state
    //     this.setState({
    //         [name]: value
    //     });
    //     const results = this.state.results.data.results
    //     if(results.each(result =>  result.name.last.split().filter(this.state.search)))

    //     console.log();

    // };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Employee Directory</h1>
                        </Jumbotron>
                        <input
                            value={this.state.search}
                            name="search"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Search"
                        />
                        <Table results={this.state.results} />

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Employee;