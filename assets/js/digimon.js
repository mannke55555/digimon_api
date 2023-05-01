fetch('https://digimon-api.vercel.app/api/digimon')
  .then(response => response.json())
  .then(data => {
    const digimonData = document.getElementById('digimon-data');
    data.forEach(digimon => {
      const name = digimon.name;
      const nameElement = document.createElement('p');
      nameElement.textContent = name;
      digimonData.appendChild(nameElement);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos', error);
  });