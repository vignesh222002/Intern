class Graph {
    constructor() {
        this.adj = new Map();
        this.noOfVertex = this.adj.size;
    }

    addVertex(v) {
        if (!this.adj.has(v)) {
            this.adj.set(v, []);
        }
    }

    addEdge(a, b) {
        if (this.adj.has(a) && this.adj.has(b)) {
            console.log(`a : ${a} b : ${b}`);
            this.adj.get(a).push(b);
            this.adj.get(b).push(a);
        }
    }

    printGraph() {
        for (let i of this.adj.keys()) {
            console.log(`${i} => ${this.adj.get(i)}`);
        }
    }

    adjMatrix() {
        let arr = [];
        for (let i of this.adj.keys()) {
            let arr1 = [];
            for (let j of this.adj.keys()) {
                if (this.adj.get(i).includes(j)) {
                    arr1.push(1);
                }
                else {
                    arr1.push(0);
                }
            }
            arr.push(arr1);
        }
        console.log(arr);
    }

}

let g = new Graph();

let input = require("readline-sync");
let val;
while (val != "break") {
    val = input.question("Vertex : ");
    if (val == "break") {break;}
    g.addVertex(+val);
}
let a, b;
while (a != "break" && b != "break") {
    a = input.question("a : ");
    if (a == "break") {break;}
    b = input.question("b : ");
    if (b == "break") {break;}
    g.addEdge(+a, +b);
}


g.printGraph();

g.adjMatrix();