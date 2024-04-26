export interface CardProps {
    title: string;
    author?: string;
    imageUri: string;
    city?:string;
    onImagePress?: () => void;
    showActionIcon?: boolean; 
    positionActionBar: string;
    isList?: boolean;
  }
  