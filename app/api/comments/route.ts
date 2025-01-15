import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const COMMENTS_FILE = path.join(process.cwd(), "data", "comments.json");

type Comment = {
  id: string;
  articleId: string;
  author: string;
  content: string;
  createdAt: string;
};

function getComments(): Comment[] {
  if (!fs.existsSync(COMMENTS_FILE)) {
    return [];
  }
  const fileContents = fs.readFileSync(COMMENTS_FILE, "utf8");
  return JSON.parse(fileContents);
}

function saveComments(comments: Comment[]) {
  const dirPath = path.dirname(COMMENTS_FILE);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(COMMENTS_FILE, JSON.stringify(comments, null, 2));
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const articleId = url.searchParams.get("articleId");

  if (!articleId) {
    return NextResponse.json(
      { error: "articleId query parameter is required" },
      { status: 400 }
    );
  }

  const comments = getComments();
  const filteredComments = comments.filter(
    (comment) => comment.articleId === articleId
  );

  return NextResponse.json(filteredComments);
}

export async function POST(req: Request) {
  const { articleId, author, content } = await req.json();

  if (!articleId || !author || !content) {
    return NextResponse.json(
      { error: "articleId, author, and content are required" },
      { status: 400 }
    );
  }

  const comments = getComments();
  const newComment: Comment = {
    id: Date.now().toString(),
    articleId,
    author,
    content,
    createdAt: new Date().toISOString(),
  };

  comments.push(newComment);
  saveComments(comments);

  return NextResponse.json(newComment, { status: 201 });
}
