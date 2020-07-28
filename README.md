# FEED-A-STAR-NOSED-MOLE
Browser game written in HTML5, CSS3, and JavaScript

[Play the game here!](https://terryzfeng.github.io/feed-a-star-mole)

![Demo of Game](./images/Preview.jpg)

## Description
The game is just like Whack-a-Mole, except you get to feed the star-nosed moles for points! 
Star-nosed moles or <em>Condylura cristata</em> are small moles found in moist, low areas in North America. They have an incredible sense of smell, are always hungry and it's your job to feed them. 
Inspired by the popular game of Whack-a-Mole, feed these cute furry friends to gain score and win the game!

### Rules:
10 points to win:
2 points - King Star-Nosed Mole<br>
1 point - Star-Nosed Mole

## Documentation
Moles have 4 phases, "Hungry", "Sad", "Leaving", and "Gone".

1. Hungry - Moles can be clicked to feed a worm
2. Sad - If not fed, moles will become sad, can no longer be clicked
3. Leaving - Once sad, moles will then crawl back into the hole
4. Gone - Once mole is gone, empty hole is visible, and mole is hungry

These 4 phases will cycle indefinitely. Currently moles appear for 500-5000ms, are sad for 700ms, and then will leave for 500-18000ms.

- User doesn't click mole in time -> show sad mole
- User clicks mole in time -> show fed mole
- Once sad or fed -> show a mole butt

Excercise developed by [Brian Holt](https://frontendmasters.com/teachers/brian-holt/)

Artwork provided by [Alice Brereton](https://www.pickledalice.com/)

All images can be separately downloaded [here](https://frontendmasters.github.io/bootcamp/mole.zip)


&ndash; terry feng
