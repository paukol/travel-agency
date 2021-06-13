import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  const expectedLink = '/trip/abc';
  const tripId = 'abc';
  const expectedImg = 'image.jpg';
  const expectedName = 'alt';
  const expectedCost = '$1';
  const expectedDays = 1;
  let expectedTags = ['tag1', 'tag2', 'tag3'];
 

  const component = shallow(<TripSummary
    id={tripId}
    image={expectedImg}
    name={expectedName} 
    cost={expectedCost}
    days={expectedDays}
    tags={expectedTags} 
  />);

  it('should render correct address', () => {
    const renderedLink = component.find('.link').prop('to');

    expect(renderedLink).toEqual(expectedLink);
  });

  it('should render correct src and alt', () => {
    const renderedSrc = component.find('img').prop('src');
    const renderedAlt = component.find('img').prop('alt');

    expect(renderedSrc).toEqual(expectedImg);
    expect(renderedAlt).toEqual(expectedName);
  });

  it('should render correct name, cost and days', () => {
    const renderedName = component.find('.title').text();
    const renderedCostAndDays = component.find('.details').text();

    expect(renderedName).toEqual(expectedName);
    expect(renderedCostAndDays).toEqual(`${expectedDays} daysfrom ${expectedCost}`);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();

  });

  it('should render tags correctly', () => {
    const renderedTagOne = component.find('.tags span').at(0).text();
    const renderedTagTwo = component.find('.tags span').at(1).text();
    const renderedTagThree = component.find('.tags span').at(2).text();

    expect(renderedTagOne).toEqual(expectedTags[0]);
    expect(renderedTagTwo).toEqual(expectedTags[1]);
    expect(renderedTagThree).toEqual(expectedTags[2]);
  });

  it('should not render tags when array is not given', () => {
    const component = shallow(<TripSummary id={tripId} name={expectedName} image={expectedImg} cost={expectedCost} days={expectedDays} />);
    
    expect(component.hasClass('tags')).toEqual(false);
  });

});  
