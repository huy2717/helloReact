import React, { Component } from 'react'
import Header from './header';
import Avatar from "./avatar" ;


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>haha</h1>
        <p>welcome to my team</p>

       
        <Avatar imageUrl='https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e'/>
        <Avatar imageUrl='https://tinyfac.es/data/avatars/AEF44435-B547-4B84-A2AE-887DFAEE6DDF-200w.jpeg' />

        <p>test git</p>

        <p>buoi hoc ngay mai</p>
  


        
      </div>
    );
  }
}

