# Assignment - ReactJS app.

Name: Dan O'Brien

## Overview.

Add a Detested movies page, that gives a list of the top 20 worst rated films on MovieDB with over 1000 votes.
Add a Similar movies drawer that gives the user the option to click on a button on the Movie Details page to reveal similar films 


...... A bullet-point list of user features. If it's the Movies Fan app extension, only list new/modified features...... 
 
 + Feature 1
 + Feature 2
 + Feature 3
 + etc
 + etc

## Setup requirements.

Clone https://github.com/dananthonyobrien/moviesplus, open in VSCode or other editor, run npm start

## API Data Model.

..... [For non-Movies Fan app] Insert a diagram of the API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints ........

![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

Detested endpoint
https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_count.gte=1000


{"page":1,"results":[{"adult":false,"backdrop_path":"/oHrrgAPEKpz0S1ofQntiZNrmGrM.jpg","genre_ids":[28,12,14,878,53],"id":14164,"original_language":"en","original_title":"Dragonball Evolution","overview":"The young warrior Son Goku sets out on a quest, racing against time and the vengeful King Piccolo, to collect a set of seven magical orbs that will grant their wielder unlimited power.","popularity":33.737,"poster_path":"/sunS9xhPnFNP5wlOWrvbpBteAB.jpg","release_date":"2009-03-12","title":"Dragonball Evolution","video":false,"vote_average":2.8,"vote_count":1516},{"adult":false,"backdrop_path":"/aDmXiKzMCrc4uyQifPTWCJ2vBuc.jpg","genre_ids":[27,53],"id":485774,"original_language":"en","original_title":"The Open House","overview":"A teenager and his mother find themselves besieged by threatening forces when they move into a new house.","popularity":10.68,"poster_path":"/7JwdoLcbFWaeUBxKaoFulRVK8Ja.jpg","release_date":"2018-01-19","title":"The Open House","video":false,"vote_average":3.7,"vote_count":1139},{"adult":false,"backdrop_path":"/mSZog2CLzXBBItsWq3sPt6WH9rf.jpg","genre_ids":[28,12,35],"id":9760,"original_language":"en","original_title":"Epic Movie","overview":"When Edward, Peter, Lucy and Susan each follow their own path, they end up finding themselves at Willy's Chocolate factory. Walking through a wardrobe, they discover the world of Gnarnia, which is ruled by the White Bitch. Meeting up with characters such as Harry Potter and Captain Jack Swallows, the newly reunited family must team up with Aslo, a wise-but-horny lion to stop the white bitch's army","popularity":14.705,"poster_path":"/l0lGJiTzU2Ce6T31DIRWv7I0kaC.jpg","release_date":"2007-01-25","title":"Epic Movie","video":false,"vote_average":3.8,"vote_count":1112},{"adult":false,"backdrop_path":"/riGVdQS9gXy38VoSaXXBhmR6A4h.jpg","genre_ids":[878,10770,28,12,35,27],"id":205321,"original_language":"en","original_title":"Sharknado","overview":"A freak hurricane hits Los Angeles, causing man-eating sharks to be scooped up in tornadoes and flooding the city with shark-infested seawater. Surfer and bar-owner Fin sets out with his friends Baz and Nova to rescue his estranged wife April and teenage daughter Claudia.","popularity":21.342,"poster_path":"/atEmHkVFTSGRYt2PeCiziQqbZnI.jpg","release_date":"2013-07-11","title":"Sharknado","video":false,"vote_average":3.9,"vote_count":1225},{"adult":false,"backdrop_path":"/gn11xC1a3ubBSrQW9ZSEQIUY4EY.jpg","genre_ids":[35],"id":7278,"original_language":"en","original_title":"Meet the Spartans","overview":"From the creators of Scary Movie and Date Movie comes this tongue-in-cheek parody of the sword-and-sandal epics, dubbed Meet the Spartans. The 20th Century Fox production was written and directed by the filmmaking team of Jason Friedberg and Aaron Seltzer. Sure, Leonidas may have nothing more than a cape and some leather underwear to protect him from the razor-sharp swords of his Persian enemies,","popularity":22.074,"poster_path":"/DWQOjAPvM8Kk1Qp3Xq0zae0Z6w.jpg","release_date":"2008-01-24","title":"Meet the Spartans","video":false,"vote_average":4,"vote_count":1201}

Similar endpoint
https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}
  
{"page":1,"results":[{"adult":false,"backdrop_path":"/zAL3LOswagN9onjN8DPcNFTqKuD.jpg","genre_ids":[18],"id":705,"title":"All About Eve","original_language":"en","original_title":"All About Eve","overview":"From the moment she glimpses her idol at the stage door, Eve Harrington is determined to take the reins of power away from the great actress Margo Channing. Eve maneuvers her way into Margo's Broadway role, becomes a sensation and even causes turmoil in the lives of Margo's director boyfriend, her playwright and his wife. Only the cynical drama critic sees through Eve, admiring her audacity and perfect pattern of deceit.","popularity":15.407,"poster_path":"/6numIZH6uR3NlJgY9m7nGH0jhs.jpg","release_date":"1950-10-06","video":false,"vote_average":8.201,"vote_count":1081},{"adult":false,"backdrop_path":"/rAoCuTbIs61azLkI8GaB8iXnUHM.jpg","genre_ids":[35,18,10749],"id":712,"title":"Four Weddings and a Funeral","original_language":"en","original_title":"Four Weddings and a Funeral","overview":"Over the course of five social occasions, a committed bachelor must consider the notion that he may have discovered love.","popularity":17.296,"poster_path":"/qa72G2VS0bpxms6yo0tI9vsHm2e.jpg","release_date":"1994-03-09","video":false,"vote_average":6.742,"vote_count":1939},{"adult":false,"backdrop_path":"/jILeJ60zPpIjjJHGSmIeY4eO30t.jpg","genre_ids":[28,18,12],"id":744,"title":"Top Gun","original_language":"en","original_title":"Top Gun","overview":"A heart-pounding combination of action, music and incredible aerial photography helped make Top Gun the blockbuster hit. of 1986. Top Gun takes a look at the danger and excitement that awaits every pilot at the Navy's prestigious fighter weapons school. Tom Cruise is superb as Lt. Pete \"Maverick\" Mitchell, a daring young flyer who's out to become the best. And Kelly McGillis sizzles as the civilian instructor who teaches Maverick a few things you can't learn in a classroom.","popularity":34.358,"poster_path":"/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg","release_date":"1986-05-16","video":false,"vote_average":6.96,"vote_count":4894},{"adult":false,"backdrop_path":"/6TjllWT3cGrPFyqDXurVZ3L8bBi.jpg","genre_ids":[9648,53,18],"id":745,"title":"The Sixth Sense","original_language":"en","original_title":"The Sixth Sense","overview":"Following an unexpected tragedy, a child psychologist named Malcolm Crowe meets an nine year old boy named Cole Sear, who is hiding a dark secret.","popularity":35.378,"poster_path":"/fIssD3w3SvIhPPmVo4WMgZDVLID.jpg","release_date":"1999-08-06","video":false,"vote_average":7.933,"vote_count":8805},{"adult":false,"backdrop_path":"/4lr2VqOcw9YROMnOWoHtUR9xGxA.jpg","genre_ids":[27,35],"id":747,"title":"Shaun of the Dead","original_language":"en","original_title":"Shaun of the Dead","overview":"Shaun lives a supremely uneventful life, which revolves around his girlfriend, his mother, and, above all, his local pub. This gentle routine is threatened when the dead return to life and make strenuous attempts to snack on ordinary Londoners.","popularity":23.841,"poster_path":"/13vOO3DtEG0OYEbgcvVS6XimoIP.jpg","release_date":"2004-04-09","video":false,"vote_average":7.522,"vote_count":6370},{"adult":false,"backdrop_path":"/a8AAxEhD0gNzYR8Psfd1uoXf6qg.jpg","genre_ids":[27,35,14],"id":765,"title":"Evil Dead II","original_language":"en","original_title":"Evil Dead II","overview":"Ash Williams and his girlfriend Linda find a log cabin in the woods with a voice recording from an archeologist who had recorded himself reciting ancient chants from \"The Book of the Dead.\" As they play the recording an evil power is unleashed taking over Linda's body.","popularity":19.367,"poster_path":"/8dnbGCISyBRxv5eYbN903H9SV0O.jpg","release_date":"1987-03-13","video":false,"vote_average":7.6,"vote_count":2045}

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png
