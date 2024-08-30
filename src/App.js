import BgImg from './img/pattern-background-desktop.svg';
import Card from './components/Card'

const App = ()=>{
  return(
    <div style={{
      background: `url(${BgImg})`,
      backgroundColor: '#e1e9fd',
      height: '100vh', 
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Card/>

    </div>
  )
}

export default App;