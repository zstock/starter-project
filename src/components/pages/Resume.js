import React from 'react'

const Resume = () => {
    return (
        <main className="container">
            <h3 className="section-title">Work Experience</h3>
            {/* Digital Leisure. */}
            <section className="section-content">
                <b>Digital Leisure Inc.</b> <i> April 2016 - Present</i>
                <br />
                <p>
                    While working at Digital Leisure, I have been responsible for developing{" "}
                    <b>The Four Kings Casino and Slots.</b>
                    In addition to this, I have been responsible for developing a collection
                    of tools for both programmers and artists to aid in the development of
                    games.
                </p>
            </section>
            {/* Game Pill. */}
            <section className="section-content">
                <b>Game Pill Inc.</b> <i> November 2014 - March 2016</i>
                <br />
                <p>
                    I had a wide array of responsibilities in my time at Game Pill. This
                    included developing mobile games for clients, mentoring interns, and
                    leading design meetings to ensure client satisfaction.
                </p>
            </section>
            <h3 className="section-title">Education</h3>
            {/* UOIT */}
            <section className="section-content">
                <b>University of Ontario Institute of Technology</b> <i> 2010 - 2014</i>
                <br />
                <p>B.IT in Video Game Development and Entrepreneurship</p>
            </section>
        </main>
    )
}

export default Resume