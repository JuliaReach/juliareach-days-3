'use strict'

function add_icon(service, account) {
    if (service === 'homepage') {
        return `<a id="img-link" href="${account}" target="_blank" rel="noreferrer noopener"><i class="fa fa-globe" aria-hidden="true"></i></a> `;
    } else if (service == 'linkedin' || service == 'gitlab') {
        return `<a id="img-link" href="${account}" target="_blank" rel="noreferrer noopener"><i class="fa fa-${service} fa-lg" aria-hidden="true"></i></a> `;
    } else {
        var href = `https://${service}.com/${account}`;
        return `<a id="img-link" href="${href}" target="_blank" rel="noreferrer noopener"><i class="fa fa-${service} fa-lg" aria-hidden="true"></i></a> `;
    }
}


function popup_text(person_or_group) {
    var s = `<b>${person_or_group.name}</b></br>`

    if (person_or_group.github != undefined) {
        s += add_icon('github', person_or_group.github);
    }

    if (person_or_group.gitlab != undefined) {
        s += add_icon('gitlab', person_or_group.gitlab);
    }

    if (person_or_group.twitter != undefined) {
        s += add_icon('twitter', person_or_group.twitter);
    }

    if (person_or_group.linkedin != undefined) {
        s += add_icon('linkedin', person_or_group.linkedin);
    }

    if (person_or_group.homepage != undefined) {
        s += add_icon('homepage', person_or_group.homepage);
    }

    return s;
}

function add_marker(markers, person) {
    var marker = L.circleMarker([person.lat, person.lon], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 10
    });
    marker.bindPopup(popup_text(person));

    markers.addLayer(marker);
}

var map = L.map('map').setView([20, 15], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    noWrap: true
}).addTo(map);

var markers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
        return new L.DivIcon({
            html: '<div><span>' + cluster.getChildCount() + '</span></div>',
            className: 'cluster',
            iconSize: new L.Point(40, 40)
        });
    },
    maxClusterRadius: 40
});

for (const person of persons) {
    add_marker(markers, person);
}

map.addLayer(markers)