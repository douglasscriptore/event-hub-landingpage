import React from "react";
import { Avatar, Card, CardBody, Input, Button, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Comment {
  id: number;
  name: string;
  avatar: string;
  role: string;
  comment: string;
  date: string;
}

export function CommentWall() {
  const [comments, setComments] = React.useState<Comment[]>([
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      role: "Frontend Developer",
      comment: "Amazing event! The workshops were incredibly informative and I learned so much about the latest frontend frameworks.",
      date: "2 hours ago"
    },
    {
      id: 2,
      name: "Sophia Chen",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      role: "UX Designer",
      comment: "The design workshops were outstanding. I particularly enjoyed the session on design systems and accessibility.",
      date: "5 hours ago"
    },
    {
      id: 3,
      name: "Marcus Williams",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      role: "DevOps Engineer",
      comment: "Great insights on containerization and CI/CD pipelines. Looking forward to implementing these practices in our workflow.",
      date: "1 day ago"
    },
    {
      id: 4,
      name: "Priya Patel",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026708d",
      role: "Product Manager",
      comment: "The product management track was excellent! Loved the case studies and practical advice on agile methodologies.",
      date: "2 days ago"
    }
  ]);
  
  const [newComment, setNewComment] = React.useState("");
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  
  const handleAddComment = () => {
    if (newComment.trim() && name.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        name: name,
        avatar: `https://i.pravatar.cc/150?u=${Math.random()}`,
        role: role || "Attendee",
        comment: newComment,
        date: "Just now"
      };
      
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Participant <span className="text-orange-500">Feedback Wall</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what our attendees are saying about DEVCON 2024 and share your own experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-gray-800 mb-10">
            <CardBody className="p-6">
              <h3 className="text-white text-xl mb-4">Share Your Experience</h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    label="Your Name"
                    placeholder="Enter your name"
                    value={name}
                    onValueChange={setName}
                    variant="bordered"
                    color="warning"
                    className="flex-1"
                  />
                  <Input
                    label="Your Role"
                    placeholder="e.g. Developer, Designer"
                    value={role}
                    onValueChange={setRole}
                    variant="bordered"
                    color="warning"
                    className="flex-1"
                  />
                </div>
                <Textarea
                  label="Your Comment"
                  placeholder="Share your thoughts about the convention..."
                  value={newComment}
                  onValueChange={setNewComment}
                  variant="bordered"
                  color="warning"
                  minRows={3}
                />
                <Button 
                  color="warning" 
                  onPress={handleAddComment}
                  endContent={<Icon icon="lucide:send" />}
                  className="self-end"
                >
                  Post Comment
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <div className="space-y-6">
            {comments.map((comment) => (
              <Card key={comment.id} className="bg-gray-900 border-gray-800">
                <CardBody className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar src={comment.avatar} className="w-12 h-12" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div>
                          <h4 className="text-white font-medium">{comment.name}</h4>
                          <p className="text-orange-500 text-sm">{comment.role}</p>
                        </div>
                        <span className="text-gray-500 text-sm">{comment.date}</span>
                      </div>
                      <p className="text-gray-300">{comment.comment}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}