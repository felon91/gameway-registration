const $authBlocks = document.querySelectorAll('.reg-auth__block');
document.querySelector('[data-type="reg"]').addEventListener('animationend', addActiveClass);
document.querySelector('.reg-auth').addEventListener('click', {handleEvent: addInActiveClass, 'authBlocks': $authBlocks}, addInActiveClass);

function addActiveClass(evt) {
  console.log(evt);
}

function addInActiveClass(evt, elements) {
  evt.preventDefault();
  console.log(evt, this);
  elements.forEach(function(item) {
    item.classList.add('inactive');
  });
}