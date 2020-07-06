import React from "react";

//Local stuff.
import "../styles/main.scss";

//Bootstrap.
import Form from "react-bootstrap/Form";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: "",
      decimal: "",
      octal: "",
      binary: "",
    };

    this.handleHexChange = this.handleHexChange.bind(this);
    this.handleDecimalChange = this.handleDecimalChange.bind(this);
    this.handleOctalChange = this.handleOctalChange.bind(this);
    this.handleBinaryChange = this.handleBinaryChange.bind(this);
  }

  handleHexChange(event) {
    if (event.target.value === "") {
      this.setState({
        hex: "",
        decimal: "",
        octal: "",
        binary: "",
      });
    } else {
      this.setState({
        hex: event.target.value,
        decimal: parseInt(event.target.value, 16),
        octal: parseInt(event.target.value, 16).toString(8),
        binary: parseInt(event.target.value, 16).toString(2),
      });
    }
  }

  handleDecimalChange(event) {
    if (event.target.value === "") {
      this.setState({
        hex: "",
        decimal: "",
        octal: "",
        binary: "",
      });
    } else {
      this.setState({
        hex: parseInt(event.target.value, 10).toString(16),
        decimal: event.target.value,
        octal: parseInt(event.target.value, 10).toString(8),
        binary: parseInt(event.target.value, 10).toString(2),
      });
    }
  }

  handleOctalChange(event) {
    if (event.target.value === "") {
      this.setState({
        hex: "",
        decimal: "",
        octal: "",
        binary: "",
      });
    } else {
      this.setState({
        hex: parseInt(event.target.value, 8).toString(16),
        decimal: parseInt(event.target.value, 8),
        octal: event.target.value,
        binary: parseInt(event.target.value, 8).toString(2),
      });
    }
  }

  handleBinaryChange(event) {
    if (event.target.value === "") {
      this.setState({
        hex: "",
        decimal: "",
        octal: "",
        binary: "",
      });
    } else {
      this.setState({
        hex: parseInt(event.target.value, 2).toString(16),
        decimal: parseInt(event.target.value, 2),
        octal: parseInt(event.target.value, 2).toString(8),
        binary: event.target.value,
      });
    }
  }

  render() {
    return (
      <div className="Home">
        <div className="center-horizontally">
          <div className="column">
            <h1 className="header heavy-font">CompSciCalculator</h1>
            <div className="divider"></div>
          </div>
        </div>

        {/* convert */}
        <div className="center-horizontally">
          <div className="column">
            <div className="converter-container">
              <h3 className="description light-font">
                Enter a number in any box to convert to the other number
                systems.
              </h3>

              <Form variant="dark">
                <Form.Group>
                  <Form.Label>Hex</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="1"
                    value={this.state.hex}
                    onChange={this.handleHexChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Decimal</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="1"
                    value={this.state.decimal}
                    onChange={this.handleDecimalChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Octal</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="1"
                    value={this.state.octal}
                    onChange={this.handleOctalChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Binary</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="1"
                    value={this.state.binary}
                    onChange={this.handleBinaryChange}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
