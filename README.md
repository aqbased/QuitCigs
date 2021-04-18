# Application Title: QuitCigs

QuitCigs is an application where a user can log a day to day journal on the experience they face, quitting smoking.  As a former smoker myself(going on 2 1/2 years.), I face an up hill battle every day and will probably face for the rest of my life.  Quitting smoking is a day to day battle and it's never officially won.  But the goal of this app is to help a user reflect on the struggles they've faced in the past and see how far they've come along the way.

![MainPage1/2](https://i.imgur.com/WJUqggB.png)
![MainPage2/2](https://i.imgur.com/jHOy8np.png)

## Set Up and Installation

1. [Download](../../archive/main.zip) this template.
1. Unzip and rename the template directory (`unzip ~/Downloads/QuitCigs.zip`).
1. Move into the new project and `git init`.
1. Replace `QuitCigs` in `package.json` with your
   projects name.
1. Replace the `"homepage"` field in `package.json` with your (public) Github
   account name and repository name.
1. Install dependencies with `npm install`.
1. `git add` and `git commit` your changes.
1. Run the development server with `npm start`.


## Important Links

- [Other Repo](https://github.com/aqbased/QuitCigs_Api)
- [Deployed API](https://secure-journey-73529.herokuapp.com/)
- [Deployed Client](https://aqbased.github.io/QuitCigs/#/)

## Planning Story

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create journal entries about my quitting journey.
- As a signed in user, I would like to view/update/delete journal entries.
- As a signed in user, I would like to see how long I haven't smoked for.

### User Stories

As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a signed in user, I would like to create journal entries about my quitting journey.
As a signed in user, I would like to view/update/delete journal entries.
As a signed in user, I would like to see how long I haven't smoked for.

### Technologies Used

React
HTML/CSS
Bootstrap
Javascript
React Router
Mongoose
MongoDB

### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /journal
GET | /journal/:id
POST | /journal
PATCH | /journal/:id
DELETE | /journal/:id

### Unsolved Problems

- I need to improve the location of the forms and some of the main page.
- I want to improve styling.
- I want to have a user stats section, where they can see more than just how long it's been since they smoked.  Such as money saved/health recovery/etc.

## Images
#### Wireframe:
![wireframe](https://i.imgur.com/HPx187i.png)

#### ERD
![ERD](https://i.imgur.com/nZIm5hI.png)
