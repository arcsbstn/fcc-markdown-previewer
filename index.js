class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
  }

  render() {
    const defaultText = "Lorem ipsum...";
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
            <h4><badge>Editor</badge></h4>
            <div className="mark-input">
              <textarea id="editor"
                className="input"
                style={editorStyle}>{defaultText}</textarea>
            </div>
          </div>
          <div className="col text-center">
            <h4><badge>Preview</badge></h4>
            <div id="preview"
              style={previewStyle}></div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
