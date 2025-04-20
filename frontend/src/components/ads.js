import React from 'react'

const Ads = (props) => {
  return (
    <div>
        <div class="card mt-4" style={{width: '18rem'}}>
            <img src={props.url} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
  )
}

export default Ads