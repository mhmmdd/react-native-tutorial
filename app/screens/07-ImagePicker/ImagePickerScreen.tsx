import React, {useState} from 'react';
import Screen from "../../components/Screen";
import ImageInputList from "../../components/ImageInputList";

export default function ImagePickerScreen() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  }

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}