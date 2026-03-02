function CountryCard({ country }) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-1">
        <h2 className="font-bold text-lg">
          {country.name.common}
        </h2>

        <p className="text-sm">
          <strong>Capital:</strong>{" "}
          {country.capital ? country.capital[0] : "N/A"}
        </p>

        <p className="text-sm">
          <strong>Population:</strong>{" "}
          {country.population.toLocaleString()}
        </p>

        <p className="text-sm">
          <strong>Region:</strong> {country.region}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;