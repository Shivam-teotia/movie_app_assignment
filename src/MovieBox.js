import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import "./MovieBox.css";
export const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  vote_count,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className=" text-center mb-2">
      <div className=" container">
        <img
          className="card-img-top"
          src={
            poster_path === null
              ? `${process.env.REACT_APP_API_IMG}` +
                "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
              : `${process.env.REACT_APP_API_IMG + poster_path}`
          }
          alt="none"
          onClick={handleShow}
        ></img>
        <h5 className="title">{title}</h5>

        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="main-div">
              <div className="div1">
                <img
                  className="card-img-top"
                  src={
                    poster_path === null
                      ? `${process.env.REACT_APP_API_IMG}` +
                        "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
                      : `${process.env.REACT_APP_API_IMG + poster_path}`
                  }
                  alt=""
                ></img>
              </div>
              <div className="div2">
                <h6>Release Date: {release_date}</h6>
                <p>{overview}</p>
                <h5>
                  {vote_average}/10 ({vote_count} votes)
                </h5>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
