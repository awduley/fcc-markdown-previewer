import React from 'react';
import '../main.css';
import marked from 'marked';

const material  = `
# h1 heading
## h2 heading
### h3 heading
#### h4 heading
##### h5 heading
###### h6 heading

### Links

[FreeCodeCamp](https://www.freecodecamp.com)

[Google](https://google.com "World's Most Popular Search Engine")

### Text Decoration

*italic*
**bold**
***bold and italic***

### Inline Code

Here are a couple of \`<div></div>\` tags

### Code Block

\`\`\`
function someFunction() {
  setTimeout(() => {
    alert('You SUCK!')
  },3000)
}
\`\`\`

### List Item

- list item 1
- list item 2
- list item 3

### Blockquote

> Someone once said something

### Image
![image](../../public/logo512.png)
`

marked.setOptions({
  break: true
})

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      text: material
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }



  render() {

    const { text } = this.state;
    const markdown = marked(text, {breaks: true})

    return(
      <div id="markdown">
      <h1 className="title">Markdown Previewer</h1>
        <div className="top">
          <div className="toolbar">
          </div>
          <textarea id="editor" onChange={this.handleChange} value={text} />
        </div>
        <div className="bottom">
          <div className="toolbar">
          </div>
          <div id="preview"
            dangerouslySetInnerHTML={{ __html: markdown }} />

        </div>
      </div>
    );
  }
}

export default App;
