import React, { useState } from 'react';

import { ItemsSwitch } from '../ItemsSwitch/ItemsSwitch';
import { ListItemsProps } from './ListItemsSwitchInterface';
import Card from '../Card/Card';


export const ListCard: React.FC<ListItemsProps> = ({
  items = [],
}) => {


  return items.map((item, index) => {
    return (
      <Card title={item.title} imageUri={item.imageUri} positionActionBar={item.positionActionBar} isList showActionIcon={item.showActionIcon} />
    );
  });
};