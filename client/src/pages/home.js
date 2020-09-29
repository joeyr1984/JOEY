import React from "react";
import Dome from "../images/dome.svg"

const styles = {
  imageStyle: {
    backgroundImage: `url(${Dome})`,
    backgroundRepeat: "no-repeat",
    //width: 1228,
    height: 648,
    marginLeft: 234,
    paddingLeft: 42,
    paddingTop: 24,

  },
  showSytle: {
    color: "white",
    fontSize: 200,
    textAlign: "center",
    fontFamily: "forma-djr-display, sans-serif",
    fontWeight: 450,
    fontStyle: "normal",
    marginRight: 303,
    paddingTop: 130,
    height: 306,

  },
  h2Style: {
    color: "white",
    textAlign: "center",
    fontFamily: "forma-djr-display, sans-serif",
    fontWeight: 450,
    fontStyle: "normal",
    fontSize: 75,
    paddingRight: 283,
    height: 72,
  },
  h3Style: {
    color: "white",
    textAlign: "center",
    fontFamily: "forma-djr-display, sans-serif",
    fontWeight: 450,
    fontStyle: "normal",
    fontSize: 49,
    letterSpacing: 18,
    paddingRight: 269,
  },
  inSytle: {
    color: "white",
    textAlign: "center",
    fontFamily: "forma-djr-display, sans-serif",
    fontWeight: 450,
    fontStyle: "normal",
    fontSize: 100,
    paddingRight: 292,
    marginTop: -19,
    height: 45,
  },
  mindSytle: {
    color: "white",
    textAlign: "center",
    fontFamily: "forma-djr-display, sans-serif",
    fontWeight: 450,
    fontStyle: "normal",
    fontSize: 74,
    paddingTop: 41,
    paddingRight: 295,
    marginBottom: 0,
  }
};


function Home() {
  return (
    <div style={styles.imageStyle} className="img-fluid mt-2">
      <div>
        <h1 style={styles.showSytle}>Show</h1>
        <h2 style={styles.h2Style}>you what I</h2>
        <h3 style={styles.h3Style}>have</h3>
        <h1 style={styles.inSytle}>in</h1>
        <h1 style={styles.mindSytle}>mind</h1>
      </div>



    </div>


  );
}


export default Home;
