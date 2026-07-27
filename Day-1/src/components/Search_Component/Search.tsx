import { useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState("");

  async function ToSearch() {
    const query = encodeURIComponent(searchQuery);
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${query}`;

    const response = await fetch(url);
    const data = await response.json();

    setResult(data.extract);
  }

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button onClick={ToSearch}>
        Search
      </button>

      <p>{result}</p>
    </div>
  );
}

export default Search;