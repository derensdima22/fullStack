import { HeaderItemType } from '@layouts/types';
import { Container, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

export const HeaderItem = (props: HeaderItemType): ReactElement => {
  return (
    <Container className="flex items-center justify-center bg-white h-[108px] rounded-lg gap-2">
      <Typography variant="h4" className="font-bold">
        {props.title}
      </Typography>
      <TextSnippetOutlinedIcon color="primary" className="text-[50px]"/>
    </Container>
  );
};
