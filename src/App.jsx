import React from 'react';
import PortfolioHolder from './components/PortfolioHolder';
import Loading from './components/Loading';

function App() {
  // Simulating loading state with a setTimeout
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after a delay (simulating loading)
    }, 5000); // Simulating a 2-second delay
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> // Display the Loading component while isLoading is true
      ) : (
        <PortfolioHolder /> // Display your main content once isLoading is false
      )}
    </>
  );
}

export default App;
