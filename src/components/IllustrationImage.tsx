import IllustrationMobileURL from '../assets/images/illustration-sign-up-mobile.svg'
import IllustrationDesktopURL from '../assets/images/illustration-sign-up-desktop.svg'

function IllustrationImage() {
    return (
        <div className="illustration-container">
            <img
                src={window.innerWidth > 375 ? IllustrationDesktopURL : IllustrationMobileURL}
                alt='illustration image of statistics'
            />
        </div>
    )
}

export default IllustrationImage