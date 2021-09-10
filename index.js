class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

This cat says hello!
![hello cat](https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/bc/ba/16/bcba16f8-49ce-c6b9-6226-d7d85a8556ea/source/60x60bb.jpg)

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
  1. Do you hear the people sing?
`
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row-container row align-items-center justify-content-center">
          <div className="row w-75 mark-input">
            <div className="col-md-6">
              <h1 className="title">Markdown</h1><div className="line"></div>
              <textarea id="editor"
                className="input"
                value={this.state.markdown}
                onChange={(e) => {
                  this.updateMarkdown(e.target.value)
                }}></textarea>
            </div>
            <div className="col-md-6">
              <h1 className="title">Preview</h1><div className="line"></div>
              <div id="preview"
                className="overflow-auto"
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown, { breaks: true, gfm: true })
                }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
