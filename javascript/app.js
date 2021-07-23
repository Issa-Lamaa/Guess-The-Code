// Animate game beginning

$("#play_btn").click(()=>{$("#menu").slideToggle()})
$("#play_btn").click(()=>{$("#game").slideToggle()})

// Create languages object

let languages = [
    {
        lname: "HTML",
        src: "images/html.ppm"
    },
    {
        lname: "CSS",
        src: "images/css.jpg"
    },
    {
        lname: "JavaScript",
        src: "images/js.png"
    },
    {
        lname: "PHP",
        src: "images/php.png"
    },
    {
        lname: "mysql",
        src: "images/sql.PNG"
    },
    {
        lname: "C++",
        src: "images/cpp.png"
    },
    {
        lname: "C#",
        src: "images/cs.png"
    },
    {
        lname: "C",
        src: "images/c.png"
    },
    {
        lname: "R",
        src: "images/r.jpg"
    },
    {
        lname: "Ruby",
        src: "images/ruby.png"
    },
    {
        lname: "Dart",
        src: "images/dart.png"
    },
    {
        lname: "Objective -c",
        src: "images/obj.png"
    },
    {
        lname: "Swift",
        src: "images/swift.png"
    },
    {
        lname: "Go",
        src: "images/go.png"
    },
    {
        lname: "Python",
        src: "images/python.jfif"
    },
    {
        lname: "Java",
        src: "images/java.png"
    },
];

// Creating buttons which will contain random values from the object

let languageChosen = languages[Math.floor(Math.random() * languages.length)];
languages = languages.filter((item) => {return item !== languageChosen})
console.log(languages)
document.getElementById("code").src = languageChosen.src;
for(let i = 0; i < 2; i++) {
    let button = document.createElement("button");
    let index = Math.floor(Math.random() * languages.length)
    let language = languages[index].lname;
    languages = languages.filter((item) => {return item !== languages[index]});
    button.setAttribute('class', 'opt'); // same class
    button.append(document.createTextNode(language)); // for html purposes
    if (i < 2) {document.getElementById("divOne").append(button);} else {document.getElementById("divTwo").append(button);}
    
};

// Randomly choosing winning answer and giving its values to image and button

for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("opt")[i].addEventListener(
        "click",
        () => {
            document.getElementsByClassName("opt")[i].style.backgroundColor = "red";
            document.getElementById(languageChosen.lname).style.backgroundColor = 'green';
            disableBtns();
            setTimeout(() => {$('#game').slideToggle()}, 1750);
            congratulate('l')
        }
    )
}   

function disableBtns() {
    for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("opt")[i].disabled = true;
    }
}

let winningBtn = document.getElementsByClassName("opt")[Math.floor(Math.random() * 4)]
winningBtn.innerHTML = languageChosen.lname; // will give button right value
winningBtn.setAttribute('id', languageChosen.lname);

document.getElementById(languageChosen.lname).addEventListener(
    'click',
    () => {
        document.getElementById(languageChosen.lname).style.backgroundColor = 'green';
        congratulate('w')
    }
);

function congratulate(status) {
    switch(status) {
        case 'w': 
            $('#end').slideToggle();
            $('#end').slideToggle();
            document.getElementById('winMsg').innerHTML = 'We have a winner!';
        break;
        case 'l':
            $('#end').slideToggle();
            document.getElementById('winMsg').innerHTML = 'You lose!';
        break;
    }
}
