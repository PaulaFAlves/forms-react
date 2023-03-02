import React from "react"
import { render } from "react-dom"
import App from "./App"
import "./styles.css"
import AppReactForm from "./AppReactForm"

const container = document.getElementById("root")
render(
  <>
    <App />
    <AppReactForm />
  </>,
  container
)
