import { screen, render } from "@testing-library/react";
import Hero from "./Hero";

describe('Hero section tests', ()=>{

    test('tests that the img has rendered', ()=>{
        render(<Hero></Hero>);

        expect(screen.getByRole('img')).toBeInTheDocument();
    })
})