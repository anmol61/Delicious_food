import React from "react";
import "./style.css";
const Contact = () => {
  return (
    <>
      <form style={{ textAlign: "center", marginTop: "5rem" }}>
        <label htmlFor="name" style={{ fontSize: "1.5rem", color: "white" }}>
          Name: <input type="text" placeholder="your name" />
        </label>
        <br />
        <label htmlFor="email" style={{ fontSize: "1.5rem", color: "white" }}>
          Email: <input type="text" placeholder="your name" />
        </label>
        <br />
        <label htmlFor="phone" style={{ fontSize: "1.5rem", color: "white" }}>
          Phone: <input type="number" placeholder="your name" />
        </label>
        <br />
        <label htmlFor="message" style={{ fontSize: "1.5rem", color: "white" }}>
          Message:{" "}
          <textarea
            rows={7}
            cols={60}
            name="message"
            placeholder="Message"
          ></textarea>
        </label><br />
        <input type="button" name="button" value="Submit"/>
      </form>
    </>
  );
};

export default Contact;
