const board = [
  [0,0,3,0,0,0,2,0,0],
  [0,6,0,9,8,0,0,4,3],
  [4,9,0,0,3,1,0,0,6],
  [9,0,7,0,0,0,8,6,0],
  [0,4,0,0,9,8,0,0,0],
  [0,0,5,4,0,7,1,0,9],
  [6,0,0,0,0,3,9,0,5],
  [0,0,0,0,0,0,0,0,0],
  [2,0,9,0,5,6,0,3,8],
];

const printBoard = () => {
  const colors = [
    ['light','light','light','dark','dark','dark','light','light','light'],
    ['light','light','light','dark','dark','dark','light','light','light'],
    ['light','light','light','dark','dark','dark','light','light','light'],
    ['dark','dark','dark','light','light','light','dark','dark','dark'],
    ['dark','dark','dark','light','light','light','dark','dark','dark'],
    ['dark','dark','dark','light','light','light','dark','dark','dark'],
    ['light','light','light','dark','dark','dark','light','light','light'],
    ['light','light','light','dark','dark','dark','light','light','light'],
    ['light','light','light','dark','dark','dark','light','light','light'],
  ];

  const boardDiv = document.getElementById('board');
  boardDiv.innerHTML = '';  
  
  for (let i = 0; i < board.length; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement('div');
      cell.setAttribute('class', `cell ${colors[i][j]}`);
      if (board[i][j] !== 0) {
        cell.innerHTML = board[i][j];  
      }
      row.appendChild(cell);
    }
    
    boardDiv.appendChild(row);  
  }
}

const solveboard = () => {

  printBoard();
}

printBoard();