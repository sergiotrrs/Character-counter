function countCharacter() {
    const text = document.getElementById("textInput").value;
    const char = document.getElementById("charInput").value;

    const count = countCharacterInText(text, char);
    document.getElementById("result").innerHTML = `Character '${char}' appears ${count} times in the text.`;
}

function countCharacterInText(text, char) {
    
}