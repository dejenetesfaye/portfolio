import MainPage from './comp/MainPage';
import MainPageMin from './comp/MainPageMin';
import SideBar from './comp/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      <MainPage />
      <MainPageMin />
    </div>
  );
}

export default App;
