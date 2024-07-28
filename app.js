const heading =  React.createElement('h1', {id:'heading'}, 'hello abhinay bir from react which is in app.js')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)

/*
  div id=parent
    div id=child1
      h1
      h2
    div
    div id=child2
      h1
      h2
    div
  div
*/
const parent = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child1'},[
      React.createElement('h1',{},'h1 header in child1'),
      React.createElement('h2',{},'h2 header in child1')
    ])
],
    React.createElement('div',{id:'child2'},[
      React.createElement('h1',{},'h1 header in child2'),
      React.createElement('h2',{},'h2 header in child2')
    ])
)
root.render(parent)