class Element{
    constructor(n, i, m, g, tf, te, e){
        this.name = n;
        this.index = i;
        this.mol = m;
        this.grupo = g;
        this.tempF = tf;
        this.tempE = te;
        this.electrons = e;
        this.creatediv();
    }
    creatediv(){
        this.dom = document.createElement("div");
        this.dom.classList.add("element");
        this.dom.classList.add(this.grupo);
        this.dom.innerHTML = `<p id = "n"><b>${this.name}</b></p><p id = "i">i:${this.index}</p><p id = "m">${this.mol + " , " + this.electrons}</p><p id = "t">${this.tempF + " , " + this.tempE}</p>`
        main.appendChild(this.dom);
    }
}

const main = document.querySelector("main");
let grupos = ["conf1", "conf2", "conf3", "conf4", "GASOS NOBLES",];
let names = [/* 1g,2g,3g,4g,5g,6g,7g,8g,9g,...*/ 
            "H",  "Be", "B",  "O",  "He",     /* 1 capa electr */
            "Li", "C",  "N",  "F",  "Ne",    /* 2 capa electr */
            "Na", "Mg", "Al", "Si", "P",     /* 3 capa electr */
            "K",  "S",  "Cl", "Ca", "Ar",    /* 4 capa electr */
            "Sc", "Ti", "V",  "Cr", "Mn",    /* 5 capa electr */
            "Fe", "Co", "Ni", "Cu", "Zn",    /* 6 capa electr */
            "Ga", "Ge", "As", "Se", "Br",    /* 7 capa electr */
            "Rb", "Kr", "Sr", "Y",  "Zr",    /* 8 capa electr */
            "Nb", "Mo", "Tc", "Ru", "Rh",    /* 9 capa electr */
            "Pd", "Ag", "Cd", "In", "Sn"];   /* 10 capa electr */
let elements = [];
for (let i = 0; i < 50; i++){
    let e = i % 10 + 1;
    let ind = i + 1;
    let m = ind * 2;
    let g = "g" + e;
    let tf = i;
    let te = i  + 20;
    elements.push(new Element(names[i], ind, m, g, tf, te, e));
}

