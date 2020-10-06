import React from 'react';
import Mocha from 'mocha';
import Chai from 'chai';

// TESTING SUITE FOR RELATED PRODUCTS, COMPARISON MODAL AND YOUR OUTFIT

// CAROUSEL FUNCTIONALITY

// If there are more product cards than can fit on the screen, the right arrow button should display
it('should display right arrow if there are more product cards than can be displayed', function() {
  // do something
  // expect(something).to.equal(something);
});

// If there are no more product cards, the right arrow button should be hidden
it('should hide right arrow if there are fewer than 4 product cards', function() {
  // do something
  // expect(something).to.equal(something);
});


// Clicking on the right arrow button should shift cards to the left and display a new card to the right
it('should shift product cards to the left and display a new product card to the right on right arrow click', function() {
  // do something
  // expect(something).to.equal(something);
});


// If there are preceding product cards that do not fit on the screen, the left arrow button should display
it('should display left arrow if there are more preceding product cards than can be displayed', function() {
  // do something
  // expect(something).to.equal(something);
});


// If there are no preceding product cards, the left arrow button should be hidden
it('should hide left arrow if there are no preceding product cards', function() {
  // do something
  // expect(something).to.equal(something);
});



// RELATED PRODUCTS

// Related products should populate product cards with data from products related to current product
it('should populate related products section with related products from API', function() {
  // compare data from one or two product cards with their info in API
  // expect(something).to.equal(something);
});


// Action button in related products should open a comparison modal window
it('should open a modal window after clicking star button', function() {
  // test showing modal is open
  // expect(something).to.equal(something);
});


// All related products should be present in the carousel
it('should render all related products in the carousel', function() {
  // test that all related products are present
  // expect(something).to.equal(something);
});



// YOUR OUTFIT

// Your outfit should populate product cards with data from products the customer has selected
it('should populate your outfit section with products the user added to their outfit', function() {
  // compare data from one or two product cards with their info in API
  // expect(something).to.equal(something);
});


// Action button in your outfit should remove product from outfit list
it('should remove product from outfit after clicking x button', function() {
  // remove product from outfit
  // expect(something).to.equal(something);
});


// All outfit products should be present in the carousel
it('should render all products saved in customer\'s outfit in the carousel', function() {
  // test that all outfit products are present
  // expect(something).to.equal(something);
});



// COMPARISON MODAL WINDOW

// Comparison modal window should populate center column with all current product's characteristics
it('should include current product\'s characteristics in modal', function() {
  // compare modal window characteristics to current product characteristics
  // expect(something).to.equal(something);
});


// Comparison modal window should populate center column with all selected product's characteristics
it('should include selected product\'s characteristics in modal', function() {
  // compare modal window characteristics to selected product characteristics
  // expect(something).to.equal(something);
});


// If there are too many comparison modal characteristics to display, list should become scrollable
it('should make the list scrollable if there are more characteristics than can be displayed at once', function() {
  // test scrolling ability?
  // expect(something).to.equal(something);
});