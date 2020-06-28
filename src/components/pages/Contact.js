import React, { useState } from 'react'
import { Container, Card, CardBody, CardText } from 'reactstrap'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")
    const [showResponse, setShowResponse] = useState(true)
    const [output, setOutput] = useState("");

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            //alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
            console.log(payload.invalid);
            setOutput(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(", ")}`);
            setShowResponse(false);
        } else {
            //alert(`Congrats! Submission submitted with id: ${payload.id}`)
            setOutput(`Congrats! Submission submitted with id: ${payload.id}`);
            setShowResponse(false);
        }
    }

    return (
        <Container>
        <div className="container center-children">
            <img
                className="envelope"
                src={require("../../envelope.png")}
                width={256}
                height={256}
                alt="Envelope img."
            />
            <form className="contact">
                <label htmlFor="fname">
                    <b>First Name</b>
                </label>
                <br />
                <input
                    type="text"
                    id="fname"
                    placeholder="Name..."
                    onChange={e => setName(e.target.value) }
                />
                <br />
                <label htmlFor="pNumber">
                    <b>Phone Number</b>
                </label>
                <br />
                <input
                    type="text"
                    id="pNumber"
                    placeholder="Phone Number..."
                    onChange={e => setPhoneNumber(e.target.value) }
                />
                <br />
                <label htmlFor="email">
                    <b>Email Address</b>
                </label>
                <br />
                <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    onChange={e => setEmail(e.target.value) }
                />
                <br />
                <label htmlFor="msg">
                    <b>Message</b>
                </label>
                <br />
                <textarea
                    rows={3}
                    cols={30}
                    id="msg"
                    placeholder="Tell me something!"
                    defaultValue={""}
                    onChange={e => setContent(e.target.value) }
                />
                <button type="button" className="submit" onClick={formSubmit}>
                    Submit!
                </button>
                <div id="resultMsg" />
            </form>
        </div>
        {!showResponse && 
            <Card className="text-white header my-5 py-4 text-center">
                <CardBody>
                    <CardText className="text-white m-0">{ output }</CardText>
                </CardBody>
            </Card>
        }
        </Container>
      )
    }

    export default Contact