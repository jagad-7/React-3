import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import ErrorBoundry from './ErrorBoundry';
import ClickCounter from './HigherComponent/ClickCounter';
import HoverCounter from './HigherComponent/HoverCounter';
import ClickCounterTwo from './HigherComponent/ClickCounterTwo';
import HoverCountTwo from './HigherComponent/HoverCountTwo';
import User from './User';
import Counter from './Counter';
import ComponentC from './HigherComponent/Context/ComponentC';
import { UserProvider } from './HigherComponent/Context/UserContext';

function App() {
  return (
    <div className="App">
    <ErrorBoundry>
    <Hero heroName="Superman" />
      <Hero heroName="Ironman" />
    </ErrorBoundry> 
    <ClickCounter />
    <HoverCounter /> 
     <ClickCounterTwo />
    <HoverCountTwo />
    <User name={(isLoggedIn)=> isLoggedIn ? 'jagdeesh' : 'Guest'} />

    <Counter render ={(count, incrementCount) =>(
      <ClickCounterTwo count={count} incrementCount={incrementCount} />
    ) }/>

    <Counter render ={(count, incrementCount) =>(
      <HoverCountTwo count={count} incrementCount={incrementCount} />
    ) }/>

    <UserProvider value='Jagadeesh'>
    <ComponentC  />
    </UserProvider>

    </div>
  );
}

export default App;
