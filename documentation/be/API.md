## BE API

[//]: # (MENU_ITEM)
### + SELECT menu_items WHERE   | @GET  /company/:companyId/menu               |  @return `[{id, name, ingredients, price_size}]`
### + SELECT menu_items WHERE   | @GET  /company/:companyId/menu/:categoryId   |  @return `[{id, name, ingredients, price_size}]`

[//]: # (GUEST)
### INSERT USER                 | @POST /registration {login, password, ... } |  @return true 
### SELECT USER WHERE           | @POST /login {login, password}              |  @return {} user profile details 
### SELECT USERS                | @GET  /users                                |  @return [{}]  

[//]: # (HISTORY) 
### INSERT HISTORY         | @POST /history {user_id, company_id, order: ''} |  @return true
### SELECT HISTORY  WHERE  | @GET  /history {user_id}                        |  @return [{}]
### SELECT HISTORY  WHERE  | @GET  /order {company_id}                       |  @return [{}]

[//]: # (COMPANY)
### INSERT COMPANY         | @POST  /company                                |  @return  
### SELECT COMPANY         | @GET  /company                                 |  @return [{}] 


[//]: # (TODO: FIND ONE FILE WHERE YOU WILL KEEP FE AND BE API)