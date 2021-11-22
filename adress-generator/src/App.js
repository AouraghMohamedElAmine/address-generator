import React from "react";
import { Alert, Form, Button } from "react-bootstrap";
 import { useState } from "react";
import locationsData from "./data/locationsData.json";

function App() {
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [daira, setDaira] = useState("");
 const submitHandler = () =>{
 console.log(`wilaya  :  ${wilaya} , daira : ${daira} , commune : ${commune} `)
 }
  const WilayaArray = [];
  WilayaArray[0] = null;

  const dairaArray = [];
  dairaArray[0] = null;

  const communeArray = [];
  communeArray[0] = null;

  return (
    <>
        
      <Form onSubmit={submitHandler}>
        <h1>select your shipping informations </h1>
        <Form.Group>
          <Form.Label>Select your wilaya</Form.Label>
          <select value={wilaya} onChange={(e) => setWilaya(e.target.value)}>
            <option>Select wilaya</option>
            {locationsData.map((e) => {
              if (!WilayaArray.includes(e.wilaya_name)) {
                WilayaArray.push(e.wilaya_name);
              }
            })}
            {WilayaArray.map((w, index) => {
              if (index <= 1) {
                return null;
              }
              return <option value={w}>{w}</option>;
            })}
          </select>
          <br></br>

          <Form.Label>Select your daira</Form.Label>

          <select value={daira} onChange={(e) => setDaira(e.target.value)}>
            {locationsData.map((e) => {
              if (
                e.wilaya_name === wilaya &&
                !dairaArray.includes(e.daira_name)
              ) {
                dairaArray.push(e.daira_name);
              }
            })}

            {dairaArray.map((d, index) => {
              return <option selected={daira} value={d}>{d}</option>;
            })}
          </select>
          <br></br>

          <Form.Label>Selcet your commune </Form.Label>
          <select value={commune} onChange={(e) => setCommune(e.target.value)}>
            {locationsData.map((e) => {
              if (e.daira_name === daira) {
                communeArray.push(e.commune_name);
              }
            })}
            {communeArray.map((c, index) => { 
              return <option selected={commune} value={c}>{c}</option>;
            })}
          </select>
          <br></br>
          {error ? (
            <Alert variant="danger">
              {" "}
              please fill all of your information{" "}
            </Alert>
          ) : null}
          <Button type="submit" variant="success" classwilaya="my-4">
            porceed to payment
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default App;
