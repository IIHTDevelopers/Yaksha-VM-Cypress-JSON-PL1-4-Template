class AdminPage {
  
  elements = {
    adminTab: () => cy.contains('', ''),
    addAdminButton: () => cy.get('').contains(''),
    editButton: () => cy.get('').first(),
    editFormContainer: () => cy.get(''),
    userRoleDropdown: () => cy.get('').parents('').find(''),
    userRoleOption: (role) => cy.get('').contains(role),
    employeeNameInput: () => cy.get('').parents('').find(''),
    employeeNameSuggestion: (name) => cy.get('').contains(name),
    statusDropdown: () => cy.get('').parents('').find(''),
    statusOption: (status) => cy.get('').contains(status),
    usernameInput: () => cy.get('').parents('').find(''),
    passwordInput: () => cy.get('').parents('').find('').first(),
    confirmPasswordInput: () => cy.get('').parents('').find(''),
    saveButton: () => cy.get('').contains(''),
    userRoleSortIcon: () => cy.contains('', '').find(''),
    usernameCell: () => cy.get('').first().find('').eq(1),
    secondUserRow: () => cy.get('').eq(1), // SECOND USER
    usernameCell: () => cy.get('').eq(1).find('').eq(1),
    deleteIcon: () => cy.get('').eq(1),
    confirmDeleteBtn: () => cy.get('').contains(''),
    tableBody: () => cy.get(''),
    editButton: () => cy.get('').first(),
    editFormContainer: () => cy.get(''),
    sortButton: () => cy.get('').contains(''),
    userRows: () => cy.get(''),
    successToast: () => cy.get('').contains(''),
    successToast: () => cy.get('').contains(''),
  }

  // Test Case 3
  passwordMismatchError() {
  }

  // Test Case 4:
  addAdminUserForm() {
  };

  // Test Case 5: 
  deleteUserFromTable() {
  }

  // Test Case 7
  editUserFormAppear() {
  }

  // Test Case 8:
  goToAdminAndSortByUsername() {
  }

  // Test Case 10
  visitAdminForTolltip() {
  }
  
  // Test Case 9
  NavigateToAdminPage() {
  }
}

export default AdminPage;
