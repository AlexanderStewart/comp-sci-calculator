import React, { useState } from "react";

//Local stuff.
import "../styles/main.scss";

//Bootstrap.
import Form from "react-bootstrap/Form";

//Packages.
import ParticlesBg from "particles-bg";

function Home() {
  const [hex, setHex] = useState("");
  const [decimal, setDecimal] = useState("");
  const [octal, setOctal] = useState("");
  const [binary, setBinary] = useState("");

  function handleHexChange(event) {
    if (event.target.value === "") {
      setHex("");
      setDecimal("");
      setOctal("");
      setBinary("");
    } else {
      setHex(event.target.value);
      setDecimal(parseInt(event.target.value, 16));
      setOctal(parseInt(event.target.value, 16).toString(8));
      setBinary(parseInt(event.target.value, 16).toString(2));
    }
  }

  function handleDecimalChange(event) {
    if (event.target.value === "") {
      setHex("");
      setDecimal("");
      setOctal("");
      setBinary("");
    } else {
      setHex(parseInt(event.target.value, 10).toString(16));
      setDecimal(event.target.value);
      setOctal(parseInt(event.target.value, 10).toString(8));
      setBinary(parseInt(event.target.value, 10).toString(2));
    }
  }

  function handleOctalChange(event) {
    if (event.target.value === "") {
      setHex("");
      setDecimal("");
      setOctal("");
      setBinary("");
    } else {
      setHex(parseInt(event.target.value, 8).toString(16));
      setDecimal(parseInt(event.target.value, 8));
      setOctal(event.target.value);
      setBinary(parseInt(event.target.value, 8).toString(2));
    }
  }

  function handleBinaryChange(event) {
    if (event.target.value === "") {
      setHex("");
      setDecimal("");
      setOctal("");
      setBinary("");
    } else {
      setHex(parseInt(event.target.value, 2).toString(16));
      setDecimal(parseInt(event.target.value, 2));
      setOctal(parseInt(event.target.value, 2).toString(8));
      setBinary(event.target.value);
    }
  }

  return (
    <div className="Home">
      <ParticlesBg type="circle" bg={true} />

      <div className="center-horizontally">
        <div className="column">
          <h1 className="header heavy-font">CompSciCalculator</h1>
          <div className="divider"></div>
        </div>
      </div>

      <div className="center-horizontally">
        <div className="column">
          <div className="converter-container">
            <h3 className="description light-font">
              Enter a number in any box to convert to the other number systems.
            </h3>

            <Form variant="dark">
              <Form.Group>
                <Form.Label className="white-text">Hex</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="1"
                  value={hex}
                  onChange={handleHexChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="white-text">Decimal</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="1"
                  value={decimal}
                  onChange={handleDecimalChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="white-text">Octal</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="1"
                  value={octal}
                  onChange={handleOctalChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="white-text">Binary</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="1"
                  value={binary}
                  onChange={handleBinaryChange}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
