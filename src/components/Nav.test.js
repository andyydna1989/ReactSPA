import { screen, render } from "@testing-library/react";
import Nav from "./Nav";

describe('Nav component', ()=>{

    beforeEach(()=>{
        render(<Nav></Nav>);

    });

    test('Checks the component loads and displays the logo', ()=>{
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument();
    })
    
})