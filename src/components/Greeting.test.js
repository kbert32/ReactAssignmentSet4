import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';            //helps us trigger user events in the 'virtual screen'
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
        //Arrange
        render(<Greeting />);
    
        //Act
        // ... nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test ('renders "good to see you" if the buttong was NOT clicked', () => {
        render(<Greeting />);

        const outputElement = screen.getByText('good to see you', {exact: false});
        expect(outputElement).toBeInTheDocument();
    });

    test ('renders "Changed!" if the buttong was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });

    test ('does not render "good to see you" if the buttong was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.queryByText('good to see you', {exact: false});    //queryByText must be used to return a null value, otherwise 
        expect(outputElement).toBeNull();                                           //test would always fail if getByText were used
    });  
});






//Three A's of testing:
//
//  Arrange
//  Act
//  Assert