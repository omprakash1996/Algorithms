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
27.How to manage global API error handling? 
<!------------------- #3.Security ---------------------------------------------->

1.How to secure your global redux toolkit data?
2.How to secure your data in Frontend?
3.How do you protect the UI from breaking without using any AI terms?
4.Is it secure to store all sensitive data and API keys in Frontend folder structure.env file?
5.Explain an XSS attack and how it can steal auth tokens. How do you prevent it? 
6.What is a CSRF attack? How does SameSite=Strict protect against it?
7.What is credential stuffing and how do you defend against it? 
8.How will you secure your app from XSS attacks? 
9.Authentication vs Authorization
10.Encryption vs Hashing
11.Symmetric vs Asymmetric Encryption
12.What is Salting and why is it important?
13.Name some common hashing algorithms.

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
15.If a login page is failed to login then what is the benefit of microservice architure rathen then monolithic?
16.Should we write react code without jsx?
17.Is it sequare to store sensitive data in frontend .env file?

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
9.Difference between "useNavigate" and "<Navigate />"

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
12.How would you design Role-Based Access Control (RBAC) in React?
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

<!---------------------- #12.Hooks-------------------------------------------->

1.What are React Hooks? 
2.What are the most commonly used Hooks?
3.Explain useState with an example?
4.How does useEffect work?
5.What does the dependency array in useEffect do? 
6.Difference between useEffect and useLayoutEffect?
7.what is useRef used for? 
8.What is useContext?
9.What is prop drilling and how do Hooks solve it? 
10.Workflow of Context API.
11.Explain useReducer.
12.When would you use useReducer over useState?  
13.Difference between useMemo and useCallback? 
14.How do Hooks help with performance optimization?
15.How would you prevent unnecessary re-renders?
16.Why can't you call hooks conditionally? React relies on the order of hook calls to maintain state 
between renders. Conditional hooks break this order, causing bugs.  
17.Why does my effect run twice in development?  
18.Should you wrap every function in useCallback?  
19.Explain rules of hooks?
20.What problem does useTransition solve? 
21.useDeferredValue vs. debouncing — are they the same?
22.How would you prevent an API race condition with hooks?
23.Where should authentication state live?  
24.What causes a hydration mismatch in SSR? 

<!---------------------- #Redux and Redux toolkit--------------------------->

1.what is redux?why we used it?
2.what is redux toolkit ?why it used in modern application instade of redux?
3.work flow of redux toolkit?
4.what is useSelector()?
5.what is useDispatch()?
6.what is reducer?
7.why used extra reducer in redux toolkit?
8.what is configureStore?
9.what is action?
10.what is createSlice()?
12.what is immer? what problem solved in redux tookkit?
13.what is payload?
14.what is dispatch?
15.what is initial state?
16.what is immutable state?
17.what is pure function?
18.what is middlewire?
19.what is createAsyncThunk?

<!---------------------- #13.javascript------------------------------------->

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
29.What is a Constructor in JavaScript?
30.What is a Recursive Function?
31.Difference between "setTimeout" and "setInterval"?
32.Explain the Node.js Event Loop?
33.What are Microtasks and Macrotasks?
34.What is EventEmitter?
35.How does the Callback Queue work?
36.How do you handle errors in synchronous and asynchronous operations?
<!---------------------- #14.HTML and CSS------------------------------->

1.What are semantic elements in HTML5? Why are they important? 
2.What is the purpose of the <!DOCTYPE html> declaration? 
3.What is the difference between block-level and inline elements? 
4.What is the <meta> tag used for? 
5.What are data attributes, and how are they used? 
6.What are void elements in HTML?
7.What is the contenteditable attribute? 
8.What is the difference between HTML tags and elements? 
9.What is the difference between “display: none” and “visibility: hidden”, when used as attributes to 
the HTML element. 
10..What are Web Workers?
11.What is the Geolocation API in HTML5? 
12.what is the css box model?
13.Explain positioning in css?
14.what is the difference between em,rem,px units and % in css?
15.what is accessibility features in HTML?
16.what is the difference between flexbox and grid?

