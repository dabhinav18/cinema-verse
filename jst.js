
document.addEventListener("DOMContentLoaded", () => {

  /* ================= PROFILE DATA ================= */
  const email = localStorage.getItem("profileEmail");
  const username = localStorage.getItem("profileUsername");

  const profileEmailEl = document.getElementById("profileEmail");
  const profileUsernameEl = document.getElementById("profileUsername");

  if (email && profileEmailEl) profileEmailEl.innerText = email;
  if (username && profileUsernameEl) profileUsernameEl.innerText = username;





  /* ================= LOGOUT ================= */
  const logoutHandler = () => {
    localStorage.clear();
    window.location.href = "abhi.html";
  };

  const logoutBtn = document.getElementById("logoutBtn");
  const logoutBtn2 = document.getElementById("logoutBtn2");

  if (logoutBtn) logoutBtn.onclick = logoutHandler;
  if (logoutBtn2) logoutBtn2.onclick = logoutHandler;


  /* ================= SEARCH ================= */
  const searchBox = document.getElementById("searchBox");
  const cards = document.querySelectorAll(".card");

  if (searchBox && cards.length > 0) {
    searchBox.addEventListener("input", () => {
      const value = searchBox.value.toLowerCase().trim();

      cards.forEach(card => {
        const title = card.dataset.title?.toLowerCase() || "";
        card.style.display = title.includes(value) ? "block" : "none";
      });
    });
  }


  /* ================= PROFILE DROPDOWN ================= */
  const profileBtn = document.getElementById("profileBtn");
  const profileMenu = document.getElementById("profileMenu");

  if (profileBtn && profileMenu) {

    profileBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      profileMenu.classList.toggle("active");
    });


/* CLOSE DROPDOWN WHEN CLICK OUTSIDE */
    document.addEventListener("click", (e) => {
      if (!profileMenu.contains(e.target)) {
        profileMenu.classList.remove("active");
      }
    });

  }

});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const movieId = card.dataset.id;
    if (!movieId) return;
    window.location.href = `movie.html?id=${movieId}`;
  });
});

