// import './App.css';
import Medical_Questions from "./pages/Medical-Pages/Medical_Questions";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Home from "./pages/Home";
import LanguageSelect from "./pages/LanguageSelect";
import NewFormPhys from "./pages/newFormPhys";
import PatientIntake from "./pages/patientIntake";
import PatientPortal from "./pages/PatientPortal";
import PhysicianPage from "./pages/PhysicianPage";
import Signup from "./pages/Signup";

function App() {
  const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <Signup /> */}
        <div className="container">
          {/* <Home /> */}

          {/* <LanguageSelect /> */}

          {/* <NewFormPhys /> */}

        {/* <PatientIntake /> */}

        {/* <PatientPortal /> */}

        <PhysicianPage />

        {/* <Medical_Questions /> */}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
