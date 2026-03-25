const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันต์วันเกิดน้าเบ้บี๋เค้ารักอ้วนนะปีนี้เป็นปีที่สองแล้วที่เค้าอยู่อวยพรบี๋ไว้ปีถัดถัดไปเค้าก็จะอยู่อวยพรบี๋เเบบนี้ไปตลอดนะขอบคุณที่อยู่ข้างกันเค้ารักมีนานะ เบ้บี๋เมหมาอ้วนอ้วน   
รักอ้วนนะไว้ไปเดทกันอีกนะเย้

`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
