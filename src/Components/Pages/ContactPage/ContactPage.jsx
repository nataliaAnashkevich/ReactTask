import { useCallback, useState } from 'react';
import RadioButtonQuestion from '../../RadioButtonQuestion/RadioButtonQuestion';
import DropDownQuestion from '../../DropDownQuestion/DropDownQuestion';

function ContactPage() {
  const [frequencyAnswer, setFrequencyAnswer] = useState();
  const [textareaValue, setTextareaValue] = useState();
  const [regionValue, setRegionValue] = useState('Not selected');
  const [isError, setIsError] = useState(false);

  const handleOptionChange = useCallback(option => {
    setFrequencyAnswer(option);
  }, []);

  const handleTextareaChange = useCallback(e => {
    setTextareaValue(e.target.value);
  }, []);

  const handleLocationChange = useCallback(option => {
    setRegionValue(option);
  }, []);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!frequencyAnswer || !textareaValue) {
      setIsError(true);
    } else {
      setIsError(false);
      localStorage.setItem('SurveyResult', `${frequencyAnswer}, ${textareaValue}, ${regionValue}`);
      setTextareaValue('');
      setFrequencyAnswer(null);
      setRegionValue('Not selected');
    }
  };

  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={handleFormSubmit}>
        <p>How often do you check weather forecast?*</p>
        <RadioButtonQuestion onChange={handleOptionChange} value={frequencyAnswer} />

        <p>What can we improve?*</p>
        <textarea value={textareaValue} onChange={handleTextareaChange} />

        <p>What is your region?:</p>
        <DropDownQuestion onChange={handleLocationChange} value={regionValue} />

        {isError && <p style={{ color: 'red' }}>Fill all required fields!</p>}
        <br />
        <div>
          <button type="submit">Send feedback</button>
        </div>
      </form>
    </>
  );
}

export default ContactPage;
