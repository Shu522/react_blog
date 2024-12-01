import Blog from "./component/Blog";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Blog date={"2024.12.02"} />
    </div>
  );
}

export default App;
