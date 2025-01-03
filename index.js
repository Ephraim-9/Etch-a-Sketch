const containerDiv = document.getElementById('container');
const grid = (m) => {
        const innerContainerDiv = document.createElement('div');
        innerContainerDiv.className = 'innerContainer row';
        containerDiv.appendChild(innerContainerDiv);
        for (let j = 0; j < m; j++) {
            const newDivC = document.createElement('div');
            newDivC.className = 'col square';
            innerContainerDiv.appendChild(newDivC);
            newDivC.addEventListener('mouseenter', () => {
                newDivC.style.backgroundColor = 'black';
            });            
    }
}

const makeGrid = (n = 16, m = n) => {
    for (let i = 0; i < n; i++) {
        grid(m)
    }
}
makeGrid();
const reset = () => {
    containerDiv.innerHTML = '';
}
let size = 0;
const getSize = () => {
    let s = prompt(("Enter value (1-100)"), 16);
    size = s;
}
const gridButton = document.getElementById('makeButton');
gridButton.addEventListener('click', () => {
    reset();
    do {
        getSize();
    } while (size < 1 || size > 100);
    makeGrid(size);
});