# AllJourneys

#### [Live Site](https://alljourneys.herokuapp.com/#/)

![CompleteHomepage](https://github.com/zkural1/AllJourneys/blob/main/app/assets/images/CompletedHomepage.png?raw=true)

## About
AllJourneys is a Alltrails clone where users can search for trails and parks around the world. Users are able to see a detailed page of trail information (difficulty, length, elevation gain, route type, map, etc.) as well as leave reviews if they are signed in. Users will be able read other users reviews and create, edit or delete their own reviews.

The backend for AllJourneys is built using the Ruby on Rails framework, a PostgreSQL database and Amazon AWS S3 for image storage. The frontend for AllJourneys is built from React, with Redux to manage the frontend state. Additionally, JQuery is used to make AJAX calls to the backend.

## Features
### Searchbar 
Users will be able to search for their favorite trails and parks. All searchbars will filter results as the user is typing and hide results if a user clicks somewhere else on the page while keeping the text in the searchbar.

![SearchbarExample](https://github.com/zkural1/AllJourneys/blob/main/app/assets/images/SearchbarExample.gif?raw=true)

### CRUD Functionality for Reviews
Once users log in, they can see reviews posted on a trail as well as create, edit and delete their own reviews. To create a review, users will submit a 2-part form where they will provide a rating, a brief comment, select an activity they've done, the date they hiked and the trail conditions during the hike.

![ReviewWalkthrough](https://github.com/zkural1/AllJourneys/blob/main/app/assets/images/ReviewWalkthrough.gif?raw=true)

In order to send the Trail Conditions array to the backend, I first converted the array into a string and then reconverted the string back into an array to save it to the database.

```javascript
// frontend/components/reviews/review_form.jsx

postReview() {
  const {createReview, updateReview } = this.props;
  
  let newState = this.state;
  newState.review.tags = this.state.review.tags.join(",");
  this.setState({ newState });

  if (this.state.formType === "new") {
    createReview(this.state.review);
  } else {
    updateReview(this.state.review);
  }
}

// frontend/utils/review_api_util.js

export const createReview = (review) =>
  $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: { review },
  });

export const updateReview = (review) =>
  $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review },
  });

```
```ruby
# app/controllers/api/reviews_controller.rb

def review_params
    new_params = params.require(:review).permit(:id, :rating, :date, :review_text, :activity_type, :activity_date, :trail_id, :user_id, :tags)
    new_params['tags'] = params['review']['tags'].split(',')
    new_params
end

def create
    @review = Review.new(review_params)
    
    if @review.save
        render :show
    else
        render json: @review.errors.full_messages, status: 422
    end
end
```

### Future Direction
* Weather API implementation to view this week's weather on the trail page
