(function () {
  const spMenu = document.getElementById("sp-menu");
  const mount = document.getElementById("sp-menu-nav-mount");
  const source = document.querySelector(".pc-sidebar--right .pc-nav-deco");
  const openBtn = document.getElementById("sp-menu-open");
  const backdrop = spMenu && spMenu.querySelector(".sp-menu-backdrop");
  const closeBtn = spMenu && spMenu.querySelector(".sp-menu-close");

  if (!spMenu || !mount || !source) return;

  mount.appendChild(source.cloneNode(true));

  function setOpen(on) {
    spMenu.classList.toggle("is-open", on);
    document.body.classList.toggle("sp-menu-open", on);
    spMenu.setAttribute("aria-hidden", on ? "false" : "true");
    if (openBtn) {
      openBtn.setAttribute("aria-expanded", on ? "true" : "false");
    }
    if (on) closeBtn && closeBtn.focus();
  }

  function open() {
    setOpen(true);
  }

  function close() {
    setOpen(false);
    if (openBtn) openBtn.focus();
  }

  if (openBtn) openBtn.addEventListener("click", open);
  if (backdrop) backdrop.addEventListener("click", close);
  if (closeBtn) closeBtn.addEventListener("click", close);

  spMenu.addEventListener("click", function (e) {
    const a = e.target.closest("a[href^='#']");
    if (!a || !spMenu.contains(a)) return;
    close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && spMenu.classList.contains("is-open")) {
      e.preventDefault();
      close();
    }
  });
})();
