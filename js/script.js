// Ambil elemen-elemen yang dibutuhkan
const formBMI = document.getElementById("formBMI");
const resultSection = document.getElementById("bmi-result");
const resultText = document.getElementById("result-text");

// Fungsi untuk menghitung BMI
function calculateBMI(weight, height) {
    // Konversi tinggi dari cm ke meter
    const heightInMeters = height / 100;
    // Rumus BMI
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
}

// Fungsi untuk menampilkan kategori BMI
function getBMICategory(bmi, gender) {
    if (bmi < 18.5) {
        return "Kurus";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        return "Berlebih (Overweight)";
    } else {
        return "Obesitas";
    }
}

// Event listener untuk form submit
formBMI.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai input dari formulir
    const weight = parseFloat(document.getElementById("berat").value);
    const height = parseFloat(document.getElementById("tinggi").value);
    const gender = document.getElementById("gender").value;

    // Validasi input
    if (isNaN(weight) || isNaN(height) || !gender) {
        alert("Harap isi semua kolom dengan benar!");
        return;
    }

    if (weight <= 0 || height <= 0) {
        alert("Berat dan tinggi badan harus lebih dari nol!");
        return;
    }

    // Hitung BMI
    const bmi = calculateBMI(weight, height);

    // Dapatkan kategori BMI
    const category = getBMICategory(bmi, gender);

    // Tampilkan hasil pada halaman
    resultText.textContent = `BMI Anda: ${bmi} (${category})`;
    resultSection.style.display = "block";
});
