const questions=[
    {
        q:"HTML stands for",
        a:"HyperText Markup Language",
        b:"HyperText Markup Language",
        c:"HyperText Markup Language",
        d:"HyperText Markup Language",
        correct:"a"
    },
    {
        q:"CSS stands for",
        a:"Cascading Style Sheet",
        b:"Cascading Style Sheet",
        c:"Cascading Style Sheet",
        d:"Cascading Style Sheet",
        correct:"a"
    },
    {
        q:"XML stands for",
        a:"Extensible Markup Language",
        b:"Extensible Markup Language",
        c:"Extensible Markup Language",
        d:"Extensible Markup Language",
        correct:"a"
    },
    {
        q:"DRY stands for",
        a:"Do not Repeat yourself",
        b:"Do not Repeat yourself",
        c:"Do not Repeat yourself",
        d:"Do not Repeat yourself",
        correct:"a"
    }
]
const quiz = document.getElementById("quiz");
const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitButton=document.getElementById('button');
const answerEls=document.querySelectorAll(".answer");       
let currentQuestion = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
    deSelect();
    const currentQuizData = questions[currentQuestion];
    questionEl.innerHTML=currentQuizData.q;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
}
function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked)
        {
            answer=answerEl.id;
        }
    })
    return answer;
}
function deSelect(){
    answerEls.forEach(answerEl=>{
        answerEl.checked=false;
    })
}
submitButton.addEventListener('click',()=>{
    const answer = getSelected();
    if(answer)
    {
        if(answer==questions[currentQuestion].correct)
            score++;  
        currentQuestion++; 
        if(currentQuestion===4)
           {
                window.alert("Quiz Ended");
                quiz.innerHTML=`
                <h2  style="text-align: center;margin-top:1rem;">
                You answered ${score} out of ${questions.length}
                </h2>
                <button onclick="location.reload()">Reload Quiz</button>
                `

            }
        else
            {
                loadQuiz();
            }
    }
    else
        window.alert("No option selected");
    
});