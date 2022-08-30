function RadioButtonQuestion({ onChange, value }) {
  const handleOptionChange = e => {
    onChange(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="visitFrequency"
            value="option1"
            checked={value === 'option1'}
            onChange={handleOptionChange}
          />
          Several times a day
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="visitFrequency"
            value="option2"
            checked={value === 'option2'}
            onChange={handleOptionChange}
          />
          Few times a week
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="visitFrequency"
            value="option3"
            checked={value === 'option3'}
            onChange={handleOptionChange}
          />
          Less than once a week
        </label>
      </div>
    </div>
  );
}

export default RadioButtonQuestion;
