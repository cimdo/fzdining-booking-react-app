import React from "react";
import ImageUploader from "../../../components/image-uploader/image-uploader.component";
import { useParams } from "react-router-dom";
import { Collapsible, Container, Form } from "./restaurant-profile-form.styles";

const UploadRestaurantPhotos = () => {
  const { id } = useParams();
  return (
    <>
    <Collapsible>ADD PHOTOS</Collapsible>
    <Form>
      <Container>        
          <ImageUploader objectId={id} />      
      </Container>
    </Form>
    </>
  );
};

export default UploadRestaurantPhotos;
