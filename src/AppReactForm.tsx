import React from "react"
import { useForm } from "react-hook-form"

type Inputs = {
  name: string
  phone: string
  email: string
  genre: string
}

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div>
      <div className="container">
        <h1 className="container-title">Cadastro</h1>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            {...register("name", {
              required: { value: true, message: "Nome Obrigatório!" },
            })}
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>

          <label htmlFor="">E-mail:</label>
          <input
            type="text"
            {...register("email", {
              required: { value: true, message: "E-mail obrigatorio!" },
            })}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>

          <label htmlFor="">Telefone:</label>
          <input
            {...register("phone", {
              required: { value: true, message: "Telefone obrigatório!" },
            })}
          />
          <p style={{ color: "red" }}>{errors.phone?.message}</p>

          <select {...register("genre")}>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
          </select>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default App
