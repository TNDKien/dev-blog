import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function GET(req: Request) {
  const url = new URL(req.url);
  const articleid = url.searchParams.get("articleid");

  if (!articleid) {
    return NextResponse.json(
      { error: "articleid query parameter is required" },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("articleid", articleid);

    if (error) {
      console.error("Supabase fetch error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data || []);
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const { articleid, author, content } = await req.json();

  if (!articleid || !author || !content) {
    return NextResponse.json(
      { error: "articleId, author, and content are required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("comments")
    .insert([{ articleid, author, content }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data || {}, { status: 201 });
}
