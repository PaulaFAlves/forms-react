import React, { useState } from "react"

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    genre: "",
  })
  const [errors, setErrors] = useState({ name: "", phone: "", email: "" })

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    let errors = { name: "", phone: "", email: "" }

    if (!user.name) errors.name = "Nome deve ser preenchido!"
    if (!user.email) errors.phone = "E-mail deve ser preenchido!"
    if (!user.phone) errors.email = "Telefone deve ser preenchido!"

    return errors
  }

  const handleSubmit = () => {
    const validation = validate()
    if (Object.keys(validation).length) setErrors(validation)
  }

  return (
    <div>
      <div className="container">
        <h1 className="container-title">Cadastro</h1>
        <div className="form-container">
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
          <label htmlFor="">E-mail:</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
          <label htmlFor="">Telefone:</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.phone}</p>
          <select value={user.genre} onChange={handleChange} name="genre">
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
          </select>
          <input type="submit" value="Enviar" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default App
