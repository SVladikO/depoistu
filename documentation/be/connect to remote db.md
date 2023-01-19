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


For SELECT ONLY Heroku
psql postgres://ygfgtyshodgjnv:8a42b867639775284cb4ec046e204172f9b921800eb40e6105117e9764987882@ec2-52-48-159-67.eu-west-1.compute.amazonaws.com:5432/d2klbg8sa9s7gl

Way to connet to you 
heroku pg:psql --app=pizza-mobile-api
heroku pg:backups:restore https://github.com/SVladikO/pizza-mobile-app/blob/master/documentation/be/DB_CREATE_TABLES.sql postgres://bpflvidbquvpdp:a7664b3b120bba81df36a108a98765925157f901cec8f0228f52533004ac96b3@ec2-63-32-248-14.eu-west-1.compute.amazonaws.com:5432/d6j0lksqcelm8h --app pizza-mobile-api  