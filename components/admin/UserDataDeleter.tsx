"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Trash2, Loader2 } from "lucide-react";
import { deleteUserData } from "@/lib/actions/user-data.actions";
import { useRouter } from "next/navigation";

interface UserDataDeleterProps {
  userId: string;
  userEmail: string;
  isCurrentUser: boolean;
  isLastAdmin: boolean;
}

export default function UserDataDeleter({
  userId,
  userEmail,
  isCurrentUser,
  isLastAdmin
}: UserDataDeleterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!reason.trim()) {
      alert("Please provide a reason for deletion");
      return;
    }

    if (!confirm(`Are you sure you want to delete all data for ${userEmail}? This action cannot be undone.`)) {
      return;
    }

    setIsDeleting(true);
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("reason", reason.trim());
      formData.append("confirmation", "DELETE_ALL_DATA");

      const result = await deleteUserData(formData);

      if (result.success) {
        alert(result.message || "User data deleted successfully");
        setIsOpen(false);
        router.refresh();
      } else {
        alert(result.fieldErrors ? Object.values(result.fieldErrors).flat().join(", ") : "Failed to delete user data");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      alert("An error occurred while deleting user data");
    } finally {
      setIsDeleting(false);
    }
  };

  // Don't show delete button for current user or last admin
  if (isCurrentUser || isLastAdmin) {
    return null;
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="sm"
          className="ml-2"
          title="Delete all user data"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete User Data</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete all data associated with <strong>{userEmail}</strong>.
            The user profile will be anonymized and marked as deleted. This action cannot be undone.
            <br /><br />
            <strong>Deleted data includes:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>All applications and references</li>
              <li>Medical records and documents</li>
              <li>Volunteer shift signups</li>
              <li>Foster profiles</li>
              <li>All audit logs</li>
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="reason">Reason for deletion *</Label>
            <Textarea
              id="reason"
              placeholder="Please provide a detailed reason for this deletion..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="mt-1"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="confirmation">Type &quot;DELETE_ALL_DATA&quot; to confirm</Label>
            <input
              id="confirmation"
              type="text"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="DELETE_ALL_DATA"
              required
            />
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleting || !reason.trim()}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isDeleting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete All Data"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
