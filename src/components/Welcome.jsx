import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert id="alert" show={show}>
        <Alert.Heading className="d-flex justify-content-center">BENVENUTO NELLA NOSTRA APP METEO</Alert.Heading>
        <p className="d-flex justify-content-center">
          Benvenuto nell'app di meteo più affidabile e intuitiva! Siamo entusiasti di averti qui. Con la nostra app,
          avrai accesso istantaneo alle previsioni meteorologiche più accurate per qualsiasi luogo nel mondo. Che tu
          stia pianificando una giornata al mare, un picnic in montagna o semplicemente voglia sapere cosa indossare per
          uscire, siamo qui per aiutarti.
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-light" className="text-black fw-bold bg-warning">
            Continua..
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default Welcome;
