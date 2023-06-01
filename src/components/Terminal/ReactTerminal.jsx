import React, { useState } from 'react';
import { ReactTerminal } from 'react-terminal';
const Terminal = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null)
  const theme = {
    themeBGColor: '#004643',
    themeToolbarColor: '#004643',
    themeColor: 'var(--text-color)',
    themePromptColor: 'var(--text-color)',
    errorColor: "#FF443E",
    successColor: "#5B9E47",
    linkColor: "#4495D4"

  };
  const textColor = {
    color: 'var(--text-color)'
  }
  const buttonColor = {
    color: 'var(--button-color)'
  }
  const welcomeMessage = (
    <span>
      Welcome to my website! Get started by typing `<strong style={buttonColor}>help</strong>` command below
      <br />
      <br />
    </span>
  );


  const error = {
    color: theme.errorColor,
    fontWeight: "bold",
    marginTop: '5px'
  };
  const promptStyling = {
    color: theme.themePromptColor
  }

  const indentLevel1 = {
    marginLeft: '15px'
  }


  const commands = {
    help: () => {
      return (
        <div style={{ marginTop: '1px' }}>
          <p style={textColor}>Available Commands:</p>
          <p style={indentLevel1}>
            <span style={buttonColor}>whoami: </span>
            <span style={textColor}>Tells about me</span>
          </p>
          <p style={indentLevel1}>
            <span style={buttonColor}>whatiknow: </span>
            <span style={textColor}>Tells about my tech knowledge</span>
          </p>
          <p style={indentLevel1}>
            <span style={buttonColor}>getlocation: </span>
            <span style={textColor}>Tells about me</span>
          </p>
          <p style={indentLevel1}>
            <span style={buttonColor}>clear: </span>
            <span style={textColor}>clears out everything on terminal!</span>
          </p>



        </div>
      )
    },

    whoami: () => {
      return (
        <span style={{ color: 'var(--text-color)', marginLeft: '15px', marginTop: '5px' }}>I am Nishant Bharwani! A student at <a href='https://skit.ac.in' style={buttonColor}>SKIT</a>, Jaipur.</span>
      )
    },

    getlocation: () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log(latitude, longitude);

        }, (err) => {
          console.log(err);
        });
      }


      if (latitude === null || longitude === null) {
        return (<span style={{ color: '#ff443e', fontWeight: 'bold' }}>Can't fetch your location!</span>);
      } else {
        return (
          <span style={{ marginTop: '5px' }}>
            <span style={buttonColor}>Latitude: <span style={textColor}>{latitude}</span></span>
            <br />
            <span style={buttonColor}>Longitude: <span style={textColor}>{longitude}</span></span>
          </span>
        );
      }


    },

    whatiknow: () => {
      return (
        <span style={{ marginTop: '5px', color: 'var(--text-color)', marginLeft: '15px' }}>Experienced in Full stack development, with
          <span style={buttonColor}>&nbsp;React.js</span> and its frameworks in the front-end part, and <span style={buttonColor}>Node.js</span> in the back-end.</span>
      )
    }

  };

  return (
    <div style={{ border: '2px solid var(--text-color)', backgroundColor: 'var(--background-color)', height: '100%' }}>
      <ReactTerminal
        prompt={<span style={promptStyling}>$ nishantb &gt;&gt;</span>}
        commands={commands}
        welcomeMessage={<span style={{ color: 'var(--text-color)  ' }}>{welcomeMessage}</span>}
        errorMessage={<span style={error}>Command not found!</span>}
        inputColor="var(--text-color)"
        outputColor="var(--text-color)"
        backgroundColor="var(--background-color)"
        theme={theme}

      />
    </div>
  )
}

export default Terminal;