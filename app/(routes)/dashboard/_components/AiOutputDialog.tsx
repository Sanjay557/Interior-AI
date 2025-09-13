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
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { Button } from "@/components/ui/button";

interface AiOutputDialogProps {
  openDialog: boolean;
  closeDialog: () => void;
  orgImage: string;
  aiImage: string;
}

function AiOutputDialog({ openDialog, closeDialog, orgImage, aiImage }: AiOutputDialogProps) {
  console.log(orgImage, aiImage)
  return (
    <AlertDialog open={openDialog} onOpenChange={closeDialog}>
      <AlertDialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>AI Redesign Result</AlertDialogTitle>
          <AlertDialogDescription>
            Compare the original image with the AI-generated redesign
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="my-4 flex justify-center">
        <div className="w-full max-w-4xl">
      <ReactBeforeSliderComponent
        firstImage={{ imageUrl: aiImage }}
        secondImage={{ imageUrl: orgImage }}
        className="object-contain"
      />
    </div>
    </div>
        
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeDialog}>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AiOutputDialog;
