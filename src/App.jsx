import PropTypes from 'prop-types';
const userData =[
  {
    id:1,
    online:true,
    name:"Rifna",
    city:"Malappuram",
    job:"Web Developer",
    skills:["UI / UX" ,"HTML","CSS","JavaScript","React","Node","MongoDB","Express"], profile:"images/Rifna.jpg"
  },{
    id:2,
    online:false,
    name:"Nisam",
    city:"Malappuram",
    job:"Blockchain Developer",
    skills:["Blockchain" ,"Ethreneum","JavaScript","React","Node","MongoDB","Express"],
    profile:"images/nisam.png"
  },{
    id:3,
    online:true,
    name:"Abi",
    city:"Kozhikode",
    job:"Flutter Developer",
    skills:["Front End Development","UI / UX","JavaScript","HTML","CSS", "Flutter", "Dart"],
    profile:"images/abi.png"
  }
]

function User(props){
  return (
    <div className="container">
      <span className={props.online ? "status online" : "status offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}</span>
      <img className="profile" src={props.profile} alt="user"/>
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.job}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
      </div>
    </div>

  )
}

function App(){
  return (
    <div className="App">
      {userData.map((user) => <User key={user.id} {...user}/>) }
      
    </div>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  online: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  skills: PropTypes.array.arrayOf(PropTypes.string).isRequired,
  profile: PropTypes.string.isRequired
}

export default App
