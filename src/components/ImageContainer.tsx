import IllustrationMoileURL from '../assets/images/illustration-sign-up-mobile.svg'
import IllustrationDesktopURL from '../assets/images/illustration-sign-up-desktop.svg'

function ImageContainer() {
    return (
        <div className="image-container">
            <img
                src={window.innerWidth >= 375 ? IllustrationDesktopURL : IllustrationMoileURL}
                alt=''
            />
        </div>
    )
}

export default ImageContainer