# 3W-Hiring-Round-1-Social-Media-Task

This project was developed as part of the hiring process for 3W, specifically for Round 1: Social Media Task. The application consists of two interfaces:

1. **Submission Form**: Allows users to submit their name, preferred social media platform, and upload multiple photos.
2. **Dashboard**: Displays a gallery of all the photos uploaded by different users.

---

## Features

### 1. Submission Form

- Users can input their name.
- Dropdown to select their social media platform (e.g., Instagram, Twitter, Facebook, etc.).
- Upload multiple photos at once.

### 2. Dashboard

- Displays all photos uploaded by users in a grid layout.
- Shows user details (name and social media platform) alongside the photos.
- Provides an organized view for easy navigation.

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB ans cloudinary (or any database of your choice for managing user submissions and photos)
- **Styling**: Tailwind CSS
- **Deployment**: Hosted on Netlify.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kummancoder/3W-Hiring-Round-1-Social-Media-Task.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 3W-Hiring-Round-1-Social-Media-Task
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables in a `.env` file (if required):

   ```env
   REACT_APP_API_URL=<your-backend-url>
   ```

5. Start the development server:

   ```bash
   npm start
   ```

---

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Navigate to the Submission Form to add user details and upload photos.
3. View all uploaded photos on the Dashboard.

---

## Folder Structure

```
3W-Hiring-Round-1-Social-Media-Task/
├── public/                # Static files
├── src/
│   ├── components/        # Reusable components
│   ├── pages/             # Application pages (Form and Dashboard)
│   ├── services/          # API service functions
│   ├── App.js             # Main application file
│   └── index.js           # Entry point
├── .env                   # Environment variables
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

---

## Future Improvements

- Add user authentication for secure photo uploads.
- Implement filters and search functionality on the Dashboard.
- Optimize photo uploads with image compression.
- Add a feature to delete or edit submissions.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact

For any questions or feedback, please contact:

- **Name**: Kumman Das Dhakad
- **Email**: Kummandhakad@gmail.com 
- **GitHub**: https://github.com/kummancoder

