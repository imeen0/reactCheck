import React from "react"
import { Card } from "react-bootstrap"
import PropTypes from "prop-types"

const Player = ({ nom, équipe, nationalité, numéro_de_maillot, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={imageUrl} alt={`${nom}'s photo`} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          <strong>équipe:</strong> {équipe}<br />
          <strong>nationalité:</strong> {nationalité}<br />
          <strong>numéro de maillot:</strong> {numéro_de_maillot}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

Player.propTypes = {
  nom: PropTypes.string,
  équipe: PropTypes.string,
  nationalité: PropTypes.string,
  numéro_de_maillot: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string
}

Player.defaultProps = {
    nom: "Lionel Messi",
    équipe: "Inter Miami",
    nationalité: "Argentinian",
    numérodemaillot: 10,
    age: 36,
    imageUrl: "https://example.com/messi.jpg"
}

export default Player
