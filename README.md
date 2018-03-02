# Demo Link
I have done both task in a single project and depending one another. Therefore my time management is not about individual task time period rather than I am giving the total time period for both task at once.

# Time Management
In total the time I have spent for this project is about 15 hour which include creating the environment, analyzing your existing solution in site, brainstorming, language translation and so on. Only For the coding the probable spent time 9-10 hours.

# Demo Link
This demo solution is running on [ONEWEEK](https://hmfaisal.github.io/oneweek/)

# Question 1

At the demo link last page (after clickcking two next button) is the solution demo. 

In Project **src->app->modules->applications->components->assessment** has the source code for this solution.

For every assessment category listed in question separate form is created to add/extend more against each assessment and then combining all form one form is created to post the data at backend later.

## Question 2

At the demo link first page and second pageis the solution demo. 

In Project **src->app->modules->applications->components->registration** has the source code for this solution.

also In Project **src->app->modules->applications->components->selection** has the source code for this solution.

## 2.1
In Project **src->app->modules->applications->components->selection** has the desired content type

## 2.2
For motivation I have used machine-readable name "motivations" and For interessen I have used machine-readable name "interests". As my code practise I always tried to assign machine-readable name as all lower case letters to avoid restriction and unexpected behavior of different backend programming language and database languae.

## 2.3
In Project **src->app->modules->applications->components->registration** is the opening page of an application. What I have understood and according to my plan if the user is already not registered this opening page will register the user and take him to the next steps of application. A confirmation email will be sent to user email instantly but there will be a time period to confirm the link to give the user advantage at first finish the application process. If user is already registered but not logged in the opening page will trigger the password input option at he next step. If user is already registered and logged in the opening page will not show firstname,lastname,email input field.

## 2.4
XX I dont have much knowledge about drupal yet. Therefore I am skipping this question answer XX

## 2.5

**a.** In Project **src->app->modules->applications->components->selection->selection.component.html** ; From there re-ordering the motivation and interest field in a minute

**b.** In The whole project every single text is coming from a language file . which is in **src->assests->i18n** folder. Only changing the language file will change the label text in quick time

**c.** In Project **src->app->modules->applications->components->selection->selection.component.ts** is responsible for form field validation. In there against motivations formcontrol just change the desired min and max length value number in a minute. Currently set min length 10 characters and max length 200 characters.

**d.**In Project **src->app->modules->applications->components->selection->selection.component.ts** has the form field formcontrol name. After Changing the formcontrol name in component one must also change the dependent formcontrolname in view which is in **src->app->modules->applications->components->selection->selection.component.html** in a couple of minute

**e.** The frontend is fully modularized and contenttype is a independent component which is in **src->app->modules->applications**. At the time of project load I can put some guard against the component named "application". The guard can be activated from the project routing which is in **src->app->app-routing.module.ts**. If the frontend can communicate with backend without any problem and login mechanism in frontend is fully functional activating the guard and creating the guard module will take about 1 hour


