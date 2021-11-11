json.extract! user, :id, :email, :firstname, :lastname
json.photoUrl url_for(user.photo)
