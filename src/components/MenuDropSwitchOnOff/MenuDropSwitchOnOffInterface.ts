export interface Author {
    id: string;
    name: string;
    subtitle: string;
    imageUri: string;
  }

export interface MenuDropSwitchOnOffProps {
    items: string[] | Author[];
    nameMenu?: string;
}