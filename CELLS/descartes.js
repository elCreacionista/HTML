


/*********************************** DIBUJA PATRONES EN FORMA DE CIRCULOS DE COLORES**************************/
/*******************************         (A veces se pinta tot negre i adfk)        **************************/
/*
class color{
    constructor(){
        this.setColor();
    }
    
    setColor(){
        let ran1 = Math.random() * 13;
        let ran2 = Math.random() * 13;
        console.log(ran1 + " " + ran2)
        this.ColR = Math.floor(Math.random()*255);
        this.ColG = Math.floor(Math.random()*255);
        this.ColB = Math.floor(Math.random()*255);
        console.log(this.ColR + " " + this.ColG + " " + this.ColB + " " )

        this.CorRfactor = (Math.random() * ran2) - ran1;
        this.CorGfactor = (Math.random() * ran2) - ran1;
        this.CorBfactor = (Math.random() * ran2) - ran1;
        console.log(this.CorRfactor + " " + this.CorGfactor + " " + this.CorBfactor + " " )
        
    }
        
    getColor(y, x){
        let R,G,B;
        R = Math.floor((this.CorRfactor * x * x) + (this.CorRfactor * y * y) + this.ColR) % 255;
        G = Math.floor((this.CorGfactor * x * x) + (this.CorGfactor * y * y) + this.ColG) % 255;
        B = Math.floor((this.CorBfactor * x * x) + (this.CorBfactor * y * y) + this.ColB) % 255;
        return `rgb(${R},${G},${B})`;
    }
}
let c = new color();





for (let i = 0; i < width; i ++){
    for (let j = 0; j < height; j ++){
        ctx.fillStyle = c.getColor(i,j);
        ctx.fillRect(i,j,1,1);
    }
}*/














/*********************************** RANDOM EQUATIONS PERO NO FA RES**************************/
/*
let x = 7;
let y = 13;


let Randomequation1 = "(3.42 * 3.42) + (3 * 3.42) + 3";
let Randomequation = [];
Randomequation[1] = (Math.random() * 2).toFixed(2);
Randomequation[2] = (Math.random() * 2).toFixed(2);
Randomequation[3] = (Math.random()* 2).toFixed(2);




console.log(Randomequation1)
console.log(Randomequation)



    function setColor(){
        let ran1 = Math.random() * 13;
        let ran2 = Math.random() * 13;
        this.ColR = Math.floor(Math.random()*255);
        this.ColG = Math.floor(Math.random()*255);
        this.ColB = Math.floor(Math.random()*255);

        this.CorRfactor = (Math.random() * ran2) - ran1;
        this.CorGfactor = (Math.random() * ran2) - ran1;
        this.CorBfactor = (Math.random() * ran2) - ran1;
    }


    function getColor(y, x){
        let R,G,B;
        R = Math.floor((this.CorRfactor * x * x) + (this.CorRfactor * y * y) + this.ColR) % 255;
        G = Math.floor((this.CorGfactor * x * x) + (this.CorGfactor * y * y) + this.ColG) % 255;
        B = Math.floor((this.CorBfactor * x * x) + (this.CorBfactor * y * y) + this.ColB) % 255;
        return `rgb(${R},${G},${B})`;
    }




for (let i = this.maxDiam * -1; i < this.maxDiam; i ++){
            for (let j = this.maxDiam * -1; j < this.maxDiam; j ++){
                if(!(this.membrane[j] == null) && !(this.membrane[j][i] == null)){
                    ctx.fillStyle = this.getColor(i,j);
                    ctx.fillRect(x + j,y + i,1,1);
                }
            }
        }

 */


        


