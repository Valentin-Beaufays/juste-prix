let min=20;
let max=80;

function randomGenerator(){
    do{
        var random=Math.round(Math.random()*80);
    }while(random<min);
    return random;
}

function test(userInput, randomNumber){
    if(userInput<randomNumber){
        return 1;
    }
    else if(userInput>randomNumber){
        return 2;
    }
    else if(userInput===randomNumber){
        return 3;
    }
    else{
        return 4;//error
    }
}

function gameloop(){
    let randomNumber=randomGenerator();
    let playerTry=0;
    let userInput=0;
    let message=0;
    let boring=0;
    let sentence="";

    do{
        
        boring=0;
        playerTry++;

        do{

            switch(boring){
                case 0:
                    sentence="Essaye de deviner a quel nombre je pense...\n il se trouve entre "+min+" et "+max+":";
                    boring++;
                break;

                case 1:
                    sentence="Bon allez se tromper une fois ça arrive..\n entre un nombre entre "+min+" et "+max+":";
                    boring++;
                break;

                case 2:
                    sentence="Il me semble que tu devrais change de lunette..:\nil faut que tu entre un\nNOMBRE ENTRE "+min+" ET "+max+"!\n...S'il te plait..";
                    boring++;
                break;

                case 3:
                    sentence="Je commence à me dire que tu le fais exprès là...\n"+min+"<TON NOMBRE ICI<"+max+":";
                    boring++;
                break;

                case 4:
                    sentence=("ok..\ntestons autre chose..");
                    sentence="*...essayons la psychologie inversée...*\nNe rentre pas un nombre entre "+min+" et "+max+".";
                    boring++;
                break;

                case 5:
                    sentence="bon.. Je ne rèpeterai pas les règles cette fois.\nC'est ta dernière chance..";
                    boring++;
                break;

                default:
                   sentence="Je t'ai surestimé.. je laisse tomber..";
                    boring=9001;
                    console.log("boring is over 9000!!!!!!!!!!!");
                break;
            }

            if(boring<9000){
                userInput=Number(prompt(sentence));
            }
            else{
                alert(sentence);
            }

        }while(((isNaN(userInput)||userInput>80||userInput<20))&&boring<9000);

        if(boring<9000){

            message=test(userInput,randomNumber);

            switch(message){
                case 1:
                    alert("C'est plus!");
                break;
                case 2:
                    alert("C'est moins!");
                break;
                case 3:
                    alert("C'est juste!\nTu as trouvé en "+playerTry+" coups!");
                break;
                default:
                    alert("C'est plutôt gênant..\nCe n'était pas sensé arriver...\nj'ai rencontré un GROS INSECTE.. :'(");
                break;
            }

        }

    }while((message<3||message>3)&&boring<9000);

}
