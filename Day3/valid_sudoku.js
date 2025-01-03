function isValidSudoku(board){
    let rowSet = new Array(9);
    let colSet = new Array(9);
    let gridSet = new Array(9);


    for(let i=0;i<9;i++){
        rowSet[i] = new Set();
        colSet[i] = new Set();
        gridSet[i] = new Set();
    }

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let value = board[i][j];
            if(value === '.'){
                continue;
            }

            let gridNo = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            let isPresentRow = rowSet[i].has(value);
            let isPresentCol = colSet[j].has(value);
            let isPresentGrid = gridSet[gridNo].has(value);


            if(isPresentRow || isPresentCol || isPresentGrid){
                return false;
            }
            rowSet[i].add(value);
            colSet[j].add(value);
            gridSet[gridNo].add(value);
        }
    }
    return true;
}
console.log(isValidSudoku([["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","8",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]]));   // true

    // TC = O(1)
    // SC = O(1)