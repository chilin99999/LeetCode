// #463 Island Perimeter - Easy

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var perimeter = 0;
    var row_len = grid.length;
    var col_len = grid[0].length;
    grid.forEach(function(row, i) {
        row.forEach(function(col, j) {
           if(col == 1)
           {
               if(i<=0 || grid[i-1][j] === 0) perimeter++;
               if(j<=0 || grid[i][j-1] === 0) perimeter++;
               if(i>=row_len-1 || grid[i+1][j] === 0) perimeter++;
               if(j>=col_len-1 || grid[i][j+1] === 0) perimeter++;
           }
        });
    });
    return perimeter;
};
