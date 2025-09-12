import React from "react";
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
import Image from "next/image";

function CustomLoading({loading}:any) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <div className="bg-white flex flex-col items-center my-10 justify-center">
            <Image src={'/star.png'} alt='loading' width={100} height={100} />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CustomLoading;
