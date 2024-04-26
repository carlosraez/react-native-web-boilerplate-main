export interface Author {
    id: string;
    name: string;
    subtitle: string;
    imageUri: string;
  }

  export interface ItemsSwitchProps {
    item?: string | Author;
    index?: number;
    switchStates?: boolean[];
    toggleSwitch?: (index: number) => void;
    isUnique?: boolean;
    toggleUniqueSwitch?: (isActive: boolean) => void;
  }