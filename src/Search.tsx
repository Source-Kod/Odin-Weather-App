function SearchBar() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const locationInput = form.elements.namedItem(
      "location",
    ) as HTMLInputElement;
    const location = locationInput.value;

    // Store the location in sessionStorage
    sessionStorage.setItem("location", location);

    console.log("Location:", location);
    // Add your additional logic here if needed
  };

  return (
    <div>
      <form className="flex gap-3" id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Enter a location"
          id="search-text"
          required
          aria-label="Location"
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
