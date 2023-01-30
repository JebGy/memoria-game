import { useState } from "react";
import "./style-components/reset.css";
import "./style-components/style-view.css";
import Tile from "./Tile";

let listOfNums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
const scramble = () => {
  return listOfNums.sort(() => Math.random() - 0.5);
};
scramble();
listOfNums = scramble();
export default function Game(props) {
  let amountMatches = 0;
  const [isDisabled, setIsDisabled] = useState(false);
  const [win, setwin] = useState(false);
  const listaComplete = [];
  const [reload, setreload] = useState(props.reload);

  let matches = [];
  function handleClick(e) {
    matches.push(e.target);
    matches.map((value) => {
      value.classList.add("disabled");
      value.disabled = true;
    });
    if (matches.length <= 1) {
      if (matches[0].value === matches[1].value) {
        matches.map((value) => {
          value.classList.remove("disabled");
          value.classList.add("matched");
          amountMatches++;
          console.log(amountMatches);
          listaComplete.push(matches[0]);
          listaComplete.push(matches[1]);
          uWin(amountMatches);
          matches = [];
        });
        matches = [];
      }
    } else if (matches.length > 0) {
      clearSelection(matches);
      matches = [];
    }
  }
  const clearSelection = (m) => {
    setTimeout(() => {
      if (m[0].value !== m[1].value) {
        m.map((value) => {
          value.classList.remove("disabled");
          value.disabled = false;
        });
      }
    }, 1000);
  };

  const uWin = (m) => {
    if (m === 16) {
      setwin(true);
      return list(listOfNums);
    }
  };

  const list = (l) => {
    return (
      <div className="game">
        {l.map((value, index) => {
          return (
            <Tile
              key={index}
              id={index}
              value={value}
              onClick={handleClick}
              disabled={isDisabled}
            />
          );
        })}
      </div>
    );
  };

  return win ? (
    <div
      onClick={() => {
        setwin(false);
      }}
      className="win"
    >
      <h3>Play again?</h3>
    </div>
  ) : (
    list(listOfNums.sort(() => Math.random() - 0.5))
  );
}
