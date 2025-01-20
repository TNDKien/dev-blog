# Web Developer Blog

## Table of Contents

- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Author](#author)

## About the Project

This is a web developer blog created as a second-year student at Fontys Hogeschool ICT during semester 3. The blog serves as a platform to share insights, tutorials, and experiences related to web development. It is built using **Next.js** and integrated with **Storyblok** as a headless CMS.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **CMS**: [Storyblok](https://www.storyblok.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Version Control**: [GitHub](https://github.com/)
- **Hosting**: [Vercel](https://vercel.com/)
- **Database**: [Supabase](https://supabase.com/)
- **Syntax Highlighting**: [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

## Project Structure

The blog features:

- **Home**: Overview of recent posts and highlights.
- **Blog Posts**: Articles categorized by topics like Frontend Development, Design, Tools, and Best Practices.
- **About**: A section to introduce the creator and their journey as a developer.
- **Contact**: A form to connect with the creator for feedback, collaboration, or inquiries.

## Installation

1. Clone the repository

```bash
git clone https://github.com/kien-dang/web-developer-blog.git
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add the following variables:

```bash
NEXT_PUBLIC_STORYBLOK_API_KEY=your_storyblok_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Author

👨‍💻 **Kien**

- Fontys Hogeschool ICT | Semester 3 Student
- Wannabe Frontend Developer
- [LinkedIn](https://www.linkedin.com/in/kien-dang-449887173/) | [Portfolio](https://kiendang.nl)
