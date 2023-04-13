export default function Bird(props) {

    return (
        <div className="bird">
            <img className="bird-img" src={props.image} className="bird--image"/>

            <div className="bird--info">
                <p className="bird--name">{props.name}</p>
            </div>

            <audio className="bird--song" src={props.audio} controls={true} autoPlay={false} loop={false}></audio>

        </div>

    )
}