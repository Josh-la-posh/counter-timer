import "./LoginPage.css";
function LoginForm({ userName, setUserName, password, setPassword, setUser }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserName(userName);
        setPassword(password);

        if (userName.length > 2 && password.length > 4) {
          setUser(true);
        }
        
    }
  return (
    <form onSubmit={handleSubmit} className="login__form">
      <input type="text" placeholder="Username" required minLength={3} value={userName} onChange={(e) => setUserName(e.target.value)}/>
      <input type="password" placeholder="Password" required minLength={5} value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Enter</button>
    </form>
  );
}

export default LoginForm;
