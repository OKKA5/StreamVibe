# 🎬 Stream Vibe  

**Stream Vibe** is a dynamic web application that allows users to search for movies and TV shows using the **TMDb API**. It provides detailed information about each title, including release dates, posters, and more, with a **responsive and user-friendly interface**.  

## 🚀 Features  
- 🔍 **Search Functionality** – Find movies and TV shows instantly.  
- 🖼 **Detailed Views** – Get comprehensive details like release date, overview, and ratings.  
- 🎭 **Fallback Images** – Displays default images when posters are unavailable.  
- 📶 **Error Handling** – Ensures a smooth user experience even with API failures.  
- 📱 **Responsive Design** – Optimized for all screen sizes using **Bootstrap**.  
- ⏳ **Loading Spinner** – Uses `ngx-spinner` for better user experience.  

## 🛠 Tech Stack  
- **Framework**: Angular 17  
- **Languages**: TypeScript, JavaScript, HTML5, CSS3  
- **Styling**: Bootstrap  
- **API**: TMDb API  

## 📦 Installation & Setup  
1. Clone the repository:  
   ```sh
   git clone https://github.com/your-username/stream-vibe.git
   cd stream-vibe
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Add your **TMDb API Key** to the environment file:  
   ```sh
   export const environment = {
