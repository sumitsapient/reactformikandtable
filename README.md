-----------------------USE FORMIK HOOK(OldYoutubeForm.jsx)-------------------------------
1. Create a component and useFormik Hook.
     const formik = useFormik();
2. Pass the attribute for handling initialValues,validationSchema onSubmit.
     const formik = useFormik({initialValues,OnSubmit,validationSchema}) 
3. Define all three object keys.
     const initialValues = {name:"",email:""}
     const onSubmit=(values)=>{
       console.log(values);
       }    
      const validationSchema = Yup.object({
       name:Yup.string().required("Required !"),
       email:Yup.string().required("Required!")
      })
4. Create your form and use the formik constant to handle different form events.
    eg: <form onSubmit={formik.handleSubmit}></form>
    eg; <input type="text" onChange={formik.handleChange}> 

 ---------------------------USING FORMIK COMPONENT(YouTubForm.jsx)------------------------
 1.  Create a component and return <Formik> component .
     export const MyComp=()=>{
          return(<Formik>
          ....codegoeshere...
          </Formik>)
     }
 2.  Pass the same attribute that we passed in useFormik hook.
      export const MyComp=()=>{
          return(<Formik initialValues , onSubmit , validationSchema>
          ....codegoeshere...
          </Formik>)
     }  
3.    Inside <Formik> tag create arrow function with arguement as formik, and the return the formik  <Form> component.
         
     export const MyComp=()=>{
          return(<Formik initialValues , onSubmit , validationSchema>
          {(formik)=>{
               return (<Form>...codegoeshere...</Form>)
          }}
          </Formik>)
     }
4.   Inside we use formik <Field> and <Errormessage> component to display our form.
     export const MyComp=()=>{
          return(<Formik initialValues , onSubmit , validationSchema>
          {(formik)=>{
               return (<Form>
               <div className="form-group">
                <label htmlFor="name">Name </label>
                 <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
                <ErrorMessage name="name" component={ErrorText} /> //here ErrorText is custom component that displays error message.
              </div>.....and so on with rest of the  <Field>
               </Form>)
          }}
          </Formik>)
     }   

 -----------------------------------PRACTICAL FORMIK(LoginForm.jsx etc)-------------------
 1.Create a component and return <Formik> component  along with all required attributes as above.
   This time instead of returning formik <Field> inside arrow function we return custon <FormikControl ...fewprops>
         export const Login=()=>{
          return (<Formik initialValues , onSubmit , validationSchema>
              {(formik)=>{
                   return ({
                        <FormikControl
                          control="input"
                          type="email"
                          name="email"
                          label="Enter e-mail"
                         />.....and so on with rest of the <FormikControl>
                   })
              }}
                   
            </Formik>)

     }  
2. The most imp prop is control. This decides the type of form field we want to display
   Refer <FormikControl> component for other details.     