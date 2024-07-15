import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/style.scss';
import { Nav } from '@/modules';
import { graphqlClient } from '@/utils';
import { NavQuery } from '@/queries';
import { MenuTypes } from '@/types';
import { ThemeProvider } from '@/providers';
import { Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { menus }: MenuTypes = await graphqlClient.request(NavQuery);
  const menuItems = menus?.nodes[0].menuItems.nodes;
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Nav menuItems={menuItems} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
