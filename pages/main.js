async function consulta() {
  const result  = await fetch("http://localhost:80000")
  const data = await result.json()
  return data;
}


const body = document.body
const dataSection = document.createElement('section');
//funcion ejecutable para manejar la consulta
(async () => {
  const data = await consulta ();//realiza la consulta una vez
  dataSection.innerHTML = `${Object.keys(data)} : ${Object.values(data)}`;//usa los datos obtenidos
})();

body.appendChild(dataSection)
