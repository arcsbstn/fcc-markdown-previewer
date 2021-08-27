class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
     
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.      
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown })
  }

  render() {
    const editorStyle = {
      backgroundColor: "#eee",
      width: "400px",
      height: "80vh",
      margin: "0 auto",
      padding: "10px"
    };
    const previewStyle = Object.assign(
      {},
      editorStyle,
      { textAlign: "left" });

    return (
      <div>
        <h1 className="text-center">Markdown Previewer</h1>
        <div className="row">
          <div className="col text-center">
            {/*---------- Editor -----------*/}
            <h4><badge>Editor</badge></h4>
            <div className="mark-input">
              <textarea id="editor"
                className="input"
                style={editorStyle}
                value={this.state.markdown}
                onChange={(e) => {
                  this.updateMarkdown(e.target.value)
                }}></textarea>
            </div>
          </div>
          <div className="col text-center">
            {/*---------- Preview -----------*/}
            <h4><badge>Preview</badge></h4>
            <div id="preview"
              className="overflow-auto"
              style={previewStyle}
              dangerouslySetInnerHTML={{
                __html: marked(this.state.markdown)
              }}></div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
