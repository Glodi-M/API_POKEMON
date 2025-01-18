const button = document.getElementById('button')
const image = document.getElementById('image')
const pokeName = document.getElementById('name')
const pokeNumber = document.getElementById('number')


// Creation de la founction

const changePokemon = async () => {
    // génération du nombre aléatoire entre 1 et 150
    const randomNUmber = Math.ceil(Math.random() * 150) + 1;

    // generation de l'url de l'api + le nombre aléatoire

    const requestString = `https://pokeapi.co/api/v2/pokemon/${randomNUmber}`

    // faire une requete à l'api

    const data = await fetch(requestString)
    
    // transformer la reponse en json

    const reponse =  await data.json()
    console.log(reponse)


    // mettre à jour l'image
    image.src = reponse.sprites.front_default

    // mettre à jour le nom
    pokeName.textContent = reponse.name

    // mettre à jour le numéro
    pokeNumber.textContent = `# ${reponse.id}`

}


// écouter le click sur le bouton


changePokemon()
button.addEventListener("click", changePokemon)