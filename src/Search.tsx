//Not happy with this mess. I'll be back.
import { useState, FormEvent } from "react";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //dont know what FormEvent is but needed it for typescript to build cause event was "any"
    event.preventDefault();
    sessionStorage.setItem("location", inputValue);
    window.location.reload(); // Refresh the page because I cant figure out how to just reload the parts I need with new location.
    // This was so much easier in plain JS wtf.
  };

  return (
    <div>
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Enter a location"
          required
          value={inputValue} //I'm not understanding forms in react. Plain javascript made so much more sense.
          onChange={(e) => setInputValue(e.target.value)} //thx AI
        />
        <button
          type="submit"
          className="border-1 rounded-md border border-blue-300 bg-blue-400 p-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export { SearchBar };
