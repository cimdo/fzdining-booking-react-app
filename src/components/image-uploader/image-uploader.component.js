import React, { useRef, useState, useMemo } from "react";
import {
  DeletePhoto,
  DropZone,
  Message,
  Photo,
  Wrapper,
  ImgContainer,
  Button,
} from "./image-uploader.styles";
import { useDispatch } from "react-redux";
import {
  deletePhoto,
  fetchResPhotos,
  uploadRestaurantPhotos,
} from "../../redux/restaurants/restaurants.slice";

const ImageUploader = ({ objectId }) => {
  const [image, setImage] = useState([]);
  const [previewUrl, setPreviewUrl] = useState([]);
  const fileInput = useRef(null);
  const dispatch = useDispatch();

  useMemo(() => {
    async function fetchPhotos() {
      let response = await dispatch(fetchResPhotos(objectId));
      setPreviewUrl(response.payload);
      return response.payload;
    }

    fetchPhotos();
  }, [objectId, dispatch]);

  const handleFile = (file) => {
    setImage([...image, file]);
    setPreviewUrl([...previewUrl, URL.createObjectURL(file)]);
  };

  const removeImage = (file) => {
    setImage(image.filter((item) => item !== file));
    setPreviewUrl(previewUrl.filter((item) => item !== file));
    dispatch(deletePhoto({ id: objectId, path: file }));
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    if(image.length)
    {
      await dispatch(uploadRestaurantPhotos({ id: objectId, files: image }));
      alert("Upload images successfully"); //=>>TODO
    }

    // if (response.status === 200) {
    //   alert("Upload successfully");
    // } else {
    //   alert(response.message);
    // }
  };

  return (
    <>
      <label>
        <b>Upload image</b>
      </label>
      <Wrapper>
        <DropZone onClick={() => fileInput.current.click()}>
          <Message>Click to upload image....</Message>
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInput}
            hidden
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </DropZone>
      </Wrapper>
      {previewUrl &&
        previewUrl.map((file, i) => {
          return (
            <ImgContainer key={file}>
              <Photo src={file} alt="image" />
              <DeletePhoto
                onClick={(e) => {
                  e.preventDefault();
                  if (window.confirm(`Confirm delete photo ?`)) {
                    removeImage(file);
                  }
                }}
              >
                X
              </DeletePhoto>
            </ImgContainer>
          );
        })}{" "}
      <br />
      <Button type="submit" value="Upload" onClick={onSubmit} />
    </>
  );
};

export default ImageUploader;
