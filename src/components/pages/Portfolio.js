import React from 'react'

const Resume = () => {
    return (
        <section className="grid container">
        {/*For now I am using projects from my job because I do not yet have content from this course to include on this page*/}
        <header className="gridrow">
            <h2>My Work!</h2>
        </header>
        {/*I've built a table for showing off my pats work out of divs but I don't know that there's a semantically better way to do this? Each row and cell is a div. <article> and <section> don't seem quite right? I would just end up with a <section> soup if I changed that out, I think.*/}
        <div className="gridrow">
            <div className="gridcell">
                <a
                    href="https://store.steampowered.com/app/260430/The_Four_Kings_Casino_and_Slots/"
                    target="_blank"
                >
                    <img src={require("../../FK_Tile.png")} />
                </a>
                <span>
                    <b>Four Kings Casino and Slots</b>
                </span>
            </div>
            <div className="gridcell">
                <a
                    href="https://store.steampowered.com/app/260430/The_Four_Kings_Casino_and_Slots/"
                    target="_blank"
                >
                    <img src={require("../../KP_Tile.png")} />
                </a>
                <span>
                    <b>King Pins Bowling Alley</b>
                </span>
            </div>
            <div className="gridcell">
                <a
                    href="https://store.steampowered.com/app/260430/The_Four_Kings_Casino_and_Slots/"
                    target="_blank"
                >
                    <img src={require("../../GR_Tile.png")} />
                </a>
                <span>
                    <b>Gold Rush</b>
                </span>
            </div>
        </div>
        <div className="gridrow">
            <div className="gridcell">
                <a
                    href="https://store.steampowered.com/app/260430/The_Four_Kings_Casino_and_Slots/"
                    target="_blank"
                >
                    <img src={require("../../TT_Tile.png")} />
                </a>
                <span>
                    <b>Treasure Trap</b>
                </span>
            </div>
            <div className="gridcell">
                <a
                    href="https://store.steampowered.com/app/260430/The_Four_Kings_Casino_and_Slots/"
                    target="_blank"
                >
                    <img src={require("../../MM_Tile.png")} />
                </a>
                <span>
                    <b>Millionaire Manor</b>
                </span>
            </div>
            <div className="gridcell">
                <a
                    href="https://store.steampowered.com/app/260430/The_Four_Kings_Casino_and_Slots/"
                    target="_blank"
                >
                    <img src={require("../../SS_Tile.png")} />
                </a>
                <span>
                    <b>Slots in Space!</b>
                </span>
            </div>
        </div>
        </section>
        )
    }
    
export default Resume