import React, {useEffect, useState} from 'react';
import SearchFields from './SearchFields';
import $ from 'jquery';

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
    $("p").remove();
  }

    return (
      <SearchFields
        restart={restart}
        removeItem={removeField}
        addItem={addField}
        field={field}
      />
    )
}

export default App;
