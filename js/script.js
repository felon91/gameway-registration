document.querySelector('#registration').addEventListener('submit', registration);
document.querySelector('#authorization').addEventListener('submit', authorization);
document.querySelector('#reset').addEventListener('submit', resetPassword);
document.querySelector('.form__promo-link').addEventListener('click', showDiscountForm);

Array.from(document.querySelectorAll('.switchForm')).forEach(function(item) {
  item.addEventListener('click', slideBlock);
});

const labels = {
  'errorEmail': 'Учетной записи с таким email не существует',
  'successReset': 'Мы отправили письмо на ivanov@gmail.com. Перейдите по ссылке в письме, чтобы сменить пароль.',
};

function toggleClass(firstBlock, secondBlock) {
  document.querySelector(`[data-type="${firstBlock}"]`).classList.remove('active');
  document.querySelector(`[data-type="${firstBlock}"]`).classList.add('inactive');
  setTimeout(function() {
    document.querySelector(`[data-type="${secondBlock}"]`).classList.remove('inactive');
    document.querySelector(`[data-type="${secondBlock}"]`).classList.add('active');
  }, 500);
}

function slideBlock(evt) {
  evt.preventDefault();
  const blockToBeOpened = evt.target.getAttribute('href').slice(1);
  const typeCurrentBlock = evt.target.dataset.block;

  switch (blockToBeOpened) {
    case 'auth': {
      toggleClass(typeCurrentBlock, blockToBeOpened);
      break;
    }
    case 'reg': {
      toggleClass(typeCurrentBlock, blockToBeOpened);
      break;
    }
    case 'reset': {
      toggleClass(typeCurrentBlock, blockToBeOpened);
      break;
    }
  }
}

function registration(evt) {
  evt.preventDefault();
  const email = this.querySelector('.email').value;
  const password = this.querySelector('.pass').value;
  alert(`Регистрация - Email: ${email}, Пароль: ${password}`);
}

function authorization(evt) {
  evt.preventDefault();
  const email = this.querySelector('.email').value;
  const password = this.querySelector('.pass').value;
  alert(`Авторизация - Email: ${email}, Пароль: ${password}`);
}

function resetPassword(evt) {
  evt.preventDefault();
  const email = this.querySelector('.email').value;
  alert(`Восстановление: Email: ${email}`);
}

function showNotification(options) {
  const $notificationElement = options.typeBlock.querySelector('.reg-auth__notification');
  $notificationElement.classList.add(options.class);
  $notificationElement.innerHTML = `<p class="${options.class}__text">${options.message}</p>`;
  setTimeout(function () {
    $notificationElement.classList.add('hide');
    setTimeout(function () {
      $notificationElement.classList.remove('hide');
      $notificationElement.innerHTML = '';
    }, 500);
  }, 5000);
}

function showDiscountForm(evt) {
  evt.preventDefault();
  this.nextElementSibling.querySelector('input').removeAttribute('disabled');
  this.nextElementSibling.classList.add('show');
}

showNotification({
  'typeBlock': document.querySelector('[data-type="reg"]'),
  'class': 'error',
  'message': labels.errorEmail
});