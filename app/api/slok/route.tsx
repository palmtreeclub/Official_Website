import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  try {
    const chaptersWithMoreThan30Shlokas = [1, 2, 3, 6, 9, 10, 11, 13, 17, 18];
    const randomChapter =
      chaptersWithMoreThan30Shlokas[
        Math.floor(Math.random() * chaptersWithMoreThan30Shlokas.length)
      ];

    const apiUrl = `https://bhagavadgitaapi.in/slok/${randomChapter}/${
      Math.floor(Math.random() * 30) + 1
    }`;

    const response = await axios.get(apiUrl);

    return NextResponse.json({
      chapter: response.data.chapter,
      verse: response.data.verse,
      slok: response.data.slok,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
