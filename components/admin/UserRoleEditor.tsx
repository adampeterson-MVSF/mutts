// components/admin/UserRoleEditor.tsx
"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { UserRole } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { updateUserRole } from "@/lib/actions/profile.actions";
import { ActionResult, makeActionResult } from "@/lib/types";
import { useToast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="sm" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}

interface UserRoleEditorProps {
  userId: string;
  currentRole: UserRole;
  isCurrentUser: boolean;
}

export default function UserRoleEditor({ userId, currentRole, isCurrentUser }: UserRoleEditorProps) {
  const { showToast } = useToast();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<UserRole>(currentRole);

  const [state, formAction] = useActionState(async (prevState: ActionResult, formData: FormData) => {
    const result = await updateUserRole(prevState, formData);

    // Show toast and refresh on success
    if (result.success) {
      showToast(result.message || "Role updated successfully!", "success");
      router.refresh();
    } else {
      showToast(result.message || "Failed to update role.", "error");
    }

    return result;
  }, makeActionResult());


  return (
    <div className="flex items-center gap-2">
      {isCurrentUser ? (
        <div className="flex items-center gap-2">
          <select
            disabled
            defaultValue={currentRole}
            className="w-[140px] h-9 rounded-md border border-input bg-transparent px-3 py-2 text-sm opacity-50 cursor-not-allowed"
          >
            <option value={currentRole}>{currentRole}</option>
          </select>
          <Button size="sm" disabled>
            Save
          </Button>
          <span className="text-xs text-muted-foreground italic">
            Cannot modify own role
          </span>
        </div>
      ) : (
        <form action={formAction} className="flex items-center gap-2">
          <input type="hidden" name="userId" value={userId} />
          <input type="hidden" name="newRole" value={selectedRole} data-testid="role-hidden-input" />
          <select
            defaultValue={currentRole}
            onChange={(e) => setSelectedRole(e.target.value as UserRole)}
            className="w-[140px] h-9 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
            data-testid={`role-trigger-${userId}`}
            aria-label="Select Role"
          >
            <option value="" disabled>Select role...</option>
            {Object.values(UserRole).map(role => (
              <option key={role} value={role} data-testid={`role-option-${role}`}>{role}</option>
            ))}
          </select>
          <SubmitButton />
        </form>
      )}
      {state.message && !state.success && (
        <p className="text-xs ml-2 text-red-500">
          {state.message}
        </p>
      )}
    </div>
  );
}
