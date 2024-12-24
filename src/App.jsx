// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//     }
//     handleclick=()=>{
//         this.setState({count:this.state.count+1})
//     }
//     decrement=()=>{
//         this.setState({count:this.state.count-1})
//     }
//   render() {
//     return (
//       <div>
//         <h1>Count : {this.state.count}</h1>
//         <button onClick={this.handleclick}>increment</button>
//         <button onClick={this.decrement}>decrement</button>
//       </div>
//     )
//   }
// }
// import React, { Component, useState } from 'react'


//   const App=()=> {
//               let [name,setname] = useState("React.js")
//               let change=()=>{
//                 setname("Java")
//               }
//               let cg=()=>{
//                 setname("React.js")
//               }
//     return (
//       <>
//         <h1>{name}</h1>
//         <button onClick={change}>change</button>
//         <button onClick={cg}>change again</button>
//       </>
//     )
//   }
//   export default App
import React, { useState } from 'react'

const App = () => {
  let [a,b]= useState(0)
  let change=()=>{
    b(a+1)
  }
  let ch=()=>{
    b(a-1)
  }
  return (
    <div>
      <h1>Count: {a}</h1>
      <button onClick={change}>increment </button>
      <button onClick={ch}>decrement</button>
    </div>
  )
}

export default App

