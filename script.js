const API_URL = "https://script.google.com/macros/s/AKfycbxgCi-xH1EO1kWJV-MZ7qYGES0JPPkOZD51_1eiYf4JPSaK_h6MoRqEIcVq0p_pS9i5/exec";

const today = new Date();
document.getElementById("date").innerText =
  today.toDateString();

function addExpense() {
  const item = document.getElementById("item").value;
  const amount = document.getElementById("amount").value;

  if (!item || !amount) {
    alert("Fill all fields");
    return;
  }

  const data = {
    date: today.toLocaleDateString(),
    day: today.toLocaleDateString("en-US", { weekday: "long" }),
    item,
    amount
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(() => {
    document.getElementById("status").innerText =
      "✅ Expense Added";
    document.getElementById("item").value = "";
    document.getElementById("amount").value = "";
  })
  .catch(() => {
    document.getElementById("status").innerText =
      "❌ Error";
  });
}
