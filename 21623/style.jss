* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: linear-gradient(135deg, #ffe6f0, #ffffff);
  color: #333;
  overflow-x: hidden;
}

/* Floating Hearts */
.heart {
  position: fixed;
  bottom: -10px;
  font-size: 20px;
  color: rgba(255, 0, 100, 0.4);
  animation: floatUp 8s linear infinite;
}

@keyframes floatUp {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
}

.container {
  padding: 30px 20px;
  max-width: 1100px;
  margin: auto;
  text-align: center;
}

h1 {
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  color: #e91e63;
  margin-bottom: 10px;
  animation: fadeIn 1.5s ease-in-out;
}

.subtitle {
  color: #666;
  margin-bottom: 40px;
  animation: fadeIn 2s ease-in-out;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(255, 0, 100, 0.1);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 80px;
  margin-bottom: 15px;
}

.card h3 {
  margin-bottom: 10px;
  color: #e91e63;
}

.card p {
  font-size: 0.9rem;
  margin-bottom: 15px;
  color: #777;
}

button {
  background: #ff4d88;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #e91e63;
}

/* Form */
.form-section {
  margin-top: 40px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(255, 0, 100, 0.1);
  display: none;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.form-section.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 10px;
  border: 1px solid #ddd;
  outline: none;
}

textarea {
  resize: none;
  height: 80px;
}

.whatsapp-btn {
  background: #25D366;
  margin-top: 10px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media(max-width:600px){
  h1 {
    font-size: 2.2rem;
  }
}
