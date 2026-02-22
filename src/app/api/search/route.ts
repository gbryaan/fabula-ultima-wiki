import { getAllClasses, getAllSpells } from "@/lib/api";
import { NextResponse } from "next/server";

// Esta função roda no SERVIDOR quando alguém acessa /api/search
export async function GET() {
  // 1. Busque classes e magias (aguarde as Promises)
  const classes = await getAllClasses()
  const spells = await getAllSpells()

  // 2. Crie um array unificado. 
  const database = [...classes, ...spells]

  // 3. Retorne o JSON
  return NextResponse.json(database);
}