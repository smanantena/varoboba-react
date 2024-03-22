import React from 'react'
import Header from './Header';

const Signup = () => {
  return (
    <>
      <Header />
      <div className="container w-50">
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Inscrivez vous </h4>

          <form action="" className="needs-validation">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">Nom </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Prenom</label>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  placeholder=""
                  required=""
                />
              </div>
            </div>

            <div className="mb-3">
              <label for="email">
                E-mail <span className="text-muted"> (facultatif) </span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label for="address">Adresse </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="..., Antananarivo, Madagascar"
                required=""
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label for="address2">
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
                <label for="country">Pays </label>
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
                <label for="state">Sexe </label>
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

            <button className="btn btn-primary btn-lg btn-block" type="submit">
              s'enregistrer
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup