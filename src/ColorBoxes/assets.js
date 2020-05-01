let colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
            'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 
            'red', 'silver', 'teal', 'white', 'yellow'];


let choiceFromArray = (arr)=>{
    return arr[Math.floor(Math.random()*arr.length)]
}
module.exports = {colors,choiceFromArray}