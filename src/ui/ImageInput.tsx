import React, { BaseSyntheticEvent, useState } from 'react';
import { StyledAvatar } from 'components/User/style';
import { Typography } from '@mui/material';
import { useI18n } from 'hooks/useI18n';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  image: string | null;
}

export const ImageInput = ({ name, image }: Props) => {
  const { register } = useFormContext();
  const tr = useI18n('userEdit');
  const [fileData, setFileData] = useState<string | undefined>(
    image ?? undefined,
  );

  const handleOnChange = (event: BaseSyntheticEvent) => {
    const file = event.target.files[0];
    if (file === undefined) {
      return;
    }

    const fr = new FileReader();
    fr.onload = onLoadImage;
    fr.readAsDataURL(file);
  };

  const onLoadImage = (event: ProgressEvent<FileReader>) => {
    if (typeof event.target?.result === 'string') {
      setFileData(event.target.result);
    }
  };
  return (
    <>
      <StyledAvatar src={fileData} variant="square" />
      <label htmlFor="upload-photo">
        <Typography>{tr('changeAvatar')}</Typography>
      </label>
      <input
        {...register(name, { onChange: handleOnChange })}
        accept="image/png, image/gif, image/jpeg"
        name={name}
        onChange={handleOnChange}
        type="file"
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        id="upload-photo"
      />
    </>
  );
};
