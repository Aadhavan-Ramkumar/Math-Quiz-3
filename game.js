function LogOut() {
    window.location = "index.html";
}

User1Name = localStorage.getItem("Player1");
User2Name = localStorage.getItem("Player2");

User1Score = 0;
User2Score = 0;

document.getElementById("User1Name").innerHTML = User1Name + " - ";
document.getElementById("User2Name").innerHTML = User2Name + " - ";

document.getElementById("User1Score").innerHTML = User1Score;
document.getElementById("User2Score").innerHTML = User2Score;

document.getElementById("PlayerQuestion").innerHTML = "Question - " + User1Name;
document.getElementById("PlayerAnswer").innerHTML = "Answer - " + User2Name;

function Send() {
    Number1 = document.getElementById("Number1").value;
    Number2 = document.getElementById("Number2").value;
    Answer = parseInt(Number1) * parseInt(Number2);

    Question = "<h4>" + Number1 +  " X " + Number2 + "</h4>";
    Input = "<br> Answer: <input type='text' id='InputCheck'>";
    Check = "<br><br><button class='btn btn-info' onclick='Check()'> Check </button>";
    Row = Question + Input + Check;
    document.getElementById("Output").innerHTML = Row;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}