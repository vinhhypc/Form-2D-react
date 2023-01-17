import { useState } from "react";
import "./styles.css";

export default function App() {
  const [person, setPerson] = useState({
    name: "Nam",
    info: {
      address: "Ha Noi",
      age: 23,
      job: "student"
    }
  });
  function handleChangeName(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }
  function handleChangeAddress(e) {
    setPerson({
      ...person,
      info: {
        ...person.info,
        address: e.target.value
      }
    });
  }
  function handleChangeAge(e) {
    setPerson({
      ...person,
      info: {
        ...person.info,
        age: e.target.value
      }
    });
  }
  function handleChangeJob(e) {
    setPerson({
      ...person,
      info: {
        ...person.info,
        job: e.target.value
      }
    });
  }
  return (
    <div>
      <label>
        Name :
        <input
          name="name"
          value={person.name}
          onChange={handleChangeName}
        ></input>
      </label>
      <br />
      <label>
        Address :
        <input
          name="address"
          value={person.info.address}
          onChange={handleChangeAddress}
        ></input>
      </label>
      <br />
      <label>
        Age :
        <input
          name="age"
          value={person.info.age}
          onChange={handleChangeAge}
        ></input>
      </label>
      <br />
      <label>
        Job :
        <input
          name="student"
          value={person.info.job}
          onChange={handleChangeJob}
        ></input>
      </label>
      <p>
        {person.name} is {person.info.age}. He lives in {person.info.address}.
        He is a {person.info.job}
      </p>
    </div>
  );
}
