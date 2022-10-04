export default function Movie(props) {

    return (
        <div className="movie-item-style-2">
            <img src={props.movieImage} alt="" />
            <div className="mv-item-infor">
                <h6>
                    <a href="moviesingle.html">
                        {props.movieTitle}
                    </a>
                </h6>
                <p className="rate"><i className="ion-android-star"></i>
                    <span>{props.movieRating}</span>/10
                </p>
                <p className="describe">
                    {props.children}
                </p>
                <p className="run-time"> Run time: {props.movieDuration}    .     <span>MMPA: PG-13 </span>    .     <span>Release: {props.movieRelease}</span></p>
                <p>Director: <a href="#">{props.movieDirector}</a></p>
                <p>Stars: <a href="#">{props.movieActors}</a></p>
            </div>
        </div>
    );
}