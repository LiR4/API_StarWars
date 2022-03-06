//Declaração de variaveis 
let nome_p
let altura
let peso
let cor_cabelo
let cor_olho
let cor_pele
let nasc
let genero


//Função para buscar dados dos personagens 
function buscar() {
  let Nome = document.getElementById('nome').value

  let url = `https://swapi.dev/api/people/?search=${Nome}`

  fetch(url) //Através nome digitado no input é possível buscar dados sobre o personagem, além de filmes, planetas e naves utilizadas
    .then(prom => prom.json())
    .then(info => {
      console.log(info)

      //Informações do personagem
      nome_p = info['results'][0]['name']
      altura = info['results'][0]['height']
      peso = info['results'][0]['mass']
      cor_cabelo = info['results'][0]['hair_color']
      cor_pele = info['results'][0]['skin_color']
      cor_olho = info['results'][0]['eye_color']
      nasc = info['results'][0]['birth_year']
      genero = info['results'][0]['gender']


      document.getElementById('nome_c').value = 'Nome do personagem: ' + nome_p 

      document.getElementById('altura').value = 'Altura: ' + altura

      document.getElementById('peso').value = 'Peso: ' + peso + 'kg'
      
      document.getElementById('cor_c').value = 'Cor do cabelo: ' + cor_cabelo

      document.getElementById('cor_p').value = 'Cor da pele: ' + cor_pele

      document.getElementById('cor_o').value = 'Cor o olho: ' + cor_olho

      document.getElementById('nasc').value = 'Data de nascimento: ' + nasc

      document.getElementById('genero').value = 'Gênero: ' + genero 
      

    })
}