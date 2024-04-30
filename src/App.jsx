import React, { useState } from 'react'
import "./Dark.css"

const App = () => {
  const [isDark, setIsDark] = useState(false)
  const changeThemeToggleBtn = () => {
    setIsDark(!isDark)
  }
  return (
    <header style={{ backgroundColor: isDark ? "#000000" : "#ffffff" }}>
      <h1 style={{ color: isDark ? "yellow" : "#000000" }}>Welcome <br />  React JS</h1>
      <button style={{ color: isDark ? "yellow" : "#000000", border: isDark ? "1px solid yellow" : "1px solid #000000" }} onClick={changeThemeToggleBtn}>{ isDark ? "Dark Theme" : "White Theme" }</button>
    </header>
  )
}
export default App