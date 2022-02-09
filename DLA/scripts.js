const main = document.querySelector("#main");
main.style.height = "500px";
main.style.width = "500px";
main.style.backgroundColor = "black";
main.style.position = "relative";

let particles = [];
let tree = [];
let treeSize = 50;
let string = "";
const nParticles = 300;
const SIZE = 10;


for (let i = 0; i < treeSize; i++){
    createNewParticle(i);
    let particul = new particle(250, 250, 20, i);
    particul.ceate();
    particul.contact = true;
    tree[i] = particul;
}

for (let i = 0; i < nParticles; i++){
    createNewParticle(i + treeSize);
    particles[i] = new particle(480,Math.random()*500,SIZE, i + treeSize);
    particles[i].ceate();
}
let iterval = setInterval(time, 10);
function time(){
    for (let k = 0; k < 1; k++){
        for (let i = 1; i < nParticles; i++){
            if (!particles[i].contact){
                particles[i].move();
                for (let j = 0; j < treeSize; j++){
                    if (particles[i] !== tree[j] ){
                        if (particles[i].isTouching(tree[j])){
                            particles[i].contact = true;
                            tree[treeSize++] = particles[i];
                            //createNewParticle(nParticles + treeSize);
                            //particles[i] = new particle(Math.random()*500,Math.random()*500,SIZE, nParticles + treeSize);
                        }
                    }
                }
                particles[i].draw();
            }
        }
    }
    for (let i = 0; i < treeSize; i++){
        tree[i].draw();
    }
}
function createNewParticle(id){
    let div = document.createElement("div");
    div.id = "particle" + id;
    div.classList.add("particle");
    main.appendChild(div);
}