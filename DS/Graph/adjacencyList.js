class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(item) {
        this.items[this.tail] = item;
        this.tail++;
        return item;
    }
    dequeue() {
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }
}

class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        if (!this.adjList.has(v)) {
            this.adjList.set(v, []);
        }
    }

    addEdge(a, b) {
        if (this.adjList.has(a) && this.adjList.has(b)) {
            console.log(`a : ${a} b : ${b}`);
            this.adjList.get(a).push(b);
            this.adjList.get(b).push(a);
        }
    }

    printGraph() {
        for (let i of this.adjList.keys()) {
            console.log(`${i} => ${this.adjList.get(i)}`);
        }
    }

    dfs(startingNode) {
        let visited = {};
        this.DFSutil(startingNode, visited);
    }

    DFSutil(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);

        let getNeighbours = this.adjList.get(vertex);
        for (let i in getNeighbours) {
            let getElement = getNeighbours[i];
            if(visited[getElement] != true) {
                this.DFSutil(getElement, visited);
            }
        }
    }

    bfs(startingNode) {
        let visited = {};
        let q = new Queue();

        visited[startingNode] = true;
        q.enqueue(startingNode);

        let queueLength = Object.keys(q).length;

        while (queueLength !== 0) {
            let getQueueElement = q.dequeue();
            if (getQueueElement == undefined || getQueueElement == null) {break;}
            console.log(getQueueElement);

            let getNeighbours = this.adjList.get(getQueueElement);
            for (let i in getNeighbours) {
                let neigh = getNeighbours[i];
                if (visited[neigh] != true) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }
}

let g = new Graph(5);


let input = require("readline-sync");
let val;
while (val != "break") {
    val = input.question("Add Vertex :");
    if (val == "break") {break;}
    g.addVertex(+val);
}

let a, b;
while (a != "break" && b != "break") {
    a = input.question("a :");
    if (a == "break") {break;}
    b = input.question("b :");
    if (b == "break") {break;}
    g.addEdge(+a, +b);
}

g.printGraph();

g.bfs(1);

//g.bfs(1);