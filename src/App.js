import './App.css';
import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <div style={styles.App} className="App">
      <NavBar />
      <HomeScreen />
    </div>
  );
}

const styles = {
  App: {
    fontFamily: 'Inter',
    lineHeight: '1.5',
    color: '#ffffff',
    fontSize: 30,
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center'
  },
  
}

export default App;
