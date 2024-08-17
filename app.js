import React from 'react';
import ReactDOM from "react-dom";
const heading = React.createElement('h1',{},'hello from abhinay bir');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)
console.log('heading:',heading)

// jsx
// react element
const jsxheading = (<h1 id='jheading'>
            hello from jsx
            </h1>);
const HeadingComponent = ()=>{
  return (
    <div id='container'>
      
      <Title/>
      {Title}
      <h1 className='heading'>hello
        ahinay bir,give ur best
        btw hello from react functional
        component aka HeadingComponent
      </h1>
    </div>
  );
}
const Title = ()=>{
  return (
    <h1>rendering title comp inside
      heading comp
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