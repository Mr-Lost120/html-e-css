// ===============================
// SCROLL SUAVE NO MENU
// ===============================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===============================
// SCROLL REVEAL (efeito aparecer)
// ===============================
const sections = document.querySelectorAll("section, footer");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add("show");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===============================
// GALERIA MODAL
// ===============================
const imagens = document.querySelectorAll(".grid-galeria img");
const modal = document.createElement("div");
modal.id = "modal-galeria";
modal.innerHTML = `<span id="fechar">&times;</span><img id="modal-img">`;
document.body.appendChild(modal);

const modalImg = document.getElementById("modal-img");
const fechar = document.getElementById("fechar");

imagens.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================
const btnTopo = document.createElement("button");
btnTopo.id = "btn-topo";
btnTopo.innerHTML = "↑";
document.body.appendChild(btnTopo);

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  btnTopo.style.display = window.scrollY > 400 ? "block" : "none";
});
