import React from 'react'
import './home.css'

const Header = ({ user }) => (
  <div className="center">
    <p>
        Welcome to <strong>Medieval Tactics</strong>, <br />
        This `game` was developed over a weekend Hackathon, you can see our names at the bottom of the page, this is an very early example of our work, and it contains a lot of bugs (lol)
      <br />
      <br />
        If you want to <strong>Play</strong> just press the play button on the right corner, create a game by inputing any random word and give the code to a buddy.
      <br />
      <br />
        The game is very simple, you just click your character to move or attack!
      <br />
      <br />
        This games was develop to learn how to implement a live Socket.io server in NODE.js.
    </p>
  </div>
)

export default Header
