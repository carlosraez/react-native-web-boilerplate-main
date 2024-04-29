import { ReactNode } from "react";

export interface CardProps {
    children: ReactNode;
    imagePosition: string;
    imageUri: string;
    onImagePress?: () => void;
    showActionIcon?: boolean; 
    positionActionBar: string;
    isList?: boolean;
  }
  