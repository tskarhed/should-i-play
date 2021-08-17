function yesOrNo() {
    return Math.random() < 0.95 ? "yes" : "no";
}

const loader = document.querySelector("#loading");

setTimeout(function (){
    loader.classList.add("hidden");
    const answerEl = document.querySelector(`.${yesOrNo()}`);
    answerEl.classList.remove("hidden")
}, 4000)
