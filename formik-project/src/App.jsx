import { Formik, Form, Field,FieldArray } from 'formik';

import './App.css'

function App() {
 

  return (
    <>
    <Formik initialValues={{name:"maryam", phone:"", password:"", Gender:"", date:"",income:"",about:"",social:{facebook:"",twitter:"", },hobbies:[] }} onSubmit={(values=>{
      console.log(values)
    })}>
      {({ values})=>(
        <Form>
        <label>Name:</label>
        <Field name="name"></Field>
        <br/> <br/>
        <label>Phone:</label>
        <Field name="phone" type="number"></Field>
        <br/> <br/>
        <label>Password:</label>
        <Field name="password" type="password"></Field>
        <br/> <br/>
        <label>Gender:</label>
        <br/> <br/>
        <label>Female</label>
        <Field name="Gender" value="Female" type="radio"></Field>
        <label>Male</label>
        <Field name="Gender" value="Male"type="radio"></Field>
        <br/> <br/>

        <label>Date:</label>
        <Field name="date" type="date"></Field>
        <br/> <br/>

        <label>Income:</label>
        <Field name="income" as="select">
        <option value="0"> Rs: 0</option>
        <option value="100"> Rs: 100</option>
        <option value="1000"> Rs: 1000</option>
        <option value="10000"> Rs: 10000</option></Field>
        <br/> <br/>

        <label>About:</label>
        <Field name="about" as="textarea"></Field>
        <br/> <br/>

        <label>Social:</label>
        <br/> <br/>
        <label>Facebook</label>
        <Field name="social.facebook"></Field>
        <br/> <br/>
        <label>Twitter</label>
        <Field name="social.twitter"></Field>
        <br/> <br/>


       

        <FieldArray
             name="hobbies"
             render={arrayHelpers => (
               <div>
                 {values.hobbies && values.hobbies.length > 0 ? (
                   values.hobbies.map((hobbies, index) => (
                     <div key={index}>
                       <Field name={`hobbies.${index}`} />
                       <button
                         type="button"
                         onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                       >
                         -
                       </button>
                       <button
                         type="button"
                         onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                       >
                         +
                       </button>
                     </div>
                   ))
                 ) : (
                   <button type="button" onClick={() => arrayHelpers.push('')}>
                     {/* show this when user has removed all friends from the list */}
                     Add Hobbies
                   </button>
                 )}
          <br/>       
        
                 
               </div>
               
             )}
           />
           <button type="submit">Submit</button>
           <br/> <br/>

      </Form>

      )}
      




    </Formik>
     </>
       
  )
}

export default App
