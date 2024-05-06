import { useState } from 'react'
// import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import './App.css'
import Form from './components/Form/Form'
// import RadioButton from './components/RadioButton/RadioButton';
import CheckBox from './components/CheckBox/CheckBox';
function App() {
  // const [lang, setLang] = useState("uk");
  const [hasAccepted, setHasAccepted] = useState(false);
  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked)
    // console.log(evt.target.checked)
  }
  return (
    <>
      <Form />
      <div>
        {/* <p>Selected language: {lang}</p>
        <LangSwitcher value={lang} onSelect={setLang} />
        <RadioButton /> */}
        <CheckBox hasAccepted={hasAccepted} onChange={handleChange} />
      </div>
    </>
  )
}

export default App
