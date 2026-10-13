function Login() {
  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Login</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" placeholder="Digite seu email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="senha" className="form-label">Senha</label>
          <input type="password" id="senha" className="form-control" placeholder="Digite sua senha" required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
