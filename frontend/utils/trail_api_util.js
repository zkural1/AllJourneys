export const fetchTrail = trailId => (
    $.ajax({
        method: "GET",
        url: `/api/trails/${trailId}`
    })
)