<!------------------------- #System Design Questions only-------------------------->


<!----------------------------- #1.Pagination -------------------------------->

1.Client side pagination and server side pagination which one is best why we used client side pagination ?
2.What’s the difference between offset-based and cursor-based pagination?
3.How do you handle pagination when new records are constantly being inserted (e.g., social media feed)?
4.How do you ensure consistency when data changes between page requests?
5.If millions of data is coming from backend,what should we do in Frontend?
6.If millions of data is coming from backend,what should we do pass in Frontend?

<!------------------------- #2.API ------------------------------------------->

1.If a API fails in the production lavel,what should we do ?
2.If a API same data is coming multiple time,what should we do?
3.what you will do when you received inconsistent API responses?
4.You are building a Dashboard page where 3 API calls need to be made on load.How would you ensure the page does NOT re-render unnecessarily?Explain the exact technique and where you will place the logic.
5.After API Integration my response code is 200 but I am getting blank screen and in the console there is no error showing,how to fix it.
6.My application is calling 5 API if 3 API has  calling same data how to cancel it.
7.My application has 50 callings how to manage it and structure it ?
8.How to handle network issue in your project?
9.Your SPA makes 10 API calls on page load. They all fail with 401 and all trigger a token refresh 
simultaneously. How do you fix this? 
10.Your API returns 401 for some users but not others, intermittently. How do you investigate? 
11.what is HTTP Header in API and why it’s used? 
12.What is base URL, end points and resources? 
13.what is path parameters and query parameters?
14.What is API Request, Response, Header, Payload and API content?
15.what is IDEMPOTENT & SAFE HTTP Methods?
16.What is Endpoint vs Resource? 
17..Define various Http methods and error?
18.How to handle API errors gracefully in the UI?
19.Where and how do you send the authentication token while making API calls?
20.Have you used Axios or Fetch for API calls?what is the difference between them? 
21.What is Content-Type and Accept header? 
22..In Browser Developer Tools, how can you filter API network requests to quickly find the specific 
request you are looking for? 
23.How do you attach a token to every API request?
24.In Browser Developer Tools, how can you filter API network requests to quickly find the specific 
request you are looking for? 
25.What happens using the wrong endpoint (/user instead of/users) or HTTP method (GET instead of 
POST) causes 404 or 405 errors. 
26.what happens API returns data in a different JSON structure then expected, breaking the UI.
<!------------------- #3.Security ---------------------------------------------->

1.How to secure your global redux toolkit data?
2.How to secure your data in Frontend?
3.How do you protect the UI from breaking without using any AI terms?
4.Is it secure to store all sensitive data and API keys in Frontend folder structure.env file?
5.Explain an XSS attack and how it can steal auth tokens. How do you prevent it? 
6.What is a CSRF attack? How does SameSite=Strict protect against it?
7.What is credential stuffing and how do you defend against it? 
8.How will you secure your app from XSS attacks? 

<!--------------- #4.scienario based questions --------------------------------->

1.Explain one sitiatution where you had to refactor someone else poor code.what was wrong and what did you improve?
2.You are given a function that accepts a User object. How would you ensure the function doesn't break if the object is missing fields or contains invalid data?
3.What fields would you include in a User interface for a login module, and why?
4.Your React app suddenly becomes slow after adding new features. How do you find and fix the 
issue?
5.A component is fetching the same data multiple times unnecessarily. How do you fix it?
6.How do you handle a FORM with 20+ fields efficiently? 
7.How do you handle online and offline working of your app?
8.How will you solve caching issues in production?
9.act.memo, improving performance in lists with hundreds of items. 
10.As a Frontend Developer When we get Any Figma design from client side what 
should be our step? 
11.Describe the architecture and technologies used in your recent project.what 
challenges did you face and how did you solve them? 
12.Why did you choose React for fronted development over many framework like 
angular and vue? 
13..Suppose you have one parent component with four child components,you want to update only one 
child component without rerendering the parent and other three child components.How can you 
achieve this?
14.If you are a backend developer producing poor-quality code and you ve already left the job, how can 
the frontend team manage such endpoints individually? 

<!--------------------------- #5.CORS questions---------------------------------->

1.Can we resolve CORS error fully in Frontend side?
2.Can we resolve CORS error minimum in Frontend side if yes then how ?
3.A frontend API call works in development but fails in production with a CORS error. How do you 
fix it? 
4.

<!---------------------------------------- #6.Router----------------------------->

1.How can I do role based access in React router?
2.what should be pass and How can I do role based access in React router?
3.How to define role based routing in Frontend application?
4.If a user manually change in the URL user to admin, can user access admin data if yes then how and if no then how to resolve the issues?
5.How to protect your Router?
6.How do you prevent a user from accessing a protected route before the auth check completes? 
7.What is routing in React.js and how is it implemented? 
8.What are Private Routes and how can you implement them in react? 
9.

<!-----------------------#7.Cross-browser responsive----------------------------->

1.If a production level web application cross-browser responsive issue will come then how you will fix it?
2.What challenges arise when different browsers interpret HTML/CSS/JS differently?  
→ Layout shifts, inconsistent rendering, unsupported APIs, and performance variations.
3.How do you handle browser-specific CSS features (e.g., flexbox bugs, grid differences)?  
→ Use vendor prefixes, feature detection, and progressive enhancement.
4.What are the most common cross-browser issues you’ve faced? 
5.How do you test your web application across multiple browsers and devices?
6.What’s your approach to debugging cross-browser issues? 
<!---------------------- #8.others------------------------------------------------>

