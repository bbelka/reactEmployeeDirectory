import React from "react";
import Thead from "../Thead/Thead";
import Tbody from "../Tbody/Tbody";
import Tfoot from "../Tfoot/Tfoot.js";
// import "./Table.css";

function Table(props) {
    console.log("Table props", props);

    return (
        <table id="dtBasicExample" className="table table-striped table-bordered table-sm" width="100%">
            <Thead />
            <Tbody {...props} />
            <Tfoot />
        </table>
    )
}

export default Table;