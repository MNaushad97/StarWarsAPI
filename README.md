# Work is in Progress !!
Have planned to build a small front-end application using ReactJS that displays a filterable list of characters from the movie franchise Star Wars. We will be querying data from an open API called [SWAPI (Star Wars API)](https://swapi.py4e.com/) 

## App Overview
The app is planned to have  a main view that will display the ```list of characters``` and a ``filter section``, where the user can filter the characters by certain criteria. Clicking on one of the characters from the list will open a detail view of this character. When the user changes the filter settings in the filter section, the list of characters will instantly adapt to only show characters that match the chosen filter settings.


### Character List
The character list displays the name of the character. Each list entry is clickable and open the detail view for the selected character.


### Character Details
When the user selects a character from the character list a brief summary of the character will be displayed.
For instance for the character "Han Solo", the detail view should display the following information:

> **Name:** Han Solo  
> **Movies:** Episode IV, Episode V, Episode VI, Episode VII 
> **Species:** Human  
> **Spaceships:** Millenium Falcon, Imperial shuttle  



### Filter
The filter section will allow the user to filter the list of characters according to the following filter settings:

* The movie the character appeared in (i.e. show only characters that appeared in Episode IV: A New Hope)
* The character's species (i.e. show only characters that are human)

All filter settings will be treated using an AND relationship, i.e. if the user chooses to filter by movie and species, only characters that appear in the given movie AND are of the specified species will be displayed.
