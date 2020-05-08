import React from "react";
import { v4 as uuidv4 } from 'uuid';

function Tbody(props) {

  console.log("Tbody props", props);

  if (props.results) {
    console.log("Tbody props", props);
    const results = props.results

    return (
      <tbody>
        {results.map(result => (
          <tr key={uuidv4()}>
            <td><img src={result.picture.thumbnail} alt={result.name.last} /></td>
            <td key={uuidv4()}>{result.name.last}</td>
            <td key={uuidv4()}>{result.name.first}</td>
            <td key={uuidv4()}>{result.email}</td>
            <td key={uuidv4()}>{result.cell}</td>
            <td key={uuidv4()}>{result.dob.age}</td>
          </tr>
        ))}
      </tbody>
    )
  }

  return (
    <tbody>
      <tr></tr>
    </tbody>
  )
};

export default Tbody;