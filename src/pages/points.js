import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import "./index.css";
import Jeffrey from "../assets/jeffrey.jpg";
import Charlie3 from "../assets/charlie3.png"
const Points = () => {
  return (
    <>
      <h1 className="leaderboard">Leaderboard</h1>
      <Row>
        <Col className="square1">
          <h3>1</h3>
          <img
            className="profile-img"
            src={"https://ca.slack-edge.com/E88MEPKJQ-WPGNSFHRP-680746e59a40-192"}
            alt="profile-icon"
            style={{ height: 80, width: 80, marginLeft: 113, marginTop: -20 }}
          />
          <h3 className="center-h3">Bill McDermott</h3>
          <h3 className="center-h3-text">
            Social Points: <span className="number">12367</span>
          </h3>
        </Col>
        <Col md={{ offset: 1 }} className="square2">
          <h3>2</h3>
          <img
            className="profile-img"
            src={
              "https://ca.slack-edge.com/E88MEPKJQ-W012N34V0H1-d2192c665cea-512"
            }
            alt="profile-icon"
            style={{ height: 80, width: 80, marginLeft: 113, marginTop: -20 }}
          />
          <h3 className="center-h3">Nikhil Tangella</h3>
          <h3 className="center-h3-text">
            Social Points: <span className="number">11023</span>
          </h3>
        </Col>

        <Col md={{ offset: 1 }} className="square3">
          <h3>3</h3>
          <img
            className="profile-img1"
            src={
              "https://ca.slack-edge.com/E88MEPKJQ-W013RRHEGGY-0bef0be9c1b3-72"
            }
            alt="profile-icon"
            style={{ height: 80, width: 80, marginLeft: 113, marginTop: -20 }}
          />
          <h3 className="center-h3">Jaden Padua</h3>
          <h3 className="center-h3-text">
            Social Points: <span className="number">9812</span>
          </h3>
        </Col>
      </Row>

      <Row>
        <Col className="square4" style={{ marginTop: 50 }}>
          <p className="number2">4</p>
          <img
            className="profile-img2"
            src={
              "https://ca.slack-edge.com/E88MEPKJQ-W0132R4EGRH-4913c4847b42-512"
            }
            alt="profile-icon"
            style={{ height: 30, width: 30 }}
          />
          <p className="name-2"> Kenneth Chen</p>
          <p className="points-2"> 8127 points</p>
        </Col>
      </Row>

      <Row>
        <Col className="square4" style={{ marginTop: 10 }}>
          <p className="number2">5</p>
          <img
            className="profile-img2"
            src={
              "https://ca.slack-edge.com/E88MEPKJQ-WTFL8AFS8-bf25a9a22df0-512"
            }
            alt="profile-icon"
            style={{ height: 30, width: 30 }}
          />
          <p className="name-2"> Prachi Ved</p>
          <p className="points-2"> 6287 points</p>
        </Col>
      </Row>

      <Row>
        <Col className="square4" style={{ marginTop: 10 }}>
          <p className="number2">6</p>
          <img
            className="profile-img2"
            src={
              "https://ca.slack-edge.com/E88MEPKJQ-W9C8NU2BC-c96992158088-512"
            }
            alt="profile-icon"
            style={{ height: 30, width: 30 }}
          />
          <p className="name-2"> Henry Chan</p>
          <p className="points-2"> 5263 points</p>
        </Col>
      </Row>

      <Row>
        <Col className="square4" style={{ marginTop: 10 }}>
          <p className="number2">7</p>
          <img
            className="profile-img2"
            src={
              "https://ca.slack-edge.com/E88MEPKJQ-W012SAYD17W-9a2c058efc21-512"
            }
            alt="profile-icon"
            style={{ height: 30, width: 30 }}
          />
          <p className="name-2"> Stanley Lee</p>
          <p className="points-2"> 4263 points</p>
        </Col>
      </Row>

      <Row>
        <Col className="square4" style={{ marginTop: 10 }}>
          <p className="number2">8</p>
          <img
            className="profile-img2"
            src={
              "https://ca.slack-edge.com/E88MEPKJQ-W013L2KRK3J-21cc73605b06-512"
            }
            alt="profile-icon"
            style={{ height: 30, width: 30 }}
          />
          <p className="name-2"> Richard To</p>
          <p className="points-2"> 2380 points</p>
        </Col>
      </Row>

      <Row>
        <Col className="square4" style={{ marginTop: 10 }}>
          <p className="number2">9</p>
          <img
            className="profile-img2"
            src={
              "https://ca.slack-edge.com/E88MEPKJQ-W012AA7RDPG-b8e065232a1f-512"
            }
            alt="profile-icon"
            style={{ height: 30, width: 30 }}
          />
          <p className="name-2"> Howard Wang</p>
          <p className="points-2"> 1289 points</p>
        </Col>
      </Row>
    </>
  );
};

export default Points;
