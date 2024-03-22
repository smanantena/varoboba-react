import React from "react";

function Client() {
  return (
    <div className="d-flex">
      <div className="container w-75">
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Profil Utilisateur</h4>
          <form className="needs-validation" novalidate="">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required=""
                />
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Prenom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required=""
                />
              </div>

              <div className="col-12">
                <label htmlFor="username" className="form-label">
                  Nom d'utilisateur
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@ </span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Nom d'utilisateur"
                    required=""
                  />
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  E-mail
                  <span className="text-body-secondary"> (facultatif) </span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Adresse
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234, rue Principale"
                  required=""
                />
              </div>

              <div className="col-12">
                <label htmlFor="address2" className="form-label">
                  Adresse 2
                  <span className="text-body-secondary"> (facultatif) </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Appartement ou suite"
                />
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  Pays
                </label>
                <select className="form-select" id="country" required="">
                  <option value="">Choisir... </option>
                  <option>Madagascar </option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  État
                </label>
                <select className="form-select" id="state" required="">
                  <option value="">Choisir... </option>
                  <option>Californie </option>
                </select>
              </div>
            </div>
            <div className="col-md-5">
              <label for="formFile" class="form-label">
                Importer un fichier
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>

            <hr class="my-4" />
            <button className="w-100 btn btn-primary btn-lg" type="submit">
              SAVE
            </button>
          </form>
        </div>
      </div>
    
    </div>
  );
}

export default Client;
