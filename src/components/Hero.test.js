import { screen, render } from "@testing-library/react";
import Hero from "./Hero";
import { BrowserRouter } from "react-router-dom";

describe('Hero section tests', ()=>{

    test('tests that the img has rendered', ()=>{
        render(<Hero></Hero>, {wrapper:BrowserRouter});

        expect(screen.getByRole('img')).toBeInTheDocument();
    })
})