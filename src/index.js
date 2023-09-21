import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList/>
      </div>
    </div>
  );
}

function Avatar(){
  return <img className='avatar' src='photo_2022-10-13_02-00-15.jpg' alt='IT engineer'/> 
}

function Intro(){
  return <div className='data'>
    <h1>Ali Poureskandar</h1>
    <p >An adaptable IT consultant, motivated to pursue a career as a software developer. Committed to continuous learning and leveraging consultancy background to excel in coding, system architecture, and project execution.</p>
  </div>
}

function SkillList(){
  return <div className='skill-list'>
    <Skill skill='HTML' color='blue'/>
    <Skill skill='CSS' color='orange'/>
    <Skill skill='Vanilla JavaScript' color='yellow'/>
    <Skill skill='React' color='#01fff4'/>
  </div>
}

function Skill(props){
  return <div className='skill' style={{backgroundColor: props.color}}>
    <span>{props.skill}</span>
  </div>
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
