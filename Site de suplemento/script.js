<script>
  const btn = document.getElementById("accessibilityToggle");

  // Lista de modos de daltonismo disponíveis
  const modes = ["protanopia", "deuteranopia", "tritanopia", "achromatopsia"];
  let currentMode = -1; // começa sem nenhum filtro

  btn.addEventListener("click", () => {
    // Remove a classe anterior
    if (currentMode >= 0) {
      document.body.classList.remove(modes[currentMode]);
    }

    // Avança para o próximo modo
    currentMode = (currentMode + 1) % (modes.length + 1);

    // Se não for o último "modo normal", aplica filtro
    if (currentMode < modes.length) {
      document.body.classList.add(modes[currentMode]);
      btn.querySelector("span").textContent = `

