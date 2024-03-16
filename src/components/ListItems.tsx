import IconListURL from '../assets/images/icon-list.svg'

function ListItems() {
    return (
        <ul>
            <li>
                <img
                    src={IconListURL}
                    alt=""
                />

                Product discovery and building what matters
            </li>

            <li>
                <img
                    src={IconListURL}
                    alt=""
                />

                Measuring to ensure updates are a success
            </li>

            <li>
                <img
                    src={IconListURL}
                    alt=""
                />
                
                And much more!
            </li>
        </ul>
    )
}

export default ListItems