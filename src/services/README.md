# Services directory

This directory contains global services we might need for authorization, sending mails, caching, or helper methods for
example.

`auth.ts`  
Here we setup things like our app's passport strategies and define authorization methods.

`helper.ts`  
The helper class contains helper methods for hashing, UUIDs and so on.

`mail.ts`
This service is used for sending mails and rendering the templates of the components. Again, I recommend the renderFile function of ejs.