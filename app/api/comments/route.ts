import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function GET(req: Request) {
  const url = new URL(req.url);
  const articleId = url.searchParams.get("articleId");

  if (!articleId) {
    return NextResponse.json(
      { error: "articleId query parameter is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("articleId", articleId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data || []);
}

export async function POST(req: Request) {
  const { articleId, author, content } = await req.json();

  if (!articleId || !author || !content) {
    return NextResponse.json(
      { error: "articleId, author, and content are required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("comments")
    .insert([{ articleId, author, content }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data || {}, { status: 201 });
}
