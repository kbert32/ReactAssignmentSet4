import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {     //tests can be run 'async' since the Async component runs asynchronously
                                                                
        window.fetch = jest.fn();                               //'jest' is a globally available object in testing code, made available by the 'jest' tool
        window.fetch.mockResolvedValueOnce({                    //replaces our 'fetch' statement in the 'Async' component with this 'mock' fetch
            json: async () => [{id: 'p1', title: 'First post'}],//specifies json because that's what we expect in our component, json returns a promise, so async is used
        });                                                 //using a mock fetch helps avoid hammering the server while testing, server down issues, or changing data
                                                            //on the server during testing
        render(<Async />)

        const listItemElements = await screen.findAllByRole('listitem');    //'findAllByRole' returns a promise, 'getAllByRole' does not
        expect(listItemElements).not.toHaveLength(0);       //essentially checks that the listitem exists, or has some length
    });
});