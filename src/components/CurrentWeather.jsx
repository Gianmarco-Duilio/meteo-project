import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { LuWind } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { RiWaterPercentLine } from "react-icons/ri";
import { FaTemperatureHigh } from "react-icons/fa";

function CurrentWeather({ city }) {
  const [weatherToday, setWeatherToday] = useState(null);

  useEffect(() => {
    if (city) {
      console.log("Avvio ricerca meteo per la città:", city);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=007e5900db97e40a3473cd560f683839&units=metric`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Errore durante il recupero delle informazioni meteorologiche");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Dati meteorologici ricevuti:", data);
          setWeatherToday(data);
        })
        .catch((error) => {
          console.error("Si è verificato un errore durante il recupero delle informazioni meteorologiche:", error);
        });
    }
  }, [city]);

  return (
    <Container>
      <Row className="justify-content-center">
        {weatherToday && (
          <Col xs={10}>
            <Row>
              <Card id="weatherCard" className="text-center mt-4 rounded-5">
                <Col>
                  <Card.Title id="title" className="fw-bold">
                    <div className="d-flex justify-content-center align-items-center">
                      {weatherToday.name}
                      <Card.Img
                        id="iconWeather"
                        src={`https://openweathermap.org/img/w/${weatherToday.weather[0].icon}.png`}
                        alt="Weather Icon"
                      />
                    </div>
                  </Card.Title>
                </Col>{" "}
              </Card>

              <Col xs={12} md={6} id="weatherCol" className="mt-3 g-4">
                <Card id="weatherCard" className="w-100 h-100 text-center m-1 p-2 rounded-5">
                  <Card.Text id="weatherSpec" className="fw-bold">
                    Temp. <FaTemperatureHigh />
                  </Card.Text>{" "}
                  <Card.Text className="fw-medium fs-1">{weatherToday.main.temp}°C</Card.Text>
                </Card>
              </Col>
              <Col xs={12} md={6} id="weatherCol" className="mt-3 g-4">
                <Card id="weatherCard" className="w-100 h-100 text-center m-1 p-2 rounded-5">
                  <Card.Text id="weatherSpec" className="fw-bold">
                    Humidity <RiWaterPercentLine />
                  </Card.Text>
                  <Card.Text className="fw-medium fs-1">{weatherToday.main.humidity}%</Card.Text>
                </Card>
              </Col>
              <Col xs={12} md={6} id="weatherCol" className="mt-3 g-4">
                <Card id="weatherCard" className="w-100 h-100 text-center m-1 p-2 rounded-5">
                  <Card.Text id="weatherSpec" className="fw-bold">
                    Pressure <IoSpeedometerOutline />
                  </Card.Text>
                  <Card.Text className="fw-medium fs-1">{weatherToday.main.pressure} hPa</Card.Text>
                </Card>
              </Col>
              <Col xs={12} md={6} id="weatherCol" className="mt-3 g-4">
                <Card id="weatherCard" className="w-100 h-100 text-center m-1 p-2 rounded-5">
                  <Card.Text id="weatherSpec" className="fw-bold">
                    {" "}
                    Wind <LuWind />
                  </Card.Text>
                  <Card.Text className="fw-medium fs-1">
                    {weatherToday.wind.speed} m/s, {weatherToday.wind.deg}°
                  </Card.Text>
                </Card>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default CurrentWeather;
