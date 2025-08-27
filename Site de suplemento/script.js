const buyBtn = document.getElementById("buyBtn");

buyBtn.addEventListener("click", () => {
  alert("Your cart is ready! Let’s start shopping.");
});

// Accessibility: activate button with Enter or Space
buyBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    buyBtn.click();
  }
});
const accessibilityBtn = document.getElementById("accessibilityBtn");

accessibilityBtn.addEventListener("click", () => {
  alert("Accessibility options will be available soon (e.g. font size, contrast, dark mode).");
});
