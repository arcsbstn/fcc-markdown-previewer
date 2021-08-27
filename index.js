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
    const containerStyle = {
      height: "90vh",
      width: "90%",
      margin: "2% auto"
    }
    const editorStyle = {
      backgroundColor: "#eee",
      border: "0",
      height: "80vh",
      padding: "15px",
      width: "100%"
    };
    const previewStyle = Object.assign(
      {},
      editorStyle,
      { textAlign: "left" });

    return (
      <div style={containerStyle}>
        <div className="row text-center">
          <h1>Markdown Previewer</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-4 text-center">
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
          <div className="col-4 text-center">
            {/*---------- Preview -----------*/}
            <h4><badge>Preview</badge></h4>
            <div id="preview"
              className="overflow-auto"
              style={previewStyle}
              dangerouslySetInnerHTML={{
                __html: marked(this.state.markdown, { breaks: true, gfm: true })
              }}></div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
