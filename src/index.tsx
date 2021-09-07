import ReactDOM from 'react-dom';
import { kcContext } from "./KcApp/kcContext";
import { KcApp } from "./KcApp";

ReactDOM.render(
  kcContext === undefined ?
    <h1>no kcContext</h1> :
    <KcApp kcContext={kcContext} />,
  document.getElementById("root")
);
