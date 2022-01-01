import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yub from "yub";

function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const createPost = (data) => {
    console.log(data);
  };

  const validationSchema = Yub.object().shape({
    title: Yub.string().required(),
    postText: Yub.string().required(),
    username: Yub.string().required(),
  });

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={createPost}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="Enter a title for the post"
          />

          <label>Post: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="Enter Post"
          />

          <label>Username: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="Enter Username"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
