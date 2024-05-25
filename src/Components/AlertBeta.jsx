import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function AlertBeta() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>ATTENZIONE</Alert.Heading>
        <p>
          Questa pagina è ancora in <span className="fw-bold">BETA</span>, molte
          funzioni non sono state ancora aggiunte, ma le aggiungeremo il prima
          possibile
        </p>
      </Alert>
    );
  }
}

export default AlertBeta;
