const { DateTime } = require('luxon');

class timeZone {
    // Day of the month
    day() {
        const day = DateTime.local().setZone('Africa/Lagos').day.toString().padStart(2, '0');
        return (day).toString();
    };

    // Week day
    weekday() {
        return (new Date()).getDay()
    }

    // Previous day
    yesday() {
        const yesterday = DateTime.local().setZone('Africa/Lagos').minus({ days: 1 }).day.toString().padStart(2, '0');
        return yesterday;
    };

    // Current Month
    month() {
        const month = DateTime.local().setZone('Africa/Lagos').month.toString().padStart(2, '0');
        return (month).toString();
    };

    // Current Year
    year() {
        const year = DateTime.local().setZone('Africa/Lagos').year;
        return (year).toString();
    };

    // Current Date
    date() {
        const date = Date.now();
        return (date).toString();
    };

    // Current Time
    time() {
        const time = DateTime.local().setZone('Africa/Lagos').toFormat('HH:mm');
        return (time).toString();
    }

    // Day of the week
    dayOfWeek(dayNumber) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
        if (dayNumber >= 0 && dayNumber < daysOfWeek.length) {
          return daysOfWeek[dayNumber];
        }

        return "Invalid day number";
    }

    // UTC time with +/-2 validation
    getCurrentUTC() {
        const currentUTC = new Date().toUTCString();

        const validationRangeInHours = 2;

        // Create date objects for the upper and lower bounds of the validation range
        const lowerBound = new Date(currentUTC);
        lowerBound.setUTCHours(lowerBound.getUTCHours() - validationRangeInHours);
        const upperBound = new Date(currentUTC);
        upperBound.setUTCHours(upperBound.getUTCHours() + validationRangeInHours);

        // Get the current UTC time within the validation range
        const currentUTCWithinRange = new Date(Math.min(Math.max(new Date(currentUTC), lowerBound), upperBound));

        return currentUTCWithinRange.toISOString();
    }
}

module.exports = new timeZone()