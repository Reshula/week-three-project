import './App.css';
import image from './pic1.jpeg';
import imageTwo from './pic2.jpeg' ;
import { List } from './List'



function App(){
  return (
    <div >
       <div className='app'>
      <h1> What do you need to take for vacation?</h1>
      <div >
      <img src={ image } alt="travel" width='300px'/>
      </div>
      <List/>
      <div >
      <img src={ imageTwo } alt="travel" width='300px' height='350px'/>
      </div>
      </div>
    </div>
  );
}

export default App;
