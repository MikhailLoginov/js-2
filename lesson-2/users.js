const buildUsersTable = function (users) {
  let counter = 1;
  let usersWrapper = document.querySelector('.users-wrapper');
  for (user of users) {
    console.log(user);
    if (user.name != undefined && user.email != undefined && user.age != undefined) {
      let userDiv = document.createElement('div');
      userDiv.innerHTML = `${counter}. <strong>Name</strong>: ${user.name}, <strong>E-Mail</strong>: ${user.email}, <strong>Age</strong>: ${user.age}`;
      usersWrapper.appendChild(userDiv);
    }
    counter++;
  }
}

fetch('http://89.108.65.123/user').then((res) => {
  res.json().then((res) => {
    buildUsersTable(res);
  })
}).catch((err) => {
  console.error('server unavailable', err);
});


document.querySelector('button').addEventListener('click', () => {
  let name = document.querySelector('input[aria-label="Username"]').value;
  let email = document.querySelector('input[aria-label="E-Mail"]').value;
  let age = document.querySelector('input[aria-label="Age"]').value;
  if (user.name != undefined && user.email != undefined && user.age != undefined) {
    fetch('http://89.108.65.123/user', {
      method: 'post',
      body: {
        name,
        email,
        age
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  }
});