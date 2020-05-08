import React from "react";
import { v4 as uuidv4 } from 'uuid';



function Tbody(props) {

  if (props.results.data) {
    console.log("Tbody props", props);
    const results = props.results.data.results
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
      ""

      {/* <tr key={uuidv4()}>
        <td><img src="" alt="placeholder" /></td>
        <td key={uuidv4()}>Doe</td>
        <td key={uuidv4()}>John</td>
        <td key={uuidv4()}>john.doe@example.com</td>
        <td key={uuidv4()}>1(234)567-9876</td>
        <td key={uuidv4()}>1(987)654-3210</td>
      </tr> */}

    </tbody>
  )
};

export default Tbody;