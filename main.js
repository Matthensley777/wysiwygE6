var famousPeople = [

    {
        title: "Prime Minister",
        name: "Winston Churchill",
        id: "Winston",
        bio: "Sir Winston Leonard Spencer-Churchill, KG, OM, CH, TD, PC, PCc, DL, FRS, RA was a British politician and statesman who served as the Prime Minister of the United Kingdom from 1940 to 1945 and again from 1951 to 1955.",
        image: "https://s-media-cache-ak0.pinimg.com/originals/26/12/10/261210634101239e4b261aa055241e79.jpg",
        lifespan: {
            birth: 1874,
            death: 1965
        }
    },

    {
        title: "General",
        name: "George S Patton",
        id: "George",
        bio: "General George Smith Patton Jr. was a senior officer of the United States Army who commanded the U.S. Seventh Army in the Mediterranean and European theaters of World War II, but is best known for his leadership of the U.S.",
        image: "https://s-media-cache-ak0.pinimg.com/originals/03/78/3e/03783e0244d822f51e4380d15c307ed5.jpg",
        lifespan: {
            birth: 1885,
            death: 1945
        }
    },

    {
        title: "General",
        name: "Douglas MacArthur",
        id: "Douglas",
        bio: "Douglas MacArthur was an American five-star general and field marshal of the Philippine Army. He was Chief of Staff of the United States Army during the 1930s and played a prominent role in the Pacific theater during World War II.",
        image: "http://warinthepacific.yolasite.com/resources/With%20pipe.jpg",
        lifespan: {
            birth: 1880,
            death: 1964
        }
    },

    {
        title: "President",
        name: "Franklin D. Roosevelt",
        id: "Franklin",
        bio: "Franklin Delano Roosevelt, commonly known as FDR, was an American statesman and political leader who served as the 32nd President of the United States from 1933 until his death in 1945.",
        image: "https://s-media-cache-ak0.pinimg.com/736x/dc/d0/cd/dcd0cd6d9f37616f62b793ec09011a33--franklin-roosevelt-eleanor-roosevelt.jpg",
        lifespan: {
            birth: 1882,
            death: 1945
        }
    }
]

//calling the string to print in the DOM, 

var outputEl = document.getElementById("famousPeople");
for (var counter = 0; counter < famousPeople.length; counter++) {
    outputEl.innerHTML += `<div class="personCard" id="${famousPeople[counter].id}">
    <header class="child"><h3 class="grandChild">${famousPeople[counter].name}</h3></header> <section class="child"><p class="grandChild">${famousPeople[counter].bio}</p>
    <img class="grandChild" src="${famousPeople[counter].image}"/></section>
    <footer class="child">Lifespan ${famousPeople[counter].lifespan.birth} to ${famousPeople[counter].lifespan.death}</footer></div>`;
}
// selectedCard is the bio of each card. 
var selectedCard;

outputEl.addEventListener("click", selectBio);

//this function is allowing user to select each card by itself.

function selectBio(e) {

    var cards = document.getElementsByClassName("personCard");
    //looping through the cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.border = "solid black 1px";
    }

    if (e.target.classList.contains("personCard")) {
        e.target.style.border = "dotted 2px";
        selectedCard = e.target.childNodes[3].childNodes[0]
    } else if (e.target.classList.contains("child")) {
        e.target.parentNode.style.border = "dotted 2px";
        selectedCard = e.target.parentNode.childNodes[3].childNodes[0]
    } else if (e.target.classList.contains("grandChild")) {
        e.target.parentNode.parentNode.style.border = "dotted 2px";
        selectedCard = e.target.parentNode.parentNode.childNodes[3].childNodes[0]
    };
    document.getElementById("text").focus();
}

document.getElementById("text").addEventListener("keyup", clearInput);

//function to clear the text box on enter and allow typing in bio

function clearInput(e) {
    if (e.keyCode === 13) {
        document.getElementById("text").value = "";
    } else {
        selectedCard.innerHTML = document.getElementById("text").value;
    }
}
















