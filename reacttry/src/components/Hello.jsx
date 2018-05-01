import React from 'react'

export default class Hello extends React.Component {
   constructor () {
     super()
     this.greeting = 'Hello World'
   }

   render () {
     return (
      <div>
        <h1>{this.greeting}, from Components</h1>
        <h2>Tryin React</h2>
      </div>
     )
   }
}