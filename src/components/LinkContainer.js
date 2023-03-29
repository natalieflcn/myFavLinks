import { useState } from 'react'
import Table from './Table';
import Form from './Form';

/*
X Look through the App.js
X Look through all of the files in the components folder for TODOs
X Create a simple HTML table using JSX in the Table.js
X Render your Table component properly in LinkContainer.js
X Review the code in TableHeader and TableBody
X Change your Table component to render the TableHeader and TableBody components
X Pass a prop called linkData to your Table component from the LinkContainer component
X Access and show data passed from LinkContainer in TableBody
X Create a state object in our LinkContainer to hold an array called favLinks
Create a removeLink function in the LinkContainer class that updates the state and removes an item from favLinks
Create a prop called removeLink that passes your removeLink function to your Table component
Create a button in your TableBody with an onClick that calls this.props.removeLink and passes the index of the table row
Create a Form component in your Form.js file with inputs and labels for name and URL
Set the initial state of the Form to be an object with empty properties for a link name and URL
Update the state of the Form every time the name or URL field is changed
Render the Form component below the Table component in your LinkContainer
Create a function called handleSubmit on the LinkContainer to update the state of this.state.favLinks and add new favLink from Form
Add the handleSubmit as a parameter to your Form component
Create a method called submitForm that calls the handleSubmit and passes the Form data and resets the state of the Form values to be empty
Add a submit button to the Form that calls submitForm in its onClick parameter
*/

const LinkContainer = (props) => {

  const [favLinks, setLinks] = useState([])

  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }

  const handleSubmit = (favLink) => {
    const favLinksAndThenSome = [...favLinks, favLink]

    setLinks(favLinksAndThenSome)
  }

  handleSubmit({ name: 'youtube', URL: 'www.youtube.com' })

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      
      <Table props={{ linkData: favLinks, setLinks: setLinks }}/>

      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
    </div>
  )
}

export default LinkContainer
