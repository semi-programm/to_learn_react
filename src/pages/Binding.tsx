import React, { useState } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";

let Binding = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <input
        type='text'
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <p>入力した文字: {value}</p>
    </Container>
  );
};
export default Binding;
