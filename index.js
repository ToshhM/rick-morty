
const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const heads = document.querySelectorAll(".head"); // querySelectorAll = tableau
let lastCloud;

let timeUp = false;
let score = 0;
function randomTime(min,max){
    return Math.round(Math.random()*(max-min) + min); // Cette fonction renvoie un nb aléatoire dans un intervalle
} 
function randomCloud(clouds){
    const indexCloud = Math.floor(Math.random()* clouds.length); //représente le tableau clouds 
    const cloudSelect = clouds[indexCloud];
    if (cloudSelect == lastCloud){
        return randomCloud(clouds); 
    }
    return cloudSelect; //récurssion, si le meme buisson est appéle en relance la fonction pour en choisir une autre pour pas que sa retombe sur le meme
}
function showHead(){
    const time = randomTime(600,1000);
    const cloud = randomCloud(clouds);//random les clouds donc a paramètre de notre fonction on met les holes sélectionnée
    cloud.classList.add("up"); // cloud cest c'est les holes. on lui rajoute la class up car elle leve les tete (top :0% cff css)
    setTimeout(()=>{
        if(!timeUp) showHead(); // If timeUp différent de faux, donc si il y a encore du temps en affiche dautre tete donc on supprime la classe up et on la remet ailleurs
        cloud.classList.remove("up"); // relancer
    },time);//exécute la fonction après un temps donné ici en loccurence, le time const
}

heads.forEach(head => head.addEventListener("click", function(e){
    if(!e.isTrusted) return;
    score++;
    this.classList.remove("up"); //supprime la tete
    scoreBoard.textContent = score ;

}) 
);// forEach permet de parcourir un élément du tableau // head = les éléments du tableau heads
