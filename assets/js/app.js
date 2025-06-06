const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location'); // Faltaba este

async function displayUser(username) {
  $n.textContent = 'Cargando...';
  try {
    //se arreglo el await
    const response = await fetch(`${usersEndpoint}/${username}`);
    //faltaba data
    const data = await response.json();
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski');
