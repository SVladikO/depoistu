# <center>Validation requirements to pages inputs. </center>

#

### SingUp, SingIn pages. (USER table in DB)

|          | min | max | isRequired |
|----------|-----|-----|------------|    
| name     | 2   | 30  | true       |
| phone    | 12  | 12  | true       |  
| email    |     | 30  | true       |  
| password | 6   | 12  | true       |  

#### phone - example which will pass validation 380970668830
#### email - For email validator `yup` has method isValidEmail (after all we need to make request to BE and check was this email used before ?)

### Edit, Create MenuItem pages. (MENU_ITEM table in DB)
|             | min | max | isRequired |
|-------------|-----|-----|------------|  
| name        | 2   | 30  | true       |
| price       | 1   |     | true       |
| description |     | 100 | false      |
| mealSize    | 1   | 4   | false      |


### Edit, Create company pages. (COMPANY table in DB)
|           | min | max | isRequired |
|-----------|-----|-----|------------|  
| name      | 2   | 30  | true       |
| city      |     |     | true       |
| street    | 2   | 30  | true       |
| schedule  |     |     | true       |
#### city - user can't type city name, only choose from the list of city (the problem is what about companies near the road ?)
#### street - (we have plan to add link which will redirect to the google map. It may look like opposite strategy. Our city list limit choice. And will we use google map in the app and how much does it cost. Let's imagine that user after search found company which he wants to visit. How will he find it ? We need google map but how integrate it in already exist logic. Question 1.How much does google map cost ? )



