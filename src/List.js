import { Component } from "react";

export class List extends Component {
 
        state = {
            userInput:'',
            stuffList: []


        }
        onChangeEvent(e){
          this.setState({userInput:e})
        }
        addItem(input){
            let listArray = this.state.stuffList;
            listArray.push(input)
            console.log(listArray)
            if (input === ''){
                alert ('Please put item')
            }
           else { 
    
           }
           this.setState({stuffList:listArray,
            userInput:''})
        }
        crossedWord(event){
            const li = event.target;
            li.classList.toggle('crossed');
        }
        deleteItem(){
            let listArray = this.state.stuffList;
            listArray = []
            this.setState({stuffList:listArray})
        }
        onFormSubmit(e){
            e.preventDefault()
        }
     
    
    render (){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <input type ='text'
                placeholder ='what do you want to take?'
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value = {this.state.userInput}/>
                <div className="btn">
                <button className="btn" onClick={() =>this.addItem(this.state.userInput)}>ADD</button>
                </div>
                <div>
                <ul>
                    {this.state.stuffList.map((item, index) =>(
                    <li onClick={this.crossedWord} key={index}>{item}</li>))}
                </ul>
                <div className="btn">
                    <button className="btn" onClick={() => this.deleteItem()}>DELETE</button>

                </div>

                </div>
                </form>
            </div>
        )
    }
}