const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const leadForm = document.getElementById("leadForm");
const currentYear = document.getElementById("currentYear");

const whatsappNumber = "5516999664600";

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  const menuLinks = menu.querySelectorAll("a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const interesse = document.getElementById("interesse").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    const texto = `
Olá, tenho interesse em conhecer o Objetivo Ituverava.

Nome: ${nome}
Telefone: ${telefone}
Interesse: ${interesse}
Mensagem: ${mensagem || "Não informada"}
    `.trim();

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
}
