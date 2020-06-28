import React from 'react'

const Home = () => {
    return(
        <div>
            <section className="container center-children">
                <img
                    className="avatar"
                    src={require("../../ProfilePic1.png")}
                    alt="me!"
                    width={256}
                    height={256}
                />
                <div className="subtitle">
                    <h2>
                        Programmer.
                        <br />
                        Game Developer.
                        <br />
                        Technology Enthusiast.
                    </h2>
                </div>
            </section>
            <p>
                Hello! My name is Zach and I make Video Games. Fueled by a passion for
                technology, I am always looking to create something new.
            </p>
        </div>
    )
}

export default Home