/*********************************** RANDOM EQUATIONS LINEAR WITH COLORS**************************/
/************** (Creates an equation  with a given number of pairs and draw it in canvas) ********/
/*


class Equation{

    constructor(length, inputs){
        this.offsetR = Math.floor(Math.random()*255)
        this.offsetG = Math.floor(Math.random()*255)
        this.offsetB = Math.floor(Math.random()*255)
        this.length = length;
        this.inputs = inputs;
        this.equation = this.Create(length);
        console.log(this.getEquation());
    }
    Draw( ctx){
        for (let i = 0; i < width; i ++){
            for (let j = 0; j < height; j ++){
                ctx.fillStyle = this.getColor(i * .1,j * .1);
                ctx.fillRect(i,j,1,1);
            }
        }
    }
    getColor(i, j){
        let R,G,B;
        R =  Math.abs((this.offsetR + this.Solve([i,j])) % 255);
        G =  Math.abs((this.offsetG + this.Solve([i,j])) % 255);
        B =  Math.abs((this.offsetB + this.Solve([i,j])) % 255);
        return `rgb(${R},${G},${B})`;
    }
    getEquation(){
        let str = "";
        let i = 0;
        while (i < this.equation.length) {

            if (!"+-x/RLSCT".includes(this.equation.charAt(i)))
                str += Number(this.equation.charAt(i)).toFixed(0);
            else
                str += this.equation.charAt(i);
            i++;
        }
        return str;
    }



    Solve(inputs){
        let num = null;
        let num1 = null;
        let num2 = null;
        let op = null;
        let i = 0;
        while (i < this.equation.length) {

            switch (this.equation.charAt(i)){

                case "x": case "+": case "-": case "/": 
                    op = this.equation.charAt(i);
                    break;

                case "R":
                    i++;
                    num = this.Root(inputs[Number(this.equation.charAt(i))]);
                    break;
                case "L":
                    i++;
                    num = this.Log(inputs[Number(this.equation.charAt(i))]);
                    break;
                case "S":
                    i++;
                    num = this.Sen(inputs[Number(this.equation.charAt(i))]);
                    break;
                case "C":
                    i++;
                    num = this.Cos(inputs[Number(this.equation.charAt(i))]);
                    break;
                case "T":
                    i++;
                    num = this.Tan(inputs[Number(this.equation.charAt(i))]);
                    break;
            }
            if (!"+-x/RLSCT".includes(this.equation.charAt(i)) && num == null){
                num = Number(inputs[Number(this.equation.charAt(i))]);
            }

            if (num != null){
                if (num1 == null){
                    num1 = num;
                    num = null;
                } else
                if (num2 == null){
                    num2 = num;
                    num = null;
                }
            }

            if(num1 != null  && op != null && num2 != null){
                num1 = this.Sum(num1, op, num2); 
                op = null;
                num2 = null; 
            }

            i++;
        }
        return num1;
    }

    Sum(a,x,b){
        switch (x){
            case "x": return a * b;
            case "+": return a + b;
            case "-": return a - b;
            case "/": return a / b;
        }
    }


    Root(num){
        return Math.sqrt(num);
    }
    Log(num){
        return Math.log(num);
    }
    Sen(num){
        return Math.sin(num);
    }
    Cos(num){
        return Math.cos(num);
    }
    Tan(num){
        return Math.tan(num);
    }
    Create(length) {
        let str           = '';
        let characters       = 'RLSCT';
        let eq = "x+-/"
        let inpLength = this.inputs;
        let eqLength = eq.length;
        let charactersLength = characters.length;

        for ( let i = 0; i < length; i++) {
            if( Math.random() < .4){
                str += characters.charAt(Math.floor(Math.random() * charactersLength)) + Math.floor(Math.random() * inpLength);
            }
            else
                str += Math.floor(Math.random() * inpLength)
            str += eq.charAt(Math.floor(Math.random() * eqLength));
        }
        str += Math.floor(Math.random() * inpLength);
        return str
    }
}
*/

