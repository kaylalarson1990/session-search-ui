import React, {useEffect, useState} from 'react';
import SearchFields from './SearchFields';

function App() {
  const [field, setField] = useState([0]);
  useEffect(() => {});

  const addField = (e) => {
    setField([...field, field.length]);
  }

  const removeField = (index) => {
    let copy = [...field]
    if (field.length > 1) {
      copy.splice(index, 1);
      setField(copy);
    } else {
      window.location.reload();
    }
  }

  const restart = (e) => {
    window.location.reload();
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
