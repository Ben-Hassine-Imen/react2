
import './App.css';
import  paysage  from "./paysage.jpg";
import ReactPlayer from "react-player";
function App() {
  return (
    <div style={{border:"solide 1px black",maxWidth:"100vw"}}>
      <h1 className="title red">Ben Hassine Imèn</h1>
    <br/>
  <div className="imgages">
    <img className="img" src={paysage} alt='paysage'></img>
    <br/>
    <img className="img" src="/nature.jpg"></img>
   </div>
    <br/>
    <br/>


 <ReactPlayer className='video' url="https://youtu.be/0tIUbGVEKIk?t=7"/>





    </div>
  );
}

export default App;
