import { Button, Card } from "react-bootstrap";
import { useState } from "react";

export default function CardCount({ count, reset, stop, regression }) {
  return (
    <>
      <Card className="w-25 mx-auto my-5">
        <Card.Body className="text-center">
          <Card.Title>Contador</Card.Title>
          <Card.Text>{count <= 20 ? count : "Te pasastes de 20"}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary" onClick={reset}>
            resetear
          </Button>
          <Button variant="primary" onClick={stop}>
            ⏹/▶️
          </Button>
          <Button variant="primary" onClick={regression}>
            Regresion
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
