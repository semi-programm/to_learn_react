import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useSelector, AppDispatch } from "../redux/store";
import { zipCodeAsync } from "../redux/zipcodeSlice";

let ZipCode = () => {
  const dispatch: AppDispatch = useDispatch();
  const address = useSelector((state) => state.zipCodeReducer);
  let [zipCode, setZipCode] = useState("");
  let submit = () => {
    dispatch(zipCodeAsync({ zipcode: zipCode }));
  };
  return (
    <>
      <Container>
        <Form>
          <Form.Label htmlFor='zip_code'>郵便番号</Form.Label>
          <Form.Control
            type='zip_code'
            id='zip_code'
            aria-describedby='passwordHelpBlock'
            onChange={(e) => {
              setZipCode(e.target.value);
            }}
          />
          <Button variant='primary' type='button' onClick={submit}>
            Submit
          </Button>
        </Form>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>都道府県</th>
                <th>市区町村</th>
                <th>区</th>
              </tr>
            </thead>
            <tbody>
              {address.results && (
                <tr>
                  <td>{address.results[0].address1}</td>
                  <td>{address.results[0].address2}</td>
                  <td>{address.results[0].address3}</td>
                </tr>
              )}
              {!address.results && (
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </Table>
        </Row>
      </Container>
      ;
    </>
  );
};

export default ZipCode;
