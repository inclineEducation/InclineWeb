import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../App.css';

export default function InclineEducation() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() =>{ fetchTeam().then(
    (result) => {
      setIsLoaded(true);
      console.log(result);
      setItems(result);
    },
    (error) => {
      setIsLoaded(true);
      setError(error)
    }
  );
  }, []);

  // console.log(team);
  // team.results.forEach(member => {
  //   teamArr.push(<p>{member.name}</p>);
  // });
  // console.log(teamArr);

  if (error) {
    return <div>ERROR</div>;
  } else if (!isLoaded) {
    return <div>LOADING</div>;
  } else {
    return (
      <>
        <h1 className='home'>Meet our team</h1>
        {
          items.map(item => (
            <p>{item.name}</p>
          ))
        }
  
      </>
    );
  }

  
}

function fetchTeam() {
  return fetch("http://localhost:5000/api/team")
      .then((response) => response.json())
}