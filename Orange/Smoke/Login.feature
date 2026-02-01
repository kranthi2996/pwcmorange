Feature: Orange HRM Login

Scenario: : To Verify that User is able to Login into system succesfully
Given Launch the HRM Portal
Then Enter the Valid Credentails "Admin" and "admin123"
Then Assert the success Login "Dashboard"


Scenario: To verify that suer can Succesfully reset the password succesfully
Given Launch the HRM Portal
Then Click on the Forget button
Then Enter the Username details and Click on Reset
Then Assert the Reset URL

@smoke
Scenario: To verify that suer can Succesfully logout from the application
Given Launch the HRM Portal
Then Enter the Valid Credentails "Admin" and "admin123"
Then Click on the Logout button
Then Assert the Logout URL

