function fillGrid(n){
  const gridContainer = document.querySelector(".gridContainer");
  const size = 512/n;
  
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  for (let i = 0; i < n*n; i++){
    let newBox = document.createElement('div');
    newBox.style.cssText = `height: ${size}px; width: ${size}px`;
    newBox.addEventListener('mouseenter', () => {
      newBox.classList.toggle('grid_toggle')})
    newBox.addEventListener('mouseleave', () => {
      newBox.classList.toggle('grid_toggle')})
    gridContainer.appendChild(newBox);
  }
}

