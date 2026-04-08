# 🌍 WanderLust – Travel Listing & Booking Platform

WanderLust is a full-stack travel accommodation platform inspired by Airbnb, where users can explore, create, and manage property listings with interactive maps and image uploads.

---

## 🚀 Features

- 🏠 Create, edit, and delete property listings  
- 🔍 Browse listings with category filters (mountains, farms, pools, etc.)  
- 🗺️ Interactive maps with location visualization using Mapbox  
- 🖼️ Image upload and management via Cloudinary  
- ⭐ Review and rating system for user feedback  
- 🔐 User authentication and authorization  
- 📱 Responsive and user-friendly UI  

---

## 🛠️ Tech Stack

**Frontend:**  
- EJS, HTML, CSS, Bootstrap  

**Backend:**  
- Node.js, Express.js  

**Database:**  
- MongoDB (Mongoose)  

**APIs & Services:**  
- Mapbox (Maps & Geocoding)  
- Cloudinary (Image Storage)  

**Architecture:**  
- MVC (Model-View-Controller)


````md
# ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Anushka-dev707/WanderLust-Project.git
cd WanderLust-Project
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file and add:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret

MAPBOX_TOKEN=your_mapbox_token

DB_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret
```

### 4️⃣ Run the Application

```bash
node app.js
```

### 5️⃣ Open in Browser

```
http://localhost:3000
```

---

# 📂 Project Structure

```bash
WanderLust/
│── models/        # Database schemas
│── routes/        # Express routes
│── controllers/   # Business logic
│── views/         # EJS templates
│── public/        # Static files (CSS, JS)
│── utils/         # Helper functions
│── app.js         # Main server file
```

---

# 💡 Key Highlights

* Designed using **MVC architecture** for scalability and clean code organization
* Integrated **Mapbox API** for real-time map visualization
* Used **Cloudinary** for efficient image storage and delivery
* Implemented full **CRUD operations** for listings and reviews

---





