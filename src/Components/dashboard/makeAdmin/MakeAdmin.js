import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  //   const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const { email } = data;
    const user = { email };
    fetch("https://fierce-refuge-49185.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("made admin successfully");
        }
      });
    e.preventDefault();
  };
  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <input {...register("email")} className="mt-5 form-control" />
        <br />
        <input type="submit" className="btn-regular navbar-book-btn  ms-0" />
      </form>
    </Container>
  );
};

export default MakeAdmin;
