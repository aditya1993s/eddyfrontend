import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { client } from "../AxiosInstance";
const ServerAddForm = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [serverName, setServerName] = React.useState("");
  const [hardwareConfig, setHardwareConfig] = React.useState("");
  const [assignedTo, setAssignedTo] = React.useState("");
  const [status, setStatus] = React.useState("");

  const addServer = async () => {
    const response = await client
      .post(
        "/server",
        {
          servers: [
            {
              name: serverName,
              assigned_to: assignedTo,
              assigned_from: startDate,
              assigned_till: endDate,
              config: hardwareConfig,
            },
          ],
        }
        // {
        //   headers: { Authorization: `Bearer ${accessToken}` },
        // }
      )
      .then((res) => {
        // setOrderItems(res.data.content);
      })
      .catch((err) => {
        console.log(err);
        // alert.error("Order cancellation failed");
      });
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formServerName">
          <Form.Label>Server Name</Form.Label>
          <Form.Control
            placeholder="Server Name"
            value={serverName}
            onChange={(e) => setServerName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formHardwareConfig">
          <Form.Label>Hardware Config</Form.Label>
          <Form.Control
            placeholder="Hardware Config"
            value={hardwareConfig}
            onChange={(e) => setHardwareConfig(e.target.value)}
          />
        </Form.Group>

        <Row classname="mb-3">
          <Form.Group as={Col} controlId="formAllocatedFrom">
            <Form.Label>Allocated From</Form.Label>
            <DatePicker
              selected={startDate}
              value={startDate.getDate()}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formAllocatedTo">
            <Form.Label>Allocated To</Form.Label>
            <DatePicker
              selected={endDate}
              value={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </Form.Group>
        </Row>

        <Row classname="mb-3">
          <Form.Group as={Col} controlId="formAssignedTo">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control
              type="text"
              placeholder="Assigned To"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formStatus">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="free">FREE</option>
              <option value="allocated">ALLOCATED</option>
              <option value="down">DOWN</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button
          variant="primary"
          type="button"
          style={{ marginTop: "24px" }}
          onClick={() => {
            addServer();
          }}
        >
          Add Server
        </Button>
      </Form>
    </>
  );
};

export default ServerAddForm;
