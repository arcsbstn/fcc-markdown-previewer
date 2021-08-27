class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "Lorem ipsum..."
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
    const previewStyle = editorStyle;

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
              style={previewStyle}>{this.state.markdown}</div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
