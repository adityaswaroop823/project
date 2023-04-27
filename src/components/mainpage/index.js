import "./styles.css";
import { data } from "../../data/data.js";
import { useEffect, useState } from "react";
export default function App() {
  const [searchText, setSearchText] = useState("");
  const [dummyData, setDummyData] = useState(data);
  const [gender, setGender] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value.toLowerCase());
    setSearchText(e.target.value.toLowerCase());
  };
  const search = () => {
    var filtered = data.filter((data) =>
      String(data.first_name.toLowerCase()).startsWith(searchText)
    );
    console.log(filtered);
    setDummyData(filtered);
  };
  const handleFilter = (e, type) => {
    console.log(e.target.value);
    // if(type==="gender"){

    // }
    // else if(type==="available"){

    // }
    // else if(type==="domain"){

    // }
    // setGender(e.target.value);
    // var filtered = dummyData.filter((data) => data[type] === e.target.value);
    // console.log(filtered);
    // setDummyData(filtered);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <select onChange={(e) => handleFilter(e, "gender")}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select onChange={(e) => handleFilter(e, "available")}>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <select onChange={(e) => handleFilter(e, "domain")}>
        <option value="Business Development">Business Development</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
        <option value="Finance">Finance</option>
        <option value="IT">IT</option>
        <option value="Management">Management</option>
        <option value="UI Designing">UI Designing</option>
      </select>

      <input onChange={(e) => handleSearch(e)}></input>
      <button onClick={search} style={{ height: "20px", width: "50px" }}>
        submit
      </button>

      <div style={{ background: "red", height: "100px" }}>
        <p>search result</p>
        {dummyData &&
          dummyData.map((item, index) => {
            return <p key={index}>{item.first_name}</p>;
          })}
      </div>
    </div>
  );
}
