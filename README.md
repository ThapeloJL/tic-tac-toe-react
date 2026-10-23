# Tic tac Toe Project 
A response TicTacToe game built with React, using useReducer for state management for a predicatble use state.

**Live demo**: https://tictactoe-zeros.netlify.app

## Features
Base game
- 3 x 3 board with alternating turn (X & O).
- Filled cells cannot be overwritten
- Win detection (rows, columns , diagonals) and draw selection
- Hover effect on available squares
- Responsive layout for mobile and desktop

## Manual feature : Player Name Input
-A player can enter a name for X and for O.

## Advanced feature : Game Mode Selector
-A player can select which mode of the game to play with.

## State Management
-State is managed with [ ContextProvider, useEffect, UseReducer, UseState , UseCallback ]

## Project Structure
```src/ 
|--assets/ # [audio/sounds , svgs]
|--components/ #[Button, GameCell , Header ,Modal , Modals , Musicplayer , Player]
|--contexts/ #[GameContext , Index , ModalContext, SfxContext , ThemeContext]
|--Home/ #[Details , Game ]
|--hooks/ #[useModal , useSound]
|--styles/ #[GeneralStyled , GlobalStyled, Theme]
|--utils/ #[GameUtlis , MusicUtils]\
|--App.js
|--Index.js
|--Router.js
```
## Deployment
Deployed on Netlify and Github

## Tech Stack
- React [v19.3.0]
- React Router Dom [v7.18.4]
- styles components [v6.5.3]
- React Icons [v5.7.0]

## Author
--Thapelo Legote , Full-Stack AI Engineer.
