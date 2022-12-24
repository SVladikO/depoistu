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
`psql -h dpg-ceia2u2rrk07uhbp15fg-a.frankfurt-postgres.render.com -U pizza_mobile_db_yjul_user pizza_mobile_db_yjul`

###### PASSWORD:
`oA3OlpU9RIhBXnY1sSi36diIv53qGxTq` 


### DON'T FORGET THAT IP RESTRICTION FROM REMOTE DB FOR LOCAL MACHINE AND REMOTE SERVER.