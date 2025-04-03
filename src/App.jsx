import './App.css'

function App() {
  const myInfo = {
    name: 'John',
    age: 35,
    ethnicity: 'Chinese - Singaporean',
    nationality: 'American'
  }

  const myHobbies = [
    {
      name: "Board Games",
      collection: 30,
      favorite: "Spirit Island"
    },
    {
      name: "Video Games",
      collection: 500,
      favorite: "Enter the Gungeon"
    },
    {
      name: "Clay Sculpting",
      collection: 8,
      favorite: "Bond-san"
    },
  ]

  const codingSkills = [
    {
      name: "JavaScript",
      comfort: 8,
      frontEnd: true,
      backEnd: true
    },
    {
      name: "MongoDB",
      comfort: 9,
      frontEnd: false,
      backEnd: true
    },
    {
      name: "CSS",
      comfort: 3,
      frontEnd: true,
      backEnd: false
    },
    {
      name: "HTML",
      comfort: 7,
      frontEnd: true,
      backEnd: false
    },
    {
      name: "Mongoose",
      comfort: 10,
      frontEnd: false,
      backEnd: true,
    },
    {
      name: "Express",
      comfort: 9,
      frontEnd: true,
      backEnd: true
    }
  ]

  let sortedCoding = codingSkills.sort((a,b) => b.comfort - a.comfort)

  const container = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 'auto'
  }
  
  const mainBox = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '100px',
    backgroundColor: '#313131b0',
    justifyContent: 'space-evenly'
  }
  
  const card = {
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '',
  }

  const titles = {
    color: 'lightblue',
    fontSize: '2rem',
    margin: '15px '
  }

  return (
    <>
      <h1 style={titles}>{`${myInfo.name}'s `}First React App</h1>
      <div style={container} className="container">
        <h2 style={titles}>Basic Information</h2>
        <div style={mainBox}>
            <ul>
              <li>{`Age: ${myInfo.age}`}</li>
              <li>{`Ethnicity: ${myInfo.ethnicity}`}</li>
              <li>{`Nationality: ${myInfo.nationality}`}</li>
            </ul>
        </div>
        <h2 style={titles}>Coding Skills</h2>
          <div style={mainBox} className="card">
            <div className="skillCard">
              <h3 style={titles}>Top skills</h3><hr/>
              <div style={card} id='highcomfort'>
                {sortedCoding.map((high) =>
                  high.comfort > 7 ? <p>Program: {`${high.name}`}<br/>Comfort Level: {`${high.comfort}`}</p> : null
                )}
              </div>
            </div>
            <div className="skillCard">
              <h3 style={titles}>Needs improvement</h3><hr/>
              <div style={card} id='lowcomfort'>
                {sortedCoding.map((low) => 
                  low.comfort <= 7 ? <p>Program: {`${low.name}`}<br/>Comfort Level: {`${low.comfort}`}</p> : null
                )}
              </div>
            </div>
          </div>
        <h2 style={titles}>Hobbies</h2>
        <div style={mainBox} className="card">
            {myHobbies.map((hobby) =>
              <div style={card} id='hobbies'>
              <h3 style={titles}>{`${hobby.name}`}</h3>
              <p>Collection: {`${hobby.collection}`}<br/>Favorite: {`${hobby.favorite}`}</p>
              </div>
            )}
        </div>
      </div>
    </>
  )
}

export default App
