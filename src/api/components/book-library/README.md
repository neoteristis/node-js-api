# Explanation

Each component has its own routes, controller, model, repository, policies, tests and templates.

As you can see a component consists of the files I just mentioned before. Most of them represents a single class that is
exported. Of course, you can add here more component specific stuff.

Since I have multiple components and their classes have the same structure most of the time, I also create interfaces
that are implemented in the classes. This helps me to keep the components’ structure straight.

Moreover, we have the `services` directory here which includes local component services like mail for example. Those
inherit from the global services.

The `templates` directory includes mail HTML templates for the given component. For dynamically rendering HTML code I
highly recommend ejs.

`controller.ts`  
The controller class handles incoming requests and sends the response data back to the client. It uses the repository
class to interact with the database. Request validation happens via middleware few steps before

`model.ts`  
The model represents the database model for its component. In my case it’s a TypeORM class. Mostly it’s used by the
repository classes.

`policy.json`   
This json file includes the access rights for each user-role for the given component. It's part of a access control list
based system.

`repository.ts`  
The repository class acts like a wrapper for the database. Here we read and write data to the database. Furthermore, we can implement caching for example.
You can import the repository class into any other file and query the data for this component from the database. Moreover, it prevents us from writing redundant code since we don't have to rewrite the SQL statements multiple times.
Since most component repositories need the same basic access methods like readAll, read, save and delete I use a generic parent class that includes all these methods. This saves a lot of code.
See AbsRepository for the implementation.

`routes.ts`  
Here we define the API endpoints for the corresponding component and assign the controller methods to them. Moreover we can add more stuff like
- authorization (e.g. JWT)
- permission checking (ACL)
- request body validation
- component specific middleware in here.

`user.spec.ts`  
This is the test file for testing the component and its endpoints.