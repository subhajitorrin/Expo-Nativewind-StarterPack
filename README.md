# Expo NativeWind Starter Pack 🚀

A modern, production-ready starter pack for building beautiful React Native applications with Expo and NativeWind (Tailwind CSS).

![Expo NativeWind Starter Pack](https://img.shields.io/badge/Expo-NativeWind-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-5.0.0-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.0-blue)

## ✨ Features

- 🎨 **NativeWind (Tailwind CSS)** - Write styles using Tailwind's utility classes
- 🔐 **Supabase Authentication** - Complete authentication flow with email/password
- 📱 **TypeScript** - Full type safety and better developer experience
- 🏗️ **Clean Architecture** - Well-organized folder structure
- 🔄 **State Management** - Context-based auth state management
- 🎯 **Protected Routes** - Automatic navigation based on auth state
- 📦 **Modern Dependencies** - Latest versions of all packages
- 🗄️ **Prisma ORM** - Type-safe database access
- 🐘 **PostgreSQL** - Robust database with UUID support

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Expo-Nativewind-StarterPack.git
   cd Expo-Nativewind-StarterPack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   # Supabase Configuration
   EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name?schema=public"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
app/
├── components/     # Reusable components
├── context/       # Context providers
├── navigation/    # Navigation configuration
├── screens/       # Screen components
│   └── auth/      # Authentication screens
└── lib/          # Utility functions and configurations
prisma/
├── schema.prisma  # Database schema
└── migrations/    # Database migrations
```

## 🔐 Authentication Features

- Email/Password Sign Up
- Email/Password Sign In
- Protected Routes
- Persistent Sessions
- Automatic Navigation
- Loading States
- Error Handling
- User Data Storage in PostgreSQL

## 🗄️ Database Schema

The project uses Prisma with PostgreSQL and includes the following models:

```prisma
model User {
  id         String   @id @default(dbgenerated("uuid_generate_v4()"))
  email      String   @unique
  username   String   
  password   String
  created_at DateTime @default(now())
}
```

## 🎨 UI Components

- Modern Login Screen
- Clean Home Screen
- Loading Indicators
- Form Validation
- Error Messages
- Responsive Design

## 🛠️ Built With

- [Expo](https://expo.dev/) - React Native framework
- [NativeWind](https://www.nativewind.dev/) - Tailwind CSS for React Native
- [Supabase](https://supabase.com/) - Backend and Authentication
- [React Navigation](https://reactnavigation.org/) - Navigation
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Prisma](https://www.prisma.io/) - Database ORM
- [PostgreSQL](https://www.postgresql.org/) - Database

## 📱 Screenshots

[Add your app screenshots here]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/)
- [NativeWind](https://www.nativewind.dev/)
- [Supabase](https://supabase.com/)
- [React Navigation](https://reactnavigation.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

---

Made with ❤️
