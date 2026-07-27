// ===============================
// ARIWA Brand Slider
// Data Source : products.js
// ===============================

const track = document.getElementById("brandTrack");

// ป้องกัน error ถ้าไม่ได้อยู่หน้า Home
if (track && typeof products !== "undefined") {
  // ทำซ้ำ 3 รอบ เพื่อให้เลื่อนแบบ Infinite
  const loop = [...products, ...products, ...products];

  loop.forEach((product) => {
    const card = document.createElement("div");
    card.className = "brand-card glass";

    card.innerHTML = `
      <img src="${product.logo}" alt="${product.name}" loading="lazy" draggable="false" />
    `;

    // คลิกไปหน้ารายละเอียดสินค้า (ยกเว้นกรณีที่เพิ่งลาก slider ด้วยเมาส์)
    card.onclick = () => {
      if (didDrag) return;
      window.location.href = `product-detail.html?name=${encodeURIComponent(product.name)}`;
    };

    track.appendChild(card);
  });

  // ===============================
  // Infinite Slider
  // ===============================

  let x = 0;
  const speed = 0.55;
  const loopWidth = () => track.scrollWidth / 3; // one full cycle of the tripled content

  function wrapX() {
    const max = loopWidth();
    x = ((x % max) + max) % max; // keep x always within [0, max)
  }

  function render() {
    track.style.transform = `translateX(-${x}px)`;
  }

  // ===============================
  // Mouse drag control
  // Dragging left/right moves the slider manually.
  // Auto-scroll pauses while dragging and resumes right after.
  // ===============================

  let isDragging = false;
  let didDrag = false;
  let lastPointerX = 0;
  const DRAG_THRESHOLD = 4; // px of movement before we treat it as a real drag, not a click

  track.style.cursor = "grab";
  track.style.touchAction = "pan-y"; // allow vertical page scroll on touch, but let us handle horizontal drag

  let activePointerId = null;

  track.addEventListener("pointerdown", (e) => {
    isDragging = true;
    didDrag = false;
    lastPointerX = e.clientX;
    activePointerId = e.pointerId;
    track.style.cursor = "grabbing";
    // Note: we do NOT capture the pointer here. Capturing immediately would
    // retarget the click event to `track` instead of the card underneath
    // the cursor, silently breaking card.onclick navigation on plain clicks.
  });

  track.addEventListener("pointermove", (e) => {
    if (!isDragging) return;

    const delta = e.clientX - lastPointerX;

    if (!didDrag && Math.abs(delta) > DRAG_THRESHOLD) {
      didDrag = true;
      // Only now grab pointer capture — once it's a real drag — so the
      // gesture keeps tracking smoothly even if the cursor leaves the track.
      track.setPointerCapture(activePointerId);
    }

    if (!didDrag) return; // ignore tiny jitter before the threshold is crossed

    lastPointerX = e.clientX;

    x -= delta; // drag right -> content moves right (x decreases), drag left -> content moves left
    wrapX();
    render();
  });

  function stopDragging(e) {
    if (!isDragging) return;
    isDragging = false;
    track.style.cursor = "grab";
    if (
      e &&
      e.pointerId !== undefined &&
      track.hasPointerCapture(e.pointerId)
    ) {
      track.releasePointerCapture(e.pointerId);
    }
    activePointerId = null;
  }

  track.addEventListener("pointerup", stopDragging);
  track.addEventListener("pointercancel", stopDragging);
  track.addEventListener("pointerleave", stopDragging);

  // Prevent the browser's native "drag ghost image" behavior on the cards
  track.addEventListener("dragstart", (e) => e.preventDefault());

  function animate() {
    if (!isDragging) {
      x += speed;
      wrapX();
      render();
    }

    requestAnimationFrame(animate);
  }

  animate();
}
