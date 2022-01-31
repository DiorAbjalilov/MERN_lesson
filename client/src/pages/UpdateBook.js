import React from "react";

export const UpdateBook = () => {
  return (
    <>
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="title"
            name="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descr" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="descr" name="descr" />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URl
          </label>
          <input type="text" className="form-control" id="image" name="image" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
