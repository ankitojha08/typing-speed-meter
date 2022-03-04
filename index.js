const shown = document.getElementsByClassName("shown")[0];
const textArea = document.getElementById("textArea");

const strings = "He was sitting in a trash can with high street class. It was at that moment that he learned there are certain parts of the body that you should never Nair. The worst thing about being at the top of the career ladder is that there\'s a long way to fall. He watched the dancing piglets with panda bear tummies in the swimming pool. She had that tint of craziness in her soul that made her believe she could actually make a difference. Cursive writing is the best way to build a race track. She had a habit of taking showers in lemonade. Stop waiting for exceptional things to just happen. They say that dogs are man's best friend, but this cat was setting out to sabotage that theory. She wondered what his eyes were saying beneath his mirrored sunglasses. His confidence would have bee admirable if it wasn't for his stupidity. Truth in advertising and dinosaurs with skateboards have much in common. He had reached the point where he was paranoid about being paranoid. Of course, she loves her pink bunny slippers. They desperately needed another drummer since the current one only knew how to play bongos. He was all business when he wore his clown suit. It was the best sandcastle he had ever seen. Most shark attacks occur about 10 feet from the beach since that\'s where the people are. I like to leave work after my eight-hour tea-break. She lived on Monkey Jungle Road and that seemed to explain all of her strangeness.";

strings.split('').forEach((char) => {
    const span = document.createElement("span");
    span.innerText = char;
    shown.appendChild(span);
})

const spanArray = document.querySelectorAll("span");

var time;
let startedAlready = false;

// function startGame() {

//     if (!startedAlready) {
//         startedAlready = true;

//         shown.scroll(0, 0);

//         time = 60;
//         setInterval(timer, 1000);

//         textCheck();
//     } else {
//         textCheck();
//     }
// }


function reset() {
    startedAlready = false;

    textArea.value = "";
    shown.scroll(0, 0);
    time = 60;

    document.getElementById("accuracy").innerHTML = 0;
    resetSpan();

    timer();
}

function resetSpan() {
    spanArray.forEach((e) => {
        e.classList.remove("correct");
        e.classList.remove("wrong");
    });
}


function textCheck() {

    if (!startedAlready) {

        startedAlready = true;

        time = 60;
        setInterval(timer, 1000);
    }

    let textValue = textArea.value;
    let currentTyped = textValue.split('');

    let error = 0;

    spanArray.forEach((char, index) => {
        if (currentTyped[index] != null)
            if (currentTyped[index] == char.innerText) {
                char.classList.remove("wrong");
                char.classList.add("correct");

            } else {
                char.classList.add("wrong");
                char.classList.remove("correct");

                error++;
            }
    })

    // console.log("error:", error);
    let charactersTyped = textValue.length;
    let correctCharacters = charactersTyped - error;
    let accuracy = ((correctCharacters / charactersTyped) * 100);

    document.getElementById("accuracy").innerHTML = Math.floor(accuracy);

    if ((charactersTyped % 80) === 0) {
        shown.scrollBy(0, 30);
    }
}

function timer() {

    if (!startedAlready) {
        time = 60;
        document.getElementById("timer").innerHTML = time + 's';
        return;
    } else if (time > 0) {
        time--;

    }

    document.getElementById("timer").innerHTML = time + 's';
}