import React from 'react';
import ReactDOM from "react-dom";
const heading = React.createElement('h1',{},'heading made using core react');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)
console.log('core react heading:',heading)

// jsx    
// react element
const jsxheading = (<h1 id='jheading'>
            hello from jsx, root2.
            </h1>);
const HeadingComponent = ()=>{
  return ( 
    <div id='container'>
      {'heading componenets starts here'}
      <Title/>
      <Title></Title>
      {/* the above 2 lines r same, they r components */}
      {spanel}
      {Title()}
      {/* the above  */}
      {20000}<br></br>
      {'writing a string inside js'+'fasdfa'}<br></br>
      {'heading components ends here'}
    </div>
  );                                                                             
}         
const spanel = <span>this is a spa</span>
const Title = ()=>{
  return (
    <h1>this is title fnl cmpnt
      {console.log('hi abhinay ')}
    </h1> 
  );      
}         

const root2 = ReactDOM.createRoot(document.getElementById('root2'))
console.log('jsheading:', jsxheading)
root2.render(jsxheading)

const root3 = ReactDOM.createRoot(document.getElementById('root3'))
root3.render(<HeadingComponent/>)


// const heading =  React.createElement('h1', {id:'heading'}, 'hello abhinay bir from react which is in app.js')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

// /*
//   div id=parent
//     div id=child1
//       h1
//       h2
//     div
//     div id=child2
//       h1
//       h2
//     div
//   div
// */
// const parent = React.createElement('div',{id:'parent'},[
//     React.createElement('div',{id:'child1'},[
//       React.createElement('h1',{},'h1 header in child1'),
//       React.createElement('h2',{},'h2 header in child1')
//     ])
// ],
//     React.createElement('div',{id:'child2'},[
//       React.createElement('h1',{},'h1 header in child2'),
//       React.createElement('h2',{},'h2 header in child2')
//     ])
// )
// root.render(parent)