/************************** IMPROVED EQUATION WITH A SIMPLE NEURON RED***************/
/*

class Equation{

    constructor(length, inputs, equation){
        this.offsetR = Math.floor(Math.random()*255);
        this.offsetG = Math.floor(Math.random()*255);
        this.offsetB = Math.floor(Math.random()*255);
        if (equation){
            this.length = equation.length;
            this.inputs = 0;
            this.equation = equation;
            return;
        }
        this.length = length;
        this.inputs = inputs;
        this.equation = this.Create(length);
        console.log(this.getEquation());
    }




    GenerateInputs(){

    }







    Draw(ctx, input1, input2){
        if (input1){
            for (let i = 0; i < width; i ++){
                for (let j = 0; j < height; j ++){
                    ctx.fillStyle = this.getColor(input1.Solve([i,j]) ,input2.Solve([i,j]));
                    ctx.fillRect(i,j,1,1);
                }
            }
            return;
        }
        for (let i = 0; i < width; i ++){
            for (let j = 0; j < height; j ++){
                ctx.fillStyle = this.getColor(i * 1 ,j * 1);
                ctx.fillRect(i,j,1,1);
            }
        }
    }
    getColor(i, j){
        let R,G,B;
        R =  Math.abs((this.offsetR + this.Solve([i,j])) % 255);
        G =  Math.abs((this.offsetG + this.Solve([i,j])) % 255);
        B =  Math.abs((this.offsetB + this.Solve([i,j])) % 255);
        return `rgb(${R},${G},${B})`;
    }
    getEquation(){
        let str = "";
        let i = 0;
        while (i < this.equation.length) {

            if (!"+-x/RLSCT".includes(this.equation.charAt(i)))
                str += Number(this.equation.charAt(i)).toFixed(0);
            else
                str += this.equation.charAt(i);
            i++;
        }
        return str;
    }

    ModifyColors(){
        let randR = 5 - Math.random() * 10;
        let randG = 5 - Math.random() * 10;
        let randB = 5 - Math.random() * 10;
        
        this.offsetR = this.offsetR + randR;
        this.offsetG = this.offsetG + randG;
        this.offsetB = this.offsetB + randB;
    }

    Modify(){
        let num = Math.floor(Math.random() * this.equation.length);
        let char = this.equation.charAt(num);

        let characters = 'RLSCT';
        let eq = "x+-/";

        if (eq.includes(char)){
            this.equation = setCharAt(this.equation, num, eq.charAt(Math.floor(Math.random() * eq.length)));
            console.log(this.equation);
            return;
        }
        if (characters.includes(char)){
            this.equation = setCharAt(this.equation, num, characters.charAt(Math.floor(Math.random() * characters.length)));
            console.log(this.equation);
            return;
        }
        this.equation = setCharAt(this.equation, num, Math.floor(Math.random() * this.inputs));
        console.log(this.equation);


    }


    Solve(inputs){
        let num = null;
        let num1 = null;
        let num2 = null;
        let op = null;
        let i = 0;
        while (i < this.equation.length) {

            switch (this.equation.charAt(i)){

                case "x": case "+": case "-": case "/": 
                    op = this.equation.charAt(i);
                    break;

                case "R":
                    i++;
                    num = this.Root(inputs[Number(this.equation.charAt(i))]);
                    break;
                case "L":
                    i++;
                    num = this.Log(inputs[Number(this.equation.charAt(i))]);
                    break;
                case "S":
                    i++;
                    num = this.Sen(inputs[Number(this.equation.charAt(i))]);
                    break;
                case "C":
                    i++;
                    num = this.Cos(inputs[Number(this.equation.charAt(i))]);
                    break;
                case "T":
                    i++;
                    num = this.Tan(inputs[Number(this.equation.charAt(i))]);
                    break;
            }
            if (!"+-x/RLSCT".includes(this.equation.charAt(i)) && num == null){
                num = Number(inputs[Number(this.equation.charAt(i))]);
            }

            if (num != null){
                if (num1 == null){
                    num1 = num;
                    num = null;
                } else
                if (num2 == null){
                    num2 = num;
                    num = null;
                }
            }

            if(num1 != null  && op != null && num2 != null){
                num1 = this.Sum(num1, op, num2); 
                op = null;
                num2 = null; 
            }

            i++;
        }
        return num1;
    }

    Sum(a,x,b){
        switch (x){
            case "x": return a * b;
            case "+": return a + b;
            case "-": return a - b;
            case "/": return a / b;
        }
    }


    Root(num){
        return Math.sqrt(num);
    }
    Log(num){
        return Math.log(num);
    }
    Sen(num){
        return Math.sin(num);
    }
    Cos(num){
        return Math.cos(num);
    }
    Tan(num){
        return Math.tan(num);
    }
    Create(length) {
        let str           = '';
        let characters       = 'RLSCT';
        let eq = "x+-/"
        let inpLength = this.inputs;
        let eqLength = eq.length;
        let charactersLength = characters.length;

        for ( let i = 0; i < length; i++) {
            if( Math.random() < .4){
                str += characters.charAt(Math.floor(Math.random() * charactersLength)) + Math.floor(Math.random() * inpLength);
            }
            else
                str += Math.floor(Math.random() * inpLength)
            str += eq.charAt(Math.floor(Math.random() * eqLength));
        }
        str += Math.floor(Math.random() * inpLength);
        return str
    }
}


class RedNeuronal{

    constructor(layers, layersize, complication, inputs, outputs){
        this.red = this.Create(layers, layersize, complication, inputs, outputs);


    }
    Create(layers, layersize, complication, inputs, outputs){
        let red = [];
        for (let i = 0; i < layers - 1; i++){
            red[i] = [];
            console.log("Layer number: " + i)

            for (let j = 0; j < layersize; j++){
                if (i == 0)
                    red[i][j] = new Equation(complication, inputs);
                else
                    red[i][j] = new Equation(complication, red[i-1].length);
            }
        }
        console.log("Last layer")
        
        red[layers - 1] = [];
        for (let j = 0; j < outputs; j++){
            red[layers - 1][j] = new Equation(complication, red[red.length - 1].length);
        }
        return red;
    }

    Modify(){
        let i = Math.floor(Math.random()*this.red.length)
        let j = Math.floor(Math.random()*this.red[i].length)
        this.red[i][j].Modify();
    }




    Solve(inputs){
        let results = [];
        for (let i = 0; i < this.red.length; i++){
            results[i] = [];

            for (let j = 0; j < this.red[i].length; j++){
                if (i == 0)
                    results[i][j] = this.red[i][j].Solve(inputs);
                else
                    results[i][j] = this.red[i][j].Solve(results[i - 1])



                if (isNaN(results[i][j])){
                    results[i][j] = 1;
                }
                if (results[i][j] == Infinity){
                    results[i][j] = 255;
                }
                if (results[i][j] == -Infinity){
                    results[i][j] = -255;
                }
                
            }
        }
        return results[results.length - 1]
    }
}

*/


