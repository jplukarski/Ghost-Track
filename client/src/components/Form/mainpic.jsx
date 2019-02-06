import React from "react";
import { Input } from 'semantic-ui-react'

class MainPic extends React.Component {
    state = {
        mainsrcs: [],
    }
    previewFiles = () => {
        let files = document.querySelector('.main_pic').files;
        if (files) {
            Promise.all([].map.call(files, this.readAndPreview))
                .then(mainsrcs => {
                    this.props.getMainPhoto(mainsrcs)
                    this.setState({ mainsrcs })
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
        return this.state.mainsrcs.map((src, idx) => {
            return <img src={src} alt='Trip' style={{ maxHeight: 200, maxWidth: 200 }} key={idx} />
        })
    }
    render() {
        return (
            <div className='picuploader-container'>
                <form>
                    <label className="label">Headline Photo: </label>
                    <Input>
                        <input className="main_pic" type='file' accept='image/*' multiple onChange={this.previewFiles} />
                    </Input>
                </form>
                {this.renderPicPreviews()}
            </div>
        )
    }
}

export default MainPic;
