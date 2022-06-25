const questions = document.querySelectorAll(".questionanswer")

console.log(questions);
for(let i =0;i<questions.length;i++){

    console.log(questions[i])
    questions[i].addEventListener("click",e=>{
       reset(i);
       //if(e.target !== e.currentTarget) return;
        let question = e.currentTarget.children[0];
        let answer = e.currentTarget.children[1];
       
        question.classList.add("activequestion")
        question.classList.remove("question")
        answer.classList.add("flex")
        answer.classList.remove("hidden")
        
    },false)
}

const reset = (activeIndex)=>{
    for(let i =0;i<questions.length;i++){
        if (i == activeIndex){continue;}
    questions[i].children[0].classList.remove("activequestion");
    questions[i].children[0].classList.add("question");
    questions[i].children[1].classList.add("hidden");
    questions[i].children[1].classList.remove("flex");
   
    }
    
}