/******************************************** NO FUNCIONA *************************************/
/**************************************** (The same de arriba) ********************************/


/*


class Entity{
    constructor(pos, inp, outp, redN){
        this.life = 100;
        this.totalLife = 0;
        if (typeof redN === 'undefined'){
            this.red = new RedNeuronal(4,6,2,inp,outp);
            this.SetColor();
            this.position = pos.GetPos();
        }
        else{
            this.getColor(redN);
            this.position = redN.position.GetPos();
            this.red = new RedNeuronal(0,0,0,0,0,redN);
        }
        
        this.lastPlace = this.position.GetPos();
    }
    SetColor(){
        let offsetR = Math.floor(Math.random()*255);
        let offsetG = Math.floor(Math.random()*255);
        let offsetB = Math.floor(Math.random()*255);
        this.color = [offsetR, offsetG, offsetB];
    }
    getColor(redN){
        this.color = [redN.color[0], redN.color[1], redN.color[2]]
    }
    Update(ext){
        this.totalLife ++;
        let M = this.red.Solve(ext);
        this.position.Move(this.getDirection(M));
        if (this.totalLife % 100 == 0){
            if (this.position.GetDist(this.lastPlace) < 100)
                this.life = 0;
            else
                this.lastPlace = this.position.GetPos();
        }
        //this.TestPosition();
    }
    TestPosition(){

        if (this.life <= 0)
            return true;
        if(this.position.x <= 0){
            this.position.x = 1;
            return true;
        }
        if(this.position.y <= 0){
            this.position.y = 1;
            return true;
        }
        if(this.position.x >= height){
            this.position.x = height;
            return true;
        }
        if(this.position.y >= width){
            this.position.y = width;
            return true;
        }
        return false;   
    }
    Modify(){
        this.red.Modify();
    }


    getDirection(M){
        let y = Math.abs(M[0] % 2).toFixed(0) - 1;
        let x = Math.abs(M[1] % 2).toFixed(0) - 1;

        if (x == 0 && y == 0)
            this.life --;
        return new Point(y, x);
    }





}
let Env = [];
let Cant = 30;
let food = new Point(Math.floor(Math.random() * width), Math.floor(Math.random() * height));
let killed = 0;
let premied = 0;
CreateFood();


function CreateFood(){
    food = new Point(Math.floor(Math.random() * width), Math.floor(Math.random() * height));

}

function FillEnv(i){
    killed++;
    Env[i] = new Entity(new Point(Math.floor(Math.random() * width), Math.floor(Math.random() * height)), 6, 2);
}


function PremiateEnv(i){
    let NewEntity = new Entity(Env[i].position, 6, 2, Env[i]);
    console.log("Father")
    console.log(Env[i])
    console.log("Son")
    console.log(NewEntity)
    NewEntity.Modify();
    Env.push(NewEntity);
    premied++;
}

function CreateEnv(){

    for (let i = 0; i < Cant; i ++){
        FillEnv(i)
        //Env[i] = new Entity(new Point(Math.floor(Math.random() * width), Math.floor(Math.random() * height)), 6, 2);
    }
}
function UpdateEnv(){
    fov();
    for (let i = 0; i < Env.length; i ++){

        if(Env[i].position.GetDist(food) < 5){
            PremiateEnv(i);
            CreateFood();
            continue;
        }
        if(Env[i].totalLife > 10000)
            PremiateEnv(i);
        if (Env[i].TestPosition()){
            FillEnv(i);
            continue;
        }
        let datos = [
            Env[i].position.y , Env[i].position.x, 
            height - Env[i].position.y , width - Env[i].position.x,
            food.y , food.x
        ]
        Env[i].Update(datos);
        DrawSmth(Env[i].position, ConvertRGB(Env[i].color));
    }
    if (Math.random() < .01){
        //food.Move(RandomDirection());
        console.log("killed: " + killed + " Premied: " + premied + " Total Creatures: " + Env.length)
    }
    
    DrawSmthF(food, "green");
}

CreateEnv();



*/