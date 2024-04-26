export interface Author {
    id: string;
    name: string;
    subtitle: string;
    imageUri: string;
  }

  export interface ListItemsProps {
    items: string[] | Author[];
  }