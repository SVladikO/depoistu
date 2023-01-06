## Connect to remote DB from laptop (currently to db on render.com)

### 1. Download last psql server :
### zip
`https://www.enterprisedb.com/download-postgresql-binaries`
### or installer:
`https://www.enterprisedb.com/postgresql-tutorial-resources-training?uuid=7ce7e93f-e1eb-4e42-85fa-84c0c98859ee&campaignId=7012J000001h3GiQAI`

### 2 Set environment variable for psql/bin & /lib
### 3 Run terminal
### 4 Put your ip address to render.com as trusted source
Get your ip you can by using `curl ifconfig.me`
### 5 Connect to remove server:
psql -h dpg-ces09den6mphf4veq0ag-a.frankfurt-postgres.render.com -U pizza_mobile_db_state_user pizza_mobile_db_state

###### PASSWORD:
SkdNvQAPZPW0lLky2w24W3wXIzaHCoxo 


### DON'T FORGET THAT IP RESTRICTION FROM REMOTE DB FOR LOCAL MACHINE AND REMOTE SERVER.

#### ?
https://pizza-mobile-api.onrender.com/