## Database table structure

###### As we have fixed count of category we won't create db for them. We will have all category on FE side.

### USER
* id
* name
* phone
* email
* isVerifiedPhone
* isVerifiedEmail
* isReliable (with value two. If user don't take order once we decrement till 0. 0 mean we won't let this person order any more through our app)
* join_date  
* favorite  
* language [when we add translation on the website]
----
### COMPANY
* id
* name
* phone
* address
* email
* join_date
* schedule 
----
### MENU_ITEM
* id
* category_id
* company_id
* name
* ingredients
* price_size    
----
### HISTORY
* id
* user_id
* company_id
* price
* order_details (foodName_count_size[135sm, 0.5l, 200g]_price | ...)
* datetime (we can make preorder by this date too) (you make order for ASAP or on specific time)
* isPaid
* isPrepared  (for outside)
* isProcessed 
----