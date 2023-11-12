# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Park.destroy_all
Trail.destroy_all
Review.destroy_all
default_profile_picture = open("https://alljourneys-seeds.s3.amazonaws.com/defaultProfilePicture.png")
demo_user = User.create!({
    firstname: "Demo",
    lastname: "User",
    email: "demo@alljourneys.com",
    password: "demouser123"
})
demo_user.photo.attach(io: default_profile_picture, filename: 'DefaultProfilePicture.jpeg')
user1 = User.create!({
    firstname: "Trevor",
    lastname: "Noah",
    email: "test1@alljourneys.com",
    password: "testuser123"
})
default_profile_picture_path = Rails.root.join('app', 'assets', 'images', 'defaultProfilePicture.png')
default_profile_picture = File.open(default_profile_picture_path)
user1.photo.attach(io: default_profile_picture1, filename: 'DefaultProfilePicture1.jpeg')

park1 = Park.create!({
    name: "Joshua Tree National Park",
    description: "Joshua Tree Wilderness was established in 1976 by The United States Congress and was later expanded by the California Desert Protection Act of 1994. Today the park  is managed by the National Parks Service and covers a total of 594,502 acres of  California desert   The park extended north into the Pinto Mountains, northeast into the Coxcomb Mountains, southeast into the Eagle Mountains, and southwest into the Little San Bernardino Mountains.",
    contact: "760-367-5500",
    park_type: "National",
    lng: -116.01014083170826,
    lat: 33.868311460195976,
    country: "United States of America",
    state: "California",
    acreage:"789,745 acres"
})

trail1_file1=open('https://alljourneys-seeds.s3.amazonaws.com/trails/BarkerDam.jpeg')
trail1 =Trail.create!({
    name: "Barker Dam Nature Trail",
    summary: "Barker Dam Nature Trail is a 1.3 mile heavily trafficked loop trail located near Joshua Tree, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round.",
    difficulty: "easy",
    length: 1.3,
    route_type: "Loop",
    park_id: park1.id,
    lng: -116.1421382455961, 
    lat: 34.02517056446297, 
    elevation_gain: 62,
    time: '34 m',
    tags: ["Kid friendly", "Hiking", "Nature trips", "Walking", "Views", "Wildflowers", "Wildlife", "Rocky", "No shade", "Historic site", "Fee", "No dogs"]
})
trail1.photo.attach(io: trail1_file1, filename: 'BarkerDam.jpeg')
trail1_review1 = Review.create(rating: 5, date: "2021-10-25", review_text: "Well marked trail with a quick and intense elevation gain. Pack water and wear sun protection. Great view at the top!", activity_date: "2021-10-14", activity_type: "Camping", tags: ["No shade", "Off trail", "Rocky"], user_id: user1.id, trail_id: trail1.id)
trail1_review2 = Review.create(rating: 4, date: "2021-10-25", review_text: "Great workout if you are looking to climb a lot of stairs. The whole trail is stairs - steady climb but not super steep. Gorgeous view from the top - hard to distinguish the Joshua Trees - offers a different view of the National Park. Very windy so hold onto your hats!", activity_date: "2021-10-23", activity_type: "Hiking", user_id: demo_user.id, trail_id: trail1.id)

trail2_file1=open('https://alljourneys-seeds.s3.amazonaws.com/trails/RyanMountain.jpeg')
trail2 = Trail.create!({
    name: "Ryan Mountain Trail",
    summary: "Ryan Mountain Trail is a 3 mile heavily trafficked out and back trail located near Twentynine Palms, California that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking and running and is accessible year-round.",
    difficulty: "moderate",
    length: 3.0,
    route_type: "Out & back",
    park_id: park1.id,
    lng: -116.13493817265655,
    lat: 33.99440319023542, 
    elevation_gain: 1069,
    time: '1 h 56 m',
    tags: ["Hiking", "Running","Views", "Wildflowers", "Wildlife", "Rocky", "No shade", "Fee", "No dogs"]
})
trail2.photo.attach(io: trail2_file1, filename: 'RyanMountain.jpeg')
trail2_review1 = Review.create(rating: 5, date: "2021-10-25", review_text: "I had such an amazing time!", activity_date: "2021-10-23", activity_type: "Walking", user_id: demo_user.id, trail_id: trail2.id)
trail2_review2 = Review.create(rating: 4, date: "2021-10-25", review_text: "Great views from the top. Worth the steps up. Cold and windy at the top, otherwise weather perfect. Only downside, it was very crowded.", activity_date: "2021-10-14", activity_type: "Hiking", tags: ["No shade", "Bugs", "Scramble"],user_id: user1.id, trail_id: trail2.id)

trail3_file1=open('https://alljourneys-seeds.s3.amazonaws.com/trails/ArchRock.jpeg')
trail3 = Trail.create!({
    name: "Arch Rock Nature Trail",
    summary: "Arch Rock Nature Trail is a 1.2 mile heavily trafficked out and back trail located near Twentynine Palms, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking and walking and is accessible year-round.",
    difficulty: "easy",
    length: 1.2,
    route_type: "Out & back",
    park_id: park1.id,
    lng: -116.02297214381016,
    lat: 33.98942628491143, 
    elevation_gain: 88,
    time: '33 m',
    tags: ["Kid friendly", "Hiking", "Walking", "Views", "Wildflowers", "Wildlife", "No shade", "Fee", "No dogs"]
})
trail3.photo.attach(io: trail3_file1, filename: 'ArchRock.jpeg')
trail3_review1 = Review.create(rating: 5, date: "2021-10-25", review_text: "I think this has to be the most traveled trail in the park.", activity_date: "2021-10-23", activity_type: "Hiking", user_id: demo_user.id, trail_id: trail3.id)
trail3_review2 = Review.create(rating: 4, date: "2021-10-25", review_text: "Easy and quick trip to an unusual arch shaped rock. Well marked and maintained.", activity_date: "2021-10-14", activity_type: "Walking", tags: ["No shade"],user_id: user1.id, trail_id: trail3.id)
