import React, { useState } from 'react';

import { ItemsSwitch } from '../ItemsSwitch/ItemsSwitch';
import { ListItemsProps } from './ListItemsSwitchInterface';
import Card from '../Card/Card';


export const ListCard: React.FC<ListItemsProps> = ({
  items = [],
}) => {


  return items.map((item, index) => {
    const { title, imageUri, positionActionBar, showActionIcon} = item
    
    return (
      <Card title={title} imageUri={imageUri} positionActionBar={positionActionBar} isList showActionIcon={showActionIcon} />
    );
  });
};

