import React from 'react'

export default function CardText(props) {
  let {nombre, descripcion} = props;
  return (
    <div className="card_info">
            <h5 className="card_name">{nombre}</h5>
            <p className="card_description">
                {descripcion}
            </p>
        </div>
  )
}

