import './App.css';
import BoxData from './components/box-data';
import Footer from './components/Footer';
import Header from './components/Header';
import LineCharts from "./components/line-charts";
 
function App() {
  return (
    <div className="page-container">
        <Header />
        <main>
          <BoxData/>
          <LineCharts />
        </main>
      <Footer/>
    </div>
  );
}

export default App;