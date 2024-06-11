import './globals.css';
import { Inter } from 'next/font/google';
import PropTypes from 'prop-types';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RS Siaga Utama',
  description: 'Rumah Sakit Orthopedi Siaga Utama',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
