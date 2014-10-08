# Mastermind

## Motivation

I have used this simple game as a vessel to learn [jQuery
 UI](http://jqueryui.com) and [jQuery Mobile](http://jquerymobile.com).

## Mathematics

Donald Knuth has created an algorithm ([link](http://www.dcc.fc.up.pt/~sssousa/RM09101.pdf' target='_blank')) that solves the traditional (6,4)-game (6 digits, length 4) in no more than 5 moves.  Stuckman and Zhang have demonstrated ([link](http://arxiv.org/pdf/cs/0512049v1.pdf' target='_blank')) that the general (k,l)-game is NP-complete.

## Gameplay

Mastermind is a game of logic and code breaking.  The first player creates a password of four colors, each chosen from the set {Red, Orange, Yellow, Green, Blue, Purple}.  The second player then has ten attempts to guess the password by using the information returned by the first player after each guess.  That information consists of the number of correct colors in correct positions (Black response), the number of correct colors in incorrect places (Gray response), and the number of incorrect colors (White response); in order not to give away the order information, the second player always gives Blacks, then Grays, then Whites.

## Mechanics

The computer will play the role of first player, generating a random password and giving feedback to guesses.

As second player you will give the computer your guesses, starting in the bottom row. There are two ways to input a guess.  First, you may simply click on the squares to cycle through the colors; going past Purple will loop back around to Red.  Second, you may drag the squares at the top down and 'paint' your password in.  Once you are finished using either method, you must click on the box labeled "Guess #1".  The computer will tell you how you did on that guess by turning some of the smaller squares Black or Gray; that information will remain throughout the play so that you don't have to remember it.

## Example Game

Of course, only **bolded** information is spoken aloud.

*First player (1P):* I will secretly set the password to be (Red, Orange, Red, Blue).

*Second player (2P):* My initial guess is **(R,R,O,O)**.

*1P:* The first Red is correct; the second is in the wrong place.  The first Orange is in the wrong place; as the first Orange covers the Orange in the password, the second Orange is incorrect.  I respond **(B,G,G,W)**.

*2P:* Quite a lot of good information there; we know the password contains either 1 Red and 2-3 Orange or 2-3 Red and 1 Orange.  In order to decide the final color, we will guess **(Y,Y,G,G)**.

*1P:* **(W,W,W,W)**.

*2P:* Ok, there are no Yellows or Greens.  **(B,B,P,P)**.

*1P:* **(G,W,W,W)**.

*2P:* Excellent.  We now know that the password is some permutation of one of RROB, RROP, ROOB, or ROOP.  Though there is much more we could deduce, let's be naive and just throw one of those out there hoping we get the colors correct.  **(R,R,O,B)**.

*1P:* **(B,B,G,G)**.

*2P:* It's better to be lucky than good.  By comparing this response to the one from my first guess, I know the Blue is correct; I must switch the Orange with one of the Reds. **(O,R,R,B)**.

*1P:* **(B,B,G,G)**.

*2P:* Oops. **(R,O,R,B)**?

*1P:* You win! **(B,B,B,B)**!

*2P:* I win!

## To Impliment

- Restart Button
- In-game instructions
- Moving Paintboard (always on top of next guess)
- Mobile version (can't drag with a touch interface; jQuery Mobile dealt with this issue long ago)
