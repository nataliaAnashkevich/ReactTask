const region = [
  'Not selected',
  'Asia',
  'Africa',
  'Europe',
  'North America',
  'South America',
  'Australia/Oceania'
];

function DropDownQuestion({ onChange, value }) {
  const handleLocationChange = e => {
    onChange(e.target.value);
  };

  return (
    <select value={value} onChange={handleLocationChange}>
      {region.map(item => (
        <option key={item}>{item}</option>
      ))}
      ;
    </select>
  );
}

export default DropDownQuestion;
