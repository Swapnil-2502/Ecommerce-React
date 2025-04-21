import React from 'react'

const Ads = (props) => {
  return (
    <div>
        <div className="card mt-4" style={{width: '18rem'}}>
            <img src={props.url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
  )
}

export default Ads