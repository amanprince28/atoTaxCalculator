# Australian Tax Calculator

Technology Used : Nodejs
Framework : Fastify.js

Steps To Use:

1: Clone or Download the repo

2: Install all the Dependancies by using the command ```npm install```

3: Run the application by using the command ```node index.js```

Open Postman or any other API tester application 

Use the below curl request to test

```
curl -X POST \
  http://localhost:3000/ \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: da83ae58-5b03-7ff5-be44-3af04704703d' \
  -d '{
	"first-name":"Andrew", 
	"last-name":"Smith", 
	"annual-salary":"60050",
	"super-rate":9,
	 "payment-start-date":"01 March – 31 March"
}'
```

