import React from 'react';
import { Formik, Field, Form } from 'formik';

const Login = (props) => {
    console.log('guliko')
    return <div>
        <h1>Login</h1>
        
        <Formik onSubmit={FormData}
         initialValues = {{
             Login:'Login',
             Password:'Password',
             
        }}
        >
        
    
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"} />
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </Form>
    

        </Formik>
        
    </div>
}

export default Login;



 