import { useState } from 'react'

// Set the initial state of the Form to be an object with empty properties for a link name and URL

// Update the state of the Form every time the name or URL field is changed
const Form = ({ props }) => {

  const [forms, setForms] = useState({
    name: "",
    URL: ""
  })
  
  const handleChange = (event) => {

  if(event.target.name === 'name'){
    const temp = {
      name: event.target.value,
      URL: forms.URL
    }
    setForms(temp)
  } else if(event.target.name === 'URL'){
    const temp = {
      name: forms.name,
      URL: event.target.value
    }
    setForms(temp)

  }
  
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

     props.handleSubmit(forms)
  }

  return (
    <form>
      

      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        URL:
        <input type="text" name="URL" onChange={handleChange}/>
      </label>

      <input type="submit" value="Submit" onClick={onFormSubmit} />
      
    </form>
  )
}

export default Form
