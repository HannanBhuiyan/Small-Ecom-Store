import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Name field is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
    message: Yup.string()
        .min(5, "To Short")
        .required("Message field is required")
  });



const Contact = () => {

    const navigator = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: FormSchema,
        onSubmit:(values) => {
            if(values) {
                alert("Form submit success")
                navigator('/')
            }
        }
    })

    const { handleChange, values, errors, touched, handleSubmit  } = formik


    return(
        <>
            <div className="contact_section my-[100px] mx-[20px]">
                <div className="container mx-auto">
                    <div className="contact_area">
                        <div className="contct_title text-center text-[35px] font-poppins font-bold my-4 ">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="contact_inner">
                            <div className="w-7/12 mx-auto max-md:w-full ">
                                <form onSubmit={handleSubmit}>
                                    <input type="text"  
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    className="w-full border-2 px-4 py-3 mb-2 rounded-md outline-none focus:border-common-color text-[17px] font-poppins font-medium " placeholder="Enter Your Name" />
                                    {errors.name && touched.name ? <div className="text-red-500 text-[18px] font-poppins">{errors.name}</div> : null}

                                    <input type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    className="w-full border-2 px-4 py-3 mt-4 mb-2 rounded-md outline-none focus:border-common-color text-[17px] font-poppins font-medium " placeholder="Enter Your Email" />
                                    {errors.email && touched.email ? <div className="text-red-500 text-[18px] font-poppins">{errors.email}</div> : null}

                                    <textarea 
                                    value={values.message}
                                    onChange={handleChange}
                                    name="message" className="w-full border-2 mt-4 mb-2 px-4 py-3 rounded-md outline-none focus:border-common-color text-[17px] font-poppins font-medium "  id="" cols="30" rows="7" placeholder="Message"></textarea>
                                    {errors.message && touched.message ? <div className="text-red-500 text-[18px] font-poppins" >{errors.message}</div> : null}

                                    <button type="submit" className="bg-common-color px-12 py-4 mt-3 font-poppins text-white text-[18px] rounded-md outline-none border-none hover:bg-black duration-500 " >SEND</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact