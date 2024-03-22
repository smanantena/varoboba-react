<<<<<<< HEAD
// import Header from "./Header";

const Signup = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="container w-50">
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Inscrivez vous </h4>
=======
import Header from "./Header";
import React, { useState } from "react";
// import "./Inscription.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
>>>>>>> 3a06fc28e0163aed92c0d513db618de415263024

  const [userField, setUserField] = useState({
    name: "",
    email: "",
    Password: "",
  });
  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    console.log(userField);
  };
  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://localhost:8000/api/addnew",
        userField
      );
      // console.log(responce);
      navigate("/");
    } catch (err) {
      console.log("something Wrong");
    }
    return (
      <>
        <Header />
        <div className="container w-50">
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Inscrivez vous </h4>

            <form action="" className="needs-validation">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name">Nom </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required=""
                    onChange={(e) => changeUserFieldHandler(e)}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Prenom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="prenom"
                    required=""
                  
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">
                  E-mail <span className="text-muted"> (facultatif) </span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  onChange={(e) => changeUserFieldHandler(e)}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address">Adresse </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="..., Antananarivo, Madagascar"
                  required=""
                  //  onChange={(e) => changeUserFieldHandler(e)}
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address2">
                  Mot de passe <span className="text-muted"> </span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Mot de passe"
                />
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Pays </label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    required="">
                    <option>Choisir... </option>
                    <option>Madagascar </option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">Sexe </label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    required="">
                    <option>Choisir... </option>
                    <option>Masculin</option>
                    <option>Feminin </option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
              </div>
              <hr className="mb-4" />

              <button
                className="btn btn-dark btn-lg btn-block"
                onClick={(e) => onSubmitChange(e)}
                type="submit">
                s'enregistrer
              </button>
            </form>
          </div>
        </div>
      </>
    );
  };
};
export default Signup;
