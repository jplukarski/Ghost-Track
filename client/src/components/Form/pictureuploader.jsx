import React from "react";
import { Input } from 'semantic-ui-react'

class PictureUploader extends React.Component {
    state = {
        srcs: [],
    }
    previewFiles = () => {
        let files = document.querySelector('.additional-pics').files;
        if (files) {
            Promise.all([].map.call(files, this.readAndPreview))
                .then(srcs => {
                    this.props.getPhotos(srcs)
                    this.setState({ srcs })
                })
        }
    }
    readAndPreview = file => {

        return new Promise((resolve, reject) => {
            // Make sure `file.name` matches our extensions criteria
            if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                let reader = new FileReader();

                reader.addEventListener("load", function () {
                    resolve(this.result)
                }, false);

                reader.readAsDataURL(file);
            }
            else {
                reject()
            }
        })
    }
    renderPicPreviews = () => {
        return this.state.srcs.map((src, idx) => {
            return <img src={src} alt='Trip' style={{ maxHeight: 200, maxWidth: 200 }} key={idx} />
        })
    }
    render() {
        return (
            <div className='picuploader-container'>
                <form>
                    <label className="label">Additional Pictures for the article: </label>
                    <Input>
                        <input className="additional-pics" type='file' accept='image/*' multiple onChange={this.previewFiles} />
                    </Input>
                </form>
                {this.renderPicPreviews()}
            </div>
        )
    }
}

export default PictureUploader;
