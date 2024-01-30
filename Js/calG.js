function addToGoogleCalendar() {
    // Event details
    var eventName = 'Prisma-SRM is happening';
    var eventStartDate = new Date('2024-03-18T10:00:00');
    var eventEndDate = new Date('2024-03-19T22:00:00');
    
    // var eventLocation = 'SRM University, delhi-ncr sonipat, haryana, India';
    //srm university location
    var eventLocation = 'SRM University (Sonepat, Haryana), Haryana, 39, Rajiv Gandhi Education City, Sonipat, Haryana 131029';
    var eventDescription = 'PRISMA -SRM is coming back with its 5nd edition. This time it is going to be bigger and better. We are coming up with more events and more fun. So, get ready to experience the best of technology and innovation.';

    // Format the start and end dates in the required format (YYYYMMDDTHHMMSSZ)
    var formattedStartDate = eventStartDate.toISOString().replace(/-|:|\.\d+/g, '');
    var formattedEndDate = eventEndDate.toISOString().replace(/-|:|\.\d+/g, '');

    // Google Calendar event creation URL
    var googleCalendarUrl = 'https://www.google.com/calendar/event?action=TEMPLATE' +
        '&text=' + encodeURIComponent(eventName) +
        '&dates=' + formattedStartDate + '/' + formattedEndDate +
        '&location=' + encodeURIComponent(eventLocation) +
        '&details=' + encodeURIComponent(eventDescription);

    // Open a new window or redirect to the Google Calendar event creation URL
    window.open(googleCalendarUrl, '_blank');
}