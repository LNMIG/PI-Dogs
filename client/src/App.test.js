import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import BreedDetail from './components/BreedDetail/BreedDetail';
import Error404 from './components/Error404/Error404';

describe(('Testing for Landing page'), () => {
  test('Loads and displays the Landing page', () => {
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    )
  });

  test('At Landing page it is showed the title "Puppies Lovers"', () => {
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    )
    expect(screen.getByText('Puppies Lovers')).toBeInTheDocument()
  });

  test('At Landing a Link is showed with a text reading "START" ', () => {
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    )
    expect(screen.getByRole('link')).toHaveTextContent('START')
  });

  test('At Landing page a Link to Home is active', () => {
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    )
    expect(screen.getByRole('link')).toBeEnabled()
  });
});

describe(('Testing for Error 404 page'), () => {
  test('Loads and displays 404 page', () => {
    render(
      <BrowserRouter>
        <Error404 />
      </BrowserRouter>
    )
  });

  test('At 404 Page it is showed error type and message', () => {
    render(
      <BrowserRouter>
        <Error404 />
      </BrowserRouter>
    )
    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByText('PAGE NOT FOUND')).toBeInTheDocument()
  });

  test('At 404 Page a Link to Home is active', () => {
    render(
      <BrowserRouter>
        <Error404 />
      </BrowserRouter>
    )
    expect(screen.getByRole('link')).toBeEnabled()
  });
});

describe(('Testing for details showed for selected breed'), () => {
  test('Loads and Displays an error message not finding a dog', () => {
    // const props = {
    //   dispatch: jest.fn(),
    //   breedsDetail: {
    //     name: 'Apocalipto',
    //     weight:'10 - 20',
    //     height: '25 - 35',
    //     image: 'none',
    //     life_span: '17 - 25 years',
    //     temepraments: 'Good'
    //   }
    // }
    // const wrapper = shallow(<BreedDetail {...props}/>)
    // expect(wrapper.find('p').text()).toEqual('Apocalipto')

    let UserContext = React.createContext();
    let state = {d: 1}
    function App() {
      return (
        <UserContext.Provider value={state}>
          <User />
        </UserContext.Provider>
      )
    }
    function User() {
      const value = React.useContext(UserContext)
      return (
        <UserContext.Consumer>
          {value => <BreedDetail breedDetail={value}/>}
        </UserContext.Consumer>
      )
    }
    render(
      <BrowserRouter>
       <App />
      </BrowserRouter>
    )
    expect(screen.getByText('There is not such breed you are looking for.')).toBeInTheDocument();
  });
});

