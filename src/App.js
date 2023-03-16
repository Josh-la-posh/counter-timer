import Header from "./components/Header/Header";
import PageContent from "./components/PageContent/PageContent";
import LoginPage from "./components/Login/LoginPage";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  function Counter() {
    return (
      <div>
        <Header userName={userName}/>
        <PageContent />
      </div>
    );
  }

  return (
    <div className="App">
      {user ? (
        <Counter />
      ) : (
        <LoginPage
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          setUser={setUser}
        />
      )}
    </div>
  );
}

export default App;
