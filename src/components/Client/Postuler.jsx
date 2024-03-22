import React from 'react'

function Postuler() {
  return (
    <div className="container w-50">
      <div class="mb-3">
        <h4 className="mb-3">Postuler un produit</h4>
        <label class="form-label">Titre</label>
        <input
          type="text"
          class="form-control"
          id="titre"
          placeholder="Titre du produit"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Prix du produit</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Prix obligatoire"
          required
        />
      </div>
      <div class="mb-3">
        <label class="form-label">description</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>

      <div class="mb-3">
        <label for="formFile" class="form-label">
          Default file input example
        </label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <hr class="my-4" />
      <button className="w-100 btn btn-primary btn-lg" type="submit">
        SAVE
      </button>
    </div>
  );
}

export default Postuler