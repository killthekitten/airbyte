"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[538],{4095:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(83117),o=(a(67294),a(3905));const i={description:"Using Airbyte and Tableau"},r="Visualizing the Time Spent by Your Team in Zoom Calls",s={unversionedId:"archive/examples/zoom-activity-dashboard",id:"archive/examples/zoom-activity-dashboard",title:"Visualizing the Time Spent by Your Team in Zoom Calls",description:"Using Airbyte and Tableau",source:"@site/../docs/archive/examples/zoom-activity-dashboard.md",sourceDirName:"archive/examples",slug:"/archive/examples/zoom-activity-dashboard",permalink:"/archive/examples/zoom-activity-dashboard",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/archive/examples/zoom-activity-dashboard.md",tags:[],version:"current",frontMatter:{description:"Using Airbyte and Tableau"}},l={},p=[{value:"Step 1: Replicating Zoom data to PostgreSQL",id:"step-1-replicating-zoom-data-to-postgresql",level:2},{value:"Launching Airbyte",id:"launching-airbyte",level:3},{value:"Obtaining a Zoom JWT Token",id:"obtaining-a-zoom-jwt-token",level:3},{value:"Connecting Zoom on Airbyte",id:"connecting-zoom-on-airbyte",level:3},{value:"Connecting PostgreSQL on Airbyte",id:"connecting-postgresql-on-airbyte",level:3},{value:"Step 2: Connect the PostgreSQL database to Tableau",id:"step-2-connect-the-postgresql-database-to-tableau",level:2},{value:"Step 3: Create the charts on Tableau with the Zoom data",id:"step-3-create-the-charts-on-tableau-with-the-zoom-data",level:2},{value:"Meetings per week in a team",id:"meetings-per-week-in-a-team",level:3},{value:"Hours a team spends in meetings per week",id:"hours-a-team-spends-in-meetings-per-week",level:3},{value:"Participants for all meetings per week",id:"participants-for-all-meetings-per-week",level:3},{value:"Listing of team members with the number of meetings per week and number of hours spent in meetings, ranked.",id:"listing-of-team-members-with-the-number-of-meetings-per-week-and-number-of-hours-spent-in-meetings-ranked",level:3},{value:"Webinars per week in a team",id:"webinars-per-week-in-a-team",level:3},{value:"Hours a week spends in webinars per week",id:"hours-a-week-spends-in-webinars-per-week",level:3},{value:"Participants for all webinars per week",id:"participants-for-all-webinars-per-week",level:3},{value:"Listing of team members with the number of webinars per week and number of hours spent in meetings, ranked",id:"listing-of-team-members-with-the-number-of-webinars-per-week-and-number-of-hours-spent-in-meetings-ranked",level:4},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"visualizing-the-time-spent-by-your-team-in-zoom-calls"},"Visualizing the Time Spent by Your Team in Zoom Calls"),(0,o.kt)("p",null,"In this article, we will show you how you can understand how much your team leverages Zoom, or spends time in meetings, in a couple of minutes. We will be using ",(0,o.kt)("a",{parentName:"p",href:"https://airbyte.io"},"Airbyte")," ","(","an open-source data integration platform",")"," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.tableau.com"},"Tableau")," ","(","a business intelligence and analytics software",")"," for this tutorial."),(0,o.kt)("p",null,"Here is what we will cover:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Replicating data from Zoom to a PostgreSQL database, using Airbyte"),(0,o.kt)("li",{parentName:"ol"},"Connecting the PostgreSQL database to Tableau"),(0,o.kt)("li",{parentName:"ol"},"Creating charts in Tableau with Zoom data")),(0,o.kt)("p",null,"We will produce the following charts in Tableau:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Meetings per week in a team"),(0,o.kt)("li",{parentName:"ul"},"Hours a team spends in meetings per week"),(0,o.kt)("li",{parentName:"ul"},"Listing of team members with the number of meetings per week and number of hours spent in meetings, ranked"),(0,o.kt)("li",{parentName:"ul"},"Webinars per week in a team"),(0,o.kt)("li",{parentName:"ul"},"Hours a team spends in webinars per week"),(0,o.kt)("li",{parentName:"ul"},"Participants for all webinars in a team per week"),(0,o.kt)("li",{parentName:"ul"},"Listing of team members with the number of webinars per week and number of hours spent in meetings, ranked ")),(0,o.kt)("p",null,"Let\u2019s get started by replicating Zoom data using Airbyte."),(0,o.kt)("h2",{id:"step-1-replicating-zoom-data-to-postgresql"},"Step 1: Replicating Zoom data to PostgreSQL"),(0,o.kt)("h3",{id:"launching-airbyte"},"Launching Airbyte"),(0,o.kt)("p",null,"In order to replicate Zoom data, we will need to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/integrations/sources/zoom"},"Airbyte\u2019s Zoom connector"),". To do this, you need to start off Airbyte\u2019s web app by opening up your terminal and navigating to Airbyte and running:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up")),(0,o.kt)("p",null,"You can find more details about this in the ",(0,o.kt)("a",{parentName:"p",href:"https://discuss.airbyte.io/c/faq/15"},"Getting Started FAQ")," on our Discourse Forum."),(0,o.kt)("p",null,"This will start up Airbyte on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8000"),"; open that address in your browser to access the Airbyte dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(92050).Z,width:"3224",height:"1956"})),(0,o.kt)("p",null,"If you haven't gone through the onboarding yet, you will be prompted to connect a source and a destination. Then just follow the instructions. If you've gone through it, then you will see the screenshot above. In the top right corner of the Airbyte dashboard, click on the ",(0,o.kt)("strong",{parentName:"p"},"+ new source")," button to add a new Airbyte source. In the screen to set up the new source, enter the source name ","(","we will use airbyte-zoom",")"," and select ",(0,o.kt)("strong",{parentName:"p"},"Zoom")," as source type."),(0,o.kt)("p",null,"Choosing Zoom as ",(0,o.kt)("strong",{parentName:"p"},"source type")," will cause Airbyte to display the configuration parameters needed to set up the Zoom source."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(77607).Z,width:"3224",height:"1956"})),(0,o.kt)("p",null,"The Zoom connector for Airbyte requires you to provide it with a Zoom JWT token. Let\u2019s take a detour and look at how to obtain one from Zoom."),(0,o.kt)("h3",{id:"obtaining-a-zoom-jwt-token"},"Obtaining a Zoom JWT Token"),(0,o.kt)("p",null,"To obtain a Zoom JWT Token, login to your Zoom account and go to the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.zoom.us/"},"Zoom Marketplace"),". If this is your first time in the marketplace, you will need to agree to the Zoom\u2019s marketplace terms of use."),(0,o.kt)("p",null,"Once you are in, you need to click on the ",(0,o.kt)("strong",{parentName:"p"},"Develop")," dropdown and then click on ",(0,o.kt)("strong",{parentName:"p"},"Build App.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(24769).Z,width:"3228",height:"1852"})),(0,o.kt)("p",null,"Clicking on ",(0,o.kt)("strong",{parentName:"p"},"Build App")," for the first time will display a modal for you to accept the Zoom\u2019s API license and terms of use. Do accept if you agree and you will be presented with the below screen."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(66680).Z,width:"3228",height:"1852"})),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"JWT")," as the app you want to build and click on the ",(0,o.kt)("strong",{parentName:"p"},"Create")," button on the card. You will be presented with a modal to enter the app name; type in ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-zoom"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(49937).Z,width:"3228",height:"1852"})),(0,o.kt)("p",null,"Next, click on the ",(0,o.kt)("strong",{parentName:"p"},"Create")," button on the modal."),(0,o.kt)("p",null,"You will then be taken to the ",(0,o.kt)("strong",{parentName:"p"},"App Information")," page of the app you just created. Fill in the required information."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(28314).Z,width:"3228",height:"1852"})),(0,o.kt)("p",null,"After filling in the needed information, click on the ",(0,o.kt)("strong",{parentName:"p"},"Continue")," button. You will be taken to the ",(0,o.kt)("strong",{parentName:"p"},"App Credentials")," page. Here, click on the ",(0,o.kt)("strong",{parentName:"p"},"View JWT Token")," dropdown."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8469).Z,width:"3216",height:"1144"})),(0,o.kt)("p",null,"There you can set the expiration time of the token ","(","we will leave the default 90 minutes",")",", and then you click on the ",(0,o.kt)("strong",{parentName:"p"},"Copy")," button of the ",(0,o.kt)("strong",{parentName:"p"},"JWT Token"),"."),(0,o.kt)("p",null,"After copying it, click on the ",(0,o.kt)("strong",{parentName:"p"},"Continue")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(39836).Z,width:"3216",height:"1144"})),(0,o.kt)("p",null,"You will be taken to a screen to activate ",(0,o.kt)("strong",{parentName:"p"},"Event Subscriptions"),". Just leave it as is, as we won\u2019t be needing Webhooks. Click on ",(0,o.kt)("strong",{parentName:"p"},"Continue"),", and your app should be marked as activated."),(0,o.kt)("h3",{id:"connecting-zoom-on-airbyte"},"Connecting Zoom on Airbyte"),(0,o.kt)("p",null,"So let\u2019s go back to the Airbyte web UI and provide it with the JWT token we copied from our Zoom app."),(0,o.kt)("p",null,"Now click on the ",(0,o.kt)("strong",{parentName:"p"},"Set up source")," button. You will see the below success message when the connection is made successfully."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(98966).Z,width:"3232",height:"1944"})),(0,o.kt)("p",null,"And you will be taken to the page to add your destination."),(0,o.kt)("h3",{id:"connecting-postgresql-on-airbyte"},"Connecting PostgreSQL on Airbyte"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(65523).Z,width:"3232",height:"1944"})),(0,o.kt)("p",null,"For our destination, we will be using a PostgreSQL database, since Tableau supports PostgreSQL as a data source. Click on the ",(0,o.kt)("strong",{parentName:"p"},"add destination")," button, and then in the drop down click on ",(0,o.kt)("strong",{parentName:"p"},"+ add a new destination"),". In the page that presents itself, add the destination name and choose the Postgres destination."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(45676).Z,width:"3232",height:"1944"})),(0,o.kt)("p",null,"To supply Airbyte with the PostgreSQL configuration parameters needed to make a PostgreSQL destination, we will spin off a PostgreSQL container with Docker using the following command in our terminal."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run --rm --name airbyte-zoom-db -e POSTGRES_PASSWORD=password -v airbyte_zoom_data:/var/lib/postgresql/data -p 2000:5432 -d postgres")),(0,o.kt)("p",null,"This will spin a docker container and persist the data we will be replicating in the PostgreSQL database in a Docker volume ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte_zoom_data"),"."),(0,o.kt)("p",null,"Now, let\u2019s supply the above credentials to the Airbyte UI requiring those credentials."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(11854).Z,width:"3232",height:"1944"})),(0,o.kt)("p",null,"Then click on the ",(0,o.kt)("strong",{parentName:"p"},"Set up destination")," button."),(0,o.kt)("p",null,"After the connection has been made to your PostgreSQL database successfully, Airbyte will generate the schema of the data to be replicated in your database from the Zoom source."),(0,o.kt)("p",null,"Leave all the fields checked."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(50880).Z,width:"3232",height:"1944"})),(0,o.kt)("p",null,"Select a ",(0,o.kt)("strong",{parentName:"p"},"Sync frequency")," of ",(0,o.kt)("strong",{parentName:"p"},"manual")," and then click on ",(0,o.kt)("strong",{parentName:"p"},"Set up connection"),"."),(0,o.kt)("p",null,"After successfully making the connection, you will see your PostgreSQL destination. Click on the Launch button to start the data replication."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(74624).Z,width:"3218",height:"1856"})),(0,o.kt)("p",null,"Then click on the ",(0,o.kt)("strong",{parentName:"p"},"airbyte-zoom-destination")," to see the Sync page."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(53037).Z,width:"3218",height:"1856"})),(0,o.kt)("p",null,"Syncing should take a few minutes or longer depending on the size of the data being replicated. Once Airbyte is done replicating the data, you will get a ",(0,o.kt)("strong",{parentName:"p"},"succeeded")," status."),(0,o.kt)("p",null,"Then, you can run the following SQL command on the PostgreSQL container to confirm that the sync was done successfully."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'docker exec airbyte-zoom-db psql -U postgres -c "SELECT * FROM public.users;"')),(0,o.kt)("p",null,"Now that we have our Zoom data replicated successfully via Airbyte, let\u2019s move on and set up Tableau to make the various visualizations and analytics we want."),(0,o.kt)("h2",{id:"step-2-connect-the-postgresql-database-to-tableau"},"Step 2: Connect the PostgreSQL database to Tableau"),(0,o.kt)("p",null,"Tableau helps people and organizations to get answers from their data. It\u2019s a visual analytic platform that makes it easy to explore and manage data."),(0,o.kt)("p",null,"To get started with Tableau, you can opt in for a ",(0,o.kt)("a",{parentName:"p",href:"https://www.tableau.com/products/trial"},"free trial period")," by providing your email and clicking the ",(0,o.kt)("strong",{parentName:"p"},"DOWNLOAD FREE TRIAL")," button to download the Tableau desktop app. The download should automatically detect your machine type ","(","Windows/Mac",")","."),(0,o.kt)("p",null,"Go ahead and install Tableau on your machine. After the installation is complete, you will need to fill in some more details to activate your free trial."),(0,o.kt)("p",null,"Once your activation is successful, you will see your Tableau dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(18641).Z,width:"3450",height:"2240"})),(0,o.kt)("p",null,"On the sidebar menu under the ",(0,o.kt)("strong",{parentName:"p"},"To a Server")," section, click on the ",(0,o.kt)("strong",{parentName:"p"},"More\u2026")," menu. You will see a list of datasource connectors you can connect Tableau with."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(73920).Z,width:"3450",height:"2240"})),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"PostgreSQL")," and you will be presented with a connection credentials modal."),(0,o.kt)("p",null,"Fill in the same details of the PostgreSQL database we used as the destination in Airbyte."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(52917).Z,width:"3228",height:"2006"})),(0,o.kt)("p",null,"Next, click on the ",(0,o.kt)("strong",{parentName:"p"},"Sign In")," button. If the connection was made successfully, you will see the Tableau dashboard for the database you just connected."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: If you are having trouble connecting PostgreSQL with Tableau, it might be because the driver Tableau comes with for PostgreSQL might not work for newer versions of PostgreSQL. You can download the JDBC driver for PostgreSQL")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.tableau.com/support/drivers?_ga=2.62351404.1800241672.1616922684-1838321730.1615100968"},(0,o.kt)("em",{parentName:"a"},"here"))," ",(0,o.kt)("em",{parentName:"p"},"and follow the setup instructions.")),(0,o.kt)("p",null,"Now that we have replicated our Zoom data into a PostgreSQL database using Airbyte\u2019s Zoom connector, and connected Tableau with our PostgreSQL database containing our Zoom data, let\u2019s proceed to creating the charts we need to visualize the time spent by a team in Zoom calls."),(0,o.kt)("h2",{id:"step-3-create-the-charts-on-tableau-with-the-zoom-data"},"Step 3: Create the charts on Tableau with the Zoom data"),(0,o.kt)("h3",{id:"meetings-per-week-in-a-team"},"Meetings per week in a team"),(0,o.kt)("p",null,"To create this chart, we will need to use the count of the meetings and the ",(0,o.kt)("strong",{parentName:"p"},"createdAt")," field of the ",(0,o.kt)("strong",{parentName:"p"},"meetings")," table. Currently, we haven\u2019t selected a table to work on in Tableau. So you will see a prompt to ",(0,o.kt)("strong",{parentName:"p"},"Drag tables here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(98682).Z,width:"3220",height:"2016"})),(0,o.kt)("p",null,"Drag the ",(0,o.kt)("strong",{parentName:"p"},"meetings")," table from the sidebar onto the space with the prompt."),(0,o.kt)("p",null,"Now that we have the meetings table, we can start building out the chart by clicking on ",(0,o.kt)("strong",{parentName:"p"},"Sheet 1")," at the bottom left of Tableau."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8179).Z,width:"3220",height:"2016"})),(0,o.kt)("p",null,"As stated earlier, we need ",(0,o.kt)("strong",{parentName:"p"},"Created At"),", but currently it\u2019s a String data type. Let\u2019s change that by converting it to a data time. So right click on ",(0,o.kt)("strong",{parentName:"p"},"Created At"),", then select ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeDataType")," and choose Date & Time. And that\u2019s it! That field is now of type ",(0,o.kt)("strong",{parentName:"p"},"Date")," & ",(0,o.kt)("strong",{parentName:"p"},"Time"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(70593).Z,width:"3220",height:"2016"})),(0,o.kt)("p",null,"Next, drag ",(0,o.kt)("strong",{parentName:"p"},"Created At")," to ",(0,o.kt)("strong",{parentName:"p"},"Columns"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(69499).Z,width:"3220",height:"2016"})),(0,o.kt)("p",null,"Currently, we get the Created At in ",(0,o.kt)("strong",{parentName:"p"},"YEAR"),", but per our requirement we want them in Weeks, so right click on the ",(0,o.kt)("strong",{parentName:"p"},"YEAR","(","Created At",")")," and choose ",(0,o.kt)("strong",{parentName:"p"},"Week Number"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(21595).Z,width:"3220",height:"2016"})),(0,o.kt)("p",null,"Tableau should now look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(41894).Z,width:"3220",height:"2016"})),(0,o.kt)("p",null,"Now, to finish up, we need to add the ",(0,o.kt)("strong",{parentName:"p"},"meetings","(","Count",")"," measure")," Tableau already calculated for us in the ",(0,o.kt)("strong",{parentName:"p"},"Rows")," section. So drag ",(0,o.kt)("strong",{parentName:"p"},"meetings","(","Count",")")," onto the Columns section to complete the chart."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(33014).Z,width:"3220",height:"2016"})),(0,o.kt)("p",null,"And now we are done with the very first chart. Let's save the sheet and create a new Dashboard that we will add this sheet to as well as the others we will be creating."),(0,o.kt)("p",null,"Currently the sheet shows ",(0,o.kt)("strong",{parentName:"p"},"Sheet 1"),"; right click on ",(0,o.kt)("strong",{parentName:"p"},"Sheet 1")," at the bottom left and rename it to ",(0,o.kt)("strong",{parentName:"p"},"Weekly Meetings"),"."),(0,o.kt)("p",null,"To create our Dashboard, we can right click on the sheet we just renamed and choose ",(0,o.kt)("strong",{parentName:"p"},"new Dashboard"),". Rename the Dashboard to Zoom Dashboard and drag the sheet into it to have something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1790).Z,width:"3220",height:"2016"})),(0,o.kt)("p",null,"Now that we have this first chart out of the way, we just need to replicate most of the process we used for this one to create the other charts. Because the steps are so similar, we will mostly be showing the finished screenshots of the charts except when we need to conform to the chart requirements."),(0,o.kt)("h3",{id:"hours-a-team-spends-in-meetings-per-week"},"Hours a team spends in meetings per week"),(0,o.kt)("p",null,"For this chart, we need the sum of the duration spent in weekly meetings. We already have a Duration field, which is currently displaying durations in minutes. We can derive a calculated field off this field since we want the duration in hours ","(","we just need to divide the duration field by 60",")","."),(0,o.kt)("p",null,"To do this, right click on the Duration field and select ",(0,o.kt)("strong",{parentName:"p"},"create"),", then click on ",(0,o.kt)("strong",{parentName:"p"},"calculatedField"),". Change the name to ",(0,o.kt)("strong",{parentName:"p"},"Duration in Hours"),", and then the calculation should be ",(0,o.kt)("strong",{parentName:"p"},"[","Duration","]","/60"),". Click ok to create the field."),(0,o.kt)("p",null,"So now we can drag the Duration in Hours and Created At fields onto your sheet like so:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8716).Z,width:"3220",height:"2016"})),(0,o.kt)("p",null,"Note: We are adding a filter on the Duration to filter out null values. You can do this by right clicking on the ",(0,o.kt)("strong",{parentName:"p"},"SUM","(","Duration",")")," pill and clicking filter, then make sure the ",(0,o.kt)("strong",{parentName:"p"},"include null values")," checkbox is unchecked."),(0,o.kt)("h3",{id:"participants-for-all-meetings-per-week"},"Participants for all meetings per week"),(0,o.kt)("p",null,"For this chart, we will need to have a calculated field called ",(0,o.kt)("strong",{parentName:"p"},"#"," of meetings attended"),", which will be an aggregate of the counts of rows matching a particular user's email in the ",(0,o.kt)("inlineCode",{parentName:"p"},"report_meeting_participants")," table plotted against the ",(0,o.kt)("strong",{parentName:"p"},"Created At")," field of the ",(0,o.kt)("strong",{parentName:"p"},"meetings")," table. To get this done, right click on the ",(0,o.kt)("strong",{parentName:"p"},"User Email")," field. Select ",(0,o.kt)("strong",{parentName:"p"},"create")," and click on ",(0,o.kt)("strong",{parentName:"p"},"calculatedField"),", then enter the title of the field as ",(0,o.kt)("strong",{parentName:"p"},"#"," of meetings attended"),". Next, enter the below formula:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"COUNT(IF [User Email] == [User Email] THEN [Id (Report Meeting Participants)] END)")),(0,o.kt)("p",null,"Then click on apply. Finally, drag the ",(0,o.kt)("strong",{parentName:"p"},"Created At")," fields ","(","make sure it\u2019s on the ",(0,o.kt)("strong",{parentName:"p"},"Weekly")," number",")"," and the calculated field you just created to match the below screenshot:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(82397).Z,width:"3220",height:"2014"})),(0,o.kt)("h3",{id:"listing-of-team-members-with-the-number-of-meetings-per-week-and-number-of-hours-spent-in-meetings-ranked"},"Listing of team members with the number of meetings per week and number of hours spent in meetings, ranked."),(0,o.kt)("p",null,"To get this chart, we need to create a relationship between the ",(0,o.kt)("strong",{parentName:"p"},"meetings table")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"report_meeting_participants")," table. You can do this by dragging the ",(0,o.kt)("inlineCode",{parentName:"p"},"report_meeting_participants")," table in as a source alongside the ",(0,o.kt)("strong",{parentName:"p"},"meetings")," table and relate both via the ",(0,o.kt)("strong",{parentName:"p"},"meeting id"),". Then you will be able to create a new worksheet that looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(87579).Z,width:"3220",height:"2016"})),(0,o.kt)("p",null,"Note: To achieve the ranking, we simply use the sort menu icon on the top menu bar."),(0,o.kt)("h3",{id:"webinars-per-week-in-a-team"},"Webinars per week in a team"),(0,o.kt)("p",null,"The rest of the charts will be needing the ",(0,o.kt)("strong",{parentName:"p"},"webinars")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"report_webinar_participants")," tables. Similar to the number of meetings per week in a team, we will be plotting the Count of webinars against the ",(0,o.kt)("strong",{parentName:"p"},"Created At")," property."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7949).Z,width:"3220",height:"2014"})),(0,o.kt)("h3",{id:"hours-a-week-spends-in-webinars-per-week"},"Hours a week spends in webinars per week"),(0,o.kt)("p",null,"For this chart, as for the meeting\u2019s counterpart, we will get a calculated field off the Duration field to get the ",(0,o.kt)("strong",{parentName:"p"},"Webinar Duration in Hours"),", and then plot ",(0,o.kt)("strong",{parentName:"p"},"Created At")," against the ",(0,o.kt)("strong",{parentName:"p"},"Sum of Webinar Duration in Hours"),", as shown in the screenshot below. Note: Make sure you create a new sheet for each of these graphs."),(0,o.kt)("h3",{id:"participants-for-all-webinars-per-week"},"Participants for all webinars per week"),(0,o.kt)("p",null,"This calculation is the same as the number of participants for all meetings per week, but instead of using the ",(0,o.kt)("strong",{parentName:"p"},"meetings")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"report_meeting_participants")," tables, we will use the webinars and ",(0,o.kt)("inlineCode",{parentName:"p"},"report_webinar_participants")," tables."),(0,o.kt)("p",null,"Also, the formula will now be:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"COUNT(IF [User Email] == [User Email] THEN [Id (Report Webinar Participants)] END)")),(0,o.kt)("p",null,"Below is the chart:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(20615).Z,width:"3220",height:"2014"})),(0,o.kt)("h4",{id:"listing-of-team-members-with-the-number-of-webinars-per-week-and-number-of-hours-spent-in-meetings-ranked"},"Listing of team members with the number of webinars per week and number of hours spent in meetings, ranked"),(0,o.kt)("p",null,"Below is the chart with these specs"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(46160).Z,width:"3220",height:"2014"})),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this article, we see how we can use Airbyte to get data off the Zoom API onto a PostgreSQL database, and then use that data to create some chart visualizations in Tableau."),(0,o.kt)("p",null,"You can leverage Airbyte and Tableau to produce graphs on any collaboration tool. We just used Zoom to illustrate how it can be done. Hope this is helpful!"))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},92050:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01_airbyte-dashboard-05666088489a276f20d383ba25f7c7c1.png"},77607:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02_setting-zoom-connector-name-4bff2e526f3e5645f63395acf1310f40.png"},24769:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/03_click-46195795ae39a29b7bec75a67363ff81.png"},49937:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/05_app-name-modal-ee68c32eb80dec0ae2d2362605bddeb8.png"},28314:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/06_app-information-9eaa963f490fe8cdeb6c1c7463d5a87a.png"},8469:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/07_view-jwt-token-cec5318433cd0fae3ac7294beb5ab191.png"},39836:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/08_activate-webhook-1fd1f8345bd96d22ea33e679c691e63e.png"},65523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/10_destination-7fbba91edcaaf14d681edf6d88b61001.png"},45676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/11_choose-postgres-destination-4837eaf6f618e82b28b215dc6a56ea5c.png"},52917:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/18_fill-in-connection-details-7200ab36bf83ac2aee281f39506a6f4b.png"},98682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/19_tableau-view-with-all-tables-ede72291214c8f60f93d4d7e55fb1bc1.png"},8179:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20_empty-meeting-sheet-5046a39e62de8f2100a11a7f0c6c3d68.png"},70593:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/21_change-to-date-time-09ba75bb2b277fb3b9dd699cebad8e3f.png"},69499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/22_drag-created-at-871a7a3f8bfbd6dd80e10af18909b0d3.png"},41894:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/24_meetings-per-week-ea00954b095915fe1d3b4d525e1cc419.png"},1790:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/26_zoom-dashboard-06c2ee04289775fb737376b33e0144c9.png"},8716:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/27_hours-spent-in-weekly-meetings-2925e590c6733b43940f57213ea247f9.png"},7949:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/30_weekly-webinars-2f5b45f1df329d3581241e9ba13a8341.png"},20615:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/32_number_of_webinar_attended_per_week-fa0ebb4ed79077188bbe2c471e0e96fc.png"},46160:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/33_number-of-webinars-participants-7cbebecca562e4d5ac75f750795aff79.png"},21595:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/change-to-per-week (3) (3)-20265d03d2863046be3a30874d419a6d.png"},73920:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datasources (4) (4)-bd0a8592132046ddbd12e21ff2b1f7fd.png"},33014:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evolution-of-meetings-per-week (3) (3)-1c884ab52411aea3a0a0e732ef33386b.png"},74624:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/launch (3) (3)-44bf3fa0c881aad3e0b48bdccb4c2b54.png"},87579:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/meetings-participant-ranked (3) (3)-ad4eb5cda94697b5f7106a293e9f792f.png"},82397:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/number_of_participants_per_weekly_meetings-6a406a150dc78e858b14790eb862358c.png"},11854:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postgres_credentials (3) (3)-77cc35485c6720bd70a6e052ccd6295b.png"},50880:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/schema (3) (3)-2927fa6dad8a889afbe733ed8ce0beb1.png"},98966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/setup-successful (3) (2)-7dfc0ec9f163e3d160614c8de193ed15.png"},53037:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sync-screen (3) (3)-a56dfcbfb18f467599fa7a1fc4f7051d.png"},18641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau-dashboard (3) (3)-a86ac4f70686127f7a79b114c8e09dc0.png"},66680:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zoom-marketplace-build-screen (3) (3)-57dc481a70d126c18f2a7ebfdb942ff5.png"}}]);