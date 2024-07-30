const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const result = document.querySelector('.result');
const sound = document.querySelector('#sound');
const btn = document.querySelector('#search-btn');

btn.addEventListener('click',()=>{
    let inpWord = document.querySelector('#input-word').value;
    // console.log(inpWord)

    fetch(`${url}${inpWord}`)
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
                <button onclick = playSound()>
                <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[2].partOfSpeech}</p>
                <p>/${data[0].phonetics[1].text}</p>
            </div>
            <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
            // <p class="word-example"></p>`

            sound.setAttribute('src',`${data[0].phonetics[0].audio}`)
            console.log(sound)
        })
        .catch(()=>{
            result.innerHTML = `<h3 class = "error">Word not found</h3>`
        })

})


function playSound(){
    sound.play()
}