interface NewsItem {
    title: string;
    author: string;
    city: string;
    imageUri: string;
    onImagePress: () => void;
    showActionIcon: boolean;
    positionActionBar: "horizontal" | "vertical"; 
  }
  
export interface ListItemsProps {
    items: string[] | NewsItem[];
  }