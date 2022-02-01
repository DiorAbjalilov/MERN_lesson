import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AddBook = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const hanleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/travel/add", {
      title,
      descr,
      image,
    });
    navigate("/");
  };

  return (
    <>
      <form onSubmit={hanleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descr" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="descr"
            name="descr"
            onChange={(e) => setDescr(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URl
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
