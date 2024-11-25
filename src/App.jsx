import { useState } from "react";
import "./App.css";

function App() {
  const [placeName, setPlaceName] = useState("");
  const [cityList, setCityList] = useState([]);
  const [error, setError] = useState("");

  const handleAddCity = () => {
    const trimmedPlace = placeName.trim();

    if (trimmedPlace === "") {
      setError("City name cannot be empty or whitespace only.");
      return;
    }

    if (cityList.includes(trimmedPlace.toLowerCase())) {
      setError("City name already exists in the list.");
      return;
    }

    setCityList((prev) => [...prev, trimmedPlace.toLowerCase()]);
    setPlaceName(""); // Clear input field
    setError(""); // Clear previous errors
  };

  return (
    <div className="App">
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter city name"
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
        />
        <button onClick={handleAddCity}>Add City</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {cityList.map((city, index) => (
          <li className="city" key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
