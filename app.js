"use strict";

let formulaire = document.forms.calculusForm
let responseCard = document.querySelector(".js-alert")
let case1 = document.querySelector(".js-card-1")
let case2 = document.querySelector(".js-card-2")
let bonneReponseCount = 0
let mauvaiseReponseCount = 0
let numberRandom1 = Math.floor(Math.random() * 10)
let numberRandom2 = Math.floor(Math.random() * 10)
let bonneReponseCard = document.querySelector(".js-good-reponse-count")
case1.textContent = numberRandom1
case2.textContent = numberRandom2

function additionRandomNumber(event) {

    event.preventDefault()
    let resultUser = Number(formulaire.userResponse.value)
    case1.classList.add("js-first-number")
    case2.classList.add("js-second-number")

    if (numberRandom1 + numberRandom2 === resultUser) {
        responseCard.classList.remove("alert-danger")
        responseCard.classList.remove("alert-info")
        responseCard.classList.add("alert-success")
        bonneReponseCount++
        bonneReponseCard.innerHTML = bonneReponseCount + " bonne réponse <br>" + mauvaiseReponseCount + " mauvaise réponse"
        responseCard.textContent = "Bravo ma chérie !!!"


        var audioSuccess = new Audio("succes.wav");
        audioSuccess.play();


        function reloadPage() {
            responseCard.textContent = "Allez continue !!!"

            let resultUser = Number(formulaire.userResponse.value)
            case1.classList.add("js-first-number")
            case2.classList.add("js-second-number")
            numberRandom1 = Math.floor(Math.random() * 10)
            numberRandom2 = Math.floor(Math.random() * 10)
            case1.textContent = numberRandom1
            case2.textContent = numberRandom2
        }

        setTimeout(reloadPage, 2000)

    } else {
        var audioErreur = new Audio("erreur.wav");
        audioErreur.play();

        mauvaiseReponseCount++
        responseCard.classList.remove("alert-info")
        responseCard.classList.add("alert-danger")
        bonneReponseCard.innerHTML = bonneReponseCount + " bonne réponse <br> " + mauvaiseReponseCount + " mauvaise réponse"
        responseCard.textContent = " mauvaise réponse, ce n'est pas grave essaye encore !"

    }
}
formulaire.addEventListener("submit", additionRandomNumber)