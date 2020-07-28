function getSadInterval() {
    return Date.now() + 700;
}

function getGoneInterval() {
    return Date.now() + Math.floor(Math.random() * 18000) + 500;
}

function getHungryInterval() {
    return Date.now() + Math.floor(Math.random() * 5000) + 1000;
}

const moles = [
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector("#hole-0"),
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector("#hole-1"),
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector("#hole-2"),
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector("#hole-3"),
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: true,
        node: document.querySelector("#hole-4"),
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector("#hole-5"),
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector("#hole-6"),
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: true,
        node: document.querySelector("#hole-7"),
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector("#hole-8"),
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector("#hole-9"),
    },
];
function getNextStatus(mole) {
    switch (mole.status) {
        case "fed":
        case "sad":
            mole.next = getSadInterval();
            mole.status = "leaving";
            mole.node.children[0].src = "./mole-game/mole-leaving.png";
            break;
        case "leaving":
            mole.next = getGoneInterval();
            mole.status = "gone";
            mole.node.children[0].classList.add("gone");
            break;
        case "gone":
            mole.status = "hungry";
            mole.next = getHungryInterval();
            mole.node.children[0].classList.remove("gone");
            mole.node.children[0].classList.add("hungry");
            mole.node.children[0].src = "./mole-game/mole-hungry.png";
            break;
        case "hungry":
            mole.status = "sad";
            mole.next = getSadInterval();
            mole.node.children[0].classList.remove("hungry");
            mole.node.children[0].src = "./mole-game/mole-sad.png";
    }
}

function feed(event) {
    console.log(event.target);

    if (
        event.target.tagName !== "IMG" ||
        !event.target.classList.contains("hungry")
    ) {
        return;
    }
    const mole = moles[parseInt(event.target.dataset.index)];

    mole.status = 'fed';
    mole.next = getSadInterval();
    mole.node.children[0].classList.remove("hungry");
    mole.node.children[0].src = "./mole-game/mole-fed.png";
}

let runAgainAt = Date.now() + 100;
function nextFrame() {
    const now = Date.now();

    if (runAgainAt <= now) {
        console.log("now");
        for (let i = 0; i < moles.length; i++) {
            if (moles[i].next <= now) {
                getNextStatus(moles[i]);
            }
        }
        runAgainAt = now + 100;
    }
    requestAnimationFrame(nextFrame);
}

document.querySelector(".bg").addEventListener("click", feed);

nextFrame();
