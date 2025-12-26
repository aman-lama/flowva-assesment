# 🚀 Flowvahub Technical Assessment

A modernized version of the Flowvahub application focusing on **secure authentication, responsive architecture, and real-time user feedback.**

## 📋 Project Overview
This project addresses critical architectural gaps in the original Flowvahub platform. The primary goal was to move from a stateless client-side experience to a robust, middleware-protected application using **Next.js** and **Supabase**.

### Key Objectives:
* **Session Persistence**: Implementing server-side auth checks.
* **Responsive Refactor**: Ensuring the UI is accessible across all device breakpoints.
* **Stateful UX**: Providing real-time notifications via React Context.

---

## 💻 Tech Stack

| Feature | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **Database & Auth** | Supabase |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Typography** | Google Fonts (`next/font/google`) |
| **State** | React Context API |

---
## Issues in the Original App (flowvahub.com)

1. **No middleware or user state management**  
   Users who sign up and then navigate back to the landing page must sign up again, as the session is not persisted.

2. **Header not fully responsive**  
   Certain screen sizes cause layout issues in the header/navigation area.
   
## ✨ Features & Improvements

### 🔐 Authentication & Security
* **Middleware Protection**: Added middleware to intercept requests, ensuring that protected routes (like `/dashboard`) are only accessible to authenticated users.
* **Persistent Sessions**: Sessions are now stored in cookies rather than local state, preventing users from being logged out upon page refresh.
* **Custom Signup Flow**: A multi-step email verification process with robust validation and error handling.

### 📱 User Experience (UX)
* **Fluid Header**: Re-engineered the navigation system to be 100% responsive using Tailwind's mobile-first breakpoints.
* **Notification System**: A global `NotificationProvider` allows any component to trigger toast alerts.
* **Loading States**: Integrated custom `Loader.tsx` components for better perceived performance.

---

## 🛠 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aman-lama/flowva-assesment.git
2. **Open the project folder :**
   ```bash
   cd flowvahub-assessment
3. **Environment Variables: Create a .env file in the root directory and add the Supabase credentials from email**
4. **Install Dependencies**
   ```bash
   npm install
5. **Run the development server:**
   ```bash
   npm run dev

## 🗺 Roadmap & Limitations
* **OAuth**: Google Login integration is not configured for this assesment.
* **Dashboard Features**: Dashboard features were out of scope for this specific assesment.

---

## 📩 Contact
For any inquiries, reach out via the developer contact provided in the original brief.
  
