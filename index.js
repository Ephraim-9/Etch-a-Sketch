const containerDiv = document.getElementById('container');
const grid = () => {
        const innerContainerDiv = document.createElement('div');
        innerContainerDiv.className = 'container row';
        containerDiv.appendChild(innerContainerDiv);
        for (let j = 0; j < 16; j++) {
            const newDivC = document.createElement('div');
            newDivC.className = 'col square';
            innerContainerDiv.appendChild(newDivC);
    }
}
for (let i = 0; i < 16; i++) {
    grid()
}

/* for (let j = 0; j < 5; j++) {
    const newDivC = document.createElement('div');
    newDivC.className = 'col square';
    newDivC.textContent = `Div number ${j + 1}`;
    containerDiv.appendChild(newDivC);    
}
 */

/*     for (let i = 0; i < 5; i++) {
        const newDivR = document.createElement('div');
        newDivR.className = 'row square';
        newDivR.textContent = `Div number ${i + 1}`;
        containerDiv.appendChild(newDivR);
  }  
 */