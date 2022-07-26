import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

ReactDom.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 리액트 18 이전 버전
// ReactDom.render(
//    <App/>,
//    document.getElementById("root")
// )
