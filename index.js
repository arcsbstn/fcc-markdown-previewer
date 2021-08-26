function App() {

  return (
    <div>
      <h1>Markdown Previewer</h1>
      <textarea id="editor"></textarea>
      <div id="preview"></div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