<!---------------------- #15.Typescript------------------------------->
1.what is typescript? difference between typescript and javascript?
2.what is the benifit of static typing?
3.what is the purpose of tsconfig.json?
4.How to install(use) typescript in react project?
5.what is the basic data type in typescript?
6.Difference between any,unknown and never?
7.what is type inference?
8.what is the difference between union type and intersection type?
9.what are literal type?
10.difference between interface and type?
11.what is optional chaining?
12.what is nullish coalescing?
13.what are enum ?
14.what is tuple?
15.what is readonly?
16.what is type assertion?
17.what are generics?
18.what is generic constraints?
19.what is keyof?
20.what is typeof?
21.what is declaration merging?
22.what is decorators?
23.Explain oops concepts?

<!---------------------- #16.jest and RTL----------------------------->
1.what is jest?
2.what unit testing?
3.what is the diff between test() and it()?
4.explain describe() in jest?
5.what is jest matchers?
6.Difference between toBe() and toEqual()?
7.what is snapshot testing? why its required?
8.what is mocking?
9.what is jest.fn()?
10.what is jest.mock()?
11.How to test a async code?
12.what are jest lifecycle method?
13.what is code coverage?
14.How do you test react component?
15.what is the diff between unit testing and integration testing?
16.How does jest run tests in parallel?
17.what is best practices in jest?
18.what is RTL?
19.why do we use RTL with jest?
20.what is render()?
21.what is screen?
22.Difference between getBy,queryBy and findBy?
23.what is getByRole?
24.what is getByTestId?
25.How do you test a button click?
26.How do you test a input field?
27.How do you test a api data?
28.what is the diff between fireEvent vs userEvent?
29.How do you test a form?
30.Difference between findBy and waitFor?
31.How do you test react router?
32.How do you test a protected route?
33.How do you test a redux component?
34.How do you test a component that uses context?
35.How do you test a check box?
36.How do you test a dropdown?
37.How do you test a button is disable?
38.How do you test an element is not present?
39.what is cleanup()?
40.what is act()?
41.what is jest-dom?
42.How do you test accessibility with RTL?
43.what should you not test with RTL?
44.API returns 500.How would you test it?
45.API takes 5 seconds.what would you test?
46.Login API returns 401.How do you test it?
47.user click multiple times.what would you test?
48.How would you test role based UI?
49.what is RTL testing strategy in a real project?
50.why we shouldnt test production API?

<!---------------------- #17.GIT & CI/CD------------------------------>
1.what is git?
2.explain your git workflow in production deployment app?
3.Diff bet git and github?
4.Diff bet git Fetch and git pull?
5.Diff bet git merge and git rebase?
6.Diff bet git reset and git revert?
7.Diff bet git add vs git commit?
8.Diff bet git clone vs git fork?
9.Diff bet git checkout vs git switch?
10.Diff bet git stach vs git commit?
11.Diff bet git cherry-pick vs git merge?
12.Difference between branch and tag?
13.What is a merge conflict?
14.What is rebasing?
15.What is a pull request?
16.What is .gitignore? why used it?
17.What is reflog?
18.What is HEAD? 
19.What is CI/CD? Explain Continuous Integration and Continuous Deployment/Delivery.
20.Difference between Continuous Delivery and Continuous Deployment?
21.Why is CI/CD important in modern software development? 
22.Explain Blue-Green Deployment?
23.How do you integrate automated tests into CI/CD?
24.Your pipeline is failing intermittently — how do you debug?
25.How do you secure CI/CD pipelines against supply chain attacks?


<!---------------------- #18. Node.js------------------------------>

1.What are Worker Threads?
2.What is Middleware in Express.js?
3.What is the Process Object in Node.js?
4.How would you improve Node.js application security?
5.How would you optimize Node.js code and server performance?
6.Describe a difficult situation you faced while developing a Node.js application.
7.Have you worked with REST frameworks other than Express.js?
8.Explain the Node.js Event Loop?



<!---------------------- #18. MySQL / SQL------------------------------>

1.What is Normalization?
2.Explain 1NF, 2NF and 3NF.
3.How would you optimize an SQL query?
4.What is Transaction Management?
5.Subquery vs JOIN?