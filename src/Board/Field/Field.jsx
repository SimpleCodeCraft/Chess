import React from 'react';
import './Field.css';
import Cell from "./Cell/Cell.jsx";

export default function Field(props){
  const rows = 8;
  const cols = 8;
  const gameCells = [];

  for(let i = 8; i >= 1 ; i--){
    gameCells[i] = [];
    for(let j = 1; j <= 8; j++){
      
      const dataCell = {
        file: i,
        rank: j
      };

      switch(j){
      case 1:{
          dataCell.position = `a${i}`;
          break;
        }
      case 2:{
        dataCell.position = `b${i}`;
        break;
      }
      case 3:{
        dataCell.position = `c${i}`
        break;
      }
      case 4:{
        dataCell.position = `d${i}`;
        break;
      }
      case 5:{
        dataCell.position = `e${i}`;
        break;
      }
      case 6:{
        dataCell.position = `f${i}`;
        break;
      }
      case 7:{
        dataCell.position = `g${i}`;
        break;
      }
      case 8:{
        dataCell.position = `h${i}`;
        break;
      }
      }

      gameCells[i][j] = dataCell;

    }
  }

  console.log(gameCells[5][5].rank, gameCells[5][5].position);

  return(
    <div className={'field'}>
      {gameCells.map((cell, index)=>{
        if(index){
          return (<Cell />)
        }
      })}
    </div>
    
  )
}
