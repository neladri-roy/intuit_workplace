
import Header from "./Header";
import { screen } from '@testing-library/react';
import { shallow } from "enzyme";
import React from 'react';

test('renders title ', ()=>{
   const component = shallow(<Header/>);
   expect(component).toMatchSnapshot();
})