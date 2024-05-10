import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faUser,
  faPhone,
  faMessage,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    let result = await fetch("http://localhost:5000/contact", {
      method: "post",
      body: JSON.stringify({ name, phone, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.success) {
      navigate("/");
    } else {
      alert(result.message);
    }
  };
  return (
    <div className="contactForm">
      <h1 className="firstLetter"> Us</h1>
      <div className="form">
        <div className="row">
          <div className="input-group">
            <input
              type="text"
              id="name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <label htmlFor="name">
              <FontAwesomeIcon icon={faUser} /> Your Name
            </label>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="number"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
            />
            <label htmlFor="number">
              <FontAwesomeIcon icon={faPhone} /> Phone Number
            </label>
          </div>
        </div>
        <div className="input-group">
          <input
            type="email"
            id="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} /> Email Id
          </label>
        </div>
        <div className="input-group">
          <textarea
            id="message"
            rows={10}
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
          <label htmlFor="message">
            <FontAwesomeIcon icon={faMessage} /> Enter the message
          </label>
        </div>
        <button type="button" onClick={collectData}>
          <FontAwesomeIcon icon={faPaperPlane} /> Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
