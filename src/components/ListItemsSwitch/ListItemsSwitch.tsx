import React, { useState } from 'react';

import { ItemsSwitch } from '../ItemsSwitch/ItemsSwitch';
import { ListItemsProps } from './ListItemsSwitchInterface';


export const ListItemsSwitch: React.FC<ListItemsProps> = ({
  items = [],
}) => {
  const [switchStates, setSwitchStates] = useState<boolean[]>(new Array(items.length).fill(false));
  
  const toggleSwitch = (index: number) => {
    setSwitchStates(switchStates.map((state, i) => (i === index ? !state : state)));
  };

  return items.map((item, index) => {
    return (
      <ItemsSwitch key={index} item={item} index={index} switchStates={switchStates} toggleSwitch={toggleSwitch} />
    );
  });
};