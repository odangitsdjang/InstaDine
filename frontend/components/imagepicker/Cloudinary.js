const CLOUDINARY_UPLOAD_PRESET = 'ngvqgyti';
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/jerryzlau";

import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Button} from 'react-native';

// code from here credits to www.css-tricks.com/image-upload-manipulation-react
export default class Cloudinary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: ""
    };
    let loaderClass = "hidden";
    this.resetLink = this.resetLink.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  resetLink() {
    console.log("resetLink: ");
    this.setState({ uploadedFileCloudinaryUrl: "" });
  }

  onImageDrop(files) {
    this.loaderClass = "loader";
    this.setState({
      uploadedFile: files[0],
      dropzoneClass: "hiddendrop"
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    // handle more errors here
    upload.end((err, response) => {
      if (err) {
        console.error(err);
        return;
      }

      if (response.body.secure_url !== '') {
        let secureUrl = response.body.secure_url;
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <View className="uploadsection">
        <Dropzone className={this.state.dropzoneClass}
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
          {/* <Button></Button> */}
        </Dropzone>
      </View>
    );
  }
}

 