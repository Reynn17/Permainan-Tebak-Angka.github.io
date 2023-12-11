let lowerBound = 1;
let upperBound = 100;
let computerGuess;
let totalAttempts = 0;

function generateComputerGuess() {
    computerGuess = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
    totalAttempts++;
}

function startGame() {
    lowerBound = parseInt(document.getElementById("lowerBound").value);
    upperBound = parseInt(document.getElementById("upperBound").value);

    if (lowerBound >= upperBound) {
        alert("Rentang angka bawah harus lebih kecil dari rentang angka atas.");
        return;
    }

    totalAttempts = 0;
    generateComputerGuess();
    document.getElementById("computerGuess").textContent = `Apakah angka Anda ${computerGuess}?`;
}

function provideFeedback(feedback) {
    if (computerGuess === undefined) {
        alert("Permainan belum dimulai. Klik 'Mulai Permainan' terlebih dahulu.");
        return;
    }

    if (feedback === "terlalu kecil") {
        lowerBound = computerGuess + 1;
    } else if (feedback === "tepat") {
        alert(`Komputer berhasil menebak angka dengan benar dalam ${totalAttempts} percobaan!`);
        lowerBound = 1;
        upperBound = 100;
        computerGuess = undefined;
        totalAttempts = 0;
        document.getElementById("computerGuess").textContent = "Komputer Berhasil Menebak Angka dengan Benar";
    } else if (feedback === "terlalu besar") {
        upperBound = computerGuess - 1;
    } else {
        alert("Masukkan feedback yang valid: 'terlalu kecil', 'tepat', atau 'terlalu besar'.");
        return;
    }

    if (computerGuess !== undefined) {
        generateComputerGuess();
        document.getElementById("computerGuess").textContent = `Apakah angka Anda ${computerGuess}?`;
    }
}
