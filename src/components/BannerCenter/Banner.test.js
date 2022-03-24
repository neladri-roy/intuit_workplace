import { shallow } from "enzyme";
import React from 'react';
import BannerCenter from "./BannerCenter";
import { Link, MemoryRouter } from 'react-router-dom';


describe('Banner Buttons', () =>{
    it('button should open specific page', () =>{
        const clickedComponent = shallow(<MemoryRouter><BannerCenter/></MemoryRouter>)
        expect(clickedComponent.find(Link).props().to).toBe('/freelance');
    })
})