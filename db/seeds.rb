# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Park.destroy_all
Trail.destroy_all

User.create!([{
    firstname: "Demo",
    lastname: "User",
    email: "demo@alljourneys.com",
    password: "demouser123"
}])

park1 = Park.create!({
    name: "Joshua Tree National Park",
    description: "Joshua Tree Wilderness was established in 1976 by The United States Congress and was later expanded by the California Desert Protection Act of 1994. Today the park  is managed by the National Parks Service and covers a total of 594,502 acres of  California desert   The park extended north into the Pinto Mountains, northeast into the Coxcomb Mountains, southeast into the Eagle Mountains, and southwest into the Little San Bernardino Mountains.",
    contact: "760-367-5500",
    park_type: "National",
    lng: -115.91014083170826,
    lat: 33.868311460195976
})

trail1 =Trail.create!({
    name: "Barker Dam Nature Trail",
    summary: "Barker Dam Nature Trail is a 1.3 mile heavily trafficked loop trail located near Joshua Tree, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round.",
    difficulty: "Easy",
    length: 1.3,
    route_type: "Loop",
    park_id: park1.id,
    lng: -116.1421382455961, 
    lat: 34.02517056446297, 
    elevation_gain: 62,
    time: '1.5',
})