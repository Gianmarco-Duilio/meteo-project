import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import CurrentWeather from "./CurrentWeather";

function NavbarWeather() {
  const [city, setCity] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    setCity(event.target.elements.city.value);
  }

  return (
    <>
      <Navbar id="navBar" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4 text-white">
            <img src="sun.svg" alt="icon" />
            WhatsTheWeatherLike
          </Navbar.Brand>
          <Form onSubmit={handleFormSubmit} className="d-flex">
            <Form.Control
              type="text"
              name="city"
              placeholder="Inserisci il nome della città"
              className=" me-2"
              aria-label="City"
            />
            <Button className="btn btn-warning fw-bold" type="submit">
              Cerca
            </Button>
          </Form>
        </Container>
      </Navbar>

      <CurrentWeather city={city} />
    </>
  );
}

export default NavbarWeather;