1.what is URL site rendering?
2.what is difference between Frontend Engineer and UI Developer?
3.what is the difference between library and framework?
4.How to validate your data?
5.What is the difference between REST,SOAP and GrahpQL?
6.which coding standard you are following ?
7.What is async and await and why used try,catch and finally?
8.What is abortcontroller and why its used?
9.what is REST API and RESTful API?
10.How to block inspect in your web application?
11.How to disable right click in web application?
12.How you disable copy and pest option in web application?
13.How you should not allow pest in password input field?
14.How can you optimize web font loading for better performance? 
15.What are core Web vitals, and why are they important for front-end 
performance? 
16.What is the Module Federation in webpack and how does it relate to micro 
frontend architecture? 
17.Why did you choose React for fronted development over many framework like 
angular and vue? 
18.What is micro frontend? How do they help in scaling large frontend application? 
19.What is the MVC architecture?explain it. 
20.What are the different types of storage available in browsers, and when should each use?
21.what is cookies and use it?
22.Suppose a react component is making an API call.How would you test this component using jest?
23.What is webpack, and why is it used in react applications? 
24.How do you Handle overlapping issues when using Portals. 
25.How does React query improve performane compared manual API call? 
26.How did you integrage charts in your React project? 
27.How did you handle dynamic or live data updates in charts? 
28.Which techniques do you use to reduce bundle size?
29.what is the difference between object and json?
30.When you perform s search in ChatGPT, how does it work internally to generate results? 
<!---------------------- #10.Authentication and Authorization---------------------->

1.How does a browser store tokens securely? Compare local Storage vs HTTP Only cookies. 
2.A user logs in and after 30 seconds, they're logged out. How do you debug this? 
3.How do you implement a 'Remember Me' feature securely? 
4.How do you implement logout across multiple browser tabs?
5.How do you securely pass an API key from frontend to a third-party service? 
6..How do you handle auth in a microservices architecture? Who validates the token? 
7.What is HTTPS and why is it mandatory for auth flows? 
8.How do you design token refresh without disrupting the user experience? 
9.A disgruntled employee's account is disabled. How do you ensure their JWT is immediately 
rejected? 
10.How do you prevent a login page from being accessible after the user is logged in?
11.How to pass tokens in Fronted?
12.
<!---------------------- #11.React js------------------------------------------------>

1.what is React js and advantages of using React? 
2.What is the Virtual DOM? 
3.What are JSX and its key rules? 
4.What is Reconciliation in React?
5.What is Diffing Algorithm in React? 
6.what are React component and difference between class and function component? 
7.How will you support dark mode in your app? 
8.What is props and the difference between props and state?
9.what is lifecycle method in react js?
10.what is controlled and uncontrolled component in react?
11.How do you optimize bundle size in a large React app?
12.What is React Fiber and how does it differ from the old reconciliation algorithm?
13.How does React determine when to re-render a component?
14.What are concurrent features in React and how do they help? 
15.what is render phase and commit phase?
16.Explain Redact’s batching behaviour and what changed in React 18?
17.How does suspense work, and what are some real use cases beyond lazy loading? 
18.What is the use Imperative Handle and when should you use it? 
19.How do you optimize large lists in React? 
20.How does React handle hydration in SSR, and what problems can arise? 
21.what is prop drilling in react?
22.what is key prop in react js and why key is importante?
23.what is higher order function in react js?
24.what is custom hook in react?
25.what is code splitting?
26.what is lazy loading?
27.how to optimize react application?
28.what is bottlenacking?
29.What are error boundaries? 
30.What are portals in React? 
31.How do you implement server components in React? 
32.what is a synthetic event in react.
33.how to secure your component in react.
34.What is File handling in React / javascript explain it with example?
35.what are the major improvements or new features introduced in the latest version of React and what 
they removed? 
36.How do we handle unmounting logic inside a use Effect Hook?


<!---------------------- #12.javascript-------------------------------------------->
1.what is javascript and features of javascript?
2.what is hoisting?
3.what is the difference between var,let and const?
4.what is higher-order function?
5.what is closure?
6.what is callback function?
7.what is promises?
8.explain difference types of promise method?
9.explain the This key word?
10.what is generator function?
11.what is call,apply and bind?
12.what is deep copy and shallow copy?
13.what is arrow function and why its different to normal function?
14.what is REST and SPREAD operator in javascript?
15.what is debouncing method in js?
16.what is throttling in js?
17.what is event propagation?
18.what is event delegation?
19.How can you merge two objects without mutating them? 
20.what is event loop ? How does the event loop work in Javascript? 
21.map() , filter(), reduce () method in JavaScript?
22.what is the difference between map and forEach?
23.Explain how the Mutation observer and Intersection observer API work. Give a 
use case for each. 
24.What is the difference between the async and defer attributes in a <script> tag? 
25.What is the difference between stop Propagation () and prevent Default () in 
JavaScript?
26.What is Memory Management and how do you manage in javascript and its uses.
27.what is execution context in javascript and its uses. 
28.What is single page application?   