"use client";

import { useState, useEffect } from "react";
import { Button } from "@services/components/ui/button";
import { Textarea } from "@services/components/ui/textarea";
import { Input } from "@services/components/ui/input";

type Comment = {
  id: string;
  author: string;
  content: string;
  createdat: string;
};

type CommentSectionProps = {
  articleid: string;
};

export function CommentSection({ articleid }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/comments?articleid=${articleid}`);
      if (!response.ok) throw new Error("Failed to fetch comments");
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && username.trim()) {
      setIsPosting(true);
      try {
        const response = await fetch("/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            articleid,
            author: username,
            content: newComment,
          }),
        });
        if (!response.ok) throw new Error("Failed to post comment");
        const postedComment = await response.json();
        setComments((prevComments) => [...prevComments, postedComment]);
        setNewComment("");
      } catch (error) {
        console.error("Error posting comment:", error);
      } finally {
        setIsPosting(false);
      }
    }
  };

  if (isLoading) {
    return <div className="mt-8">Loading comments...</div>;
  }

  return (
    <div className="mt-8">
      <h4 className="text-lg font-bold mb-4">Comments</h4>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your username"
          className="mb-4"
        />
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="mb-4"
        />
        <Button variant="default" size="default">
          {isPosting ? "Posting..." : "Post Comment"}
        </Button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <div>
              <div className="font-semibold">{comment.author}</div>
              <div className="text-sm text-gray-500">
                {new Date(comment.createdat).toLocaleString()}
              </div>
              <p className="mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
