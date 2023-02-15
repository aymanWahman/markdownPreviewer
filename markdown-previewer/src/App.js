
import React from "react";
import {marked} from 'marked';

const initialState = `
This is a paragraph
**This bolded text**
> Block Quotes
# Heading 
## Heading 2
- list item
- list item 2
- list item 3
[Visit my website](https://www.linkedin.com/in/ayman-aly-8b60b0226/)
This is a inline \`<div></div>\`
This is a block of code:
\`\`\`
let x = 1;
let y = 2;
let z = x + y;
\`\`\`
![freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;
class App extends React.Component {
  state = {
    text: initialState
  };
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    const {text} = this.state;
    const markdown = marked(text, {breaks: true});
    return (
      <div>
        <h2 className="text-center m-4 text-white">Convert your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <h5 className="text-center">Enter your Markdown:</h5>
            <textarea className="form-control p-2" id="editor"
              value={text} onChange={this.handleChange} />
          </div>
          <div className="col-6">
            <h5 className="text-center">See the result:</h5>
            <div className="preview rounded p-2"
              dangerouslySetInnerHTML={{ __html: markdown }} id="preview">
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
