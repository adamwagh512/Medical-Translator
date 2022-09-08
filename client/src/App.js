// import './App.css';
// import Medical_Questions from "./pages/Medical-Pages/Medical_Questions"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from "./pages/home";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>

    <div className="App">
      
      <Home />
    </div>
    </ApolloProvider>
  );
}

export default App;
