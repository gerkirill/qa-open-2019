import universalParallax from './universal-parallax';

import WOW from '../lib/wow';
 new WOW().init();

new universalParallax().init({
    speed: 10.0
});

import { events, baseDateLocale, eventDateSource, shortInfo } from './speakers-info-mock';

let timer = setInterval(countdown, 1000);

function countdown() {
    const eventDate = new Date(eventDateSource).getTime();
    const today = Date.now();
    const diff = eventDate - today;

    if (diff < 0) {
        clearTimeout(timer);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(diff % (1000 * 60) / 1000);

    const text = [
        { value: days, stringRepresentations: ['днів', 'день', 'дні'] },
        { value: hours, stringRepresentations: ['годин', 'година', 'години'] },
        { value: minutes, stringRepresentations: ['хвилин', 'хвилина', 'хвилини'] },
        { value: seconds, stringRepresentations: ['секунд', 'секунда', 'секунди'] },
    ];

    let outputArr = [];

    text.forEach((item, index) => {
        if (item.value < 20) {
            if (item.value === 1) {
                outputArr[index] = item.stringRepresentations[1];
            }
            else if (item.value < 5 && item.value !== 0) {
                outputArr[index] = item.stringRepresentations[2];
            }
            else {
                outputArr[index] = item.stringRepresentations[0];
            }
        }
        else {
            if (item.value % 10 === 1) {
                outputArr[index] = item.stringRepresentations[1];
            }
            else if (item.value % 10 < 5 && item.value % 10 !== 0) {
                outputArr[index] = item.stringRepresentations[2];
            }
            else {
                outputArr[index] = item.stringRepresentations[0];
            }
        }
    });
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    document.getElementById("countdown-days").textContent = days;
    document.getElementById("countdown-hours").textContent = hours;
    document.getElementById("countdown-minutes").textContent = minutes;
    document.getElementById("countdown-seconds").textContent = seconds;

    document.getElementById("countdown-days-text").textContent = outputArr[0];
    document.getElementById("countdown-hours-text").textContent = outputArr[1];
    document.getElementById("countdown-minutes-text").textContent = outputArr[2];
    document.getElementById("countdown-seconds-text").textContent = outputArr[3];
};

countdown();

$(document).ready(() => {
    // createAggendaTable(speakers, events);
    const thumbs = $('#thumbnails').slippry({
        // general elements & wrapper
        slippryWrapper: '<div class="slippry_box thumbnails" />',
        // options
        transition: 'horizontal',
        pager: false,
        auto: false,
        onSlideBefore: function (el, index_old, index_new) {
            $('.thumbs a img').removeClass('active');
            const thumb = $('img', $('.thumbs a')[index_new]);
            thumb.addClass('active');

            const thumbs = $('.thumbs');
            const requiredScroll = thumbs.scrollLeft() + thumb.position().left - thumb.width() * 1.5;
            thumbs.scrollLeft(requiredScroll);
        }
    });

    $('.thumbs a').click(function () {
        thumbs.goToSlide($(this).data('slide'));
        return false;
    });

    // smooth navigatin to anchors
    $(document).on('click', '.nav-link', function (event) {
        event.preventDefault();

        const target = event.target;
        $('.nav-link').removeClass('active');
        target.classList.add('active');

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    const scrollNavbar = 70;
    $(window).scroll(() => {
        const scroll = getCurrentScroll();
        if (scroll > scrollNavbar) {
            $('#navbar').addClass('scrolled');
        }
        else {
            $('#navbar').removeClass('scrolled');

        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    function setDomToMock() {
        let dayMonthYear = new Date(eventDateSource).toLocaleString(baseDateLocale, { month: 'long', day: 'numeric', year: 'numeric' });
        $('.eventDate').text(dayMonthYear);
        let dayMonthTime = new Date(eventDateSource).toLocaleString(baseDateLocale, { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
        $('#location-square-content-text').text(dayMonthTime);
        $('#content-short').text(shortInfo);
    }

    setDomToMock();

});



function createScheduleObj(infoObj) {
    let timeArr = [];
    let scheduleObj = {};

    infoObj.forEach((obj) => {
        timeArr.push(obj.speechStart);
    })

    timeArr.forEach(obj => {
        let arr = infoObj.filter(item => item.speechStart === obj);
        scheduleObj[obj] = arr;
    })
    return scheduleObj;
}


function createAggendaTable(speakers, events) {
    let tableText = '';
    let counter = 1;

    events
        .sort((a, b) => a.startTime - b.startTime)
        .forEach(event => {

            const time = event.startTime;

            let raw = `
            <tr>
                <th class="mobile-hide" scope="row">${counter++}</th>
                <td>${time}</td>`;

            if (event.type === 'speech') {
                if (event.firstSpeakerId) {
                    const firstSpeaker = speakers.find(speaker => speaker.id === event.firstSpeakerId);
                    const roomStr = `<td><h5 class="speaker_name">${firstSpeaker.name} ${firstSpeaker.surname} </h5> ${event.firstSpeechTopic} <br>${event.firstSpeechDesc}</td>`;
                    raw += roomStr;
                }
                if (event.secondSpeakerId) {
                    const secondSpeaker = speakers.find(speaker => speaker.id === event.secondSpeakerId);
                    const roomStr = `<td><h5 class="speaker_name">${secondSpeaker.name} ${secondSpeaker.surname} </h5> ${event.secondSpeechTopic} <br>${event.secondSpeechDesc}</td>`;
                    raw += roomStr;
                }

            } else {
                raw += `<td><span class="text-center">${event.name}</span></td>`
            }
            raw += '</tr>';
            tableText += raw;
        });

    $('#agenda-table').append(tableText);
}


function toggleTransparency() {
    if (window.pageYOffset !== 0) return;
    if (!$('#navbar')[0].classList.contains('scrolled')) {
        $('#navbar').addClass('scrolled');
    } else {
        $('#navbar').removeClass('scrolled');
    };
}
