import React from "react";

const styles = {
  cardStyle: {
    marginBottom: 10

  }
}


function Card(props) {
  return (
    <div className="col-4">
      <div style={styles.cardStyle} className="card">
        <div className="img-container">
          <a href={props.url}><img className="card-img-top" alt={props.name} src={props.image} /></a>
        </div>
        <div className="card-body">

          <strong className="card-title">{props.name}</strong>
          <br />
          <a href={props.repo} class="btn btn-primary">View Repo</a>
        </div>

      </div>
    </div>
  );
}

export default Card;