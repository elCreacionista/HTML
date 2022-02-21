class Equation{

    constructor(length, inputs, eq){
        this.offsetR = Math.floor(Math.random()*255);
        this.offsetG = Math.floor(Math.random()*255);
        this.offsetB = Math.floor(Math.random()*255);
        if (typeof eq === 'undefined'){
            this.length = length;
            this.inputs = inputs;

            if(length == 0)
                this.eq = this.Create0();
            else
                this.eq = this.Create(length);
            return;
        
        }
        this.length = eq.length;
        this.inputs = 0;
        this.eq = eq;
        //console.log(this.getEquation());
    }


    Create0() {
        let characters       = 'RLSCT';
        let inpLength = this.inputs;
        let charactersLength = characters.length;

            if( Math.random() < .8)
                return characters.charAt(Math.floor(Math.random() * charactersLength)) + Math.floor(Math.random() * inpLength);

            return "" + Math.floor(Math.random() * inpLength);
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
        while (i < this.eq.length) {

            if (!"+-x/RLSCT".includes(this.eq.charAt(i)))
                str += Number(this.eq.charAt(i)).toFixed(0);
            else
                str += this.eq.charAt(i);
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
        let num = Math.floor(Math.random() * this.eq.eq.length);
        console.log(this.eq.eq);
        console.log(num);
        let char = this.eq.eq.charAt(num);

        let characters = 'RLSCT';
        let eq = "x+-/";

        if (eq.includes(char)){
            this.eq = setCharAt(this.eq.eq, num, eq.eq.charAt(Math.floor(Math.random() * eq.eq.length)));
            //console.log(this.eq);
            return;
        }
        if (characters.includes(char)){
            this.eq.eq = setCharAt(this.eq.eq, num, characters.charAt(Math.floor(Math.random() * characters.length)));
            //console.log(this.eq);
            return;
        }
        this.eq.eq = setCharAt(this.eq.eq, num, Math.floor(Math.random() * this.inputs));
        //console.log(this.eq);


    }


    Solve(inputs){
        let num = null;
        let num1 = null;
        let num2 = null;
        let op = null;
        let i = 0;
        while (i < this.eq.eq.length) {

            switch (this.eq.eq.charAt(i)){

                case "x": case "+": case "-": case "/": 
                    op = this.eq.eq.charAt(i);
                    break;

                case "R":
                    i++;
                    num = this.Root(inputs[Number(this.eq.eq.charAt(i))]);
                    break;
                case "L":
                    i++;
                    num = this.Log(inputs[Number(this.eq.eq.charAt(i))]);
                    break;
                case "S":
                    i++;
                    num = this.Sen(inputs[Number(this.eq.eq.charAt(i))]);
                    break;
                case "C":
                    i++;
                    num = this.Cos(inputs[Number(this.eq.eq.charAt(i))]);
                    break;
                case "T":
                    i++;
                    num = this.Tan(inputs[Number(this.eq.eq.charAt(i))]);
                    break;
            }
            if (!"+-x/RLSCT".includes(this.eq.eq.charAt(i)) && num == null){
                num = Number(inputs[Number(this.eq.eq.charAt(i))]);
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

    constructor(layers, layersize, complication, inputs, outputs, RedN){
        if (typeof RedN === 'undefined')
            this.red = this.Create(layers, layersize, complication, inputs, outputs);
        else
            this.red = this.Copy(RedN);

    }

    Copy(RedN){
        
        console.log("i len: " + RedN.red.red.length);
        let red = [];
        for (let i = 0; i < RedN.red.red.length; i++){
            red[i] = [];
            console.log("j len: " + RedN.red.red[i].length)
            for (let j = 0; j < RedN.red.red[i].length; j++){
                console.log(j)
                    red[i][j] = new Equation(0, 0, RedN.red.red[i][j]);
            }
        }
        console.log(RedN.red.red);
        return red;

    }

    Create(layers, layersize, complication, inputs, outputs){
        let red = [];
        for (let i = 0; i < layers - 1; i++){
            red[i] = [];
            //console.log("Layer number: " + i)

            for (let j = 0; j < layersize; j++){
                if (i == 0)
                    red[i][j] = new Equation(complication, inputs);
                else
                    red[i][j] = new Equation(complication, red[i-1].length);
            }
        }
        //console.log("Last layer")
        
        red[layers - 1] = [];
        for (let j = 0; j < outputs; j++){
            red[layers - 1][j] = new Equation(complication, red[red.length - 1].length);
        }
        return red;
    }

    Modify(){
        let i = Math.floor(Math.random()*this.red.length);
        let j = Math.floor(Math.random()*this.red[i].length);
        console.log(this.red);
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