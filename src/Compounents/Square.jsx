import React from "react";
import Board from "./Board";
import Style from "./Square.module.css";
import { useState } from "react";

function Square() {
  const [input, setinput] = useState(Array(9).fill(null)); //all the 9 box are empty at starting.
  const [isXturn, setisXturn] = useState(true);

  const checkWinner = () => {
    const winnerPt = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let value of winnerPt){
      const [a,b,c]=value;
      if(input[a]!==null && input[a]===input[b] && input[a]===input[c]){
        return[a];
      }
    }

    return false;
  };

  const winner=checkWinner();
  const checkTie=()=>{
    if(input.every((value)=>value!==null )){
      return(
        <p className={Style.tied}>Math Tied</p>
      )
    }
  }

  const tie=checkTie();
  function handleOnClick(index) {
    if (input[index] !== null || winner || tie) {
      return;
    }
    const updateInput = [...input]; //agar phala sa koi input ho to usa ko he return karta ha.
    updateInput[index] = isXturn ? "X" : "O";
    setinput(updateInput);
    setisXturn(!isXturn);
  }

  function handleReset(){
setinput(Array(9).fill(null))
  }
  return (
    <>
      <div className={Style.container}>
        <h1 className={Style.para}>TIC TAC TOE</h1>

{
  (winner && !tie) ? (<p className={Style.winningmsg}>Congratulations! player { winner} wins</p>) : (tie ? <p className={Style.tiemsg}> OOP! Match is Tied </p>: <p className={Style.player}> Current player is : {isXturn ? "X" : "O"} </p>)
}




        <div className={Style.boxes}>
          <div className={Style.box1}>
            <Board onClick={() => handleOnClick(0)} value={input[0]}></Board>
          </div>
          <div className={Style.box2}>
            <Board onClick={() => handleOnClick(1)} value={input[1]}></Board>
          </div>
          <div className={Style.box3}>
            <Board onClick={() => handleOnClick(2)} value={input[2]}></Board>
          </div>
          <div className={Style.box4}>
            <Board onClick={() => handleOnClick(3)} value={input[3]}></Board>
          </div>
          <div className={Style.box5}>
            <Board onClick={() => handleOnClick(4)} value={input[4]}></Board>
          </div>
          <div className={Style.box6}>
            <Board onClick={() => handleOnClick(5)} value={input[5]}></Board>
          </div>
          <div className={Style.box7}>
            <Board onClick={() => handleOnClick(6)} value={input[6]}></Board>
          </div>
          <div className={Style.box8}>
            <Board onClick={() => handleOnClick(7)} value={input[7]}></Board>
          </div>
          <div className={Style.box9}>
            <Board onClick={() => handleOnClick(8)} value={input[8]}></Board>
          </div>
        </div>
        {(winner || tie) && <div className={Style.playagain}>
        <button className={Style.btnplayagain} onClick={handleReset}>Play again</button></div>}
      </div>

      
    </>
  );
}

export default Square;
