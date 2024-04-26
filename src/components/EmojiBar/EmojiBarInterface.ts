export interface EmojiBarProps {
    clapsCountInitial: number; 
    smilesCountInitial: number; 
  }
  

export interface EmojiButtonProps {
    emoji: string; 
    count: number;  
    onPress: () => void;  
  }
  