function yesOrNo() {
    return Math.random() < 0.99 ? "yes" : "no";
}

const loader = document.querySelector("#loading");

setTimeout(function (){
    loader.classList.add("hidden");
    const answerEl = docuemnt.querySelector(`.${yesOrNo()}`);
    answerEl.classList.remove("hidden")
}, 2000)