import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { SET_ALERT } from "../redux/reducers";

function AlertBeta() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const showAlert = useSelector((state) => state.alert.content);

  if (showAlert) {
    return (
      <Alert
        variant="info"
        onClose={() => dispatch({ type: SET_ALERT, payload: false })}
        dismissible
      >
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
