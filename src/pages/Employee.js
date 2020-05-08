import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Table from "../components/Table/Table.js"
import { Col, Row, Container } from "../components/Grid/Grid.js";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";

export default function Employee() {

    const [employeeState, setEmployeeState] = useState([]);
    const [filteredEmployeeState, setFilteredEmployeeState] = useState([]);
    const [sortedBy, setSortedBy] = useState();
    const [employeeSearch, setEmployeeSearch] = useState("");
    const [firstNameSort, setFirstNameSort] = useState(1);
    const [lastNameSort, setLastNameSort] = useState(1);
    const [ageSort, setAgeSort] = useState(1);

    const [sortCount, setSortCount] = useState({ count: 0 })

    useEffect(() => {
        API.getEmployeeList()
            .then(res => {
                // console.log(res.data.results);
                setEmployeeState(res.data.results)
                setFilteredEmployeeState(res.data.results)
                setFirstNameSort(1);
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const sortedEmployees = [...filteredEmployeeState];
        switch (sortedBy) {
            case "First_Name":

                if (firstNameSort === 1) {
                    sortedEmployees.sort(function (a, b) {
                        if (a.name.first < b.name.first) {
                            return -1
                        } else {
                            return 1
                        }
                    })
                    setFirstNameSort(-1)

                } else if (firstNameSort === -1) {
                    sortedEmployees.sort(function (a, b) {
                        if (a.name.first < b.name.first) {
                            return 1
                        } else {
                            return -1
                        }
                    })
                    setFirstNameSort(1)
                };
                break;
            case "Last_Name":
                if (lastNameSort === 1) {
                    sortedEmployees.sort(function (a, b) {
                        if (a.name.last < b.name.last) {
                            return -1
                        } else {
                            return 1
                        }
                    })
                    setLastNameSort(-1)

                } else if (lastNameSort === -1) {
                    sortedEmployees.sort(function (a, b) {
                        if (a.name.last < b.name.last) {
                            return 1
                        } else {
                            return -1
                        }
                    })
                    setLastNameSort(1)
                };
                break;
            case "Age":
                if (ageSort === 1) {
                    sortedEmployees.sort(function (a, b) {
                        if (a.dob.age < b.dob.age) {
                            return -1
                        } else {
                            return 1
                        }
                    })
                    setAgeSort(-1)

                } else if (ageSort === -1) {
                    sortedEmployees.sort(function (a, b) {
                        if (a.dob.age < b.dob.age) {
                            return 1
                        } else {
                            return -1
                        }
                    })
                    setAgeSort(1)
                };
                break;
            default:
                break;
        }
        setFilteredEmployeeState(sortedEmployees)
    }, [sortCount])

    useEffect(() => {

        const copyEmployees = [...employeeState];

        const filteredEmployees = copyEmployees.filter(emp => {

            const fullName = emp.name.first.toLowerCase() + emp.name.last.toLowerCase();

            if (fullName.includes(employeeSearch)) {
                return true
            } else {
                return false
            }
        })
        setFilteredEmployeeState(filteredEmployees);
    }, [employeeSearch, employeeState])

    const sortingClickHandler = (colName) => {
        setSortedBy(colName);
        setSortCount({ count: sortCount + 1 })
    }

    const handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "employeeSearch") {
            setEmployeeSearch(value);
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Employee Directory</h1>
                    </Jumbotron>
                    <input
                        value={employeeSearch}
                        name="employeeSearch"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Search"
                    />
                    <Table sorting={sortingClickHandler} results={filteredEmployeeState} />

                </Col>
            </Row>
        </Container>
    );

}