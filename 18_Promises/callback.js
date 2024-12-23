// API'den alınan veri (Dizi formatında)
const data = [
  { name: "John Doe", age: 30, city: "New York" },
  { name: "Jane Smith", age: 25, city: "Los Angeles" },
  { name: "Bob Johnson", age: 40, city: "Chicago" },
  { name: "Alice Brown", age: 35, city: "Houston" },
  { name: "Charlie Davis", age: 45, city: "Miami" },
];

// Callback fonksiyonu ile veriyi işleme
const processData = (data) => {
  data.forEach((element) => {
    console.log(
      `Name: ${element.name}, Age: ${element.age}, City: ${element.city}`
    );
  });
};

// API'den veri çeken ve callback kullanan bir fonksiyon
const fetchData = (callback) => {
  setTimeout(() => {
    callback(data); // Veriyi callback'e geçiriyoruz
  }, 1000); // 1 saniyelik gecikme
};

// Callback fonksiyonunu çağır
fetchData(processData);
