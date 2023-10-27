// import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import { string,object, number } from "yup";
function App() {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
  // };
  let productSchema = object ({
    name: string()
      .required("Enter your name")
      .min(5, "Enter atleast 5 letter")
      .max(10, "Enter not more than 10 letter"),
    age: number().required("Enter your age"),
    email: string().email("Enter your email"),
  })

  return (
    <>
      <Card>
        {/* <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
            Submit
          </Button>
        </Form> */}
        <Formik
          initialValues={{ name: "", age: "", email: "" }}
          validationSchema={productSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange,handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Enter your name"
                className="mb-2"
                name="name"
                onChange={handleChange}
              />
              <input
                placeholder="Enter your age"
                className="mb-2"
                name="age"
                onChange={handleChange}
              />
              <input
                placeholder="Enter your email"
                className="mb-2"
                name="email"
                onChange={handleChange}
              />
              <Button type='submit' className="btn btn-info">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </>
  );
}

export default App;
