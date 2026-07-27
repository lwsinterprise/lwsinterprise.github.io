const anuncioData = {
  imagem: "",
  titulo: "🎁 Invite your friends",
  descricao: "Share the app. Every invitation can bring you advantages and improvements!",
  textoBotao: "Share Now"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado"></div>

  <div class="conteudo-anuncio">
    <h3>${anuncioData.titulo}</h3>
    <p>${anuncioData.descricao}</p>
  </div>

  <button id="shareBtn" class="botao-anuncio">
    ${anuncioData.textoBotao}
  </button>
`;

document.getElementById("shareBtn").addEventListener("click", async () => {

  const shareData = {
    title: "Every invitation can bring you advantages. Try it!",
    text: "Hi! 👋 I'm using this app and I thought you might like it too. Try it through this link:",
    url: "https://play.google.com/store/apps/details?id=com.lws.dmvpermitpracticetest"
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      console.log("Content shared successfully.");
    } catch (err) {
      console.log("Share cancelled or failed.", err);
    }
  } else {
    // Fallback para navegadores sem suporte
    navigator.clipboard.writeText(shareData.url)
      .then(() => {
        alert("Your browser doesn't support sharing. The link has been copied to your clipboard.");
      })
      .catch(() => {
        prompt("Copy this link:", shareData.url);
      });
  }

});