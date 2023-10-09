import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Table Table',
  description: 'Table Table',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
