const wraps = document.querySelectorAll('.wrapper');
wraps.forEach((wrap, i) => {
  const boxes = wrap.querySelectorAll('.box');
  boxes.forEach((box, index) => {
    if (i == 0) {
      box.innerHTML = index == 0 ? 'firstbox' : 'secondbox';
    } else {
      box.innerText = `box ${++index}`;
    }
  });
});