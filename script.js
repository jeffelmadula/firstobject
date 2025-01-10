// Create a Duffle Bag Object

const dufflebag = {
    name: "Sport Duffle Bag",
    volume: 50,
    color: "black",
    pocketNum: 6,
    strapLength: {
        left: 30,
        right: 30,
        mid: 40,
    },
    zipperOpen: false,
    toggleLid: function (lidStatus) {
        this.zipperOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight, lengthMid) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
        this.strapLength.mid = lengthMid;
    },
};


console.log("The Strap Length before: ", dufflebag.strapLength.left)
console.log("The Strap Length before: ", dufflebag.strapLength.right)
console.log("The Strap Length before: ", dufflebag.strapLength.mid)

dufflebag.newStrapLength(30, 30, 35)

console.log("The Strap Length after: ", dufflebag.strapLength.left)
console.log("The Strap Length after: ", dufflebag.strapLength.right)
console.log("The Strap Length after: ", dufflebag.strapLength.mid)