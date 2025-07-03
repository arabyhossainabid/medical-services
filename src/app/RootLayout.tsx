import './globals.css';
import Navbar from './Component/Navbar/Navbar';
import HomePage from './page';
import Footer from './Component/Footer/Footer'; // Corrected path

export const metadata = {
  title: 'Medical Services',
  description: 'Your trusted healthcare partner',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans">
        <Navbar />
        <HomePage />
        <Footer />
      </body>
    </html>
  );
}
