import { useState } from 'react'
import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import './App.css'
import Form from './components/Form/Form'
import RadioButton from './components/RadioButton/RadioButton';
import CheckBox from './components/CheckBox/CheckBox';
function App() {
  const [lang, setLang] = useState("uk");
  const [hasAccepted, setHasAccepted] = useState(true);
  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked)
  }
  return (
    <>
      <Form />
      <div>
        <p>Selected language: {lang}</p>
        <LangSwitcher value={lang} onSelect={setLang} />
        <RadioButton />
        <CheckBox hasAccepted={hasAccepted} onCheck={handleChange} />
      </div>
    </>
  )
}

export default App
