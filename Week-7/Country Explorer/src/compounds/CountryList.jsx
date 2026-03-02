import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  if (countries.length === 0) {
    return (
      <p className="text-center mt-6 text-gray-500">
        No countries found.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default CountryList;