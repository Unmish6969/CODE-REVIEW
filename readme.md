# 🔍 AI Code Review App

An AI-powered full-stack web application that analyzes and reviews code using Google's Gemini API. It supports multiple languages like JavaScript, Python, and C++ with beautiful syntax highlighting and real-time feedback.

---

## 📁 Project Structure
code-review/
├── frontend/ # React + Vite + PrismJS + Axios
├── Backend/ # Node.js + Express + Google Gemini API
├── .gitignore
└── README.md

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Unmish6969/CODE-REVIEW.git

2. Setup Backend

```bash
cd Backend
npm install
Create a .env file inside Backend/
GOOGLE_GEMINI_KEY=your_google_gemini_api_key
You can get your API key from:https://aistudio.google.com/app/apikey
Start the backend:
```bash
node server.js
# or for dev
npx nodemon


3. Setup Frontend

```bash
cd ../frontend
npm install

Run the frontend dev server:
```bash
npm run dev

Visit http://localhost:5173 in your browser.