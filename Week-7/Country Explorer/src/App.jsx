import { useEffect, useState } from "react";
import SearchBar from "./compounds/SearchBar";
import CountryList from ".//compounds/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
      );

      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();

      setCountries(data);
      setFilteredCountries(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleSearch = (query) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🌍 Country Explorer
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p className="text-center text-lg mt-6">Loading countries...</p>
      )}

      {error && (
        <p className="text-center text-red-500 mt-6">{error}</p>
      )}

      {!loading && !error && (
        <CountryList countries={filteredCountries} />
      )}
    </div>
  );
}

export default App;