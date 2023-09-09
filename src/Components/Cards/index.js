const Card = () => {
    return (
        <>
            <div className="cardContainer">
                <div className="cardImage">
                    <img src="https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg" />
                </div>
                <div className="cardText">
                    <div className="cardHead">
                        <h4>The Canvas Club</h4>
                        <div className="status1Line"></div>
                        <button className="cardBtn"><i class="fa-brands fa-github"></i></button>
                        <button className="cardBtn"><i class="fa-brands fa-github"></i></button>


                    </div>
                    <div className="cardGreenHeading">Node - Express - Postgres - Kafka - Redis</div>
                    <div className="cardDetail"><p>A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users). <span className="fontLight color1">learning more  </span></p></div>
                </div>
            </div>
        </>
    )
}
export default Card;