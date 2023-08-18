import React,{ useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images, CustomImage } from "../components/data/photos";
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const Photos = () => {
    React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index: number, item: CustomImage) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);
    return (
    <>
    <Navbar />
        <section>
                          <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>

            <div className="container mt-4 mb-4">
                <Gallery
                    images={images}
                    className="mohhh"
                    onClick={handleClick}
                    enableImageSelection={false}
                />
                {!!currentImage && (
                    /* @ts-ignore */
                    <Lightbox
                        mainSrc={currentImage.original}
                        imageTitle={currentImage.caption}
                        mainSrcThumbnail={currentImage.src}
                        nextSrc={nextImage.original}
                        nextSrcThumbnail={nextImage.src}
                        prevSrc={prevImage.original}
                        prevSrcThumbnail={prevImage.src}
                        onCloseRequest={handleClose}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}

            </div>
        </section>
        <Footer />
    </>
    )
}

export default Photos