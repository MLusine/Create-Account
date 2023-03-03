import React from "react";
import { useFormik } from 'formik';
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
    console.log(values)
    console.log(actions)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
};
const SignupForm = () => {
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            team_name: '',
            email: '',
            password: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    return (
        <form onSubmit={handleSubmit} autoComplete="off" className='form_container'>
            <div className="item">
                <div>
                    <label htmlFor="firstName" className="label">First Name</label>
                    <input
                        id="firstName"
                        className={errors.firstName && touched.firstName ? "input-error" : "inp"}
                        placeholder="First Name"
                        type="text"
                        onChange={handleChange}
                        value={values.firstName}
                    />
                    {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div className="last_name">
                    <label htmlFor="lastName" className="label">Last Name</label>
                    <input
                        id="lastName"
                        className={errors.lastName && touched.lastName ? "input-error" : "inp"}
                        placeholder="Last Name"
                        type="text"
                        onChange={handleChange}
                        value={values.lastName}
                    />
                    {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}

                </div>
            </div>
            <label htmlFor="team_name" className="label">Team name/number</label>
            <input
                id="team_name"
                className={errors.team_name && touched.team_name ? "input-error" : "inp"}
                placeholder="Team name/number"
                type="text"
                onChange={handleChange}
                value={values.team_name}
            />
            {errors.team_name && touched.team_name && <p className="error">{errors.team_name}</p>}

            <label htmlFor="email" className="label">Email Address</label>
            <input
                id="email"
                className={errors.email && touched.email ? "input-error" : "inp"}
                placeholder="Email Address"
                type="email"
                onChange={handleChange}
                value={values.email}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <label htmlFor="password" className="label">Password </label>
            <input
                id="password"
                className={errors.password && touched.password ? "input-error" : "inp"}
                placeholder="Password"
                type="password"
                onChange={handleChange}
                value={values.password}
            />
            {errors.password && touched.password && <p className="error">{errors.password}</p>}

            <div className="checkbox">
                <input type="checkbox" className="checkboxInp" />
                <p>I agree to the Terms of Service and Privacy Policy</p>
            </div>
            <button disabled={isSubmitting} type="submit" className="btn">Sign up</button>
            <p className="text_or">OR</p>
            <button type="submit" className="google_btn">Continue with Google</button>
        </form>
    );
};

export default SignupForm;