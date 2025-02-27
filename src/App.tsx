import { createGlobalStyle } from "styled-components"
import Header from "./components/Header"

const CSSReset = createGlobalStyle`
*,::after,::before{box-sizing:border-box}*{margin:0}body{line-height:1.5;-webkit-font-smoothing:antialiased}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}p{text-wrap:pretty}h1,h2,h3,h4,h5,h6{text-wrap:balance}#__next,#root{isolation:isolate}
`

function App() {
  return (
    <>
      <CSSReset />
      <Header />
    </>
  )
}
export default App
