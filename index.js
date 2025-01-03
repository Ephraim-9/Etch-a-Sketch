const containerDiv = document.getElementById('container');
const grid = () => {
        const innerContainerDiv = document.createElement('div');
        innerContainerDiv.className = 'container row';
        containerDiv.appendChild(innerContainerDiv);
        for (let j = 0; j < 16; j++) {
            const newDivC = document.createElement('div');
            newDivC.className = 'col square';
            innerContainerDiv.appendChild(newDivC);
            newDivC.addEventListener('mouseenter', () => {
                newDivC.style.backgroundColor = 'black';
            });            
    }
}
for (let i = 0; i < 16; i++) {
    grid()
}

