### SingUp, SingIn page, USER
#### name -  minLength 3, Required
#### phone - only number length 12, Required (example which will pass validation 380970668830)
#### email - contain @, min length 6, Required (we need to make request to BE and check was this email used before ?) 
#### password - min length 6, Required

### Edit, create page, MENU ITEM
#### name - min length 2, Required
#### price - number only, Required
#### description notRequired
#### cookingTime - only number, notRequired
#### mealSize - only number, notRequired

### Edit, create page COMPANY
#### name - min length 2, Required
#### city - from the list of city (the problem is what about companies near the road ?)
#### street - min length 2, Required (we have plan to add link which will redirect to the google map. It may look like opposite strategy. Our city list limit choice. And will we use google map in the app and how much does it cost. Let's imagine that user after search found company which he wants to visit. How will he find it ? We need google map but how integrate it in already exist logic. Question 1.How much does google map cost ? ) 
#### schedule - we can save but we can't show company in the search without schedule



