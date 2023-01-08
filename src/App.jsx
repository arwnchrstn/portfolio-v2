import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <main className="main-container container-fluid">
        <div className="row h-100">
          <div className="col-md-2 col-lg-1 g-0 order-2 order-md-1">
            <Header />
          </div>
          <div className="col-md-10 col-lg-11 g-0 order-1 order-md-2">
            <MainContent />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
