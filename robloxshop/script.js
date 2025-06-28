let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - ${item.price} บาท 
      <button onclick="removeFromCart(${index})">❌ ลบ</button>`;
    cartList.appendChild(li);
  });

  document.getElementById('total').textContent = `รวม: ${total} บาท`;
}

function toggleCart() {
  const cartSection = document.getElementById('cart-section');
  cartSection.style.display = cartSection.style.display === 'block' ? 'none' : 'block';
}

function filterCategory(category) {
  document.querySelectorAll('.category-item').forEach(btn => btn.classList.remove('active'));
  event?.currentTarget?.classList?.add('active');

  document.querySelectorAll('.product-card').forEach(card => {
    const cat = card.getAttribute('data-category');
    card.style.display = (category === 'all' || cat === category) ? 'block' : 'none';
  });
}

// ซ่อนสินค้าตอนเริ่มโหลดหน้า
window.onload = () => {
  document.querySelectorAll('.product-card').forEach(card => card.style.display = 'none');
};
function openMenu() {
  document.getElementById('menuPopup').style.display = 'block';
}

function closeMenu() {
  document.getElementById('menuPopup').style.display = 'none';
}
function openMenu() {
  document.getElementById("sideMenu").style.width = "260px";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}
function registerUser() {
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (username === '' || email === '' || password === '') {
    alert("กรุณากรอกข้อมูลให้ครบ");
    return false;
  }

  alert(`ลงทะเบียนสำเร็จ\nชื่อ: ${username}`);
  // ถ้าใช้ backend: ส่งข้อมูลไป Firebase, PHP หรือ API ได้ที่นี่
  return false; // ป้องกันการรีเฟรช
}
function toggleTheme() {
  document.body.classList.toggle('dark');

  // บันทึกธีมไว้ใน localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// โหลดธีมเดิมเมื่อเปิดหน้าเว็บ
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
  document.querySelectorAll('.product-card').forEach(card => card.style.display = 'none');
};
