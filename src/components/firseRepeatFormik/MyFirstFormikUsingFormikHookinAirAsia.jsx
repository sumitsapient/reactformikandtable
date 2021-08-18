import { useFormik } from 'formik'
import React from 'react'

export const MyFirstFormikUsingFormikHookinAirAsia = () => {

 const initialValues = {firstname:"",email:""}
 const onSubmit = (values)=>{console.log(values)}   
 const validationSchema = Yup.object({
     name:Yup.string().required("Required!"),
     email:Yup.string().required("Required!")
 })

 const formik = useFormik({
     initialValues,
     onSubmit,
     validationSchema
 })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>First Name</label>
                <input type="text" name="firstname" onChange={formik.onChange}/>
                <label>Email</label>
                <input type="email" name="email" onChange={formik.onChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
