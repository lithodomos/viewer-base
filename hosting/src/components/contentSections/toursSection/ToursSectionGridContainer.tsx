import React from 'react';
import { Grid } from '../../../Layouts/Grid';

interface Props {
  children: any;
}

export const ToursSectionGridContainer: React.FC<Props> = ({ children }) => (
  <Grid cols={3} colsMedium={2} colsSmall={1} gap={20} gapSmall={8}>
    {children}
  </Grid>
);
