import React from 'react'
import ReactDOM from 'react-dom'

const HappyMessage = () => {
    let messages = ["You always pass failure on the way to success", 
    "Positive anything is better than negative nothing", 
    "Great things never come from comfort zones.", 
    "Do something today that your future self will thank you for.", 
    "Your limitation—it’s only your imagination."]
    let randomMessage = messages[Math.floor(Math.random() * messages.length)]
    return <h1>{randomMessage}</h1>
}

const App = () => {
    return <HappyMessage />
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
