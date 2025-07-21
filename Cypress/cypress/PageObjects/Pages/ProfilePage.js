class ProfilePage {

  elements = {
    myInfoTab: () => cy.contains('', ''),
    profileImageWrapper: () => cy.get(''),
    fileInput: () => cy.get(''),
    saveButton: () => cy.contains('', ''),
    uploadedImage: () => cy.get('')
  };

  // Test Case 6
  uploadProfilePicture(imageFileName) {
  }

}

export default ProfilePage;
