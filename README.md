# BMC
Official repo for the hackathon


cd UI

and then npm install , npm run dev 

using supbase rather then mongoDB so I can make my life easier rn
lmaodedxdbmc - DB creds 


connection string 

postgresql://postgres:lmaodedxdbmc@db.pjzcxlwwmvitfgsprjde.supabase.co:5432/postgres


annon - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqemN4bHd3bXZpdGZnc3ByamRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTc2ODQsImV4cCI6MjA1NTc5MzY4NH0.zAvFHkTPqE_3Wv7Fwl9YJaHa1ZrhZORzp1ZMvCsqAeo


service role - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqemN4bHd3bXZpdGZnc3ByamRlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDIxNzY4NCwiZXhwIjoyMDU1NzkzNjg0fQ.mF9OsweXv38m0DR5qcWPZ5jL3WojSJiiLaTROrgHUjA

url - https://pjzcxlwwmvitfgsprjde.supabase.co

JWT token - cfK9xnDaoODbQJHp0nyq1g5Y7ajuXHbU27jiih438AynKuApCrokrkr3RdYBVtzme8VphXM/d9Bles2F5l5aRg==

openai - api key -- 

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


connection psql command for postgres DB --->  psql -h aws-0-us-west-1.pooler.supabase.com -p 5432 -d postgres -U postgres.pjzcxlwwmvitfgsprjde


api - chatbot key 

b48ca783fb6ae59e0de1f3c9e9afc97a01fee7bd228948c7b1bcbc3cb7a9246c


curl --location 'https://www.askyourdatabase.com/api/chatbot/v2/session' --header 'Accept: application/json, text/plain, */*' --header 'Accept-Language: en' --header 'Content-Type: application/json' --header 'Authorization: Bearer $b48ca783fb6ae59e0de1f3c9e9afc97a01fee7bd228948c7b1bcbc3cb7a9246c' --data-raw '{
    "chatbotid": "7d637888004812eb1bb98798eec38e82",
    "name": "Sheldon",
    "email": "test@gmail.com"
}'

"url":"https://www.askyourdatabase.com/api/chatbot/auth/callback?code=0bd063a8457f701b21583ab2e2fa95a87d8ca39b048ff19083bc7

{"url":"https://www.askyourdatabase.com/api/chatbot/auth/callback?code=c7f840361b8728b8939f36d1c4a7ec60bb58412a8098cdff99f57fae05aaa24c"}

ssh -i "F:\AAAAA_Downloads\bmckey.pem" ubuntu@ec2-65-2-0-154.ap-south-1.compute.amazonaws.com

python3 predictiveModel.py --customer_id "LB-16795" --keyword "Printer"


curl -X POST "https://ae57-65-2-0-154.ngrok-free.app/predict" -H "Content-Type: application/json" -d '{"customer_id":"LB-16795","keyword":"Printer"}'
