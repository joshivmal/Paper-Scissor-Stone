let userScore = 0 ;
let compScore = 0 ;

let userMove ;

let image = document.querySelectorAll("img") ;
let text = document.querySelector("#msg") ;

image.forEach(img => 
    {
        img.addEventListener("click",()=>
        {
            userMove = img.getAttribute("id") ;
            playGame(userMove) ;
        })

    
});

const compChoice = ()=>
{
    let arr = ["rock","paper","scissors"] ;

    let compCh = arr[Math.floor(Math.random()*3 )] ;
    
    return compCh ;

}

const matchDraw = ()=>
{
    
    text.innerText = "Match draw" ;
}

const compWin = ()=>
{
    // console.log("computer wins");
    let text = document.querySelector("#msg") ;
    text.innerText = "Computer Wins" ;
    text.style.backgroundColor = "red" ;
    compScore++ ;

    let compS = document.querySelector("#comp-score") ;
    compS.innerText = compScore ;

}

const userWinn =()=>
{
   
    text.innerText = "User Wins" ;
    text.style.backgroundColor = "green" ;
    userScore++ ;

    let compS = document.querySelector("#user-score") ;
    compS.innerText = userScore ;

}


let playGame = (userMove)=>
{
    const compMove = compChoice() ;

    console.log("computer->", compMove ,"userMove->",userMove) ;

    if( compMove === userMove)
    {
        matchDraw() ;
    }
    else
    {
        let userWin ;
        if( compMove === "rock" )
        {
            // paper, scissor
             userWin =  userMove === "paper" ? true : false ;
        }
        else if( compMove == "paper")
        {
            // scissor , stone
            userWin = userMove === "scissors" ? true : false ;
        }
        else
        {
            // stone, paper
            userWin = userMove === "rock" ? true : false ;

        }

        if(userWin)
        {
            userWinn() ;
        }
        else
        {
            compWin() ;
        }

    }


}