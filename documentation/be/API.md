## BE API

[//]: # (MENU_ITEM)
### INSERT menu_items      | @POST /category/menu
### SELECT menu_items      | @GET  /:companyId/menu                          |  @return `[{id, name, ingredients, price_size}]`

[//]: # (USER)
### INSERT USER            | @POST /registration {login, password, ... }     |  @return true 
### SELECT USER WHERE      | @POST /login {login, password}                  |  @return {} user profile details 
### SELECT USERS           | @GET /users                                     |  @return [{}]  

[//]: # (HISTORY) 
### INSERT HISTORY         | @POST /history {user_id, company_id, order: ''} |  @return true
### SELECT HISTORY  WHERE  | @GET  /history {user_id}                        |  @return [{}]
### SELECT HISTORY  WHERE  | @GET  /order {company_id}                       |  @return [{}]

[//]: # (COMPANY)
### INSERT COMPANY         | @POST  /company                                |  @return  
### SELECT COMPANY         | @GET  /company                                 |  @return [{}] 


[//]: # (TODO: FIND ONE FILE WHERE YOU WILL KEEP FE AND BE API)