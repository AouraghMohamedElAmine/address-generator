import React from "react";
import { Alert, Form, Button } from "react-bootstrap";
 import { useState } from "react";
import locationsData from "./data/locationsData.json";

function App() {
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [daira, setDaira] = useState("");
 
  const WilayaArray = [];
  WilayaArray[0] = null;

  const dairaArray = [];
  dairaArray[0] = null;

  const communeArray = [];
  communeArray[0] = null;

  return (
    <>
      <form>
        <h1>enter your shipping informations </h1>
        <Form.Group>
          <Form.Label>Enter your wilaya</Form.Label>
          <select value={wilaya} onChange={(e) => setWilaya(e.target.value)}>
            <option>select wilaya</option>
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

          <Form.Label>Enter your daira</Form.Label>

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
              if (index <= 1) {
                return null;
              }
              return <option value={d}>{d}</option>;
            })}
            {console.log(dairaArray)}
          </select>
          <br></br>

          <Form.Label>Enter your commune </Form.Label>
          <select value={commune} onChange={(e) => setCommune(e.target.value)}>
            {locationsData.map((e) => {
              if (e.daira_name === daira) {
                communeArray.push(e.commune_name);
              }
            })}

            {communeArray.map((c, index) => {
              if (index <= 1) {
                return null;
              }
              return <option value={c}>{c}</option>;
            })}
            {console.log(communeArray)}
          </select>
          <br></br>
        </Form.Group>
      </form>
    </>
  );
}

export default App;
