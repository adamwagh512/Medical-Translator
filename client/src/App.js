// import './App.css';
// import Medical_Questions from "./pages/Medical-Pages/Medical_Questions";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import LanguageSelect from "./pages/LanguageSelect";
import NewFormPhys from "./pages/NewFormPhys";
import PatientIntake from "./pages/PatientIntake";
import PatientPortal from "./pages/PatientPortal";
import PhysicianPage from "./pages/PhysicianPage";
import SignUp from "./pages/SignUp"

function App() {
  const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/SignUp"
              element={<SignUp />}
            />
            <Route
              path="/LanguageSelect"
              element={<LanguageSelect />}
            />
            <Route
              path="/NewFormPhys"
              element={<NewFormPhys />}
            />
            <Route
              path="/PatientIntake"
              element={<PatientIntake />}
            />
            <Route
              path="/PatientPortal"
              element={<PatientPortal />}
            />
            <Route
              path="/PhysicianPage"
              element={<PhysicianPage />}
            />
             <Route
              path="/LanguageSelect"
              element={<LanguageSelect />}
            />
          </Routes>
        </BrowserRouter>
        </ApolloProvider >
  );
}

export default App;
