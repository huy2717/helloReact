import React, { Component } from 'react'

export default class gallery extends Component {
    constructor (props){
        super(props);
        this.state = {
            number:1,
        }
    }
    componentDidMount (){
        setInterval(() => {
            if (this.state.number >= 3) {
                this.setState ({number:1})
            } else {
                const newNumber=this.state.number + 1 
                this.setState ({number: newNumber})
            }
            
        }, 1000);
    }

    render() {
        return (
            <div>
                <img src={'images/' + this.state.number + '.jpg'} style={{width:400}} />
                <p>
                    <button
                    disabled={this.state.number === 1 ? 'disabled' : ''}
                    onClick={() => {
                        const newNumber=this.state.number - 1;
                        this.setState({number: newNumber})
                    }}
                    >back</button>
                    <span>{this.state.number} /3 </span>
                    <button
                    disabled={this.state.number === 3 ? 'disabled' : ''}
                    onClick={() => {
                        const newNumber=this.state.number + 1;
                        this.setState({number: newNumber})
                    }}
                    >next</button>
                </p>
                <div>
                    <img alt='' src={'/images/1.jpg'} style={{ height:70, opacity: this.state.number === 1 ? 1 : 0.5 }}
                    onClick={()=> {
                        this.setState ({ number:1})
                    }} />
                    <img alt='' src={'/images/2.jpg'} style={{ height:70, opacity: this.state.number === 2 ? 1 : 0.5 }}
                    onClick={()=> {
                        this.setState ({ number:2})
                    }} />
                    <img alt='' src={'/images/3.jpg'} style={{ height:70, opacity: this.state.number === 3 ? 1 : 0.5 }}
                    onClick={()=>{
                        this.setState ({ number:3})
                    }} />
                </div>
            </div>
            
        )
    }
}
