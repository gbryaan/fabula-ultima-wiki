import type { Metadata } from "next";
import { Antonio, PT_Sans_Narrow } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// 1. Configurando as fontes do Google Fonts
const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio", // O nome da variável CSS que o Tailwind vai ler
  display: "swap",
});

const ptSansNarrow = PT_Sans_Narrow({
  weight: ["400", "700"], // PT Sans Narrow exige que declaremos os pesos
  subsets: ["latin"],
  variable: "--font-pt-sans",
  display: "swap",
});

// 2. Configurando a sua fonte Local
const creditValley = localFont({
  src: "./fonts/credit-valley.otf", // ATENÇÃO: Confirme se o nome e a extensão do arquivo batem exatamente com o seu
  variable: "--font-credit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabula Ultima Wiki",
  description: "Wiki de Fabula Última",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* Injetamos as três variáveis de fonte diretamente no body da aplicação */}
      <body className={`${ptSansNarrow.variable} ${antonio.variable} ${creditValley.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}