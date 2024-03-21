import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  params: {
    userId: String;
  };
};

function UserModifyPage({ params: { userId } }: Props) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>User ID: {userId}</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}

export default UserModifyPage;
