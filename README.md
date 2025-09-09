# COSMOS Website

**Các Vì Tinh Tú** (The Stars) - Vietnam's premier astronomy portal

An interactive web application that brings the wonders of our solar system to life through stunning 3D visualizations and educational content. Explore planets, learn about celestial objects, and discover the mysteries of the universe.

## ✨ Features

### 🌌 Interactive Solar System
- **3D Planetary Models**: Explore detailed 3D representations of all planets in our solar system
- **Real-time Rendering**: Smooth animations and interactive controls using Three.js
- **Planet Information**: Comprehensive descriptions and facts about each celestial body

### 🎯 Core Functionality
- **Home Page**: Interactive solar system explorer with planet selection
- **About Page**: Learn about our mission and astronomy community
- **Wiki Objects**: Comprehensive database of celestial objects and phenomena
- **Resources**: Educational materials and astronomy tools
- **User Authentication**: Personalized experience with signup/login functionality
- **Dashboard**: User-specific content and bookmarking features

### 🎨 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Space-themed UI**: Immersive starfield backgrounds and cosmic aesthetics
- **Modern Interface**: Clean, intuitive navigation with smooth animations
- **Multi-language Support**: Vietnamese astronomy content with English interface

## 🚀 Technology Stack

### Frontend
- **Next.js 15.3.2** - React framework with App Router
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling framework

### 3D Graphics & Animation
- **Three.js** - 3D graphics and WebGL rendering
- **React Three Fiber** - React renderer for Three.js

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Heroicons** - Additional icon set
- **Sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Docker** - Containerization support

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/KFdc15/COSMOS_WEBSITE.git
   cd COSMOS_WEBSITE
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
cosmos_website/
├── public/                 # Static assets
│   ├── planet-svgrepo-com.svg
│   └── ...
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── auth/          # Authentication pages
│   │   ├── dashboard/     # User dashboard
│   │   ├── resources/     # Resources page
│   │   ├── wikiObjects/   # Wiki objects page
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable React components
│   │   ├── ui/           # UI component library
│   │   ├── earth.tsx     # 3D Earth component
│   │   ├── mars.tsx      # 3D Mars component
│   │   ├── navbar.tsx    # Navigation component
│   │   └── ...           # Other planet components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions and configurations
├── components.json        # Shadcn UI configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.ts        # Next.js configuration
```

## 🌟 Usage

### Exploring Planets
1. Visit the home page to see the interactive solar system
2. Click on planet names in the footer navigation to switch between different celestial bodies
3. Enjoy the 3D animations and read detailed descriptions of each planet

### Educational Content
- **Wiki Objects**: Browse comprehensive information about celestial phenomena
- **Resources**: Access educational materials and astronomy tools
- **About**: Learn about our mission and Vietnamese astronomy community

### User Features
- **Sign up/Login**: Create an account for personalized experience
- **Dashboard**: Access bookmarked content and user-specific features
- **Profile**: Manage your account settings and preferences

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. Key configuration files:
- `tailwind.config.js` - Tailwind configuration and custom themes
- `src/app/globals.css` - Global styles and CSS variables

### 3D Models
Planet components are located in `src/components/` and use Three.js for rendering:
- Each planet has its own component (e.g., `earth.tsx`, `mars.tsx`)
- Modify texture paths and animations in respective component files

## 🐳 Docker Support

The project includes Docker configuration for containerized deployment:

```bash
# Build Docker image
docker build -t cosmos-website .

# Run container
docker run -p 3000:3000 cosmos-website
```

## 🤝 Contributing

We welcome contributions to improve the COSMOS website! Please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Các Vì Tinh Tú Team**
- Email: contact@cacvitihntu.vn
- Social: @cacvitihntu
- Location: Hanoi, Vietnam

## 🌌 About the Project

This website serves as Vietnam's gateway to astronomy education, making complex celestial concepts accessible through interactive 3D visualizations and comprehensive educational content. Whether you're a student, educator, or astronomy enthusiast, COSMOS provides an immersive experience to explore our universe.

## 📄 License

This project is private and proprietary. All rights reserved.

---

**🌟 Explore the universe with COSMOS - Where science meets wonder! 🌟**
