// BEGIN
export default (data) => data
    .map(({ name, country }) => ({ city: name.toLowerCase(), country: country.toLowerCase() }))
    .map(({ city, country }) => ({ city: city.trim(), country: country.trim() }))
    .map(({ city, country}) => [country, city])
    .sort()
    .reduce((acc, [country, city]) => {
        const citiasAcc = acc[country] ?? [];
        const cities = citiasAcc.concat(city);
        const uniqueCities = new Set(cities);
        return { ...acc, [country]: [...uniqueCities] };
    }, {});
// END