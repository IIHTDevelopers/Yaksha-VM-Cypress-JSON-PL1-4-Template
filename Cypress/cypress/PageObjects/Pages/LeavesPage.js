class Leaves {

  elements = {
    leaveTab: () => cy.contains('', ''),
    configureDropdown: () => cy.get('').contains(''),
    holidayButton: () => cy.get('').contains(''),
    addHolidayButton: () => cy.get('').contains(''),
    nameInput: () => cy.contains('', '').parent().siblings('').find('').type(''),
    dateInput: () => cy.get(''),
    fullDayDropdown: () => cy.get('').contains(''),
    fullDayOption: (option) => cy.get('').contains(option),
    saveButton: () => cy.get('').contains(''),
    finalList: () => cy.get('').find('')
  };

  // Test case 2
  leaveCreation() {
  }
}

export default Leaves;