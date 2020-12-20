import React, {useEffect, useState} from 'react';
import SearchFields from './SearchFields';

function App() {
  const [field, setField] = useState([0]);
  let fieldId = 0;
  useEffect(() => {});

  const addField = (e) => {
    fieldId++
    setField([...field, field.length]);
  }

  const removeField = (index) => {
    let copy = [...field]
    if (field.length > 1) {
      copy.splice(index, 1);
      setField(copy);
    }
  }

  const restart = (e) => {
    setField([0])
  }

  // const querySearch = (param) => {
  //   console.log(param)
  //   alert(querySwitch(param));
  // }
  // console.log('state', props)

    return (
      <SearchFields restart={restart} removeItem={removeField} addItem={addField} field={field} />
    )
}

export default App;