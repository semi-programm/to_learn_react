import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";

let Binding = () => {
  const [value, setValue] = useState("");
  // 初回のみ
  useEffect(() => {
    console.log("初回の処理！");
  }, []);
  useEffect(() => {
    console.log("valueに変更があった！");
  }, [value]);

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
