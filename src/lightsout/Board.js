import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows:5,
    ncols:5,
    chanceLightStartsOn:0.4,
  }

  constructor(props) {
    super(props);
    this.state = {
      board : this.createBoard(),
      hasWon:false

    }
    // this.flipCellsAround = this.flipCellsAround.bind(this)
    this.createBoard = this.createBoard.bind(this)
    this.restartGame = this.restartGame.bind(this)
    // TODO: set initial state
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    for (let i=0;i<this.props.nrows;i++){
      let row = []
      for(let j=0;j<this.props.ncols;j++){
        row.push(Math.random()>this.props.chanceLightStartsOn)
      }
      board.push(row)
    }
    // TODO: create array-of-arrays of true/false values
    return board
  }

  /* handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    // console.table(y,x,"Flip")


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    function flip(y,x){
      // flipCell(y,x)
      // flipCell(y-1,x)
      // flipCell(y+1,x)
      // flipCell(y,x+1)
      // flipCell(y,x-1)
      for(let i=-1;i<2;i+=1){
        for(let j=-1;j<2;j+=1){
          ( j===0 || i===0 )&& flipCell(y+i,x+j)
          // console.table(y+i,x+j)
        }
      }
    }

    flip(y,x)
    // TODO: determine is the game has been won
    // let hasWon = board.every((row)=>row.every(ele=>ele===false));
    let hasWon = board.every((row)=>row.every(ele=>!ele));
    this.setState({board, hasWon});
  }

  restartGame() {
    this.setState({board:this.createBoard(),hasWon:false})    
  }


  /** Render game board or winning message. */

  render() {

    let tableTemplate = [];
    for (let y=0;y<this.props.nrows;y++){
      let row = [];
      for(let x=0;x<this.props.ncols;x++){
        let coord = `${y}-${x}`
        row.push(<Cell isLit={this.state.board[y][x]} key={coord} flipCellsAroundMe={()=>this.flipCellsAround(coord)}/>)
      }
      tableTemplate.push(<tr key={y}>{row}</tr>)
    }


    if(this.state.hasWon){
      return (
        <div >
          <div className="neon">
            <h1>You Won</h1>
          </div>
        
        <button className="flux" onClick={()=>{this.restartGame()}}>
          Restart Game
        </button>
        </div>
      )
    }

    return (
      <div >
        <div className="Board-title">
          <div className="neon">Lights</div>
          <div className="flux">Out</div>
        </div>
        <table className="Board">
          <tbody>
            {tableTemplate}
          </tbody>
        </table>
      </div>
    )

    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}


export default Board;
